---
category: 前端開發
title: 【JavaScript 學習筆記 05】高階函數 Chapter 5 Higher-Order Functions
description: 深入淺出學習 JavaScript 高階函數！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從程式複雜性問題出發，探討抽象化的重要性，並深入介紹高階函數的概念與應用。內容包含常用的高階函數操作（filter、map、reduce）、函數組合的優缺點分析，以及透過 Unicode 腳本分析的實際案例，幫助你掌握 JavaScript 中高階函數的運用技巧。從基礎觀念到實務應用，循序漸進地學習如何運用高階函數來優化程式碼，提升程式設計的抽象能力。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-01-06
keywords: JavaScript 高階函數, JavaScript 函數式程式設計, JavaScript filter, JavaScript map, JavaScript reduce, JavaScript 抽象化, JavaScript 函數組合, JavaScript 回呼函數, JavaScript 匿名函數, JavaScript 箭頭函數, JavaScript 函數參數, JavaScript Unicode, JavaScript 字符處理, JavaScript 字串操作, JavaScript 陣列操作, JavaScript 程式複雜度, JavaScript 程式優化, JavaScript 函數式編程, JavaScript 函數傳遞, JavaScript 純函數, JavaScript 副作用, JavaScript 學習筆記, JavaScript 入門教學, JavaScript 範例, JavaScript 最佳實踐, JavaScript 程式設計, Eloquent JavaScript, JavaScript examples, Higher-order functions, Functional programming, JavaScript callbacks
image: /img/articles/eloquent-JavaScript/cover5.webp
draft: false

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 05】高階函數 Chapter 5 Higher-Order Functions
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover5.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-JavaScript-chapter5
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 高階函數！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從程式複雜性問題出發，探討抽象化的重要性，並深入介紹高階函數的概念與應用。內容包含常用的高階函數操作（filter、map、reduce）、函數組合的優缺點分析，以及透過 Unicode 腳本分析的實際案例，幫助你掌握 JavaScript 中高階函數的運用技巧。從基礎觀念到實務應用，循序漸進地學習如何運用高階函數來優化程式碼，提升程式設計的抽象能力。

sitemap:
  loc: /articles/eloquent-JavaScript-chapter5
  lastmod: 2025-01-06
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.──C.A.R. Hoare, 1980 ACM Turing Award Lecture

![【JavaScript 學習筆記 05】高階函數 Chapter 5 Higher-Order Functions](/img/articles/eloquent-JavaScript/cover5.webp)

本文探討了高階函數在軟體設計中的重要性，介紹了一些常用的高階函數操作，如：`filter`、`map`、`reduce` 等，並以處理 Unicode 字符資料集的實際範例說明了它們的應用。

:anchor

## 基礎概念

#### 1. 程式的複雜性

##### 1.1 規模與錯誤

大型程式不僅開發時間長，更重要的是會越來越複雜。當程式變得複雜，工程師就更容易感到困難。因而就會不小心增加更多錯誤（bug）在程式裡，至於要如何解決這些問題，我們可以先來探討程式表達方式：

##### 1.2 程式表達方式

1. 直接實現
    - 完全自給自足
    - 所有步驟清晰可見
    - 較低層次實現
    - 包含許多實作細節
    ```javascript
    let total = 0, count = 1;
    while (count <= 10) {
      total += count;
      count += 1;
    }
    console.log(total);
    ```
2. 使用抽象函數
    - 使用外部函數
    - 程式碼更簡潔
    - 使用更貼近問題本質的詞彙
    - 隱藏了實作細節
    ```javascript
    console.log(sum(range(1, 10)));
    ```

- 兩種方式比較

| 面向     | 直接實現             | 使用抽象函數     |
| -------- | -------------------- | ---------------- |
| 程式長度 | 6 行                 | 1 行             |
| 可讀性   | 需要理解實作細節     | 直觀表達目的     |
| 維護性   | 修改需要理解所有細節 | 只需關注高層邏輯 |
| 重用性   | 較難重用             | 容易重用         |
| 抽象層次 | 低（循環和計數）     | 高（範圍和求和） |

#### 2. 抽象的概念

##### 2.1 什麼是抽象？

抽象是一種「簡化複雜事物」的方法，透過將問題提升到更高的層次來討論，可以**隱藏不必要的細節，專注於重要的部分**。

##### 2.2 抽象實例

以豌豆湯食譜作為比喻就是：

