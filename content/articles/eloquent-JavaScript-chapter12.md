---
category: 前端開發
title: JS 筆記#12 - 創造一個程式語言 Egg
description: 透過實作 Egg 語言，我們不僅理解了程式語言的基本組成部分（Parser、Evaluator、環境設置），還學習了如何設計一個簡潔統一的語法系統，以及如何實現變數綁定、條件判斷、循環和函數等程式語言的基本功能，這些知識對我們理解更複雜的程式語言設計原理有深遠的啟發意義。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-03-03
keywords: Egg 語言, 程式語言設計, 解析器, Evaluator, 表達式樹, 語法規則, value, word, apply, 函數調用, 語法特點, 跳脫序列, 綁定名, 遞迴下降, 語法錯誤, 特殊形式, if, while, do, define, fun, 環境設置, 作用域, 全局作用域, 基本運算子, 輸出函數, 直譯器, 編譯器, Egg 語言實作, JavaScript, 語言設計
image: /img/articles/eloquent-JavaScript/cover12.webp
draft: false

head:
  - - meta
    - property: og:title
      content:  JS 筆記#12 - 創造一個程式語言 Egg
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover12.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter12
  - - meta
    - property: og:description
      content: 透過實作 Egg 語言，我們不僅理解了程式語言的基本組成部分（Parser、Evaluator、環境設置），還學習了如何設計一個簡潔統一的語法系統，以及如何實現變數綁定、條件判斷、循環和函數等程式語言的基本功能，這些知識對我們理解更複雜的程式語言設計原理有深遠的啟發意義。


sitemap:
  loc: /articles/eloquent-javascript-chapter10
  lastmod: 2025-03-03
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

