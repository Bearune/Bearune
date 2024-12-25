---
category: 前端開發
title: 【JavaScript 學習筆記 01】Chapter 1 Values, Types, and Operators
description: 深入淺出學習 JavaScript 基礎概念！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋數字與字串處理、運算符、布林值、邏輯運算符短路行為、自動型別轉換等核心知識，幫助你快速掌握 JavaScript 的基本操作與注意事項。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2024-12-24
keywords: JavaScript, JavaScript 基礎, JavaScript 教學, JavaScript 運算符, JavaScript 類型轉換, JavaScript 短路行為, JavaScript 比較運算符, JavaScript 邏輯運算符, JavaScript 數字型別, JavaScript 字串處理, JavaScript 自動型別轉換, JavaScript 入門, JavaScript 學習筆記, JavaScript 範例, Eloquent JavaScript, JavaScript, JavaScript basics, JavaScript tutorial, JavaScript operators, JavaScript type conversion, JavaScript short-circuiting, JavaScript comparison operators, JavaScript logical operators, JavaScript number type, JavaScript string handling, JavaScript automatic type conversion, JavaScript for beginners, JavaScript learning notes, JavaScript examples, Eloquent JavaScript
image: /img/articles/eloquent-JavaScript/cover1.webp

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 01】Chapter 1 Values, Types, and Operators
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover1.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-JavaScript-chapter1
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 基礎概念！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋數字與字串處理、運算符、布林值、邏輯運算符短路行為、自動型別轉換等核心知識，幫助你快速掌握 JavaScript 的基本操作與注意事項。

sitemap:
  loc: /articles/eloquent-JavaScript-chapter1
  lastmod: 2024-12-24
  changefreq: monthly
  priority: 0.8
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> The best programs are those that manage to do something interesting while still being easy to understand.

![【JavaScript 學習筆記 01】Chapter 1 Values, Types, and Operators](/img/articles/eloquent-JavaScript/cover1.webp)

## 數字 Numbers

**JavaScript 中的數字型別以 64 位元儲存**，能表示極大的數值範圍，整數計算通常是精確的，但小數計算可能因精度限制而產生誤差。因此理解這些限制對正確處理數字運算至關重要，尤其在處理小數時，需將其視為近似值而非完全精確的數值。