- 詳細版本：逐步詳細說明每個動作（低層次方式）
  ```txt
  將每人一杯乾豌豆放入容器中，加入水，直到豌豆完全浸泡，將豌豆浸泡在水中至少 12 小時。將豌豆從水中取出，放入烹飪鍋中，每人加入 4 杯水，蓋上鍋蓋，將豌豆燉煮 2 小時。每人取半個洋蔥，用刀切成塊。加入豌豆中，每人取一根芹菜，用刀切成塊，加入豌豆中。每人取一根胡蘿蔔，用刀切成塊，加入豌豆中。繼續烹飪 10 分鐘。
  ```
- 抽象版本：使用更高層次的指令（高層次方式）
  ```txt
  每人：一杯干豌豆、4 杯水、半个切碎的洋葱、一根芹菜和一根胡萝卜。
  將豌豆浸泡 12 小時。炖煮 2 小時。切碎並加入蔬菜。繼續烹飪 10 分鐘。
  ```

第二個顯然更短也更容易看懂，但需要理解更多烹飪相關詞語（如：浸泡、燉煮等等）。在寫程式的過程中我們也不能期待所有需要的詞語都能出現在字典裡，所以我們常常會陷入第一個食譜的模式──逐一敲出程式執行的步驟，而忽略了很多程式其實可以直接用抽象去表達。

這種抽象的概念在程式設計中非常重要，它能幫助我們建立更清晰、更容易維護的程式碼，同時也減少了出錯的機會。就像食譜一樣，**好的抽象可以讓複雜的任務變得更容易理解和執行**。

::info
**小結**  
抽象化能簡化複雜性、提高可維護性、提升開發效率。
::

## 高階函數

#### 1. 定義

高階函數是符合以下任一條件的函數：

1. 接受一個或多個函數作為參數
2. 返回一個函數作為結果

##### 1.1 函數作為參數

```javascript
function doTwice(func, value) {
    return func(func(value));
}
```

##### 1.2 返回參數

```javascript
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}
```

#### 2. 常見形式

高階函數能夠對操作，而不僅僅是值進行抽像，有如下幾種抽象形式：

##### 2.1 創建新函數

```javascript
// 判斷是否比 n 大
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

##### 2.2 改變其他函數

```javascript
// 在函式執行前後增加 log
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```

##### 2.3 提供新型控制流

```javascript
// 1. unless 函數：與 if 相反的控制結構
function unless(test, then) {
    if (!test) then();
}

// 2. repeat 函數：自定義的循環結構
function repeat(times, action) {
    for (let i = 0; i < times; i++) {
        action(i);
    }
}

// 使用示例
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});
```

#### 3. 主要的高階函數

##### 3.1 filter（過濾）

`filter()` 方法會建立一個新的陣列，其中包含通過測試函式的所有元素。簡單來說，它就像一個篩子，只保留我們想要的元素。

- 手動實現
  ```javascript
  const numbers = [1, 2, 3, 4, 5, 6];

  function filter(array, predicate) {
      let result = [];
      for (let item of array) {
          if (predicate(item)) {
              result.push(item);
          }
      }
      return result;
  }

  console.log(filter(numbers, num => num % 2 === 0));
  // → [2, 4, 6]
  ```
- 內建方法
  ```javascript
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(numbers.filter(num => num % 2 === 0));
  // → [2, 4, 6]
  ```

> 延伸閱讀：[Array.prototype.filter() - JavaScript - MDN Web Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter){target="_blank"}

##### map（映射）

`map()` 方法會建立一個新的陣列，其中包含原陣列中的每個元素經過指定函式處理後的結果。簡單來說，它將每個元素都轉換成新的形式。

- 手動實現
  ```javascript
  const numbers = [1, 2, 3, 4];
  
  function map(array, transform) {
      let result = [];
      for (let item of array) {
          result.push(transform(item));
      }
      return result;
  }
  
  console.log(map(numbers, num => num * 2));
  // → [2, 4, 6, 8]
  ```
- 內建方法
  ```javascript
  const numbers = [1, 2, 3, 4];
  console.log(numbers.map(num => num * 2));
  // → [2, 4, 6, 8]
  ```

> 延伸閱讀：[Array.prototype.map() - JavaScript - MDN Web Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map){target="_blank"}

##### reduce（歸納）

`reduce()` 方法會將陣列中的所有元素歸納為單一值。它從左到右處理每個元素，並將處理結果傳遞給下一次的計算。

- 手動實現
  ```javascript
  const numbers = [1, 2, 3, 4];

  function reduce(array, combine, start) {
      let current = start;
      for (let item of array) {
          current = combine(current, item);
      }
      return current;
  }

  console.log(reduce(numbers, (a, b) => a + b, 0));
  // → 10
  ```
- 內建方法
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  // → 10
  ```

> 延伸閱讀：[Array.prototype.reduce() - JavaScript - MDN Web Docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce){target="_blank"}

函數組合

