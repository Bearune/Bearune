---
category: 前端開發
title: JS 筆記#05 - 高階函數 | Chapter 5 Higher-Order Functions
description: 深入淺出學習 JavaScript 高階函數！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從程式複雜性問題出發，探討抽象化的重要性，並深入介紹高階函數的概念與應用。內容包含常用的高階函數操作（filter、map、reduce）、函數組合的優缺點分析，以及透過 Unicode 腳本分析的實際案例，幫助你掌握 JavaScript 中高階函數的運用技巧。從基礎觀念到實務應用，循序漸進地學習如何運用高階函數來優化程式碼，提升程式設計的抽象能力。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-01-06
keywords: JavaScript 高階函數, JavaScript 函數式程式設計, JavaScript filter, JavaScript map, JavaScript reduce, JavaScript 抽象化, JavaScript 函數組合, JavaScript 回呼函數, JavaScript 匿名函數, JavaScript 箭頭函數, JavaScript 函數參數, JavaScript Unicode, JavaScript 字符處理, JavaScript 字串操作, JavaScript 陣列操作, JavaScript 程式複雜度, JavaScript 程式優化, JavaScript 函數式編程, JavaScript 函數傳遞, JavaScript 純函數, JavaScript 副作用, JavaScript 學習筆記, JavaScript 入門教學, JavaScript 範例, JavaScript 最佳實踐, JavaScript 程式設計, Eloquent JavaScript, JavaScript examples, Higher-order functions, Functional programming, JavaScript callbacks
image: /img/articles/eloquent-JavaScript/cover5.webp
draft: false

head:
  - - meta
    - property: og:title
      content: JS 筆記#05 - 高階函數 | Chapter 5 Higher-Order Functions
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover5.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter5
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 高階函數！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從程式複雜性問題出發，探討抽象化的重要性，並深入介紹高階函數的概念與應用。內容包含常用的高階函數操作（filter、map、reduce）、函數組合的優缺點分析，以及透過 Unicode 腳本分析的實際案例，幫助你掌握 JavaScript 中高階函數的運用技巧。從基礎觀念到實務應用，循序漸進地學習如何運用高階函數來優化程式碼，提升程式設計的抽象能力。

sitemap:
  loc: /articles/eloquent-javascript-chapter5
  lastmod: 2025-01-06
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.──C.A.R. Hoare, 1980 ACM Turing Award Lecture

![JS 筆記#05 - 高階函數 | Chapter 5 Higher-Order Functions](/img/articles/eloquent-JavaScript/cover5.webp)

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

##### 兩種方式比較

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

第二個顯然更短也更容易看懂，但需要理解更多烹飪相關詞語（如：浸泡、燉煮等等）。在寫程式的過程中我們也不能期待所有需要的詞語都能掌握，所以我們常常會陷入第一個食譜的模式──逐一敲出程式執行的步驟，而忽略了很多程式其實可以直接用抽象去表達。

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

高階函數能夠對操作而不僅僅是值進行抽象，有如下幾種抽象形式：

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

## 實際應用──Unicode腳本分析

本章節將介紹如何運用前面學到的高階函數來分析 [Unicode 腳本資料集](https://zh.wikipedia.org/zh-tw/%E6%96%87%E5%AD%97_(Unicode)){target="_blank"}。

#### 1. Unicode 腳本資料集介紹

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

#### 2. 函數組合的實際應用

讓我們看看如何運用函數組合來分析這些資料：

##### 2.1 查找活躍腳本

使用 `filter` 和 `map` 的組合找出現今仍在使用的腳本名稱：

```javascript
console.log(SCRIPTS.filter(script => script.living).map(script => script.name));
// → ["Adlam", "Arabic", "Armenian",  ...]
```

1. 首先用 `filter` 篩選出 `living` 為 `true` 的腳本
2. 然後用 `map` 提取這些腳本的名稱

##### 2.2 查找字幅最多的腳本

組合 `reduce` 來計算和比較字符數量：

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

##### 2.3 比較腳本平均年份

要分別找到活躍及死亡腳本，並計算出平均起源年份，可以結合 `filter`、`map` 和 `reduce` 來計算平均值：

```javascript
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// 活躍腳本平均年份
console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165

// 死亡腳本平均年份
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204
```

1. 首先建立 `average` 函式，以 `reduce` 計算陣列加總的平均
2. 再來分別使用 `filter` 過濾活躍及死亡的起始年份，並使用 `map` 回傳起始年份，代入 `average` 中
3. 得出平均起始年代，活躍腳本為 1165 年；死亡腳本為 204 年。顯而易見，我們發現死亡腳本平均比存活的腳本更老。

## 總結

本文從基礎的程式複雜性問題出發，介紹了高階函數的概念和應用，說明了抽象化的重要性。透過函數組合的方式，展示了如何優雅地組織程式邏輯，並以 Unicode 腳本分析為例，實際演示了如何運用 `filter`、`map`、`reduce` 等高階函數來解決複雜的數據處理問題。

#### 關鍵要點

- 高階函數能有效降低程式的複雜度
- 合理的抽象化可以提升代碼的可讀性
- 適當的函數組合能讓程式邏輯更清晰

以上內容是基於 [5. Higher-Order Functions - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/05_higher_order.html){target=_blank} 所整理的精簡筆記。