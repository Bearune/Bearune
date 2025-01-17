---
category: 前端開發
title: 【JavaScript 學習筆記 03】函數 Chapter 3 Functions
description: 深入淺出學習 JavaScript 函數概念！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋函數定義、參數與回傳值、作用域與閉包、呼叫堆疊、遞迴及函數設計最佳實踐，幫助你快速掌握 JavaScript 函數的核心知識與應用技巧。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2024-12-26
keywords: JavaScript 函數, JavaScript 函數基礎, JavaScript 函數教學, JavaScript 函數定義, JavaScript 函數參數, JavaScript 回傳值, JavaScript 作用域, JavaScript 閉包, JavaScript 呼叫堆疊, JavaScript 遞迴, JavaScript 單一職責原則, JavaScript 函數設計, JavaScript 最佳實踐, JavaScript 箭頭函數, JavaScript 嵌套範圍, JavaScript 堆疊溢出, JavaScript 尾遞迴優化, JavaScript 私有綁定, JavaScript 延遲執行, JavaScript 樹結構遍歷, JavaScript 費氏數列, JavaScript 快速排序, JavaScript 入門, JavaScript 學習筆記, JavaScript 範例, Eloquent JavaScript, JavaScript functions, JavaScript function basics, JavaScript function tutorial, JavaScript function definition, JavaScript function parameters, JavaScript return values, JavaScript scope, JavaScript closures, JavaScript call stack, JavaScript recursion, JavaScript single responsibility principle, JavaScript function design, JavaScript best practices, JavaScript arrow functions, JavaScript nested scope, JavaScript stack overflow, JavaScript tail call optimization, JavaScript private bindings, JavaScript delayed execution, JavaScript tree traversal, JavaScript Fibonacci sequence, JavaScript quicksort, JavaScript for beginners, JavaScript learning notes, JavaScript examples, Eloquent JavaScript
image: /img/articles/eloquent-JavaScript/cover3.webp

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 03】函數 Chapter 3 Functions
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover3.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter3
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 函數概念！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋函數定義、參數與回傳值、作用域與閉包、呼叫堆疊、遞迴及函數設計最佳實踐，幫助你快速掌握 JavaScript 函數的核心知識與應用技巧。

sitemap:
  loc: /articles/eloquent-javascript-chapter3
  lastmod: 2024-12-26
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> The best programs are those that manage to do something interesting while still being easy to understand.

![【JavaScript 學習筆記 03】 Chapter 3 Functions](/img/articles/eloquent-JavaScript/cover3.webp)

函數是 JavaScript 編程中最核心的工具之一，它能將一段程式邏輯封裝成一個值，從而提供了結構化程式碼的能力。

:anchor

## 定義一個函數

當我們定義一個函數時，其實就是將函數當作一個值，賦予給一個綁定。以下範例為定義 `square` 函數來產生平方數：

```javascript
const square = function(x) {
    return x * x;
};
console.log(square(12));
// → 144
```

#### 1. 參數

一個函數可以有0～多個參數，如下所示：

```javascript
const makeNoise = function() { // 沒有參數
    console.log("Pling!");
};
makeNoise();
// → Pling!

const roundTo = function(n, step) { //兩個參數
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(23, 10));
// → 20
```

#### 2. 回傳值

當程式執行到 `return` 時，會立即結束該函數的執行，並將後面的值傳回給呼叫它的程式碼，這個值稱為回傳值。

```javascript
function add(a, b) {
  return a + b; // 回傳 a + b 的結果
}
console.log(add(2, 3)); // → 5
```

如果 `return` 後面沒有值，或函數中沒有 `return`，則回傳 `undefined`。

```javascript
function sayHello() {
  return; // 回傳 undefined
}
console.log(sayHello()); // → undefined

function doNothing() {
  // 沒有 return
}
console.log(doNothing()); // → undefined
```

## 綁定和範圍（Bindings and scopes）

##### 什麼是作用域（Scope）？

作用域是指程式中綁定（如變數、函數名稱等）可以被存取的範圍。不同的聲明方式會影響綁定的作用域範圍與可見性。

#### 1. 全域作用域（Global Scope）

綁定在函數、區塊或模組之外定義時，其作用域為整個程式，能在任何地方被訪問。

```javascript
let x = 10; // 全域綁定
console.log(x); // → 10
```

