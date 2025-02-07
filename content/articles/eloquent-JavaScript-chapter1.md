---
category: 前端開發
title: 【JavaScript 學習筆記 01】基本概念 Chapter 1 Values, Types, and Operators
description: 深入淺出學習 JavaScript 基礎概念！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋數字與字串處理、運算符、布林值、邏輯運算符短路行為、自動型別轉換等核心知識，幫助你快速掌握 JavaScript 的基本操作與注意事項。
tags: ["javascript", "Eloquent JavaScript 學習筆記系列"]
date: 2024-12-24
keywords: JavaScript, JavaScript 基礎, JavaScript 教學, JavaScript 運算符, JavaScript 類型轉換, JavaScript 短路行為, JavaScript 比較運算符, JavaScript 邏輯運算符, JavaScript 數字型別, JavaScript 字串處理, JavaScript 自動型別轉換, JavaScript 入門, JavaScript 學習筆記, JavaScript 範例, Eloquent JavaScript, JavaScript, JavaScript basics, JavaScript tutorial, JavaScript operators, JavaScript type conversion, JavaScript short-circuiting, JavaScript comparison operators, JavaScript logical operators, JavaScript number type, JavaScript string handling, JavaScript automatic type conversion, JavaScript for beginners, JavaScript learning notes, JavaScript examples, Eloquent JavaScript
image: /img/articles/eloquent-JavaScript/cover1.webp

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 01】基本概念 Chapter 1 Values, Types, and Operators
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover1.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter1
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 基礎概念！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋數字與字串處理、運算符、布林值、邏輯運算符短路行為、自動型別轉換等核心知識，幫助你快速掌握 JavaScript 的基本操作與注意事項。

sitemap:
  loc: /articles/eloquent-javascript-chapter1
  lastmod: 2024-12-24
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="\_blank"} 所整理的精簡筆記。

> The best programs are those that manage to do something interesting while still being easy to understand.

![【JavaScript 學習筆記 01】Chapter 1 Values, Types, and Operators](/img/articles/eloquent-JavaScript/cover1.webp)

本文深入探討 JavaScript 的基礎概念，包含值、型別和運算子等核心要素。透過實際的程式碼範例，說明數字、字串、布林值等基本型別的特性和使用方式，以及各種運算子的行為模式。同時也介紹了自動型別轉換機制，以及如何正確處理空值和特殊數值。

:anchor

## 數字（Numbers）

