---
category: 前端開發
title: JS 筆記#10 - 模組 | Chapter 10 Modules
description: 深入淺出學習 JavaScript 模組化系統！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。從基本的模組概念出發，詳細介紹了 ES 模組系統、NPM 套件管理、打包工具等核心內容。透過循序漸進的方式，幫助讀者掌握如何組織和管理現代 JavaScript 程式碼。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-01-20
keywords: JavaScript 模組, ES modules, NPM, 打包工具, 模組設計, import/export, CommonJS, 模組化程式設計, JavaScript 套件管理, 程式碼組織, 模組依賴, JavaScript 建構工具, 前端工程化, JavaScript 最佳實踐, Eloquent JavaScript
image: /img/articles/eloquent-JavaScript/cover10.webp
draft: false

head:
  - - meta
    - property: og:title
      content:  JS 筆記#10 - 模組 | Chapter 10 Modules
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover10.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter10
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 模組化系統！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。從基本的模組概念出發，詳細介紹了 ES 模組系統、NPM 套件管理、打包工具等核心內容。透過循序漸進的方式，幫助讀者掌握如何組織和管理現代 JavaScript 程式碼。


sitemap:
  loc: /articles/eloquent-javascript-chapter10
  lastmod: 2025-01-20
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> Write code that is easy to delete, not easy to extend.── Tef, programming is terrible