函數組合是一種將多個簡單函數組合成一個更複雜函數的技術。就像樂高積木一樣，我們可以將小的、可重用的函數片段組合成更大的功能單元。這種方法不僅提高了代碼的可維護性，也使得程式邏輯更容易理解和測試。

#### 1. 組合的優勢

##### 1.1 代碼可讀性

每個函數都有明確的名稱和功能，邏輯分層清晰，代碼意圖容易理解，因此使用函數組合可以將複雜操作表達得更接近問題本身的描述。

```javascript
// 使用函數組合的方式更易讀
const processData = compose(
    sum,
    arr => arr.map(double),
    arr => arr.filter(isPositive)
);
```

##### 1.2 維護性

函數組合可以將複雜操作分解成小的、獨立的部分，每個函數能單獨測試，並且其容易修改和擴展。

##### 1.3 靈活性

函數組合還可以根據需求靈活組合不同的函數，易於適應需求變化，並提高代碼復用率，可以像搭積木一樣組合出新的功能。

#### 2. 組合的劣勢──性能考慮

##### 2.1 內存使用

**函數組合可能會創建額外的中間數組**，因此處理大資料集時需要注意內存開銷，我們可以通過優化減少創建中間狀態。

##### 2.2 運行效率

每次函數調用都有開銷，因此多次遍歷可能影響性能。在某些場景下，直接的命令式編程可能會更快。

##### 2.3 使用場景權衡

什麼時候使用函數組合，我們需要考慮以下因素：

- 數據規模大小
- 執行頻率
- 代碼維護需求
- 團隊開發經驗

這邊建議：

- 對於小型資料集，優先考慮代碼可讀性
- 對於大型資料集或性能關鍵場景，可以選擇更直接的實現方式
- 需要在可讀性和性能之間找到平衡點

```javascript
// 小資料集：優先可讀性
const processSmallData = compose(sum, map(double), filter(isPositive));

// 大資料集：優先性能
function processLargeData(data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 0) {
            result += data[i] * 2;
        }
    }
    return result;
}
```

## 實際應用──Unicode腳本分析