![JS 筆記#12 - 創造一個程式語言 Egg](/img/articles/eloquent-JavaScript/cover12.webp)

創造一個程式語言其實沒有想像中那麼難，本章我們將借用 JavaScript 實作一個名為 Egg 的簡易程式語言。

:anchor

## Egg 語法設計

首先我們要確立想做的程式語言需要有什麼設計。由於我們希望它非常簡潔統一，因此設計出以下語法規則：

- **一切都是表達式**
- 三種基本表達式類型：
    - value：數字或字串
    - word：變數名或識別碼
    - apply：函數調用，格式為 `func(arg1, arg2, ...)`
        ```javascript
        do(define(x, 10),
          if(>(x, 5),
              print("large"),
              print("small")))
        ```

#### 語法特點

- 字串僅由雙引號包圍，不支援跳脫序列
- 數字就是數字序列
- 綁定名可以包含任何非空白且無特殊語法意義的字元

## 實作步驟

### Step 1 Parser

首先，我們需要將文本形式的程式碼轉為結構化的資料，並檢查語法錯誤── Parser 將程式碼轉換為表達式樹 (Expression Tree)，這是一種資料結構，其中：

1. value
    ```javascript
    { type: "value", value: 數字或字串 }
    ```
2. word
    ```javascript
    { type: "word", name: "變數名稱" }
    ```
3. apply
    ```javascript
    { 
      type: "apply",
      operator: 運算子表達式,
      args: [參數表達式1, 參數表達式2, ...]
    }
    ```

#### 實例

假設我們有一個表達式 `>(x, 5)`，Parser 會將這段程式碼解析為：

```javascript
{
  type: "apply",
  operator: { type: "word", name: ">" },
  args: [
    { type: "word", name: "x" },
    { type: "value", value: 5 }
  ]
}
```

![表達式樹實例](/img/articles/eloquent-JavaScript/12.實例表達式樹.svg)

#### 1. Parser 實作

解析器使用了[遞迴下降（recursive descent）](https://zh.wikipedia.org/zh-tw/%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D%E8%A7%A3%E6%9E%90%E5%99%A8){target=_blank}技術，這是處理具有遞迴結構語言的常用方法。

##### 1.1 解析單個表達式

首先我們先定義一個名為 `parseExpression` 的函數，用於解析單個表達式，它接受一個字串輸入。

```javascript
// (program: string) => {expr: ExpressionNode, rest: string}
// ExpressionNode = 
//   | {type: "value", value: string | number}
//   | {type: "word", name: string}
//   | {type: "apply", operator: ExpressionNode, args: ExpressionNode[]}
function parseExpression(program) {
  program = skipSpace(program);
  let match, expr;

  // 解析字串
  if (match = /^"([^"]*)"/.exec(program)) {
    expr = {type: "value", value: match[1]};
  }
  // 解析數字
  else if (match = /^\d+\b/.exec(program)) {
    expr = {type: "value", value: Number(match[0])};
  }
  // 解析變數名稱
  else if (match = /^[^\s(),#"]+/.exec(program)) {
    expr = {type: "word", name: match[0]};
  }
  // 語法錯誤
  else {
    throw new SyntaxError("Unexpected syntax: " + program);
  }
  // 檢查表達式後是否有 apply（函數調用）
  return parseApply(expr, program.slice(match[0].length));
}

// 移除字串開頭的所有空白字元
// (string: string) => string
function skipSpace(string) {
  let first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first);
}
```

我們可以用三個[正則表達式](/articles/eloquent-javascript-chapter9){target=_blank}來匹配字串、數字和變數名稱，並根據匹配結果建立相應的表達式物件，如果輸入不匹配這三種型式之一，代表它不是有效的表達式，則拋出一個語法錯誤。

#### 1.2 解析 apply

接著我們定義 `parseApply` 函數，用於解析 apply 表達式，它接受一個表達式和一個字串輸入。

```javascript
// (expr: ExpressionNode, program: string) => {expr: ExpressionNode, rest: string}
// ExpressionNode = 
//   | {type: "value", value: string | number}
//   | {type: "word", name: string}
//   | {type: "apply", operator: ExpressionNode, args: ExpressionNode[]}
function parseApply(expr, program) {
  program = skipSpace(program);
  // 如果下一個字元不是左括號，則不是 apply
  if (program[0] != "(") {
    return {expr: expr, rest: program};
  }
  // 解析 apply 表達式
  program = skipSpace(program.slice(1));
  expr = {type: "apply", operator: expr, args: []};
  // 解析參數列表
  while (program[0] != ")") {
    let arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = skipSpace(arg.rest);
    // 處理參數分隔字元
    if (program[0] == ",") {
      program = skipSpace(program.slice(1));
    } else if (program[0] != ")") {
      throw new SyntaxError("Expected ',' or ')'");
    }
  }
  // 檢查是否有連續的 apply，如 f(x)(y)
  return parseApply(expr, program.slice(1));
}
```

如果輸入字串開頭是左括號，則表示有 apply 表達式，我們需要解析運算子和參數表達式，並建立 apply 表達式物件；若不是左括號，則表示沒有 apply 表達式，直接返回表達式。

#### 1.3 解析程式碼

最後我們定義 `parse` 函數，用於解析整個程式碼，它接受一個字串輸入，並返回表達式樹。

```javascript
// (program: string) => ExpressionNode
function parse(program) {
  let {expr, rest} = parseExpression(program);
  if (skipSpace(rest).length > 0) {
    throw new SyntaxError("Unexpected text after program");
  }
  return expr;
}

console.log(parse("+(a, 10)"));
// → {type: "apply",
// operator: {type: "word", name: "+"},
// args: [{type: "word", name: "a"},
// {type: "value", value: 10}]}
```

### Step 2 Evaluator

接收由 Parser 解析出的表達式樹後，Evaluator 接收一個表達式樹和一個作用域物件，然後評估表達式並返回結果值：

- 對於 value 表達式，直接返回其值
- 對於 word 表達式，在作用域中查找對應的綁定，如果存在則返回其值，否則拋出錯誤
- 對於 apply 表達式：
  - 如果是特殊形式（如 `if`、`while`），使用對應的特殊形式處理函數
  - 如果是普通函數調用，先評估運算子，確認它是函數，然後用評估後的參數調用它

```javascript
// 儲存特殊形式（如 if、while 等語言結構）的對象
// specialForms: Object
const specialForms = Object.create(null);

// 對給定的表達式進行求值，根據不同的表達式類型執行不同的操作
// (expr: ExpressionNode, scope: Object) => any
// ExpressionNode = 
//   | {type: "value", value: any}
//   | {type: "word", name: string}
//   | {type: "apply", operator: ExpressionNode, args: ExpressionNode[]}
function evaluate(expr, scope) {
  // 如果表達式是 value 表達式，直接返回其值
  if (expr.type == "value") {
    return expr.value;
  }
  // 如果表達式是 word 表達式，從作用域中查找對應的綁定，如果存在則返回其值，否則拋出錯誤
  else if (expr.type == "word") {
    if (expr.name in scope) {
      return scope[expr.name];
    } else {
      throw new ReferenceError(
        `Undefined binding: ${expr.name}`);
    }
  }
  // 如果表達式是 apply 表達式，根據不同的情況執行不同的操作
  // 如果是特殊形式（如 if、while 等），使用對應的特殊形式處理函數
  // 如果是普通函數調用，先評估運算子，確認它是函數，然後用評估後的參數調用它
  // 如果運算子不是函數，拋出錯誤
  else if (expr.type == "apply") {
    let {operator, args} = expr;
    if (operator.type == "word" &&
        operator.name in specialForms) {
      return specialForms[operator.name](expr.args, scope);
    } else {
      let op = evaluate(operator, scope);
      if (typeof op == "function") {
        // 對每個參數調用 evaluate 函數，將結果作為參數傳遞給 op 函數
        return op(...args.map(arg => evaluate(arg, scope)));
      } else {
        throw new TypeError("Applying a non-function.");
      }
    }
  }
}
```

#### 1. 特殊形式（Special Forms）

特殊形式是 Egg 語言中的特殊語法結構，通過 `specialForms` 物件定義。這個物件將特定的關鍵字與處理函數關聯起來，用於實現語言中的特殊語法，包括：

##### 1.1 if

在 Egg 語言中，`if` 為條件表達式，格式為 `if(condition, thenExpr, elseExpr)`。

```javascript
// (args: ExpressionNode[], scope: Object) => any
specialForms.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError("Wrong number of args to if");
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};
```
##### 1.2 while

在 Egg 語言中，`while` 為循環結構，格式為 `while(condition, bodyExpr)`。

```javascript
// (args: ExpressionNode[], scope: Object) => false
specialForms.while = (args, scope) => {
  if (args.length != 2) {
    throw new SyntaxError("Wrong number of args to while");
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope);
  }

  // 因為 Egg 中沒有 undefined，我們返回 false,
  return false;
};
```
##### 1.3 do

在 Egg 語言中，`do` 按順序執行多個表達式，並返回最後一個表達式的值，格式為 `do(expr1, expr2, ..., exprN)`。
    
```javascript
// (args: ExpressionNode[], scope: Object) => any || false
specialForms.do = (args, scope) => {
  let value = false;
  for (let arg of args) {
    value = evaluate(arg, scope);
  }
  return value;
};
```
##### 1.4 define

在 Egg 語言中，`define` 創建或更新綁定的特殊形式，格式為 `define(name, valueExpr)`。

```javascript
// (args: ExpressionNode[], scope: Object) => any
specialForms.define = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of define");
  }
  let value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  return value;
};
```
##### 1.5 fun

在 Egg 語言中，函數是通過 `fun` 特殊形式實現的。這個特殊形式將最後一個參數視為函數體，前面的參數作為函數的參數名稱，格式為 `fun(params, bodyExpr)`。

```javascript
// (args: ExpressionNode[], scope: Object) => Function
specialForms.fun = (args, scope) => {
  // 檢查是否提供了函數體
  if (!args.length) {
    throw new SyntaxError("Functions need a body");
  }
  
  // 提取函數體（最後一個參數）
  let body = args[args.length - 1];
  
  // 提取並驗證參數名（除最後一個參數外的所有參數）
  let params = args.slice(0, args.length - 1).map(expr => {
    // 確保參數名是 word 類型
    if (expr.type != "word") {
      throw new SyntaxError("Parameter names must be words");
    }
    return expr.name;
  });
  
  // 返回一個函數，該函數在調用時會創建新的作用域並執行函數體
  return function(...args) {
    // 檢查參數數量是否匹配
    if (args.length != params.length) {
      throw new TypeError("Wrong number of arguments");
    }
    
    // 創建一個新的本地作用域，原型鏈接到定義函數時的作用域
    let localScope = Object.create(scope);
    
    // 將參數綁定到本地作用域
    for (let i = 0; i < args.length; i++) {
      localScope[params[i]] = args[i];
    }
    
    // 在本地作用域中評估函數體並返回結果
    return evaluate(body, localScope);
  };
};
```

###### **fun 實例：簡單加一函數**

```javascript
run(`
do(define(plusOne, fun(a, +(a, 1))),
   print(plusOne(10)))
`);
// → 11
```

這個示例定義一個名為 `plusOne` 的函數，它接受一個參數 `a` 並返回 `a + 1`。然後調用這個函數並傳入參數 `10`，結果為 `11`。以下為執行過程：

1. 定義 `plusOne` 函數，參數為 `a`，函數體為 `+(a, 1)`
2. 調用 `plusOne(10)`，創建新的本地作用域
3. 在本地作用域中綁定 `a = 10`
4. 在本地作用域中評估 `+(a, 1)`，結果為 `11`
5. 返回結果 `11`
6. 調用 `print(11)`，輸出 `11`

### Step 3 Environment

最後，我們需要做環境設置。環境能提供基本的運算能力、定義內置函數和變量，並建立全局作用域：

####  1. 環境與作用域

在 Egg 語言中，作用域是由一個 JavaScript 物件表示，其屬性名對應綁定名稱，屬性值對應這些綁定的值。

##### 1.1 全局作用域設置

```javascript
// 創建一個沒有原型的全局作用域對象
// 使用 Object.create(null) 確保沒有繼承任何屬性
const topScope = Object.create(null);

// 在全局作用域中定義 Boolean 值
// 由於 Boolean 只有兩個，我們不需要為它們創建特殊語法，直接將它們綁定到名稱上即可
topScope.true = true;
topScope.false = false;
```

##### 1.2 添加基本運算子

接下來我們在全局作用域添加基本算術和比較運算子，以及一個輸出函數，如下所示：

- 算術運算子: `+`、`-`、`*`、`/`
- 比較運算子: `==`、`<`、`>`
- 輸出函數: `print`

```javascript
// 為全局作用域添加基本算術和比較運算子
// 使用 Function 構造函數動態創建運算符函數
for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
  // 為每個運算子創建一個接受兩個參數的函數
  // 例如：對於 "+"，創建的函數等同於 (a, b) => a + b
  topScope[op] = Function("a, b", `return a ${op} b;`);
}

// 添加輸出函數，將 console.log 包裝成 Egg 語言的 print 函數
// 該函數輸出值並返回該值，以便在表達式中使用
topScope.print = value => {
  console.log(value);
  return value;
};
```

##### 1.3 運行程序的輔助函數

上述的環境設置完成後，我們需要提供一個方便的方式來解析和執行 Egg 程序，以下函數將完成此任務：

```javascript
// 提供一個方便的方式來解析和執行 Egg 程序
// (program: string) => any
function run(program) {
  // 1. parse 解析程式文本為表達式樹
  // 2. 創建一個新的作用域，並將原型鏈接到全局作用域
  // 3. 在新作用域中評估表達式樹
  return evaluate(parse(program), Object.create(topScope));
}
```

#### 2. 作用域鏈與嵌套作用域

Egg 使用 JavaScript 的原型鏈來實現嵌套作用域。當我們調用 `run` 函數時，它創建一個新的作用域物件，該物件的原型是 `topScope`。因此程式可以在本地作用域中添加綁定，而不會修改全局作用域。

## 實例

以下程式以 Egg 實作計算 1 到 10 的和，結果為 55。

```javascript
run(`
do(define(total, 0),
   define(count, 1),
   while(<(count, 11),
         do(define(total, +(total, count)),
            define(count, +(count, 1)))),
   print(total))
`);
// → 55
```

1. 初始化變數：
   - `define(total, 0)`：將 `total` 初始化為 `0`
   - `define(count, 1)`：將 `count` 初始化為 `1`
2. 循環結構：
   - `while(<(count, 11), ...)`：當 `count < 11` 時執行循環體
3. 循環體：
   - `define(total, +(total, count))`：將 `total` 更新為 `total + count`
   - `define(count, +(count, 1))`：將 `count` 增加 `1`
4. 輸出結果：
   - `print(total)`：輸出最終的 `total` 值，即 `55`

#### 1. 執行流程詳解

1. `run` 函數解析程式文本並創建一個新的作用域
2. 在新作用域中初始化 `total = 0` 和 `count = 1`
3. 進入 `while` 循環，條件是 `count < 11`
4. 每次循環迭代：
   - 將 `total` 更新為 `total + count`
   - 將 `count` 增加 `1`
5. 當 `count` 達到 `11` 時，循環結束
6. 輸出 `total` 的值，即 `55`

#### 2. 執行追蹤

|迭代	|count	|total|	操作|
|---	|---	|---	|---	|
|初始	|1	|0	|初始化變量|
|1|	2|	1|	total += count; count++|
|2|	3	|3|	total += count; count++|
|3|	4	|6|	total += count; count++|
|4|	5|	10|	total += count; count++|
|5|	6|	15|	total += count; count++|
|6|	7|	21|	total += count; count++|
|7|	8|	28|	total += count; count++|
|8|	9|	36|	total += count; count++|
|9|	10|	45|	total += count; count++|
|10	|11|	55|	total += count; count++|
|結束|	11|	55|	循環結束，輸出 total|

## 直譯器與編譯器

#### 1. 直譯器

直譯器是直接在 Parser 產生的程式表示上進行操作。在執行過程中，直譯器會逐步解析並執行程式碼。我們本次設計的 Egg 中，便是使用 `evaluate` 函數來實現直譯器。

#### 2. 編譯器

編譯是指在解析和執行程式之間增加一個步驟，這個步驟將程式轉換為更高效的形式，通過預先完成盡可能多的工作，來提高執行效率。傳統上，編譯通常涉及將程式轉換為機器碼（處理器可直接執行的格式），但任何將程式轉換為不同表示形式的過程都可被視為編譯。

#### 3. Egg 語言的編譯策略

我們可以為 Egg 語言實現一個替代的評估策略：

1. 先將 Egg 程式轉換為 JavaScript 程式
2. 使用 `Function` 調用 JavaScript 編譯器
3. 執行結果

這種方法實現簡單，且能使 Egg 運行得非常快。

#### 4. 語言設計的「捷徑」

在我們的 Egg 語言實現中，有些特性是直接借用 JavaScript 的：

- `if` 和 `while` 基本上是對 JavaScript 自身 `if` 和 `while` 的簡單封裝
- Egg 中的值就是普通的 JavaScript 值

這種做法其實很常見，新語言通常會建立在現有語言或系統之上；當然也有從更原始的系統（如處理器理解的機器碼）開始的語言，需要花更多努力，但原理類似。

## 總結

透過實作 Egg 語言，我們不僅理解了程式語言的基本組成部分（Parser、Evaluator、環境設置），還學習了如何設計一個簡潔統一的語法系統，以及如何實現變數綁定、條件判斷、循環和函數等程式語言的基本功能，這些知識對我們理解更複雜的程式語言設計原理有深遠的啟發意義。

以上內容是基於 [12. Project: A Programming Language - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/12_language.html){target=_blank} 所整理的精簡筆記。