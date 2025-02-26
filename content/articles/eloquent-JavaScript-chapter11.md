---
category: 前端開發
title: JS 筆記#11 - 認識同步與非同步 | callback、Promise 和async/await
description: JavaScript 中的同步與非同步操作是兩種不同的執行模式：同步操作會按順序執行並阻塞程式，而非同步操作則允許程式在等待耗時任務完成時繼續執行其他代碼，透過回調函數、Promise 或 async/await 等機制處理結果，由事件循環協調這些操作的執行順序，使單執行緒的 JavaScript 能高效處理多任務。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-02-25
keywords: JavaScript 同步處理, JavaScript 非同步處理, 事件循環, 回調函數, Promise, async/await, 非同步錯誤處理, 單執行緒, 阻塞操作, 非阻塞操作, 競爭條件, Promise.all, setTimeout, 事件佇列, 任務佇列, 調用堆疊, JavaScript 執行環境, 非同步程式設計模式, 回調地獄, 鏈式調用, Eloquent JavaScript
image: /img/articles/eloquent-JavaScript/cover11.webp
draft: false

head:
  - - meta
    - property: og:title
      content: JS 筆記#11 - 認識同步與非同步 | callback、Promise 和async/await
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover11.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter11
  - - meta
    - property: og:description
      content: JavaScript 中的同步與非同步操作是兩種不同的執行模式：同步操作會按順序執行並阻塞程式，而非同步操作則允許程式在等待耗時任務完成時繼續執行其他代碼，透過回調函數、Promise 或 async/await 等機制處理結果，由事件循環協調這些操作的執行順序，使單執行緒的 JavaScript 能高效處理多任務。


sitemap:
  loc: /articles/eloquent-javascript-chapter11
  lastmod: 2025-02-25
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> 孰能濁以靜之徐清，孰能安以久動之徐生。──老子《道德經》