本章節將介紹如何運用前面學到的高階函數來分析 [Unicode 腳本資料集](https://zh.wikipedia.org/zh-tw/%E6%96%87%E5%AD%97_(Unicode)){target="_blank"}。

#### 1. 數據結構

Unicode 腳本資料集（[SCRIPTS](https://eloquentjavascript.net/code/scripts.js){target="_blank"}）是一個包含了世界上各種書寫系統資訊的集合。每個腳本對象包含以下重要屬性：

```javascript
const SCRIPTS = [
  // ... 其他腳本
  {
    name: "Han",
    ranges: [[11904, 11930], [11931, 12020], [12032, 12246], [12293, 12294], [12295, 12296], [12321, 12330], [12344, 12348], [13312, 19894], [19968, 40939], [63744, 64110], [64112, 64218], [131072, 173783], [173824, 177973], [177984, 178206], [178208, 183970], [183984, 191457], [194560, 195102]],
    direction: "ltr",
    year: -1100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Chinese_characters"
  },
  // ... 其他腳本
];
```
- name：腳本的名稱（如：漢字、拉丁文等）
- ranges：該腳本在 Unicode 中的編碼範圍
- direction：書寫方向（ltr：左到右，rtl：右到左，ttb：上到下）
- year：該腳本最早的使用年份（負數表示西元前）
- living：表示該腳本是否仍在現代使用
- link：相關維基百科連結

#### 2. 實用操作

##### 2.1 查找活躍腳本

我們可以使用 `filter` 和 `map` 找出現今仍在使用的腳本名稱：

```javascript
console.log(SCRIPTS.filter(script => script.living).map(script => script.name));
// → ["Adlam", "Arabic", "Armenian",  ...]
```

1. 首先用 `filter` 篩選出 `living` 為 `true` 的腳本
2. 然後用 `map` 提取這些腳本的名稱

##### 2.2 查找字幅最多的腳本

要查找字幅最多的腳本，我們需要計算每個腳本共包含多少字符，可以使用 `reduce` 加總其 Unicode 範圍：

```javascript
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((biggest, current) => characterCount(biggest) < characterCount(current) ? current : biggest));
// → {name: "Han", …}
```

1. 首先建立 `characterCount` 函式，以 `reduce` 計算每個腳本的字符總數
2. 再來比較由 `characterCount` 回傳的每個腳本的字符總數
3. 得出最大的字符腳本：漢字

##### 2.3 比較活躍及死亡腳本的平均起源年份

要分別找到活躍及死亡腳本，並計算出平均起源年份，可以使用 `filter`、`map` 及 `reduce` 進行組合操作：

```javascript
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204
```

1. 首先建立 `average` 函式，以 `reduce` 計算陣列加總的平均
2. 再來分別使用 `filter` 過濾活躍及死亡的起始年份，並使用 `map` 回傳起始年份，代入 `average` 中
3. 得出平均起始年代，活躍腳本為 1165 年；死亡腳本為 204 年。顯而易見，我們發現死亡腳本平均比存活的腳本更老。

#### 3. 字符串與字符代碼

與高級函數無關，本小節補充關於**JavaScript 的字串問題**。

在[第一章的字串](/articles/eloquent-javascript-chapter1#字串strings){target="_blank"}中有提到：

> JavaScript 的字串型別是基於 Unicode 標準

Unicode 最初設計為 16 位編碼（2^16），當時認為這足夠表示世界上所有的文字符號，後來才發現 65,536 個字符明顯不夠用（大量漢字、歷史文字、表情符號等等），於是有了後來的 UTF-16，可以表示超過 100 萬個字符。目前 JavaScript 仍然使用 UTF-16 作為內部字符串編碼。

::info
**UTF-16**
使用「代理對」(Surrogate Pairs) 機制
- 基本字符：使用一個 16 位代碼單元，稱為[基本多文種平面（Basic Multilingual Plane, BMP）](https://zh.wikipedia.org/zh-tw/Unicode%E5%AD%97%E7%AC%A6%E5%B9%B3%E9%9D%A2%E6%98%A0%E5%B0%84#%E5%9F%BA%E6%9C%AC%E5%A4%9A%E6%96%87%E7%A7%8D%E5%B9%B3%E9%9D%A2){target="_blank"}
- 擴展字符：使用兩個 16 位代碼單元
::

然而，因為 UTF-16 的編碼範圍限制，當我們在 JavaScript 中處理字符串時需要特別注意以下幾點：

##### 3.1 字符長度問題

超出基本多文種平面的字符需要使用兩個 16 位代碼單元來表示，就會造成長度輸出上有異常。

```javascript
// 基本多文種平面內的字符
let simple = "x";
console.log(simple.length); // → 1

// 超出BMP的字符（如emoji）
let emoji = "🎮";
console.log(emoji.length); // → 2
```

##### 3.2 字符串操作方法

JavaScript 提供了多種處理字符代碼的方法：

```javascript
// 獲取代碼單元
let horse = "🐎";
console.log(horse.charCodeAt(0)); // → 55357（第一個代碼單元）
console.log(horse.charCodeAt(1)); // → 56334（第二個代碼單元）

// 獲取完整的代碼點
console.log(horse.codePointAt(0)); // → 128014（實際的 Unicode 碼點）
```

##### 3.3 正確的字符遍歷

為了正確處理包含代理對的字符串，應該使用：

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
    // 可能會把一個字符拆成兩半
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]); // 可能輸出亂碼
    }
    // → �
    // → �
    // → A
    // → 中
    ```
##### 3.4 字符串比較和搜索

在進行字符串操作時，需要注意：

1. 字符串比較
    ```javascript
    console.log("Z" > "A"); // → true
    console.log("🌟" > "A"); // → true，但比較的是代碼點值
    ```
2. 字符串搜索
    ```javascript
    let message = "Hello 🌟 World";
    console.log(message.indexOf("🌟")); // → 6
    ```
##### 3.5 創建字符串的方法

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

##### 3.6 注意事項

1. 在處理用戶輸入或國際化文本時，應該特別注意字符編碼問題
2. 使用現代的字符串方法（如 `codePointAt()`）而不是舊方法（如 `charCodeAt()`）
3. **計算字符串長度時，考慮使用 `[...str].length` 獲取實際字符數**
4. 在需要精確處理 Unicode 字符時，使用專門的字符串處理庫可能是更好的選擇

> 延伸閱讀：[文字 (Unicode) - 維基百科](https://zh.wikipedia.org/wiki/%E6%96%87%E5%AD%97_(Unicode)){target="_blank"}

## 總結

本文從基礎的程式複雜性問題出發，介紹了高階函數的概念和應用，說明了抽象化的重要性。透過函數組合的方式，展示了如何優雅地組織程式邏輯，並以 Unicode 腳本分析為例，實際演示了如何運用 `filter`、`map`、`reduce` 等高階函數來解決複雜的數據處理問題。

#### 關鍵要點

- 高階函數能有效降低程式的複雜度
- 合理的抽象化可以提升代碼的可讀性
- 適當的函數組合能讓程式邏輯更清晰

以上內容是基於 [5. Higher-Order Functions - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/05_higher_order.html) 所整理的精簡筆記。