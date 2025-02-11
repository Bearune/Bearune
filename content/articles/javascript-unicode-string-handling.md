---
category: 前端開發
title: JavaScript Unicode 字串處理指南
description: 在當今的網頁開發中，處理多語言文本和特殊字符已成為一項重要技能。JavaScript 作為主流的前端語言，內建的字串處理功能使得開發者能夠輕鬆地操作 Unicode 字串。然而 UTF-16 編碼的特性可能會導致一些常見的問題。本文將探討 JavaScript 中的 Unicode 字串處理，包括字符長度、字符遍歷及字串操作技巧，幫助開發者更有效地管理和使用字串。
tags: ['javascript']
date: 2025-02-10
keywords: JavaScript, Unicode, 字串處理, UTF-16, 代理對, 字符遍歷, 字符長度, 字符比較, 字符創建, 國際化, JavaScript, Unicode, String Processing, UTF-16, Surrogate Pairs, Character Traversal, String Length, Character Comparison, String Creation, Internationalization
image: /img/articles/javascript-unicode-string-handling/JavaScript-Unicode-字串處理流程圖.svg
draft: false

head:
  - - meta
    - property: og:title
      content: JavaScript Unicode 字串處理指南
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/javascript-unicode-string-handling/JavaScript-Unicode-字串處理流程圖.svg
  - - meta
    - property: og:url
      content: https://bearune.com/articles/javascript-unicode-string-handling
  - - meta
    - property: og:description
      content: 在當今的網頁開發中，處理多語言文本和特殊字符已成為一項重要技能。JavaScript 作為主流的前端語言，內建的字串處理功能使得開發者能夠輕鬆地操作 Unicode 字串。然而 UTF-16 編碼的特性可能會導致一些常見的問題。本文將探討 JavaScript 中的 Unicode 字串處理，包括字符長度、字符遍歷及字串操作技巧，幫助開發者更有效地管理和使用字串。

sitemap:
  loc: /articles/javascript-unicode-string-handling
  lastmod: 2025-02-10
  changefreq: monthly
  priority: 0.5
---

在當今的網頁開發中，處理多語言文本和特殊字符已成為一項重要技能。JavaScript 作為主流的前端語言，內建的字串處理功能使得開發者能夠輕鬆地操作 Unicode 字串。然而 UTF-16 編碼的特性可能會導致一些常見的問題。本文將探討 JavaScript 中的 Unicode 字串處理，包括字符長度、字符遍歷及字串操作技巧，幫助開發者更有效地管理和使用字串。

![JavaScript 中的 Unicode 字串處理指南](/img/articles/javascript-unicode-string-handling/JavaScript-Unicode-字串處理流程圖.svg)

:anchor

## Unicode 與 JavaScript 字串基礎

在[【JavaScript 學習筆記 01】基本概念 Chapter 1 Values, Types, and Operators 的字串](/articles/eloquent-javascript-chapter1#字串strings){target="_blank"}中有提到：

> JavaScript 的字串型別是基於 Unicode 標準

Unicode 最初設計為 16 位編碼（2^16），當時認為這足夠表示世界上所有的文字符號，但隨著需求增加（大量漢字、歷史文字、表情符號等），65,536 個字符明顯不夠用，於是有了後來的 UTF-16 編碼方案，可以表示超過 100 萬個字符。

::info
JavaScript 內部使用 UTF-16 作為字串編碼，採用「代理對」(Surrogate Pairs) 機制
- 基本字符：使用一個 16 位代碼單元，稱為[基本多文種平面（Basic Multilingual Plane, BMP）](https://zh.wikipedia.org/zh-tw/Unicode%E5%AD%97%E7%AC%A6%E5%B9%B3%E9%9D%A2%E6%98%A0%E5%B0%84#%E5%9F%BA%E6%9C%AC%E5%A4%9A%E6%96%87%E7%A7%8D%E5%B9%B3%E9%9D%A2){target=_blank}
- 擴展字符：使用兩個 16 位代碼單元表示
::

## 常見的字串處理問題

然而因為 UTF-16 的編碼範圍限制，當我們在 JavaScript 中處理字串時需要特別注意以下幾點：

#### 1. 字符長度問題

由於 UTF-16 的特性，超出基本多文種平面的字符需要使用兩個 16 位代碼單元來表示，造成長度計算異常。

```javascript
// 基本多文種平面內的字符
let simple = "x";
console.log(simple.length); // → 1

// 超出BMP的字符（如emoji）
let emoji = "🎮";
console.log(emoji.length); // → 2
```

##### 2. 字串操作方法

JavaScript 提供了多種處理字符代碼的方法：

```javascript
// 獲取代碼單元
let horse = "🐎";
console.log(horse.charCodeAt(0)); // → 55357（第一個代碼單元）
console.log(horse.charCodeAt(1)); // → 56334（第二個代碼單元）

// 
console.log(horse.codePointAt(0)); // → 128014（實際的 Unicode 碼點）
```

##### 3. 正確的字符遍歷方式

為了正確處理包含代理對的字串，應該使用：

1. `for...of` 循環
    ```javascript
    let text = "🌟A中";
    for (let char of text) {
        console.log(char);
    }
    // → 🌟
    // → A
    // → 中
    ```
2. 展開運算符
    ```javascript
    let text = "🌟A中";
    let chars = [...text];
    console.log(chars.length); // → 3
    ```
3. **不推薦**：傳統 `for` 循環
    ```javascript
    let text = "🌟A中";
    // 傳統 for 循環可能會把一個字符拆成兩半
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]); // 可能輸出亂碼
    }
    // → �
    // → �
    // → A
    // → 中
    ```

## 字串操作技巧

##### 1. 字串比較和搜索

在進行字串操作時，需要注意：

1. 字串比較
    ```javascript
    console.log("Z" > "A"); // → true
    console.log("🌟" > "A"); // → true，但比較的是代碼點值
    ```
2. 字串搜索
    ```javascript
    let message = "Hello 🌟 World";
    console.log(message.indexOf("🌟")); // → 6
    ```
##### 2. 創建字串的方法

可以使用 Unicode 代碼點來創建字符：

1. 使用 `\u` 表示法（僅適用於基本多文種平面）
    ```javascript 
    console.log("\u0041"); // → "A"
    ```
2. 使用 `\u{}` 表示法（可表示任何 Unicode 字符）
    ```javascript 
    console.log("\u{1F31F}"); // → "🌟"
    ```
3. 使用 `String.fromCodePoint`
    ```javascript 
    console.log(String.fromCodePoint(0x1F31F)); // → "🌟"
    ```

## 最佳實踐建議

1. 處理用戶輸入或國際化文本時，要特別注意字符編碼問題
2. 優先使用現代字串方法（如 `codePointAt()`）而不是舊方法（如 `charCodeAt()`）
3. **計算字串實際長度時，建議使用 `[...str].length`**
4. 需要精確處理 Unicode 字符時，考慮使用專門的字串處理庫

> 延伸閱讀：[文字 (Unicode) - 維基百科](https://zh.wikipedia.org/wiki/%E6%96%87%E5%AD%97_(Unicode)){target="_blank"}

## 總結

在處理 JavaScript 中的 Unicode 字串時，了解其編碼方式和特性至關重要。開發者應該使用現代的字串處理方法，以避免常見的陷阱，如字符長度計算錯誤和不正確的字符遍歷。透過適當的技巧和最佳實踐，我們可以更好地管理多語言文本和特殊字符，提升應用程式的使用體驗。