#### 2. 區域作用域（Local Scope）

函數內部定義的變數或參數，其作用域僅限於該函數內部，每次函數執行時會創建新的綁定實例，確保綁定之間互不干擾。

```javascript
function add(a, b) {
  let sum = a + b; // 區域綁定
  return sum;
}
console.log(add(3, 4)); // → 7
// console.log(sum); // 錯誤，sum 不可見
```

#### 3. 區塊作用域（Block Scope）

使用 `let` 或 `const` 聲明的綁定，其作用域限於定義所在的區塊（`{}`）內。

```javascript
if (true) {
  let y = 20; // 區域綁定
}
// console.log(y); // 錯誤，y 不可見
```

#### 4. 函數作用域（Function Scope）

在 ES6 之前，`var` 是唯一的綁定聲明方式，`var` 聲明的綁定在函數內具有函數作用域，而在全域範圍內聲明時，則具有全域作用域。此外，`var` 不受區塊作用域限制，因此在區塊內聲明的 `var` 綁定也可以在區塊外訪問。

```javascript
if (true) {
  var z = 30; // 全域綁定
}
console.log(z); // → 30
```

>延伸閱讀：[JavaScript 進階： ES6. ES5 ES6 是什麼？](https://hugh-program-learning-diary-js.medium.com/javascript-%E9%80%B2%E9%9A%8E-es6-3a65102157e6){target="_blank"}

#### 5. 作用域的層級關係（Scope Hierarchy）

- 內層作用域可以訪問外層作用域的綁定。
- 若內外層作用域中有相同名稱的綁定，內層綁定會遮蔽外層綁定。

```javascript
const halve = function(n) {
  return n / 2; // 使用的是函數內的 n
};
let n = 10; // 全域綁定
console.log(halve(100)); // → 50
console.log(n); // → 10
```

## 嵌套範圍（Nested scope）

JavaScript 不僅有全域與局部綁定，還允許在函數或區塊內再定義其他區塊或函數，形成多層次的局部作用域。這種結構稱為「嵌套範圍」。每個內層範圍可以存取外層範圍的綁定，但外層範圍無法存取內層範圍的綁定。

#### 1. 範例：製作食譜的函數

以下範例展示了嵌套範圍的使用方式。在 `hummus` 函數內部，定義了一個名為 `ingredient` 的函數，`ingredient` 函數可以存取外層函數 `hummus` 的參數 `factor`，並進行計算。

```javascript
const hummus = function(factor) {
    // 內部函數，負責列出食材
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor; // 存取外層範圍的 factor
        if (ingredientAmount > 1) {
            unit += "s"; // 單位複數化
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    // 呼叫內部函數，列出食材
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
```

#### 2. 嵌套範圍的特點

1. 內層範圍可存取外層範圍的綁定  
   在範例中，`ingredient` 函數可以使用外層 `hummus` 函數的參數 `factor`，並將其用於計算每種食材的數量。
2. 外層範圍無法存取內層範圍的綁定  
   例如，`hummus` 函數無法直接存取 `ingredient` 函數內部的綁定 `ingredientAmount` 或 `unit`。
3. 範圍的隔離性  
   每次呼叫 `ingredient` 函數時，都會創建新的局部綁定 `ingredientAmount` 和 `unit`，不會互相干擾。

#### 3. 執行結果

當呼叫 `hummus(2)` 時，會根據 `factor = 2` 將每種食材的數量加倍，並輸出以下結果：

```txt
2 cans chickpeas
0.5 cups tahini
0.5 cups lemon juice
2 cloves garlic
4 tablespoons olive oil
1 teaspoons cumin
```

## 函數基礎與表示方式

JavaScript 提供多種方式來定義與使用函數，包括函數綁定、函數宣告、箭頭函數等。以下將逐步介紹這些概念及其特點。

#### 1. 函數綁定（Function Binding）

函數綁定是將函數值（Function Value）賦值給一個名稱（Binding），用來命名程式中的某段邏輯。在大多數情況下，函數綁定是**定義一次後不會變更的**，但綁定與函數值是兩個不同的概念。

##### 1.1 綁定與函數值的區別

- Function Binding：是綁定的名稱，用來指向函數值。
- Function Value：函數本身，實際的程式邏輯。

```javascript
let greet = function() {
  console.log("Hello!");
};

// `greet` 是 Function Binding
// `function() { console.log("Hello!"); }` 是 Function Value
```

##### 1.2 函數值的獨立性

函數值是獨立的，可以被多個綁定名稱引用。改變一個綁定的值不會影響其他綁定。

```javascript
let greet = function() {
  console.log("Hello!");
};

let anotherGreet = greet; // 將函數值賦值給另一個綁定
greet = function() {
  console.log("Hi!");
};

anotherGreet(); // → Hello!
greet();        // → Hi!
```

#### 2. 函數宣告（Function Declaration）

當 `function` 關鍵字位於語句開頭時，會直接定義一個函數綁定，並將其指向對應的函數值。函數宣告的語法簡單且不需要在結尾加上分號（`;`）。

```javascript
function square(x) {
  return x * x;
}
```

##### 2.1 提升（Hoisting）

函數宣告的提升會將整個函數定義移動到作用域頂部，因此可以在宣告之前調用該函數。而 `var` 聲明的綁定則只會提升名稱（宣告部分），但初始化仍保留在原始位置，因此在初始化之前訪問該綁定會得到 `undefined`。

```javascript
console.log("The future says:", future()); // → The future says: You'll never have flying cars

function future() {
  return "You'll never have flying cars";
}
```

##### 2.2 限制

在 ES6 中，函數宣告可以出現在區塊作用域中，但其行為可能因執行環境而異。在大多數情況下，區塊作用域內的函數宣告會被限制在該區塊內。

#### 3. 箭頭函數（Arrow Functions）

箭頭函數是一種更簡潔的函數表示法，使用 `=>` 定義函數，不需要使用 `function` 關鍵字。

##### 範例

```javascript
const roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};
```

##### 3.1 特點

- 更適合用於小型函數表達式。
- 與函數表達式的功能幾乎相同（[第6章](/articles/eloquent-javascript-chapter6#_31-this-關鍵字與綁定){target=_blank}會討論細節），但語法更簡潔。。
- 引入於 2015 年（ES6），主要是為了提高程式碼的可讀性和簡潔性。

#### 4. 函數宣告 vs 函數表達式

函數宣告與函數表達式在語法和行為上有一些差異，以下是它們的比較：

| 特性   | 函數宣告（Function Declaration）   | 函數表達式（Function Expression） |
| :----- | :--------------------------------- | :-------------------------------- |
| 語法   | `function name() { ... }`          | `let name = function() { ... };`  |
| 分號   | 不需要                             | 需要                              |
| 提升   | 是，整個函數會被提升到作用域的頂部 | 否，僅綁定名稱會被提升，但值不會  |
| 作用域 | 全域或函數作用域                   | 全域、函數或區塊作用域            |

## 呼叫堆疊（The call stack）

呼叫堆疊是電腦用來追蹤程式執行流程的核心機制。它負責管理函數的執行順序，確保每個函數能在完成後回到正確的位置繼續執行。

#### 1. 呼叫堆疊的運作機制

當程式執行時，呼叫堆疊會記錄每個函數的執行上下文（context）。以下是運作流程：
1. 函數被呼叫時：
   - 電腦將當前的執行上下文存入堆疊中。
   - 控制流程跳轉到被呼叫的函數，並開始執行該函數。
2. 函數執行結束時：
   - 從堆疊中取出先前的上下文。
   - 回到該上下文繼續執行程式。

這種機制確保了函數之間的執行順序能夠正確維持。

#### 範例：函數執行與堆疊變化

以下範例展示了呼叫堆疊的變化過程：

```javascript
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```

##### 執行步驟與堆疊狀態

1. 初始狀態：程式處於全域上下文（`not in function`）。
2. 呼叫 `greet("Harry")`：堆疊新增 `greet` 的上下文（`in greet`）。
3. 呼叫 `console.log("Hello Harry")`：堆疊新增 `console.log` 的上下文（`in console.log`）。
4. 完成 `console.log`：移除 `console.log` 的上下文，回到 `greet`（`in greet`）。
5. 完成 `greet`：移除 `greet` 的上下文，回到全域上下文（`not in function`）。
6. 呼叫 `console.log("Bye")`：堆疊新增 `console.log` 的上下文（`in console.log`）。
7. 完成程式執行：移除所有上下文，程式結束（`not in function`）。

#### 3. 堆疊溢出（Stack Overflow）

呼叫堆疊需要佔用記憶體來儲存上下文。如果函數呼叫過深，堆疊會變得過大，最終導致**堆疊溢出**（stack overflow）。這種情況通常發生於[遞迴](https://zh.wikipedia.org/zh-tw/%E9%80%92%E5%BD%92_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)){target="_blank"}函數中，尤其是遞迴條件未正確處理時。

##### 範例：遞迴引發堆疊溢出

```javascript
function recurse() {
  recurse(); // 無限遞迴
}
recurse(); // 堆疊溢出 (Maximum call stack size exceeded)
```

## 可選參數（Optional Arguments）

JavaScript 提供多種方式來定義與使用函數，包括函數綁定、函數宣告、箭頭函數等。以下將逐步介紹這些概念及其特點。

#### 1. 過多參數

如果函數被傳入的參數多於其定義的參數數量，多出來的參數會被忽略，不會引發錯誤。

##### 範例

```javascript
function square(x) {
  return x * x;
}
console.log(square(4, true, "hedgehog")); // → 16
```

- 行為解釋：函數只會使用定義中出現的參數（如 `x`），多餘的參數（如 `true` 和 `"hedgehog"`）會被忽略。

#### 2. 過少參數

如果函數被傳入的參數少於其定義的參數數量，缺少的參數會被自動設置為 `undefined`。

##### 範例

```javascript
function greet(who) {
  console.log("Hello " + who);
}
greet(); // → Hello undefined
```
- 行為解釋：`who` 未被提供，預設為 `undefined`，因此輸出 `"Hello undefined"`。

#### 3. 應用範例：模擬減法操作符

利用參數為 `undefined` 的特性，可以設計函數根據參數的數量執行不同的邏輯。

##### 範例

```javascript
function minus(a, b) {
  if (b === undefined) return -a; // 如果 b 未提供，返回 -a
  else return a - b; // 如果 b 提供，返回 a - b
}
console.log(minus(10));      // → -10
console.log(minus(10, 5));   // → 5
```

- 行為解釋：當 `b` 未提供時，函數只處理 `a`；當 `b` 提供時，函數執行減法。

#### 4. 預設參數（Default Parameters）

為了避免 `undefined` 帶來的意外行為，可以使用預設參數來設置函數的默認值。當參數未提供或值為 `undefined` 時，會採用預設值。

##### 範例

```javascript
function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}
console.log(roundTo(4.5));      // → 5 （使用預設值 step = 1）
console.log(roundTo(4.5, 2));   // → 4 （提供了 step = 2）
```

- 行為解釋：`step` 預設為 `1`，當傳入參數時會覆蓋預設值。

#### 5. 接受任意數量參數的函數

有些函數（如 `console.log`）可以接受任意數量的參數。這種設計在處理變量數量的輸入時非常實用。

##### 範例

```javascript
console.log("C", "O", 2); // → C O 2
```

> 在下一章中，將介紹如何在函數內部獲取所有傳入的參數（例如使用 `arguments` 或展開運算符 `...`）。

## 閉包（Closure）

閉包是 JavaScript 中的一個強大概念，指的是**函數可以記住並訪問它創建時的作用域，即使函數在該作用域之外執行**。

簡單來說，閉包是一個函數與其「環境」的結合體。當函數被返回或傳遞時，它會攜帶著它創建時的環境，這就是閉包的核心。

#### 1. 閉包的基本範例

```javascript
function wrapValue(n) {
  let local = n; // 本地綁定
  return () => local; // 返回一個可以訪問本地綁定的函數
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1()); // → 1
console.log(wrap2()); // → 2
```

##### 運作機制

1. `wrapValue(1)` 被呼叫時：
   - 創建了一個新的本地綁定 `local`，值為 `1`。
   - 返回了一個函數，該函數可以訪問並返回 `local`。
   - 此時，`wrap1` 保存了這個返回的函數，並且記住了 `local = 1` 的環境。
2. `wrapValue(2)` 被呼叫時：
   - 創建了一個新的本地綁定 `local`，值為 `2`。
   - 返回了一個函數，該函數可以訪問並返回 `local`。
   - 此時，`wrap2` 保存了這個返回的函數，並且記住了 `local = 2` 的環境。
3. 當呼叫 `wrap1()` 和 `wrap2()` 時：
   - 它們分別返回各自環境中的 `local` 值（即 `1` 和 `2`），互不影響。

#### 2. 關鍵概念：為什麼閉包能記住綁定？

閉包的核心機制在於**返回的子函數「記住」了它創建時的作用域環境**，即使主函數已經執行完畢。

##### 核心特性

1. 語彙範疇（Lexical Scope）：
   - 函數的作用域在它「定義時」就已經確定，而不是在「執行時」確定。
   - 當主函數返回了一個子函數時，這個子函數攜帶了它在「定義時」的作用域環境，這個環境中包含了當時的所有綁定。
2. 記憶機制：  
  當主函數執行完畢後，它的執行上下文通常會被銷毀。但如果返回的子函數仍然引用主函數中的綁定，那些綁定就會被保留在記憶體中，因為子函數需要它們，這就是閉包的本質。

#### 3. 應用場景：閉包的實際用法

##### 範例 1：模擬私有綁定

閉包常用於創建私有綁定，保護綁定不被外部直接修改。

```javascript
function counter() {
  let count = 0; // 私有綁定
  return {
    increment: () => count++,
    getCount: () => count
  };
}

let myCounter = counter();
myCounter.increment();
console.log(myCounter.getCount()); // → 1
myCounter.increment();
console.log(myCounter.getCount()); // → 2
```

##### 範例 2：延遲執行

閉包可以用於延遲執行某些操作，並記住當時的上下文。

```javascript
function createMultiplier(factor) {
  return (number) => number * factor;
}

let doubler = createMultiplier(2); // 創建一個倍數為 2 的函數
let tripler = createMultiplier(3); // 創建一個倍數為 3 的函數

console.log(doubler(5)); // → 10
console.log(tripler(5)); // → 15
```

> 延遲執行是指函數在定義時不會立刻執行，而是等到某個條件或事件發生時才執行。

#### 4. 閉包的優點與注意事項

##### 優點

1. 數據封裝：閉包可以保護綁定，避免外部直接訪問或修改。
2. 靈活性：閉包允許函數「記住」不同的上下文，實現更多功能。

##### 注意事項

1. 記憶體使用：由於閉包會保留綁定的引用，可能導致記憶體無法及時釋放。因此在使用閉包時，應注意避免不必要的綁定保留。
2. 性能問題：如果閉包中引用了大量綁定，可能會導致性能下降。

#### 5. 總結：閉包的核心概念

閉包的本質是**函數與其創建時的環境的結合**。它允許函數記住並訪問外部作用域中的綁定，即使在該作用域已經執行完畢後。

##### 若我們試圖簡化理解……

- 閉包 = 函數 + 環境。
- 當一個函數內 `return` 了另一個函數時，閉包就產生了。

> 延伸閱讀：[深入淺出 JavaScript 閉包（closure）](https://pjchender.dev/javascript/js-closure/){target="_blank"}  
> 這篇文章對閉包的解釋非常清楚，推薦閱讀。


## 遞迴（Recursion）

#### 1. 什麼是遞迴？

遞迴（Recursion）是指函數可以呼叫自身的特性。呼叫自身的函數稱為遞迴函數。

##### 範例：計算次方

以下是一個簡單的遞迴函數，用於計算次方（`base^exponent`）：

```javascript
function power(base, exponent) {
    if (exponent == 0) {
        return 1; // 基底條件：當指數為 0 時，返回 1
    } else {
        return base * power(base, exponent - 1); // 遞迴步驟：base * (base^(exponent-1))
    }
}
console.log(power(2, 3)); // → 8
```

#### 2. 遞迴的效率問題

雖然遞迴的寫法簡潔優雅，但在某些情況下，遞迴的效率可能低於迴圈，特別是當遞迴深度過大時。

> 補充：一些現代 JavaScript 引擎（如 V8）支持[尾遞迴](https://zh.wikipedia.org/zh-tw/%E5%B0%BE%E8%B0%83%E7%94%A8#%E5%B0%BE%E9%80%92%E5%BD%92){target="_blank"}優化，可以在某些條件下減少遞迴的記憶體消耗。

以下是使用迴圈實現的次方函數，它的效率通常比遞迴版本更高：

```javascript
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
```

##### 為什麼要使用遞迴？

既然遞迴可能效率較低，為什麼還要使用它呢？

1. 可讀性與正確性優先
   - 遞迴的表達方式通常更接近問題的自然描述，程式更容易理解。
   - 在設計程式時，應該優先確保程式正確運行，並且易於維護。
2. 效能問題可以延後處理
   - 不需要一開始就過度擔憂效率，因為大多數程式的執行時間並不會成為瓶頸。
   - 如果效能成為問題，可以在完成後進行測量，並根據需要進行優化。

#### 3. 遞迴的適用場景

雖然遞迴在某些情況下效率較低，但它在處理以下類型的問題時非常有用：

1. 需要探索多個分支的問題
   - 例如：樹結構遍歷、路徑搜索、排列組合等。
2. 問題可以被分解為更小的子問題
   - 例如：費氏數列、快速排序、歐幾里得算法等。

#### 範例：探索操作序列

從數字 1 開始，通過「加 5」或「乘 3」的操作，可以生成一個無限的數字集合。給定一個目標數字，寫一個函數來嘗試找到一組操作序列，使得從 1 開始可以生成這個數字。如果無法生成，則返回 `null`。

解法：我們可以使用遞迴來探索所有可能的操作序列，直到找到目標數字。

```javascript
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history; // 找到目標，返回操作歷史
        } else if (current > target) {
            return null; // 超過目標，停止探索
        } else {
            // 遞迴探索兩種可能的操作
            return find(current + 5, `(${history} + 5)`) ??
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1"); // 從 1 開始探索
}

console.log(findSolution(24)); 
// → (((1 * 3) + 5) * 3)
```
 
#### 5. 遞迴與迴圈的選擇

1. 適合使用遞迴的情況：
   - 問題具有明顯的分解結構，例如樹或圖的遍歷。
   - 需要探索多個分支的情況，例如路徑搜索。
   - 遞迴的表達方式更接近問題本身的描述。
2. 適合使用迴圈的情況：
   - 問題可以用單一的重複操作解決，例如數值計算。
   - 效率是首要考量，並且遞迴可能導致堆疊溢出時。

## 如何逐步改進程式設計中的函數設計？

在程式設計中，函數設計的品質直接影響程式碼的可讀性、靈活性和可維護性。這裡我們將以一個簡單的例子——**農場動物數量的格式化輸出**——來展示如何通過逐步改進，讓程式碼變得更加清晰和高效。

目標：輸出農場上動物的數量，並將數字格式化為三位數。

#### 1. 初始版本

以下是最初的實現：

```javascript
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);
```

##### 問題分析：

1. 重複代碼：`cowString` 和 `chickenString` 的邏輯幾乎完全相同，當需要新增其他動物（如豬）時，代碼會變得冗長且容易出錯。
2. 缺乏靈活性：格式化數字和打印輸出的邏輯耦合在一起，難以分開使用。

#### 2. 改進版本 1：抽取重複邏輯

我們可以將格式化數字和添加標籤的邏輯抽取到一個函數中，減少重複代碼：

```javascript
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
```

##### 優點：

減少了重複代碼，程式碼更加簡潔。

##### 局限性：

- 函數名稱 `printZeroPaddedWithLabel` 過於冗長且不靈活。
- 將「格式化數字」和「打印輸出」兩個概念混合在一起，導致函數缺乏靈活性，難以在其他場景中重用。

#### 3. 改進版本 2：進一步拆解

我們可以將格式化數字的邏輯提取到一個專門的函數中，讓它只負責將數字格式化為指定的寬度：

```javascript
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
```

##### 優點：

`zeroPad` 函數只負責格式化數字，通用性更強，可以在其他場景中重用。
`printFarmInventory` 的邏輯更加簡單易讀，未來需要新增動物時，只需添加一行代碼。

#### 4. 總結與函數設計的原則

1. 單一職責原則 （Single Responsibility Principle）  
   函數應該只執行一個清晰的任務。
   - 初始版本中，格式化數字和打印輸出的邏輯混合在一起，違反了單一職責原則。
   - 在改進版本 2 中，`zeroPad` 和 `printFarmInventory` 的職責更加明確。
2. 函數的命名  
   函數名稱應該清晰地表達它的用途。
   - 例如，`zeroPad` 清楚地表達了它的功能是將數字格式化為指定寬度。
3. 適度的通用性  
   函數的設計應該根據實際需求來確定通用性，而不是過度設計。
   - 在改進版本 2 中，`zeroPad` 的通用性足以應對大多數場景，但並沒有過度設計。
4. 平衡代碼的重複性與可讀性
   - 從重複代碼開始，逐步抽取公共邏輯，減少冗餘。
   - 避免過早優化或過度設計，應根據實際需求進行改進。

## 功能與副作用：理解函數的兩種角色

函數是程式設計的核心工具，它們的主要作用可以分為兩類：

1. 執行操作：與外部世界交互，產生副作用。
2. 計算值：根據輸入產生並返回結果。

接下來，我們將詳細討論這兩種類型的函數，以及如何在設計中平衡它們的使用。

#### 1. 副作用函數

副作用函數的主要目的是執行某些操作，這些操作會影響外部世界或外部狀態。常見的副作用包括：

1. 修改外部綁定
2. 寫入檔案
3. 顯示輸出（如 `console.log`）

以下是一個副作用函數的例子：

```javascript
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`); // 副作用：打印到控制台
}
```

##### 副作用的必要性

副作用是程式與外部世界交互的必要手段。例如，程式需要寫入檔案、顯示輸出或處理用戶輸入。然而，副作用過多或分散在程式的各個部分，會降低程式的可讀性和可維護性。

##### 設計建議

- 將副作用限制在程式的特定部分，例如 I/O 操作。
- 儘量避免將副作用與邏輯混合在一起，保持程式的核心邏輯純粹。

#### 2. 返回值函數

返回值函數的主要目的是根據輸入計算並返回結果，而不直接影響外部世界。這類函數通常更通用，能在更多場景中重複使用。

以下是一個返回值函數的例子：

```javascript
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string; // 返回值：格式化的數字字串
}
```

#### 3. 純函數（Pure Function）

純函數是一種特殊的返回值函數，具有以下特性：

- 無副作用：純函數不會修改外部狀態，也不會執行像打印或寫檔案這樣的操作。
- 不依賴外部狀態：純函數不會依賴外部可變的綁定或狀態（例如全域綁定）。
- 輸入決定輸出：純函數在相同的輸入下，總是返回相同的輸出。

以下是一個純函數的例子：

```javascript
function add(a, b) {
  return a + b; // 純函數：無副作用，輸入決定輸出
}
```

##### 純函數的優點：

- 易於理解：純函數的行為完全由其輸入決定，不依賴外部環境。
- 易於測試：純函數不需要模擬外部狀態，因此更容易進行單元測試。
- 易於重用：純函數的通用性更高，可以在不同的場景中重複使用。

#### 4. 設計建議

1. 儘可能撰寫純函數
   - 純函數讓程式的邏輯部分保持簡單、可測試。
   - 在程式的核心邏輯中，應優先使用純函數。
2. 將副作用隔離在程式的邊界
   - 副作用是不可避免的，但應將它們限制在程式的特定部分，例如 I/O 操作。
   - 將副作用與邏輯分離，有助於提升程式的可讀性和可維護性。
3. 避免混合副作用與邏輯
   - 副作用函數應該只負責執行操作，而不應包含複雜的邏輯。
   - 將邏輯提取到純函數中，讓程式的核心部分保持純粹。

>程式設計的挑戰在於如何平衡純函數與副作用的使用，從而提升程式的可讀性、可測試性和效率。

## 總結

本章介紹了三種定義函數的方式：**函數宣告**、**函數表達式**和**箭頭函數**，並深入探討了作用域的概念。每個區塊都會創建一個新的作用域，而 `var` 關鍵字的特殊性在於它不受區塊限制，會被提升到最近的函數或全域作用域。

函數的核心價值在於能夠減少代碼重複，幫助清晰地組織程式碼，從而提升可讀性和靈活性。特別是命名良好的函數，能夠直觀地表達其用途，讓程式更易於理解與維護。掌握函數的使用與最佳實踐，是撰寫高品質程式碼的關鍵。

[點我獲取本文心智圖](/img/articles/eloquent-JavaScript/Functions.png){target="_blank"}

以上內容是基於 [3. Functions - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/03_functions.html){target=_blank} 所整理的精簡筆記。