JavaScript 中的數字型別是基於 **64 位元的雙精度浮點數格式（[IEEE 754](https://zh.wikipedia.org/zh-tw/IEEE_754){target="\_blank"}）**，能表示極大的數值範圍。整數計算通常是精確的，但小數計算可能因精度限制而產生誤差。所以理解 JavaScript 對數字的處理方式，尤其是小數的限制是非常重要的基礎。

> 延伸閱讀：[JavaScript 的十個小知識 - 4. 0.1 + 0.2 !== 0.3](/articles/javascript-fun-facts#_4-01-02-03){target="\_blank"}

#### 1. 數字的精度問題

##### 1.1 整數的精度範圍

JavaScript 的數字型別 `Number` 能夠表示的整數範圍是 `±2^53`，在此範圍內的整數計算通常是精確的。

##### 1.2 小數的精度限制

小數計算可能產生誤差，因為許多數字（例如：`π` 或 `0.1`）無法用有限的位元精確表示。這是由 [IEEE 754](https://zh.wikipedia.org/zh-tw/IEEE_754){target="\_blank"} 標準的雙精度浮點數格式所導致的。

> 注意：小數應被視為「近似值」而非「精確值」，這種精度損失通常只在特定情況下造成實際問題。

#### 2. 特殊數值

JavaScript 中有三個特殊的數值類型，它們屬於 `Number` 型別，但行為與普通數字不同：

##### 2.1 Infinity 及 -Infinity

- `Infinity` 表示正無窮大，`-Infinity` 表示負無窮大。
- 任何數與 `Infinity` 相加或相減，結果仍為 `Infinity`。例如：
  ```javascript
  console.log(Infinity - 1);  // → Infinity
  ```
- 注意：`Infinity` 是一個數值型別，但在數學上並不合理，要避免依賴 `Infinity` 的計算結果。

##### 2.2 NaN（Not a Number）

- `NaN` 表示「不是一個數字」。
- 通常出現於無意義的數值運算中，例如：
  ```javascript
  console.log(0 / 0);  // → NaN
  console.log(Infinity - Infinity);  // → NaN
  ```
- 特性：`NaN` 是唯一一個不等於自身的值：
  ```javascript
  console.log(NaN === NaN);  // → false
  ```

## 字串（Strings）

JavaScript 的字串型別是基於 [Unicode](https://zh.wikipedia.org/zh-tw/Unicode){target="\_blank"} 標準，用於表示和操作文本數據。

#### 1. 字串的基本用法

##### 1.1 定義字串

- 單引號、雙引號和反引號都可以用來定義字串，需確保開頭與結尾的引號類型相同：
  ```javascript
  let single = "這是單引號字串";
  let double = "這是雙引號字串";
  let template = `這是反引號字串`;
  ```
- 注意：只有反引號字串支持嵌入變數與多行文本。
  ```javascript
  let name = "Alice";
  console.log(`Hello, ${name}`);  // → Hello, Alice
  ```

##### 1.2 字串的不可變性

JavaScript 的字串是不可變的，這意味著一旦創建，字串的內容無法被修改。如果需要更改字串，必須創建一個新的字串：

```javascript
let str = "Hello";
str[0] = "h";  // 無效操作
console.log(str);  // → Hello
```

#### 2. 特殊字符處理

在處理包含特殊字符或引號嵌套的字串時，可能會遇到語法錯誤。以下是常見情況及解決方法：

##### 2.1 引號嵌套

當字串中包含與外層引號相同的引號時，JavaScript 會將內部的引號視為字串的結束符，導致語法錯誤。

- 解決方法 1：使用不同類型的引號嵌套  
  可以使用單引號和雙引號搭配，避免衝突。
  ```javascript
  console.log('He said "Hello"');  // → He said "Hello"
  console.log("It's a sunny day");  // → It's a sunny day
  ```
- 解決方法 2：使用跳脫字元（`\`）  
  使用反斜線（`\`）作為跳脫字元，讓內部的引號被視為字串的一部分而非結束符。
  ```javascript
  console.log('He said "Hello"');  // → He said "Hello"
  console.log("It's a sunny day");  // → It's a sunny day
  ```

##### 2.2 常見的跳脫字符

除了跳脫引號，JavaScript 還支持其他特殊字符的跳脫，以下是一些常見的例子：

| 跳脫字符 |  說明  | 範例                        | 結果                    |
| :------: | :----: | :-------------------------- | :---------------------- |
|   `\'`   | 單引號 | `'It\'s a sunny day'`       | It's a sunny day        |
|   `\"`   | 雙引號 | `"He said \"Hello\""`       | He said "Hello"         |
|   `\\`   | 反斜線 | `'This is a backslash: \\'` | This is a backslash: \  |
|   `\n`   | 換行符 | `'Line 1\nLine 2'`          | Line 1<br>Line 2        |
|   `\t`   | 製表符 | `'Column1\tColumn2'`        | Column1 Column2         |

#### 3. 字串的 Unicode 支援

JavaScript 的字串基於 [Unicode](https://zh.wikipedia.org/zh-tw/Unicode){target="\_blank"}，它可以表示幾乎所有的文字字符。然而某些特殊字符（例如表情符號或罕見的 Unicode 字元）需要特別處理。

##### 3.1 使用 Unicode 編碼

可以通過 `\u` 或 `\x` 來表示特殊字符：

```javascript
console.log("\u2764");  // → ❤
console.log("\u{1F600}");  // → 😀，需要 ES6 支援。
console.log("\x41");  // → A，\x 表示 ASCII。
```

##### 3.2 字串長度與編碼單位

JavaScript 的 `length` 屬性基於 UTF-16 編碼單位，而非實際字符數。例如：

```javascript
let emoji = "😀";
console.log(emoji.length);  // → 2 (UTF-16 編碼單位)
```

> 延伸閱讀：[JavaScript 的字串問題](/articles/eloquent-javascript-chapter5#_3-字符串與字符代碼){target=_blank}

## 運算子（Operators）

JavaScript 中的運算子根據運算元的數量分為以下三種：

1. 單元運算子（Unary Operators）：只使用一個值。
2. 二元運算子（Binary Operators）：使用兩個值。
3. 三元運算子（Ternary Operator）：使用三個值。

#### 1. 單元運算子（Unary Operators）

單元運算子只需要一個運算元。以下是常見的單元運算子：

##### 1.1 typeof

用於檢查值的類型，返回一個表示類型的字串。

```javascript
console.log(typeof 4.5);  // → "number"
console.log(typeof "Hello");  // → "string"
```

##### 1.2 !（邏輯非運算子）

用於反轉布林值。

```javascript
console.log(!true);  // → false
console.log(!false);  // → true
```

##### 1.3 -（負號運算子）

用於將數字取負值。

```javascript
console.log(-10);  // → -10
console.log(-(-10));  // → 10
```

#### 2. 二元運算子（Binary Operators）

二元運算子需要兩個運算元。以下是常見的二元運算子分類：

##### 2.1 算術運算子

用於數值計算：

```javascript
console.log(10 + 5);  // → 15
console.log(10 % 3);  // → 1
```

##### 2.2 比較運算子

用於比較兩個值，返回布林值：

- `==`：相等，轉換類型
- `===`：全等，不轉換類型
- `!=`：不相等，轉換類型
- `!==`：不全等，不轉換類型
- `>`、`<`、`>=`、`<=`

```javascript
console.log(10 > 5);  // → true
console.log(10 === "10");  // → false
console.log(10 == "10");  // → true
```

##### 2.3 邏輯運算子

用於布林值的邏輯運算：`&&`（and）、`||`（or）。

```javascript
console.log(true && false);  // → false
console.log(true || false);  // → true
```

##### 2.4 賦值運算子

用於將值賦給變數：`=`、`+=`、`-=`、`*=`、`/=`。

```javascript
let x = 10;
x += 5;  // 相當於 x = x + 5
console.log(x);  // → 15
```

#### 3. 三元運算符（Ternary Operators）

條件運算符是 JavaScript 唯一的三元運算符，用於簡化條件判斷。語法如下：

- 語法：`條件 ? 表達式1 : 表達式2`
  - 若條件為 `true`，則結果為`表達式1`；
  - 若條件為 `false`，則結果為`表達式2`。

```javascript
console.log(true ? 1 : 2);  // → 1
console.log(false ? 1 : 2);  // → 2
```

#### 應用場景

條件運算符常用於簡化 `if-else` 判斷：

```javascript
let age = 18;
let status = age >= 18 ? "成人" : "未成年";
console.log(status);  // → 成人
```

#### 4. 特殊運算子 `-` 的雙重角色

`-` 是一個特殊的運算子，既可以作為單元運算子，也可以作為二元運算子：

##### 4.1 作為單元運算子

用於取負值：

```javascript
console.log(-10);  // → -10
```

##### 4.2 作為二元運算子

用於數值減法：

```javascript
console.log(10 - 2);  // → 8
```

##### 4.3 混合使用

單元與二元運算子可以在同一個表達式中使用：

```javascript
console.log(-(10 - 2));  // → -8
```

#### 5. 運算符優先級

在複雜的表達式中，運算符的執行順序由其優先級決定。以下是常見運算符的優先級（從低到高）：

1. `||`
2. `&&`
3. 比較運算符（如 `>`、`<`、`==` 等）
4. 算術運算符（如 `+`、`-`、`*`、`/` 等）

##### 範例

```javascript
console.log(1 + 1 == 2 && 10 * 10 > 50);
// → true
```

##### 解析：

1. `1 + 1 == 2` 先計算加法，結果為 `true`。
2. `10 * 10 > 50` 計算乘法，結果為 `true`。
3. `true && true`，結果為 `true`。

## 布林值（Boolean values）

JavaScript 的布林類型只有兩個值，`true` 和 `false`。這些值通常用於判斷條件是否成立，並控制程式的執行流程。

#### 1. 比較運算符（Comparison Operators）

比較運算符用於比較兩個值，結果為布林值 `true` 或 `false`。

##### 1.1 常見比較運算符

`>`、`<`、`>=`、`<=`、`==`、`!=`

```javascript
console.log(3 > 2);  // → true
console.log(3 < 2);  // → false
console.log("Garnet" != "Ruby");  // → true
console.log("Pearl" == "Amethyst");  // → false
```

##### 1.2 特殊情況：NaN

`NaN` 是唯一不等於自身的值。

```javascript
console.log(NaN == NaN);  // → false
```

#### 2. 邏輯運算符（Logical Operators）

邏輯運算符用於組合布林值，結果仍為布林值。主要包括以下三種：

##### 2.1 邏輯運算符列表

1. `&&`（邏輯與，AND）  
   當兩個運算元皆為 `true` 時，結果為 `true`；否則為 `false`。
   ```javascript
   console.log(true && false);  // → false
   console.log(true && true);  // → true
   ```
2. `||`（邏輯或，OR）  
   當至少一個運算元為 `true` 時，結果為 `true`；否則為 `false`。
   ```javascript
   console.log(false || true);  // → true
   console.log(false || false);  // → false
   ```
3. `!`（邏輯非，NOT）  
   用於反轉布林值。
   ```javascript
   console.log(!true);  // → false
   console.log(!false);  // → true
   ```

##### 2.2 邏輯運算真值表

| 運算符 | `條件 1` | `條件 2` | 結果  |
| :----: | :------: | :------: | :---: |
|  `&&`  |   true   |   true   | true  |
|  `&&`  |   true   |  false   | false |
|  `&&`  |  false   |   true   | false |
|  `&&`  |  false   |  false   | false |
| `\|\|` |   true   |   true   | true  |
| `\|\|` |   true   |  false   | true  |
| `\|\|` |  false   |   true   | true  |
| `\|\|` |  false   |  false   | false |
|  `!`   |   true   |    -     | false |
|  `!`   |  false   |    -     | true  |

## 空值（Empty values）

JavaScript 中的空值類型包括 `null` 和 `undefined`，用於表示「不存在」或「未定義」的值。

- `null`：明確表示一個空值，通常用於指示「有意義的空值」。
- `undefined`：表示變數尚未賦值，或者對不存在的屬性進行訪問時的結果。

```javascript
let age = null;  // 明確表示 age 沒有值
console.log(age);  // → null

let name;
console.log(name);  // → undefined，變數未賦值。
```

> 延伸閱讀：[JavaScript 的十個小知識 - 9. null 與 undefined 是不同的](/articles/javascript-fun-facts#_9-null-與-undefined-是不同的){target="\_blank"}

## 自動型別轉換（Automatic type conversion）

當運算符應用於不符合預期類型的值時，JavaScript 會嘗試將值轉換為所需類型，這種行為稱為隱式型別轉換。雖然方便，但可能導致意料之外的結果。

```javascript
console.log(8 * null);  // → 0，null 被轉換為 0
console.log("5" - 1);  // → 4，"5" 被轉換為數字 5
console.log("5" + 1);  // → "51"，數字 1 被轉換為字串 "1" 並進行字串拼接
console.log("five" * 2);  // → NaN，"five" 無法轉換為數字
console.log(false == 0);  // → true，false 被轉換為 0
```

#### 1. 型別轉換規則

##### 1.1 `+` 的特性

- 字串與數字混合時，`+` 優先執行字串拼接。
- 其他運算符（如 `-`、`*`）會將字串轉換為數字。

##### 1.2 `NaN` 的行為

- 無法轉換為數字的值（如 `"five"` 或 `undefined`）會變為 `NaN`。
- 前面有提到，`NaN` 是一個特殊值，與任何值比較都返回 `false`，包括與自身的比較。
  ```javascript
  console.log(NaN == NaN);  // → false
  ```

#### 2. 比較運算中的類型轉換

##### 2.1 `==` 和 `===` 的區別

- `==`：允許類型轉換，並根據一套複雜的規則比較值。
- `===`：不進行類型轉換，僅在類型與值都相等時返回 `true`。

```javascript
console.log(0 == false);  // → true，型別轉換發生
console.log(0 === false);  // → false，類型不同
console.log("" == false);  // → true，型別轉換發生
console.log("" === false);  // → false，類型不同
```

##### 2.2 特殊情況：null 和 undefined

`null` 和 `undefined` 只在相互比較時返回 `true`，在其他情況下不等於任何值：

```javascript
console.log(null == undefined);  // → true
console.log(null == 0);  // → false
```

##### 2.3 避免型別轉換的建議

儘量使用 `===` 和 `!==`，避免因型別轉換導致意外行為。

## 邏輯運算符的短路行為（Short-Circuiting）

邏輯運算符（`||`、`&&` 和 `??`）在運算時具有「短路」特性，根據條件的布林值決定是否執行右側運算。

#### 1. ||

若左側值為「真值」（truthy），直接返回左側值；否則返回右側值。

```javascript
console.log(null || "user");  // → "user"，左側為 null，轉換為 false
console.log("Agnes" || "user");  // → "Agnes"，左側為非空字串，轉換為 true
console.log(0 || -1);  // → -1，0 轉換為 false
console.log("" || "!?");  // → "!?"，空字串轉換為 false
```

#### 2. &&

若左側值為「假值」（falsy），直接返回左側值；否則返回右側值。

```javascript
console.log(null && "user");  // → null，左側為 null，轉換為 false
console.log("Agnes" && "user");  // → "user"，左側為 true，返回右側
console.log(0 && -1);  // → 0，0 轉換為 false
console.log("Hello" && "World");  // → "World"，左側為 true，返回右側
```

#### 3. ??（Nullish Coalescing Operator）

- 與 `||` 類似，但僅在左側值為 `null` 或 `undefined` 時返回右側值。
- 適用於處理空值而不誤判 `0` 或 `""` 等有效值。

```javascript
console.log(0 || 100);  // → 100，0 被視為 false
console.log(0 ?? 100);  // → 0，0 不等於 null 或 undefined
console.log(null ?? 100);  // → 100
```

> 延伸閱讀：[Nullish coalescing operator (??) - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing){target="\_blank"}

#### 4. 短路行為應用場景

##### 4.1 提供預設值

```javascript
const username = null; || "Guest"
console.log(username);  // → "Guest"
```

##### 4.2 避免不必要的計算

```javascript
const shouldRun = false;
shouldRun && expensiveFunction();  // expensiveFunction 不會被執行
```

## 總結

本文透過深入淺出的方式，探討了 JavaScript 中的基礎概念。從數字型別的精度限制，到字串的 Unicode 支援，以及布林值的邏輯運算，逐步展示了這些基本元素的特性和應用。同時也說明了自動型別轉換的機制，以及如何避免相關的潛在問題。

#### 關鍵要點

- JavaScript 使用 64 位元雙精度浮點數格式
- 字串支援完整的 Unicode 字元集
- 布林運算具有短路特性
- 自動型別轉換提供便利但需謹慎使用
- `null` 和 `undefined` 代表不同的「空值」概念

#### 實踐建議

- 謹慎處理浮點數計算的精度問題
- 優先使用嚴格比較運算符（`===`）
- 善用邏輯運算符的短路特性
- 注意字串的不可變特性
- 使用 `??` 運算符處理空值情況

以上內容是基於 [1. Values, Types, and Operators - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/01_values.html){target=\_blank} 所整理的精簡筆記。
