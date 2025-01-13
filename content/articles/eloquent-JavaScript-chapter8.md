---
category: 前端開發
title: 【JavaScript 學習筆記 08】程式錯誤 Chapter 8 Bugs and Errors
description: 深入淺出學習 JavaScript 錯誤處理機制！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從錯誤的本質出發，詳細介紹了 JavaScript 中的錯誤預防、檢測和處理機制。從嚴格模式到異常處理，從選擇性捕獲到斷言機制，完整呈現了程式除錯的最佳實踐。內容涵蓋了錯誤類型定義、測試策略、錯誤傳播機制等重要概念，並通過實際程式碼展示了這些概念的應用。透過循序漸進的方式，幫助讀者掌握如何編寫更穩定、可靠的程式。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-01-13
keywords: JavaScript 錯誤處理, JavaScript 除錯, JavaScript 異常處理, JavaScript 嚴格模式, JavaScript 測試, JavaScript try-catch, JavaScript 錯誤傳播, JavaScript 選擇性捕獲, JavaScript 斷言, JavaScript 自動化測試, JavaScript 型別檢查, JavaScript 程式優化, JavaScript 錯誤類型, JavaScript 最佳實踐, JavaScript Error 物件, JavaScript debugging, JavaScript 程式穩定性, JavaScript 維護性, JavaScript 錯誤預防, JavaScript 程式設計, JavaScript 學習筆記, JavaScript 入門教學, JavaScript 範例, Eloquent JavaScript, Error Handling, Debugging Techniques
image: /img/articles/eloquent-JavaScript/cover8.webp
draft: false

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 08】程式錯誤 Chapter 8 Bugs and Errors
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover8.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-JavaScript-chapter8
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 錯誤處理機制！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從錯誤的本質出發，詳細介紹了 JavaScript 中的錯誤預防、檢測和處理機制。從嚴格模式到異常處理，從選擇性捕獲到斷言機制，完整呈現了程式除錯的最佳實踐。內容涵蓋了錯誤類型定義、測試策略、錯誤傳播機制等重要概念，並通過實際程式碼展示了這些概念的應用。透過循序漸進的方式，幫助讀者掌握如何編寫更穩定、可靠的程式。


sitemap:
  loc: /articles/eloquent-JavaScript-chapter8
  lastmod: 2025-01-13
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.── Brian Kernighan and P.J. Plauger, The Elements of Programming Style

![【JavaScript 學習筆記 08】程式錯誤 Chapter 8 Bugs and Errors](/img/articles/eloquent-JavaScript/cover8.webp)

本文深入探討 JavaScript 中的錯誤處理機制，從基礎的錯誤類型定義，到進階的異常處理策略。透過實際的程式碼範例，說明如何運用嚴格模式、斷言、異常處理等重要特性來提升程式的穩定性和可維護性。同時也介紹了 JavaScript 特有的錯誤處理機制，以及自動化測試等現代程式開發的重要實踐。

:anchor

## 程式錯誤的本質

![程式錯誤的本質](/img/articles/eloquent-JavaScript/程式錯誤的本質.svg)

Bugs（程式錯誤）實際上是程式設計師自己造成的，可分為兩類：

1. 思維邏輯混亂導致的錯誤
2. 將想法轉換為程式碼時產生的錯誤

前者通常比後者更難診斷和修復。

## 錯誤預防與檢測

![錯誤預防與檢測](/img/articles/eloquent-JavaScript/錯誤預防與檢測.svg)

#### 1. JavaScript 語言特性

JavaScript 是一種弱型別語言，它允許在不進行顯式型別檢查的情況下進行操作。這種特性在某些情況下可以提高開發效率，但在更多情況下可能會導致程式錯誤。

> 如果一個函數期望接收一個特定型別的參數，但實際上接收了另一個型別的參數，JavaScript 是不會主動拋出錯誤的，它還會自己嘗試轉換類型，萬一它轉換成功，那麼程式就會繼續執行下去，結果可能不是我們預期的，我們還不知道問題出在哪。