![JS 筆記#10 - 模組 | Chapter 10 Modules](/img/articles/eloquent-JavaScript/cover10.webp)

本文深入探討 JavaScript 的模組化系統，從最基本的模組概念，到 ES 模組的具體實現。通過實際的程式碼範例，說明如何運用 import/export、打包工具等重要特性來提升程式碼的組織性和可維護性。同時也介紹了 NPM 生態系統，以及模組設計的最佳實踐原則。

:anchor

## ES 模組（ES modules）

![ES模組結構圖](/img/articles/eloquent-JavaScript/ES模組結構圖.svg)

ES 模組是 JavaScript 中的一種模組化系統，它提供了一種標準化的方式來組織和重用程式碼。相比早期 JavaScript 缺乏模組概念的情況，ES 模組帶來了更好的程式碼組織性和可維護性。

::info
**JavaScript 模組的演進**

- 早期JavaScript：沒有模組概念，所有腳本共享全局作用域
- ES2015之後：引入了模組系統，支持獨立作用域和 import/export 機制
::

#### 1. 模組特點

- 擁有獨立的作用域
- 支持 `import` 和 `export` 關鍵字
- 可以明確聲明依賴關係和接口
- 模組及其依賴會在執行前被加載

#### 2. Export

ES 模組使用 `export` 關鍵字來導出模組中的變數、函式或類別。主要使用 `export` 關鍵字標記要導出的內容，如下所示：

```javascript [dayname.js]
const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function dayName(number) {
    return names[number];
}
export function dayNumber(name) {
    return names.indexOf(name);
}
```

這是一個星期名稱與數字之間進行轉換的模組內容，其中：

- `names` 數組未導出（私有）
- 導出了兩個公共函數 `dayName` 和 `dayNumber`

#### 3. Import

ES 模組使用 `import` 關鍵字來引入其他模組中的變數、函式或類別。主要使用 `import` 關鍵字，並以大括號 `{}` 標記要引入的內容，如下所示：

```javascript
import {dayName} from "./dayname.js";
let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
// → Today is Monday
```

這是一個使用 `dayname.js` 模組的範例，其中：

- `import {dayName} from "./dayname.js";` 代表從 `dayname.js` 模組中引入 `dayName` 函數。

#### 4. 其他 Export/Import 用法

##### 4.1 重命名導入

在 ES 模組中，可以使用 `as` 關鍵字來重命名導入的變數、函式或類別。如下所示：

```javascript
import {dayName as nomDeJour} from "./dayname.js";
console.log(nomDeJour(3));
// → Wednesday
```

- 從 `dayname.js` 模組中引入 `dayName` 函數，並重命名為 `nomDeJour`。

##### 4.2 默認導入與導出

ES 模組允許使用 `export default` 關鍵字來導出默認值。默認值可以是任何類型的值，包括變數、函式或類別。這樣的綁定可以省略導入名稱周圍的大括號 `{}` 來導入，並且允許使用任何名稱來接收導入的內容。如下所示：

```javascript
// 導出
export default ["Winter", "Spring", "Summer", "Autumn"];
```

```javascript
// 導入
import seasonNames from "./seasonname.js";
```

##### 4.3 導入所有內容

ES 模組允許使用 `*` 來導入模組中的所有內容。如下所示：

```javascript
import * as dayName from "./dayname.js";
console.log(dayName.dayName(3));
// → Wednesday
```

#### 5. 重要規則

- import/export 必須在模組頂層使用
- 不能在函數或代碼塊內部使用
- 模組路徑解析依賴於平台：
  - 瀏覽器：視為網絡地址
  - Node.js：解析為文件路徑

## 套件（Package）

![套件系統結構圖](/img/articles/eloquent-JavaScript/套件系統結構圖.svg)

套件是可以分發的代碼區塊，它們通常包含多個模組，可以通過 npm 等套件管理器進行安裝和管理。套件可以獨立運行，並且能在不同的項目中重複使用。

#### 1. 為什麼要使用套件？

##### 1.1 代碼重用的問題

在開發過程中，我們經常需要重複使用一些功能或代碼，例如日誌記錄、資料庫連接、HTTP 服務器等，如果直接複製或重寫代碼到新項目中，可能會導致以下問題：

- 代碼重複和維護成本增加
- 修復錯誤時可能會忘記在所有使用該代碼的地方進行修正

而使用套件可以解決這些問題：我們可以將這些功能封裝成一個套件，並在不同的項目中重複使用它們。

##### 1.2 套件的優勢

- 使用者可以集中管理代碼，方便更新和維護。
- 在套件中發現問題或添加新功能時，依賴於它的程序可以輕鬆獲取新版本。
- 高品質的套件可以避免重複造輪子，並獲得可靠的實現方式。
- 允許開發者專注於新功能的開發，而不是維護已有的代碼。

#### 2. NPM

全名 Node Package Manager，是 JavaScript 生態系統中的套件管理器，它包含兩個部分：

- 一個在線服務來下載和上傳套件
- 一個本地程序來安裝和管理套件

幾乎所有公開可用的 JavaScript 套件都可以在 NPM 找到。這部分的主要內容會在[第20章](https://eloquentjavascript.net/20_node.html){target=_blank}中詳細介紹如何使用。

#### 3. 版權和授權

開發者擁有自己代碼的版權，其他人需要獲得授權才能使用。在默認情況下大多數套件會在明確的許可下發布，使用時要記得先了解其授權條款。

#### 實例

我們可以從 NPM 安裝 `ini` 套件，並使用它來解析 INI 格式的字串：

```javascript
import { parse } from "ini";

console.log(parse("x = 10 \n y = 20"));
// → {x: "10", y: "20"}
```

- 在這個例子中，我們從 `ini` 套件中導入了 `parse` 函數。
- 使用 `parse` 函數可以輕鬆地將 INI 格式的字串轉換為JavaScript 物件，示例中將 `"x = 10 \n y = 20"` 轉換為 `{x: "10", y: "20"}`。

## 模組系列演進

![模組系列演進圖](/img/articles/eloquent-JavaScript/模組系列演進圖.svg)

#### 1. 早期 JavaScript

在 2009 年之前的 JavaScript 世界裡，開發者們面臨著沒有模組概念的困境。所有腳本共享同一個全局作用域，這不僅容易造成命名衝突，也讓大型專案的維護變得異常困難。為了應對這個問題，開發者們不得不採用[立即呼叫函式表達式（IIFE）](https://developer.mozilla.org/en-US/docs/Glossary/IIFE){target=_blank}這樣的變通方案來模擬私有作用域。

#### 2. CommonJS

隨著 Node.js 的出現，CommonJS 在 2009 年應運而生，為 JavaScript 帶來了革命性的改變。這個由社區推動的模組化方案引入了 `require` 和 `exports` 機制，讓代碼組織變得更加合理。以下是一個典型的 CommonJS 模組示例：

```javascript
// 日期格式化模組
const ordinal = require("ordinal");
const { days, months } = require("date-names");

exports.formatDate = function (date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};
```

- 此模組使用 `ordinal` 和 `date-names` 兩個 NPM 包來格式化日期。
- `formatDate` 函數接受一個 `Date` 對象和一個格式字串，並根據格式字串返回格式化的日期。

CommonJS 的模組加載機制設計得相當巧妙。當使用 `require` 函數時，系統會首先檢查該模組是否已被加載，如果是首次加載，則會讀取模組代碼並將其包裝在一個函數中執行，確保每個模組都擁有獨立的作用域。

#### 3. ES 模組

2015 年，JavaScript 迎來了重要的里程碑。ECMAScript 2015（ES6）將模組系統正式納入語言標準，引入了 `import` 和 `export` 語法。這個原生的模組系統不僅解決了 CommonJS 的一些限制，還提供了更清晰的依賴關係聲明和更靈活的模組加載方式。

#### 4. ES 模組 vs CommonJS

目前這兩種系統並存，為開發者提供了更多選擇，具體差異如下所示：

| 特性     | CommonJS                   | ES 模組            |
| -------- | -------------------------- | ------------------ |
| 加載時機 | 運行時動態加載             | 編譯時靜態分析     |
| 導入語法 | `require()`                | `import `          |
| 導出語法 | `exports`/`module.exports` | `export`           |
| 依賴路徑 | 支持動態路徑               | 只支持字面量字符串 |
| 加載方式 | 同步加載                   | 支持異步加載       |

## 構建與打包

![構建與打包結構圖](/img/articles/eloquent-JavaScript/構建與打包結構圖.svg)

#### 1. 什麼是建構與打包？

1. 構建 (Build)：
   - 主要用於將新型態的JavaScript（如TypeScript或未來版本的JavaScript）轉換為當前平台可執行的JavaScript版本
   - 在代碼實際運行前進行轉換處理
2. 打包 (Bundle)：
   - 將多個模組文件合併為較少的檔案，以提升網路載入效率
   - 通常與壓縮（minification）配合使用，通過刪除註釋、空白，重命名變數等方式減少檔案大小

#### 2. 為什麼我們需要建構與打包？

1. 相容性：使開發者能使用新的語言特性，同時確保代碼能在目標平台上運行
2. 效能：減少 HTTP 請求數量和傳輸大小，提升載入速度

## 模組設計

![模組設計原則圖](/img/articles/eloquent-JavaScript/模組設計原則圖.svg)

#### 1. 什麼是好的模組設計？好的模組設計原則

##### 1.1 易用性

- 接口要簡單易懂
- 盡量遵循現有慣例

##### 1.2 可組合性

- 專注於計算值的模組比執行複雜操作的大型模組更容易組合
- 避免不必要的副作用
- 優先使用函數而非狀態物件

##### 1.3 資料結構選擇

- 優先使用簡單的資料結構（如陣列）
- 參考社群常用的資料結構格式，以利於與其他模組整合

#### 2. 實務建議

- 在探索問題階段時，不要過度關注模組結構，等到程式較為穩定時再進行組織優化。
- 謹慎選擇是否使用NPM包，權衡自行開發與使用現成套件的利弊。

## 總結

本文探討了 JavaScript 中的模組化系統。從最基本的模組概念，到 ES 模組的實現機制和實際應用，逐步展示了如何有效地組織和管理程式碼。同時也簡單說明了模組設計原則、打包工具的應用，以及 NPM 生態系統的重要性。

#### 關鍵要點

- ES 模組提供了清晰的依賴關係管理
- 模組擁有獨立的作用域和明確的接口
- NPM 提供了豐富的套件生態系統
- 打包工具能優化程式碼的載入效能
- 好的模組設計需要考慮易用性和可組合性

#### 實踐建議

- 善用 ES 模組的 import/export 機制
- 遵循現有慣例設計模組接口
- 優先使用簡單的資料結構
- 在適當時機重構模組結構
- 謹慎評估是否使用外部套件

以上內容是基於 [10. Modules - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/10_modules.html){target="_blank"} 所整理的精簡筆記。