> 延伸閱讀：[JavaScript 的十個小知識 - 4. 0.1 + 0.2 !== 0.3](/articles/javascript-fun-facts#_4-01-02-03){target="_blank"}

#### 精度問題

JavaScript 的數字型別 `Number` 基於 [IEEE 754](https://zh.wikipedia.org/zh-tw/IEEE_754){target="_blank"} 雙精度浮點數格式，其中 53 位元用於表示數值的有效位數。

- 整數：整數的精度保證範圍是 `±2^53`
- 小數：小數計算通常不精確，因為許多數字（例如：`π`）無法用有限的位元精確表示。這種精度損失通常只在特定情況下造成實際問題，因此**需將小數視為「近似值」而非「精確值」**。

#### 特殊數字

JavaScript 中存在三個特殊值，都是數字型別 `Number`，但其行為與普通數字不同。

- `Infinity` 及 `-Infinity`
    - 分別代表正無窮大及負無窮大
    - `Infinity - 1` 仍是 `Infinity`，因此不要相信有 infinity 的運算，它在數學上並不合理。
- `NaN`
    - `NaN` 為「**N**ot **a** **N**umber」的縮寫，但它是數字型別 `Number`。
    - `0/0`、`Infinity - Infinity` 或任何其他不會產生有意義結果的數值運算都會得出 `NaN`。

## 字串 Strings

JavaScript 的字串型別是基於 [Unicode](https://zh.wikipedia.org/zh-tw/Unicode){target="_blank"} 標準。

JavaScript 的字串可以用以下三種引號來標記字串，只要字串開頭和結尾的引號匹配即可。：
```javascript
`我是字串`
'我是字串'
"我是字串"
```

#### 特殊字符處理──引號嵌套
當字串中包含與外層引號相同的引號時，JavaScript 會將內部的引號視為字串的結束符，導致語法錯誤。
- 解決方法：
    1. 使用不同類型的引號嵌套：例如，外層使用單引號 `'`，內部使用雙引號 `"`，或反之。
        ```javascript
        console.log('He said "Hello"') // → He said "Hello"
        console.log("It's a sunny day") // → It's a sunny day
        ```
    2. 使用反斜線（\）作為[跳脫字元](https://zh.wikipedia.org/zh-tw/%E8%BD%AC%E4%B9%89%E5%AD%97%E7%AC%A6){target="_blank"}：讓內部的引號被視為字串的一部分而非結束符。  
        ```javascript
        console.log("He said \"Hello\"") // → He said "Hello"
        console.log('It\'s a sunny day') // → It's a sunny day
        ```

## 運算子 Operators

只使用一個值的運算子稱為 Unary operators，使用兩個值的運算子稱為 Binary operators，後面還會提到 JavaScript 唯一的 Ternary Operator。

#### 單元運算子 Unary Operators

只使用一個值。
- 常見的單元運算子
    - `typeof`：用於檢查值的類型。   
        ```javascript
        console.log(typeof 4.5); // → "number"
        ```
    - `!`：反轉布林值
        ```javascript
        console.log(!true); // → false
        ```
#### 二元運算子 Binary Operators

使用兩個值。

- 常見二元運算子  
    - 算術運算子：`+`、`-`、`*`、`/`、`%`
    - 比較運算子：`==`、`===`、`!=`、`!==`、`>`、`<`、`>=`、`<=`
<!--     - 邏輯運算子：`&&`、`||`
    - 位元運算子：`&`、`|`、`^`、`<<`、`>>`
    - 賦值運算子：`=`、`+=`、`-=`、`*=`、`/=` 等 -->

#### `-` 的雙重角色

`-` 是一個特殊的運算子，它既可以是 Unary Operator，也可以是 Binary Operator：
```javascript
console.log(- (10 - 2));
// → -8
```

## 布林值 Boolean values

JavaScript 的布林類型只有兩個值，`true` 和 `false`。

#### 比較運算符（Comparison Operators）

比較運算符會產生布林值，用於判斷條件是否成立。

##### 常見運算符
`>`、`<`、`>=`、`<=`、`==`、`!=`

```javascript
console.log(3 > 2); // → true
console.log(3 < 2); // → false
console.log("Garnet" != "Ruby"); // → true
console.log("Pearl" == "Amethyst"); // → false
```

- `NaN` 是唯一不等於自身的值。
```javascript
console.log(NaN == NaN)
// → false
```

#### 邏輯運算符（Logical Operators）

邏輯運算符會產生布林值，用於判斷條件是否 `&&`（and）、`||`（or）和 `!`（not）。

|  &&   | true  | false |
| :---: | :---: | :---: |
| true  | true  | false |
| false | false | false |

| \|\|  | true  | false |
| :---: | :---: | :---: |
| true  | true  | true  |
| false | true  | false |

| !   | true  | false |
| --- | :---: | :---: |
|     | false | true  |

```javascript
console.log(true && false); // → false
console.log(true && true); // → true

console.log(false || true); // → true
console.log(false || false); // → false

console.log(!true); // → false
console.log(!false); // → true
```

#### 運算符優先級

從左到右由低到高：`||`、`&&`、比較運算符，然後才是其它運算符──選擇此順序是為了在如下所示的典型表達式中，需要盡可能少的括號：

```javascript
1 + 1 == 2 && 10 * 10 > 50
```

#### 條件運算符（Ternary Operator）

JavaScript 唯一的 Ternary Operator，常用於簡化條件判斷。

- `a ? b : c`：若 `a` 為 `true`，則結果為 `b`；否則結果為 `c`。

    ```javascript
    console.log(true ? 1 : 2); // → 1
    console.log(false ? 1 : 2); // → 2
    ```

## 空值 Empty values

`null` 及 `undefined`，用來表示不存在有意義的值。

> 延伸閱讀：[JavaScript 的十個小知識 - 9. null 與 undefined 是不同的](/articles/javascript-fun-facts#_9-null-與-undefined-是不同的){target="_blank"}

## 自動型別轉換 Automatic type conversion

當運算符應用於不符合預期類型的值時，JavaScript 會嘗試將值轉換為所需類型，可能會導致意料之外的結果。

```javascript
console.log(8 * null); // → 0 （null 被轉換為 0）
console.log("5" - 1); // → 4 （"5" 被轉換為數字 5）
console.log("5" + 1); // → "51" （數字 1 被轉換為字串 "1" 並進行字串拼接）
console.log("five" * 2); // → NaN （"five" 無法轉換為數字）
console.log(false == 0); // → true （false 被轉換為 0）
```

1. `+` 的特性：字串與數字混合時，`+` 優先執行字串拼接，其餘運算符（如 `-`、`*`）會將字串轉換為數字。
2. 無法轉換為數字的值（如 `"five"` 或 `undefined`）會變為 `NaN`，`NaN` 是一個特殊值，與任何值比較都為 `false`。

#### 比較運算中的類型轉換

- `==` 和 `===` 的區別
    - `==` 允許類型轉換，並根據一套複雜的規則比較值
    - `===` 不進行類型轉換，**僅在類型與值都相等**時返回 `true`
    - 儘量使用 `===` 和 `!==`，避免因類型轉換導致的意外行為。

- 特殊情況
    - `null` 和 `undefined` 只在相互比較時返回 `true`，在其他情況下不等於任何值（包括自身）。
        ```javascript
        console.log(null == undefined); // → true
        console.log(null == 0); // → false
        ```
    - 使用 `===` 可以避免不必要的類型轉換
        ```javascript
        console.log("" == false); // → true （類型轉換發生）
        console.log("" === false); // → false （類型不同）
        ```
    - `NaN` 是唯一一個不等於自身的值。
        ```javascript
        console.log(NaN == NaN); // → false
        console.log(NaN === NaN); // → false
        ```

#### 邏輯運算符的短路行為（Short-Circuiting）

- `||`  
    返回左側值（若其可轉換為 `true`），否則返回右側值。
    ```javascript
    console.log(null || "user");
    // → "user" （左側為 null，轉換為 false）
    console.log("Agnes" || "user");
    // → "Agnes" （左側為非空字串，轉換為 true）
    console.log(0 || -1);
    // → -1 （0 轉換為 false）
    console.log("" || "!?");
    // → "!?" （空字串轉換為 false）
    ```
- `&&`  
    返回左側值（若其可轉換為 `false`），否則返回右側值。
    ```javascript
    console.log(null && "user");
    // → null （左側為 null，轉換為 false）
    console.log("Agnes" && "user");
    // → "user" （左側為非空字串，轉換為 true）
    console.log(0 && -1);
    // → 0 （0 轉換為 false）
    console.log("Hello" && "World");
    // → "World" （左側為 true，返回右側）
    ```
- `??`   
    與 `||` 類似，但僅在左側值為 `null` 或 `undefined` 時返回右側值。
    - 適用於處理空值而不誤判 `0` 或 `""` 等有效值。
    ```javascript
    console.log(0 || 100); // → 100 （0 被視為 false）
    console.log(0 ?? 100); // → 0 （0 不等於 null 或 undefined）
    console.log(null ?? 100); // → 100
    ```
    > 可參考：[Nullish coalescing operator (??) - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing){target="_blank"}

##### 短路行為應用場景

- 提供預設值
    ```javascript
    const username = null; || "Guest"
    console.log(username); // → "Guest"
    ```
- 避免不必要的計算
    ```javascript
    const shouldRun = false;
    shouldRun && expensiveFunction(); // expensiveFunction 不會被執行
    ```

## 總結

1. 類型轉換  
    JavaScript 支援自動類型轉換，但可能導致意料之外的結果，因此建議使用 `===` 和 `!==`，避免不必要的類型轉換。
2. 邏輯運算符  
    - `||` 和 `&&` 不僅適用於布林值，還可用於其他類型，並具有短路行為。
    - 使用 `??` 可更精確地處理 `null` 和 `undefined`，不誤判 `0` 或 `""`。
3. 運算符優先級  
    瞭解運算符的優先級有助於正確書寫表達式。

以上內容是基於 [1. Values, Types, and Operators - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/01_values.html){target="_blank"} 所整理的精簡筆記。