當然，它還是有拋出錯誤的時候──如果我們編了一個不符合語法的程式，它就會立刻報錯。包括結果不如預期的錯誤，這種尋找程式 bug 的過程稱為**調試（debugging）**。

##### 1.1 嚴格模式（Strict mode）

為了解決語言太寬鬆導致容易出錯的問題，我們可以通過啟用嚴格模式使 JavaScript 變得稍微嚴格一點，具體做法如下：

- 通過在文件或函數頂部添加字符串 `"use strict"` 來實現。
- [類（class）](/articles/eloquent-javascript-chapter6){target=_blank}與組件（module，會在第10章中討論）內部的函數默認啟用嚴格模式。

##### 實例一

```javascript
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined
```

根據上述例子，正常情況下，當我們忘記在綁定（`counter`）前添加 `let`，JavaScript 會默默幫你創建一個全局綁定，並繼續執行（輸出10個 `"Happy Happy"`）；但是在嚴格模式下就會報錯（`ReferenceError: counter is not defined`）。

##### 實例二

```javascript[not-use-strict.js]
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");  // oops
console.log(name);
// → Ferdinand
```

::info
執行過程：

1. 沒有使用 `new` 調用構造函數
2. `this` 自動指向全局對象(`window`/`global`)
3. `this.name = name` 實際上創建了全局變量
4. 程序繼續執行，但可能產生意外的副作用
::

根據上述例子，我們可以看到它在沒有 `new` 關鍵字的情況下調用了一個構造函數，在非嚴格模式的情況之下，它的 `this` 綁定會**自動指向全局對象**，而不是一個新對象。

```javascript[use-strict.js]
"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");  // forgot new
// → TypeError: Cannot set property 'name' of undefined
```

::info
執行過程：

1. 沒有使用 `new` 調用構造函數
2. `this` 為 `undefined`
3. 試圖在 `undefined` 上設置屬性
4. 立即拋出 TypeError 錯誤
::

現在我們使用嚴格模式，它會立即報錯。

::details-block{title=為什麼這種程式可以執行？}
在非嚴格模式下，JavaScript有幾個「寬容」的特性：

1. **全局對象作為默認的 `this`**：當函數作為普通函數調用時，`this` 自動指向全局對象。
    - 在瀏覽器中是 `window` 對象
    - 在 Node.js 中是 `global` 對象
2. **自動全局變量聲明**：未使用關鍵字聲明的變量，自動成為全局對象的屬性，這就是為什麼 `name` 可以在全局訪問。
3. **隱式類型轉換**：JavaScript 會自動進行類型轉換，即使操作可能不合理，也會嘗試執行。
::

#### 2. 型別系統

JavaScript 在運行時才會檢查型別，並且就算型別有問題，它也經常採用隱式類型轉換把值轉成它期望的類型，因此對於調試沒有多大幫助。但這種問題通常發生在進入或退出函數的值上，如果我們把這些信息記錄下來，也能解決我們的困惑。

```javascript
// (graph: Object, from: string, to: string) => string[]
function findRoute(graph, from, to) {
  // ...
}
```