![JS 筆記#11 - 認識同步與非同步 | callback、Promise 和async/await](/img/articles/eloquent-JavaScript/cover11.webp)

本文將深入探討 JavaScript 中的同步與非同步概念，從基本原理到實際應用，透過回調函數、Promise 或 async/await 等機制處理結果，由事件循環協調這些操作的執行順序，使單執行緒的 JavaScript 能高效處理多任務。

:anchor

## 同步 vs. 非同步

![同步 vs. 非同步](/img/articles/eloquent-JavaScript/JavaScript同步與非同步比較.svg)

同步（Synchronous）和非同步（Asynchronous）是 JavaScript 中兩種不同的執行方式：

#### 1. 同步處理

- 程式碼按照順序一行一行執行
- 每個任務必須等待前一個任務完成才能執行
- 會造成阻塞（blocking）的情況

```javascript
console.log('第一步');
console.log('第二步');
console.log('第三步');
// 依序輸出：第一步、第二步、第三步
```

#### 2. 非同步處理

- 不會等待任務完成就繼續執行下一行程式碼
- 適合處理耗時操作（如：API 請求、檔案讀寫）
- 不會造成阻塞

```javascript
console.log('開始');
setTimeout(() => {
    console.log('非同步任務');
}, 1000);
console.log('結束');
// 輸出順序：開始、結束、非同步任務
```

##### 2.1 常見的非同步操作：

- setTimeout/setInterval
- AJAX 請求
- 事件監聽
- Promise
- async/await

## 非同步處理方法

![非同步處理方法](/img/articles/eloquent-JavaScript/JavaScript非同步處理方法.svg)

#### 1. 回調函數（Callback）

回調函數是作為參數傳入另一個函數的函數，通常用於處理非同步操作的結果。當非同步操作完成時，回調函數會被調用。

##### 實例一：setTimeout 函數

```javascript
setTimeout(() => console.log("Tick"), 500);
// console.log("Tick") 為回調函數，在 500ms 後被調用
```

##### 實例二：從設備存儲中讀取文件

假設有一函數 `readTextFile`，用於從設備存儲中讀取文件。該函數接受兩個參數：文件名和一個回調函數。當文件讀取成功時，回調函數會被調用，並傳入文件內容作為參數。

```javascript
readTextFile("shopping_list.txt", content => {
  console.log(`Shopping List:\n${content}`);
});
// → Shopping List:
// → Peanut butter
// → Bananas
```

##### 1.1 回調函數並不是理想的非同步處理方法

設想我們需要執行多個非同步操作，每個操作都依賴前一個操作的結果，如下例子：比較兩個文件並產生一個布林值，表示兩個文件是否相同。

```javascript
function compareFiles(fileA, fileB, callback) {
  readTextFile(fileA, contentA => {
    readTextFile(fileB, contentB => {
      callback(contentA == contentB);
    });
  });
}
```

雖然可行，但隨著操作數量增加，回調函數會變得越來越複雜，形成「回調地獄」（Callback Hell），難以維護和管理，因此回調函數並不是理想的非同步處理方法。

#### 2. Promise

非同步函數除了使用回調函數外，另一種方法是返回一個特殊的 Promise 物件，這個物件代表了「未來會產生的結果」，而這個結果可能成功（resolved）或失敗（rejected）。為了處理這個 Promise 物件，我們可以使用 `.then()` 方法來處理成功的情況； `.catch()` 方法來處理失敗的情況。

##### 2.1 立即解析的 Promise 物件

創建 Promise 最簡單的方法是調用 `Promise.resolve`，此函數能直接包裝一個我們提供的現成值到 Promise 物件中。如下示例，我們將一個數字 `15` 透過 `Promise.resolve` 包裝到 Promise 物件中，這樣就能使用 `.then()` 方法來處理這個 Promise 物件。

```javascript
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
// → Got 15
```

##### 2.2 需要等待的 Promise 物件

當我們想創建一個需要等待的 Promise，可以使用 `Promise` 構造函數，它接受一個函數作為參數。這個函數會立刻被執行，並且 Promise 會給我們一個特殊的 `resolve` 工具，讓我們可以在非同步操作（例如讀取文件、網路請求）完成時，通知 Promise「任務完成了，這是結果」，最後我們就可以拿著這個結果，使用 `.then()` 方法來處理它。

```javascript
function textFile(filename) {
  // 步驟 1：創建並返回一個新的 Promise 物件
  return new Promise(resolve => {
     // 步驟 2：在 Promise 中使用原始的 readTextFile 函數
    readTextFile(filename, text => {
      // 步驟 3：當檔案讀取完成時，用 resolve 告訴 Promise 物件
      resolve(text);
    });
  });
}

// 步驟 4：使用該函數
textFile("plans.txt").then(console.log); // 當檔案讀取完成時，輸出內容
```

`.then()` 方法會返回另一個 Promise，因此我們可以鏈式調用 `.then()` 方法來處理多個非同步操作。如下示例，我們想從一個擁有「文件名列表」的文件中隨機讀取一個文件名，並讀取該文件內容：

```javascript
function randomFile(listFile) {
  // 步驟 1：讀取 listFile，並返回 Promise 物件
  return textFile(listFile)
    // 步驟 2：將內容轉換為陣列，並隨機選擇一個文件名
    .then(content => content.trim().split("\n"))
    // 步驟 3：讀取隨機選擇的文件，並返回 Promise 物件
    .then(ls => ls[Math.floor(Math.random() * ls.length)])
    // 步驟 4：返回 Promise 物件
    .then(filename => textFile(filename));
}
```

::info 
**以上結果只有步驟 1 及步驟 4 才是實際的非同步，但為什麼保持分開的寫法會更好？**  

除了更好讀、更容易維護、更利於錯誤處理（[參照 2.3](#_23-promise-的錯誤處理)）以外，這種方式能包裝成一個可以重複使用的函數，如下所示，我們可以在每次讀取文件時使用 `JSON.parse` 來解析 JSON 文件，而不必每次重寫：
```javascript
function jsonFile(filename) {
  return textFile(filename).then(JSON.parse);
}

jsonFile("package.json").then(console.log);
```
::

##### 2.3 Promise 的錯誤處理

常規 JavaScript 計算可能會通過拋出異常而失敗（參閱[第八章程式錯誤](/articles/eloquent-javascript-chapter8){target=_blank}），非同步計算也會發生類似的問題，像是網路請求失敗、檔案讀取失敗等。在 Promise 中，我們會使用 `.catch()` 方法來處理錯誤。

就像我們在構造函數裡使用 `resolve()` 來通知 Promise 成功完成，我們也可以使用 `reject()` 來通知 Promise 發生了錯誤。如下示例，假設當 `readTextFile` 函數遇到問題時，他會將錯誤傳遞給其回調函數作為第一個參數：

```javascript
function textFile(filename) {
  return new Promise((resolve, reject) => {
    // 步驟 1：使用 readTextFile 函數讀取檔案
    readTextFile(filename, (error, text) => {
      // 步驟 2-1：如果遇到錯誤，使用 reject() 通知 Promise 發生了錯誤
      if (error) reject(error);
      // 步驟 2-2：如果沒有遇到錯誤，使用 resolve() 通知 Promise 成功完成
      else resolve(text);
    });
  });
}
```

我們可以使用 `.catch()` 方法來處理錯誤，也可以在 `.then()` 方法中加入第二個參數來處理錯誤：

```javascript
// 方法 1：使用 .catch()
textFile("plans.txt")
  .then(console.log)
  .catch(console.error); // 當檔案讀取失敗時，輸出錯誤訊息

// 方法 2：使用 .then() 的第二個參數
textFile("plans.txt")
  .then(
    console.log,    // 成功處理函數
    console.error   // 錯誤處理函數
  );
```

#### 3. async/await

即使有了 Promise，這種鏈式調用（`.then()`、`.catch()`）的寫法還是不直觀，容易出現回調地獄。ES6 引入了 `async/await` 來解決這個問題，它讓我們可以像同步程式一樣寫非同步程式。

`async` 關鍵字用來宣告一個函數是非同步的，而 `await` 關鍵字用來等待一個 Promise 物件的完成。如下示例，我們可以使用 `async/await` 來重寫上面的 `randomFile` 函數：

```javascript
async function randomFile(listFile) {
  try {
    // 步驟 1：讀取 listFile
    const content = await textFile(listFile);
    // 步驟 2：將內容轉換為陣列，並隨機選擇一個文件名
    const ls = content.trim().split("\n");
    const filename = ls[Math.floor(Math.random() * ls.length)];
    // 步驟 3：讀取並返回隨機文件的內容
    return await textFile(filename);
  } catch (error) {
    console.error('Error:', error);
    throw error;  // 重新拋出錯誤或進行其他錯誤處理
  }
}
```

`async/await` 是 Promise 的語法糖，兩者在功能上完全等價但語法更直觀。當函數被標記為 `async` 時，它會自動將返回值包裝成 Promise 物件；而 `await` 關鍵字則只能在 `async` 函數內使用，它會暫停函數的執行直到 Promise 解析完成，並自動展開 Promise 的結果值，讓非同步程式的撰寫方式更接近於同步程式的風格。

#### 4. Promise.all

Promise.all 是處理多個非同步操作的超級實用工具。它主要將一堆 Promise 組合成一個大 Promise，讓我們能夠同時處理多個非同步任務。

::info
若有多個非同步任務需要執行，並且我們想要：
1. 同時啟動它們
2. 等待全部完成後再繼續

這時候就可以選擇使用 Promise.all
::

##### 4.1 Promise.all 工作原理

Promise.all 接受一個每項都是 Promise 的陣列作為參數，並返回一個新 Promise 。這個新 Promise 的狀態取決於你傳入的所有 Promise：

- 全部成功：當所有 Promise 都成功完成時，新 Promise 會成功解析，結果是一個陣列，包含每個 Promise 的結果，順序與你傳入的順序一致。
- 任一失敗：只要有任何一個 Promise 失敗，新 Promise 就會立即失敗，並帶有第一個失敗的錯誤訊息。

```javascript
// 假設我們有三個非同步函數，分別獲取不同的數據
function getData1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("數據1"), 1000);
  });
}

function getData2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("數據2"), 500);
  });
}

function getData3() {
  return new Promise(resolve => {
    setTimeout(() => resolve("數據3"), 800);
  });
}

// 使用 Promise.all 同時執行這些函數
Promise.all([getData1(), getData2(), getData3()])
  .then(results => {
    console.log("全部完成了！");
    console.log(results); // ["數據1", "數據2", "數據3"]
    // 可以解構取得各自的結果
    const [data1, data2, data3] = results;
    console.log(data1, data2, data3);
  })
  .catch(error => {
    console.log("有一個失敗了：", error);
  });
```

## 非同步錯誤

非同步程式執行過程中會出現「間隙」，這些間隙可能導致一些不直觀的行為。我們以下面這個範例來解釋問題：

```javascript
async function fileSizes(files) {
  let list = "";
  await Promise.all(files.map(async fileName => {
    list += fileName + ": " + (await textFile(fileName)).length + "\n";
  }));
  return list;
}
```

這段程式碼看起來想要做的事情是：同時讀取檔案，並把每個檔案的名稱和大小加到一個字串中，最後返回這個包含所有檔案資訊的字串 `list`。

**但實際上，它只返回一個檔案的資訊（讀取時間最長的那個）。**

#### 1. 問題根源

問題出在共享變數的非同步修改：
1. 並行啟動：當我們用 `map` 創建這些非同步任務時，它們實際上是「同時被派發出去」的。
2. 狀態快照：每個非同步函數在遇到 `await` 前，會先「拍下」當前 `list` 的快照（通常是空字串 `""`）。
3. 暫停與恢復：當函數在 `await textFile()` 處暫停時，JavaScript 引擎會去處理其他任務。當檔案讀取完成後，函數會「從斷點處繼續」，但使用的是「之前拍下的快照」。
4. 覆蓋效應：`list += ...` 這個操作實際上是 `list = list + ...`，所以每個函數都是用自己記住的舊值加上新內容，然後「整個替換」掉全域變數。
5. 最後勝出：由於每個函數都在覆蓋整個 `list`，所以最終的結果只會包含「最後完成」的那個函數的貢獻。

![非同步競爭條件示意圖](/img/articles/eloquent-JavaScript/非同步競爭條件示意圖.svg)

#### 2. 解決方法

要解決這個問題，我們需要確保每個非同步任務都能獨立地修改自己的部分，而不是共享變數。

```javascript
async function fileSizes(files) {
  let lines = files.map(async fileName => {
    return fileName + ": " +
      (await textFile(fileName)).length;
  });
  return (await Promise.all(lines)).join("\n");
}
```

![非同步競爭條件示意圖](/img/articles/eloquent-JavaScript/正確的非同步處理示意圖.svg)

## 事件循環（Event Loop）

事件循環是 JavaScript 處理非同步操作的核心機制。JavaScript 作為單執行緒語言，一次只能執行一個程式片段，但透過事件循環，它能夠處理多個非同步任務而不會阻塞主執行緒。

當主程式碼執行完畢後，JavaScript 引擎會檢查任務佇列中是否有等待執行的回調函數。如果有，它會取出一個任務並執行──這個過程將不斷重複，形成一個循環，我們稱為「事件循環」。

#### 1. 回調函數的獨立執行環境

非同步操作（如定時器、網路請求等）的回調函數不是由安排它們的程式碼直接呼叫的。這些回調函數在原始函數已經返回後才會被執行，而且執行時會在一個全新的調用堆疊上運行。這也是為什麼在沒有 Promise 的情況下，跨非同步程式碼處理異常會很困難。如下所示，try-catch 無法捕獲定時器回調中的錯誤：

```javascript
try {
  setTimeout(() => {
    throw new Error("Woosh");
  }, 20);
} catch (e) {
  // 這段程式碼不會執行
  console.log("Caught", e);
}
```

#### 2. 事件處理的順序性與阻塞

如果某個事件處理需要很長時間，會延遲其他事件的處理。如下所示，如果在設置定時器後立即執行一個耗時操作，定時器的回調函數會被延遲執行：

```javascript
let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);
// → Wasted time until 50
// → Timeout ran at 55
```

即使是已經解決的 Promise，其 `then` 回調也會在當前程式碼執行完畢後才執行。

```javascript
Promise.resolve("Done").then(console.log);
console.log("Me first!");
// → Me first!
// → Done
```

## 最佳實踐

#### 1. 非同步程式設計原則

- 優先使用 Promise 而非回調
- 使用 async/await 提高可讀性
- 謹慎處理共享狀態
- 適當處理錯誤情況

#### 2. 效能考量

- 考慮使用 Promise.all 平行處理多個異步操作
- 注意事件循環的阻塞
- 適當設置超時處理
- 考慮錯誤重試機制

## 總結

JavaScript 中的同步與非同步操作是兩種不同的執行模式：同步操作會按順序執行並阻塞程式，而非同步操作則允許程式在等待耗時任務完成時繼續執行其他代碼，透過回調函數、Promise 或 async/await 等機制處理結果，由事件循環協調這些操作的執行順序，使單執行緒的 JavaScript 能高效處理多任務。

以上內容是基於 [11. Asynchronous Programming - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/11_async.html){target="_blank"} 所整理的精簡筆記。