> 目前已有許多工具可以提供靜態型別檢查，如：[TypeScript](https://www.typescriptlang.org/){target=_blank}。

#### 3. 測試

如果語言沒有提供太多能幫助我們找到錯誤的方法，我們就只能**自己運行程序並查看它是否做了正確的事情**。具體方法有以下兩種：

- 手動測試：手動一遍遍測試並改正，效率低下且不完整，不建議。
- 自動化測試：編寫一個程式來測試另一個程式，可以快速驗證程式的各種情況。

##### 3.1 自動化測試

雖然寫測試會比手動測試的前置工作量還大，但一旦我們完成，就會獲得超能力！它只需要幾秒就可以驗證我們的程式是不是正常運作，並且我們不小心破壞某些程式，它也能協助我們立刻意識到。

測試通常採用小的標記程式形式：例如針對 `toUpperCase` 函數，我們可以寫一個測試來檢查它是否能正確地將小寫轉換成大寫。

```javascript
function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
  return "مرحبا".toUpperCase() == "مرحبا";
});
```

## 錯誤處理機制

![錯誤處理機制](/img/articles/eloquent-JavaScript/錯誤處理機制.svg)

#### 1. 錯誤處理的基本概念

##### 1.1 什麼是錯誤處理？

就像是在寄送包裹時，我們需要考慮各種可能出錯的情況（地址錯誤、包裹損壞等），並針對不同情況做出適當的處理。

##### 1.2 為什麼需要錯誤處理？

- 提高程式穩定性
- 優化使用者體驗
- 便於除錯和維護

#### 2. 錯誤處理的兩大方式

##### 2.1 返回特殊值

```javascript
function promptNumber(question) {
  let result = Number(prompt(question));
  return Number.isNaN(result) ? null : result;  // 如果不是數字，返回 null
}
```

優點 ✅
- 簡單直觀
- 適合處理可預期的錯誤
- 強制調用者處理錯誤情況

缺點 ❌
- 程式碼冗長（需要頻繁檢查）
- 可能與正常返回值混淆
- 錯誤處理邏輯分散

##### 2.2 異常處理（Exception Handling）

```javascript
try {
  let result = performRiskyOperation();
} catch (error) {
  console.log("操作失敗：", error.message);
} finally {
  cleanup();
}
```

###### 優點 ✅

- 錯誤處理集中
- 提供詳細的錯誤信息
- 可以跨多個調用層級

###### 缺點 ❌

- 可能影響程式效能
- 需要小心處理副作用

#### 3. 錯誤傳播

##### 3.1 錯誤傳播是什麼？

錯誤傳播是指當程序遇到問題時（例如：格式錯誤的輸入、網絡故障等），如何將這個錯誤信息從發生處傳遞給需要處理它的地方的過程。

- 層層傳遞：錯誤可以一直往上傳，直到遇到能處理它的代碼
- 需要檢查：每一層都需要決定是處理錯誤還是繼續傳遞
- 靈活處理：可以選擇忽略、重試或報告錯誤

##### 3.2 錯誤傳播的流程

```js
// 1. 底層函數遇到錯誤
function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;  // 發現錯誤，返回特殊值
    return result;
}

// 2. 調用者需要處理這個錯誤
let number = promptNumber("How many trees?");
if (number === null) {
    // 可以：
    // - 重試
    // - 使用默認值
    // - 繼續向上傳遞錯誤
}
```

##### 3.3 錯誤傳播的優點 ✅

- 可以優雅地處理錯誤而不是直接崩潰
- 讓程序更穩健
- 提供了錯誤處理的彈性

##### 3.4 錯誤傳播的問題 ❌

1. 如果函數本身就可能返回任何值，需要特殊包裝：
    ```javascript
    function lastElement(array) {
      if (array.length == 0) {
        return {failed: true};
      } else {
        return {value: array[array.length - 1]};
      }
    }
    ```
2. 代碼變得笨重：
   - 需要重複檢查錯誤值（如檢查 `null`）
   - 錯誤處理代碼可能比主要邏輯還多
   - 層層檢查造成代碼臃腫

這些問題自然引出了更優雅的解決方案：選擇性捕獲及斷言。

#### 3. 選擇性捕獲（Selective catching）

![錯誤處理機制](/img/articles/eloquent-JavaScript/選擇性捕獲.svg)

##### 3.1 選擇性捕獲是什麼？

選擇性捕獲就像是一個「智慧型過濾網」，只處理特定類型的錯誤，讓其他錯誤繼續傳遞。主張不是所有錯誤都需要處理，有些可以直接往上拋。

> JavaScript 沒有提供直接支持選擇性捕獲異常，要麼全捕要麼不捕，這導致我們很容易不知道到底哪裡導致異常。

我們可以定義一個全新錯誤類型並使用 `instanceof` 來判斷錯誤類型。

##### 3.2 基本語法

```javascript
// 1. 定義自訂錯誤類型
class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);  // 選擇性拋出錯誤，錯誤信息具體明確
}

// 2. 選擇性捕獲的標準寫法
try {
    // 可能出錯的代碼
    promptDirection("向左走還是向右走？");
} catch (e) {
    if (e instanceof InputError) {
        // 處理預期內的輸入錯誤
        console.log("請重新輸入");
    } else {
        // 重新拋出其他類型的錯誤
        throw e;
    }
}
```

##### 3.3 選擇性捕獲的優點 ✅

- 區分了預期內和預期外的錯誤
- 避免了過度捕獲（catch all）的問題
- 保持了錯誤追蹤鏈的完整性
- 代碼意圖清晰，易於維護

#### 4. 斷言（Assertion）

![斷言機制](/img/articles/eloquent-JavaScript/斷言機制.svg)

##### 4.1 斷言是什麼？

斷言就像是程式的「安全檢查點」，確保關鍵假設成立。如此可以及早發現程式設計錯誤，使其能在開發階段就暴露問題。主張某些條件是必須滿足的，可以直接終止程式而不是返回特殊值。

##### 4.2 基本語法

如果 `firstElement` 為一個永遠不應該在空陣列上調用的函數，我們可以這樣寫：

```javascript
function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");  // 明確的前置條件檢查，發現問題立即拋出錯誤
  }
  return array[0];
}

let first = firstElement(arr);
console.log(first + 1);  // 直接使用，無需檢查
```

如此函數就不會默默返回 `undefined`，而是在錯誤使用它時立刻報錯，開發者就不會忽略這個錯誤，還可以在發生時立刻找到原因。

##### 4.2 斷言的優點 ✅

###### 相比[返回特殊值](#_12-為什麼需要錯誤處理)：

- 更清晰的代碼邏輯
- 更好的錯誤追蹤
- 防止錯誤靜默傳播
- 提高代碼可維護性
- 更好的類型安全

**斷言主要面對開發者**，應該盡量避免在正式環境中啟用，因為它們會增加程式碼的執行時間，並可能在非預期的情況下中斷程式。

#### 5. 實用技巧

##### 5.1 錯誤處理策略選擇

| 情況             | 建議方案       |
| ---------------- | -------------- |
| 可預期的業務錯誤 | 選擇性捕獲     |
| 程式設計錯誤     | 斷言           |
| 資源清理相關     | 使用 `finally` |

::info
**小結**

💡 錯誤處理就像是為程式安裝安全氣囊 ——

- 選擇性捕獲處理「預期中的意外」
- 斷言防止「不應該發生的情況」
- 兩者搭配使用，讓程式更加健壯
::


## 總結

本文透過深入淺出的方式，探討了 JavaScript 中的錯誤處理機制。從最基本的程式錯誤本質，到具體的預防和處理策略，逐步展示了如何建立健壯的錯誤處理系統。同時也說明了嚴格模式、型別檢查、自動化測試等現代程式開發實踐的重要性。

#### 關鍵要點

- 錯誤處理是程式穩定性的關鍵
- 嚴格模式能有效預防常見程式錯誤
- 型別檢查和自動化測試是提升程式品質的重要工具
- 選擇合適的錯誤處理策略對系統可維護性至關重要
- 良好的錯誤處理設計能大幅提升使用者體驗

#### 實踐建議

- 在專案初期就導入嚴格模式
- 建立完整的自動化測試系統
- 根據實際需求選擇適當的錯誤處理策略
- 重視錯誤處理的文檔和維護

以上內容是基於 [8. Bugs and Errors - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/08_error.html){target=_blank} 所整理的精簡筆記。