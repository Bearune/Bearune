---
category: 前端開發
title: 【JavaScript 學習筆記 09】正則表達式 Chapter 9 Regular Expressions
description: 深入淺出學習 JavaScript 正則表達式！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從正則表達式的基本概念出發，詳細介紹了 JavaScript 中的字元集合、重複模式、分組匹配等核心機制。從基礎語法到進階應用，從匹配原理到效能優化，完整呈現了正則表達式的實戰技巧。內容涵蓋了貪婪匹配、前瞻後顧、邊界條件等重要概念，並通過實際案例展示了這些概念的應用。透過循序漸進的方式，幫助讀者掌握如何靈活運用正則表達式進行文字處理。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-01-18
keywords: JavaScript 正則表達式, JavaScript RegExp, JavaScript 字元集合, JavaScript 重複模式, JavaScript 分組匹配, JavaScript 貪婪匹配, JavaScript 非貪婪匹配, JavaScript 前瞻後顧, JavaScript 邊界條件, JavaScript exec, JavaScript match, JavaScript matchAll, JavaScript replace, JavaScript search, JavaScript 字串處理, JavaScript 文字匹配, JavaScript 正則效能, JavaScript 正則優化, JavaScript 正則應用, JavaScript 學習筆記, JavaScript 入門教學, JavaScript 範例, Eloquent JavaScript, Regular Expression, Pattern Matching
image: /img/articles/eloquent-JavaScript/cover9.webp
draft: false

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 09】正則表達式 Chapter 9 Regular Expressions
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover9.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter9
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 正則表達式！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從正則表達式的基本概念出發，詳細介紹了 JavaScript 中的字元集合、重複模式、分組匹配等核心機制。從基礎語法到進階應用，從匹配原理到效能優化，完整呈現了正則表達式的實戰技巧。內容涵蓋了貪婪匹配、前瞻後顧、邊界條件等重要概念，並通過實際案例展示了這些概念的應用。透過循序漸進的方式，幫助讀者掌握如何靈活運用正則表達式進行文字處理。


sitemap:
  loc: /articles/eloquent-javascript-chapter9
  lastmod: 2025-01-18
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.── Jamie Zawinski

![【JavaScript 學習筆記 09】正則表達式 Chapter 9 Regular Expressions](/img/articles/eloquent-JavaScript/cover9.webp)

本文深入探討 JavaScript 中的正則表達式機制，從基礎的字元集合定義，到進階的匹配策略。透過實際的程式碼範例，說明如何運用重複模式、分組匹配、貪婪匹配等重要特性來提升文字處理的效率和靈活性。同時也介紹了 JavaScript 特有的正則表達式方法，以及 INI 檔案解析實際應用場景的重要實踐。

:anchor

## 正則表達式（Regular Expression）

![正則表達式](/img/articles/eloquent-JavaScript/9.正則表達式.svg)

#### 1. 什麼是正則表達式？

正則表達式（Regular Expression）是一種描述文字模式的語法，用於在字串中搜尋、匹配和操作文字。它由一個或多個字元組成，可以表示特定的文字模式，如單一字元、字元集合、字元範圍、可選字元、重複字元等。正則表達式常被用於文字處理、資料驗證、字串操作等場景。

#### 2. 如何創建正則表達式？

```javascript
let re1 = new RegExp("abc");
let re2 = /abc/;
```

1. RegExp 構造函數
2. 字面量表示法
    ```javascript
    let aPlus = /A\+/;  // 表示字元本身，需在字元前加入反斜線\
    ```

#### 3. 測試匹配（Test Method）

正則表達式的 `test` 方法用於檢查字串中是否包含與正則表達式相匹配的子字串，並返回布林值。如果找到匹配，則返回 `true`，否則返回 `false`。

```javascript
console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false
```

## 字元集合（Character Classes）

![字元集合](/img/articles/eloquent-JavaScript/9.字元集合.svg)

#### 1. 什麼是字元集合？

正則表達式中的字元集合用於匹配特定範圍或集合的字元。它們通常用方括號 `[]` 包裹，並包含要匹配的字元或範圍。

#### 2. 如何使用字元集合？

字元集合可以包含單個字元或字元範圍。範圍使用連字元 `-` 表示，例如 `[0-9]` 表示所有數字字元（Unicode 編碼 48～57）。範圍的排序由字元的 Unicode 編碼決定。以下兩個表達式都匹配包含數字的所有字串：

```javascript
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true
```

#### 3. 特殊字元集合

正則表達式中有一些特殊字元集合，用於匹配特定類型的字元，只有反斜線代碼可用在方括號 `[]`中。例如：

- `\d`：任何數字字元（等同於 `[0-9]`）
- `\w`：任何單詞字元（字母、數字或下劃線）
- `\s`：任何空白字元（空格、制表符、換行字元等）
- `\D`：任何非數字字元（等同於 `[^0-9]`）
- `\W`：任何非單詞字元（等同於 `[^a-zA-Z0-9_]`）
- `\S`：任何非空白字元（等同於 `[^ \t\n\r\f]`）
- `.`：任何單個字元（除了換行字元 `\n`），但在方括號 `[]` 內表示字面上的句點。
  ```javascript
  let dot = /./;
  console.log(dot.test("bearune"));
  // → true
  let dotInBracket = /[.]/;
  console.log(dotInBracket.test("bearune"));
  // → false
  console.log(dotInBracket.test("bearune."));
  // → true
  ```
  

##### 範例

我們可以使用以下表達式匹配 `01-30-2003 15:20` 格式的日期和時間：

```javascript
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false
```

乍看之下 `\d` 非常多且不易讀，但其實這個範例有更好的表示方法，下面[重複模式](#_2-如何使用重複模式)會提到。

#### 4. 反轉字元

如果在方括號 `[]` 中使用 `^` 字元，表示反轉字元集合，即匹配不在方括號內的字元。例如，`[^01]` 表示匹配任何 0 與 1 以外的字元。

```javascript
let nonBinary = /[^01]/;
console.log(nonBinary.test("1100100010100110"));
// → false
console.log(nonBinary.test("0111010112101001"));
// → true
```

#### 5. 國際字元

由於 JavaScript 當初並沒有考慮到正則表達式的國際化需求，因此在 Unicode 字元上存在一些問題。譬如 `\w` 表示單詞字元，但不包括非拉丁字母的字元，如日文、中文等。

為了解決這個問題，ES9 引入了 `\p{}` 和 `\P{}` 來表示 Unicode 屬性，並且因為兼容性問題，需在正則表達式後添加 `u` 字元。

- `\p{}`：匹配**具有**指定 Unicode 屬性的字元
- `\P{}`：匹配**不具有**指定 Unicode 屬性的字元

下例使用 `\p{Script=Han}` 表示匹配所有漢字字元。

```javascript
let han = /\p{Script=Han}/u;
console.log(han.test("熊途"));
// → true
let notHan = /\P{Script=Han}/u;
console.log(notHan.test("熊途"));
// → false
```

## 重複模式（Repetition）

![重複模式](/img/articles/eloquent-JavaScript/9.重複模式.svg)

#### 1. 什麼是重複模式？

重複模式用於指定匹配字元或字元集合的次數。例如：我們想要匹配一個或多個數字的序列，可以使用 `\d+` 表示：

``` javascript
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
```

#### 2. 如何使用重複模式？

重複模式可以使用以下符號表示：

- `+`： 1 次或多次
- `*`： 0 次或多次

```javascript
// + 與 * 的差異
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true
```

- `?`： 0 次或 1 次

```javascript
// u 字元可以出現也可以缺失
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true
```

- `{n}`： 精確重複 n 次
- `{n,m}`： 重複 n 到 m 次
- `{n,}`： 至少重複 n 次

```javascript
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true
```

#### 3. 貪婪與非貪婪匹配

##### 3.1 貪婪匹配（Greedy）

預設情況下，重複運算子（`+`、`*`、`?`、`{}`）會盡可能匹配最多的字元。以下是一個移除 JavaScript 註釋的例子：

```javascript
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1  1
```

這個函數的目的很簡單：把程式碼中的註釋都清掉。註釋有兩種：

1. 單行註釋：以 `//` 開頭到行尾的內容
2. 多行註釋：被 `/*` 和 `*/` 包起來的內容

但是最後一個例子出現了奇怪的結果！原本應該是 `1 + 1`，卻變成了 `1  1`。這是為什麼呢？

問題出在正則表達式太「貪吃」了。當它看到 `/* a */+/* b */` 這段時，它不是乖乖地分別吃掉兩個註釋，而是整段都吞下去！因為我們用了 `[^]*` 這個模式，它的意思是「吃掉所有能吃的東西，直到看到最後一個 `*/`」，具體原理可參考下方[回溯機制](#_2-匹配機制)。

為了解決這個問題，我們就必須使用非貪婪匹配。

##### 3.2 非貪婪匹配（Non-greedy）

如果我們希望重複運算子盡可能匹配最少的字元，可以使用 `?` 來表示非貪婪匹配。以下是剛才的例子：

```javascript
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 + 1
```

這樣就能讓 `[^]*` 匹配到最近的 `*/` ，並輸出預期的結果了。

## 正則表達式選項
![選項模式](/img/articles/eloquent-JavaScript/9.選項模式.svg)

正則表達式可以使用選項來修改其行為。以下是常用的選項：

#### 1. i（ignore case）

`i` 能使匹配不區分大小寫，如下所示：

```javascript
let pattern = /hello/i;
console.log(pattern.test("Hello"));  // → true
console.log(pattern.test("HELLO"));  // → true
```

#### 2. g（global）

`g` 為全局匹配，查找所有匹配項而不是只找第一個匹配項，如下所示：

```javascript
"banana".match(/an/g);  // → ['an', 'an']
"banana".replace(/an/g, "AN");  // → "bANANa"
```

#### 3. y（sticky）

`y` 為黏性匹配，只從 `lastIndex` 位置開始匹配，如下所示：

```javascript
let sticky = /abc/y;
sticky.lastIndex = 3;
console.log(sticky.test("123abc"));  // → true
console.log(sticky.test("abc123"));  // → false
```

#### 4. u（unicode）

`u` 啟用 Unicode 模式，允許正則表達式使用 Unicode 字元，並使 `\p{...}` 語法生效，如下所示：

```javascript
console.log(/\p{L}/u.test("α"));  // → true
console.log(/\p{Script=Greek}/u.test("α"));  // → true
console.log(/🍎{3}/u.test("🍎🍎🍎"));  // → true
```

## 分組基礎

![分組基礎](/img/articles/eloquent-JavaScript/9.分組基礎.svg)

#### 1. 什麼是分組？

在正則表達式中，括號 `()` 用於創建一個分組，使得括號內的模式作為一個整體被處理。這對於以下情況特別有用：

##### 範例：將多個元素作為一個整體應用重複運算子

```javascript
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true
```

- 第一個及第二個 `+` 分別應用於 `boo` 及 `hoo` 中的 `o`。
- 第三個 `+` 應用於整個 `(hoo+)` 組。
- 表達式末尾的 `i` 使匹配不區分大小寫。

#### 2. 非捕獲分組

如果只想使用括號進行分組，但不希望它出現在匹配結果中，可以使用 `(?:)` 語法：

```javascript
// 使用非捕獲分組
console.log(/(?:na)+/.exec("banana"));
// → ["nana"]

// 對比使用捕獲分組
console.log(/(na)+/.exec("banana"));
// → ["nana", "na"]
```

## 分組與匹配結果

`test` 方法只提供「是否匹配」的結果，是正則表達式中最簡單的方法，以下方法提供更詳細的匹配結果，例如：

#### 1. exec 方法

`exec` 方法是正則表達式的一個強大方法，它返回一個包含匹配信息的物件：

```javascript
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);  // 匹配開始的位置
// → 8
```

1. 如果沒有找到匹配，返回 `null`
2. 如果找到匹配，返回一個類陣列物件(Array-like Object)，包含：
     - 陣列第一項是完整的匹配字串
     - 陣列其他項是各個分組匹配的內容
     - `index` 屬性表示匹配開始的位置

##### 1.1 分組匹配

對含有分組匹配的表達式，`exec` 方法會返回一個包含匹配字串及各個分組匹配內容的陣列，如下所示：

```javascript
let quotedText = /'([^']*)'/;
```

1. 外層的單引號 `'`：匹配的文本必須以單引號開始和結束。
2. 捕獲組 `([^']*)`
   - `(` 和 `)`：這對括號表示一個捕獲組，它將匹配的內容保存在結果中，方便後續引用，詳見[分組與引用](#分組與引用groups-and-references)。
   - `[^']`：表示匹配任何不是單引號的字元。`^` 在開頭表示否定，詳見[反轉字元](#範例)。
   - `*`：這個量詞表示前面的元素（即 `[^']`）可以出現零次或多次。可以匹配空字元串或多個非單引號字元，詳見[重複模式](#重複模式repetition)。

這個正則表達式的整體需求是：  
它將匹配一段文本，該文本是由單引號 `'` 包圍的，並且在單引號內可以包含任意數量的非單引號字元。

```javascript
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]
```

##### 1.2 特殊情況

1. 當一個分組沒有匹配到內容時（比如使用 `?` 時），對應位置會是 `undefined`。
2. 當一個分組被多次匹配時（比如使用 `+` 時），只有最後一次匹配會被記錄。

```javascript
console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]

console.log(/(\d)+/.exec("123"));
// → ["123", "3"]
```

##### 1.3 lastIndex

當正則表達式啟用全局（`g`）或黏性（`y`）標誌時，`lastIndex` 屬性會影響 `exec` 方法的行為：

1. `lastIndex` 控制下一次匹配的起始位置
2. 匹配成功時，`lastIndex` 自動更新為匹配結束的位置
3. 匹配失敗時，`lastIndex` 重置為 0

```javascript
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);  // → 4
console.log(pattern.lastIndex);  // → 5
```

注意：在多次使用同一個正則表達式物件時，`lastIndex` 的自動更新可能導致意外結果：

```javascript
let digit = /\d/g;
console.log(digit.exec("here it is: 1"));  // → ["1"]
console.log(digit.exec("and now: 1"));  // → null，因為 lastIndex 沒有重置
```

因此，當使用全局（`g`）或黏性（`y`）標誌時，建議在每次使用前根據需要手動重置 `lastIndex` 為 `0`。若只是想找出所有匹配項，可以考慮使用 `match` 方法（在使用 `g` 標誌時）或 `matchAll` 方法，這樣可以避免手動處理 `lastIndex` 的問題，這兩個方法將在下面介紹。

> 參考資料：[RegExp.prototype.exec() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec){target=_blank}

#### 2. match 方法

字串的 `match` 方法與正則表達式的 `exec` 方法類似，但有一些重要區別：

```javascript
let match = "one two 100 200".match(/\d+/);
console.log(match);  // 只匹配第一個匹配的字串，與 exec 方法相同
// → ["100"]
```

##### 2.1 全局搜索時的行為差異

使用 `g` 標誌時，`match` 會返回所有匹配項的數組，而不是像 `exec` 那樣只返回第一個匹配的詳細信息。

```javascript
console.log("Banana".match(/an/));
// → ["an"]

console.log("Banana".match(/an/g));
// → ["an", "an"]

console.log(/an/.exec("Banana"));
// → ["an"]

```

##### 2.2 使用建議

- 如果需要獲取分組信息或精確的匹配位置，使用 `exec`。
- 如果只需要獲取所有匹配的字串，使用帶有 `g` 標誌的 `match`。

> 參考資料：[String.prototype.match() - JavaScript - MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match){target=_blank}

#### 3. matchAll 方法（ES2020+）

如果需要獲取所有匹配的詳細信息，可以使用字串的 `matchAll` 方法：

```javascript
let input = "A string with 3 numbers in it... 42 and 88.";
let matches = input.matchAll(/\d+/g);
for (let match of matches) {
  console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
// → Found 42 at 33
// → Found 88 at 40
```

- 使用 `matchAll` 時，正則表達式必須包含 `g` 標誌。

> 參考資料：[String.prototype.matchAll() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll){target=_blank}

#### 4. 比較

| 方法       | 返回值類型        | 全域搜尋        | 捕獲組處理 | 特點                                                                                              |
| ---------- | ----------------- | --------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| exec()     | `Array` 或 `null` | 需手動迭代      | 完整支援   | - 返回單次匹配結果和詳細資訊<br>- 保留 `lastIndex`<br>- 需使用 `g` 標誌並重複調用才能獲取所有匹配 |
| match()    | `Array` 或 `null` | 自動（有`g`時） | 有限支援   | - 無 `g`：返回首次匹配和捕獲組<br>- 有 `g`：返回所有匹配但不含捕獲組                              |
| matchAll() | `Iterator`        | 自動            | 完整支援   | - 返回包含所有匹配資訊的迭代器<br>- 必須使用 `g` 標誌<br>- 可用 `for...of` 遍歷                   |


```javascript
const str = "cat, bat, sat, fat";
const regex = /([a-z])at/g;

// exec() - 需要循環獲取所有匹配
let result;
while ((result = regex.exec(str)) !== null) {
    console.log(result);
}
// → ["cat","c"]
// → ["bat","b"]
// → ["sat","s"]
// → ["fat","f"]

// match() - 有 /g 時只返回完整匹配
console.log(str.match(regex));
// → ["cat", "bat", "sat", "fat"]

// matchAll() - 返回完整資訊的迭代器
const matches = [...str.matchAll(regex)];
console.log(matches);
// → [["cat","c"], ["bat","b"], ["sat","s"], ["fat","f"]]
```

## 字串方法

![字串方法](/img/articles/eloquent-JavaScript/9.字串方法.svg)

以下介紹兩個可以使用正則表達式的字串方法：`replace` 和 `split`。

#### 1. replace 方法

##### 1.1 如何使用 replace 方法？

`replace` 方法用於在字串中替換匹配的字串。它接受兩個參數：`要替換的字串`或`正則表達式`，以及`替換的內容`。當在正則表達式之後添加 `g` 選項，還能替換所有匹配項。

```javascript
let str = "cat, cat, cat";

// 只替換第一個匹配
console.log(str.replace("cat", "dog"));  // → "dog, cat, cat"
console.log(str.replace(/cat/, "dog"));  // → "dog, cat, cat"
// 使用正則替換所有匹配
console.log(str.replace(/cat/g, "dog")); // → "dog, dog, dog"
```

##### 1.2 分組匹配

`replace` 方法還支持分組匹配，允許在替換內容中引用匹配的子字串，如下所示。

```javascript
console.log(
  "Liskov, Barbara\nMcCarthy, John\nMilner, Robin"
    .replace(/(\p{L}+), (\p{L}+)/gu, "$2 $1"));
// → "Barbara Liskov
//   John McCarthy
//   Robin Milner"
```

替換字元中的 `$1`、`$2` 指的是要替換表達式的分組，表示為 `$n`，其中 `n` 為小於 100 的正整數；`$&` 則表示整個匹配。

```javascript
console.log("javascript".replace(/.*/, "$&$&"));  // → "javascriptjavascript"
```

> 參考資料：[String.prototype.replace() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace){target=_blank}

#### 2. search 方法

##### 2.1 如何使用 search 方法？

與字串的 `indexOf` 相似，用於字串中執行正則表達式的搜索，並返回首次匹配位置；如果未找到匹配，則返回 `-1`。

```javascript
const str = "Hello World";
console.log(str.search(/World/));  // → 6
console.log(str.search(/javascript/));  // → -1
```

##### 2.2 與 indexOf 的區別

`search` 方法與 `indexOf` 的主要區別在於，`search` 方法接受正則表達式作為參數，而 `indexOf` 方法則接受字串作為參數。

```javascript
const str = "Hello World";
// indexOf 只能搜索固定字串
console.log(str.indexOf("World"));  // → 6

// search 可以使用正則表達式
console.log(str.search(/W\w+/));  // → 6
```

> 參考資料：[String.prototype.search() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search){target=_blank}

## 邊界和前瞻

![邊界與前瞻](/img/articles/eloquent-JavaScript/9.邊界與前瞻.svg)

下面是一個以字串創建日期的物件，展示如何使用正則表達式來解析日期字串並返回一個 `Date` 物件：

```javascript
function getDate(string) {
  let [_, month, day, year] =
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
```

雖然看似很正常，但 `getDate` 也能從字串 `100-1-30000` 中提取日期，這不是我們想要的結果，因此我們需要添加一些額外的限制，而 **邊界和前瞻可以幫助我們解決這個問題**。

#### 1. 邊界（Boundaries）

邊界是在正則表達式中用來限制匹配模式的位置標記。它們不會匹配任何實際字元，而是強制在模式中出現的位置滿足特定條件。常見的邊界符號包括：

- `^`：匹配字串開頭
    ```javascript
    let startWithNumber = /^\d+/;
    console.log(startWithNumber.test("123abc"));  // → true
    console.log(startWithNumber.test("abc123"));  // → false
    ```
- `$`：匹配字串結尾
    ```javascript
    let endWithNumber = /\d+$/;
    console.log(endWithNumber.test("abc123"));  // → true
    console.log(endWithNumber.test("123abc"));  // → false
    ```
- `^` 與 `$` 組合：匹配整個字串
    ```javascript
    let numbers = /\d+/;  // 未使用 ^ 和 $
    console.log(numbers.test("123"));  // → true
    console.log(numbers.test("123abc"));  // → true
    console.log(numbers.test("abc123"));  // → true

    let onlyNumbers = /^\d+$/;
    console.log(onlyNumbers.test("123"));  // → true
    console.log(onlyNumbers.test("123abc"));  // → false
    console.log(onlyNumbers.test("abc123"));  // → false
    ```
- `\b`：匹配單詞邊界
    ```javascript
    let wordBoundary = /\bcat\b/;
    console.log(wordBoundary.test("The cat is"));  // → true
    console.log(wordBoundary.test("category"));  // → false
    ```

#### 2. 前瞻（Lookahead）

前瞻是一種特殊的匹配條件，允許你檢查某個模式是否存在於匹配的位置，但不會將這些字元包含在匹配結果中。前瞻可以分為兩種類型：正向前瞻和負向前瞻。

##### 2.1 正向前瞻 `(?=pattern)`

要求後面匹配特定模式，但不消耗這些字元。

```javascript
let followedByE = /a(?=e)/;  // a 正後面必須有 e
console.log(followedByE.exec("braeburn"));  // → ["a"]
console.log(followedByE.exec("brain"));  // → null
console.log(followedByE.exec("babe"));  // → null，e 必須在 a 的下一個字元
```

##### 2.2 負向前瞻 `(?!pattern)`

要求後面不匹配特定模式，但不消耗這些字元。

```javascript
let notFollowedBySpace = /a(?! )/;  // a 正後面不能有空格
console.log(notFollowedBySpace.test("a b"));  // → false
console.log(notFollowedBySpace.test("ab"));  // → true
console.log(notFollowedBySpace.test("ab "));  // → true，空格必須在 a 的下一個字元
```

#### 創建日期範例

為了確保創建日期的格必為 `MM-DD-YYYY`，可以改成如下格式：

```javascript
function getDate(string) {
  let [_, month, day, year] =
    /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(string) || [];
  if (!month || !day || !year) return "Invalid Date";
  return new Date(year, month - 1, day);
}

console.log(getDate("01-30-2003"));  // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
console.log(getDate("1-30-2003"));  // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
console.log(getDate("100-1-30000"));  // → Invalid Date
```

#### 組合使用範例

```javascript
// 匹配以字母開頭，後面跟著數字，但不能跟著空格的字串
let complexPattern = /^[a-z](?!\s)\d+$/;
console.log(complexPattern.test("a123"));  // → true
console.log(complexPattern.test("a 123"));  // → false
console.log(complexPattern.test("1a123"));  // → false
```

## 運作機制

![運作機制](/img/articles/eloquent-JavaScript/9.運作機制.svg)

#### 1. 選擇模式

在正則表達式中，可以使用管道符號 `|` 來表示選擇模式，其允許匹配多個不同的選擇。

```javascript
let animalCount = /\d+ (pig|cow|chicken)s?/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pugs"));
// → false
```

這個例子中的模式可以匹配：

- 數字後面接著 "pig"、"cow" 或 "chicken"
- 最後可以選擇性地加上 "s" (用 `s?` 表示)

![正則表達式的匹配機制](/img/articles/eloquent-JavaScript/正則表達式的匹配機制.svg)

#### 2. 匹配機制

當正則表達式引擎開始匹配時，它會:

1. 從字串的開頭開始嘗試匹配
2. 如果當前位置無法匹配，則移動到下一個字元繼續嘗試
3. 直到找到一個匹配或到達字串結尾

```javascript
let pattern = /abc/;
console.log(pattern.test("abcde"));  // → true
console.log(pattern.test("abdce"));  // → false
```

##### 2.1 回溯機制

當正則表達式包含多個可能的匹配路徑時，引擎會使用回溯：

- 記錄當前的匹配位置
- 嘗試一個可能的匹配路徑
- 如果失敗，則返回之前的位置嘗試其他路徑

```javascript
let number = /^(\d+|0x[0-9a-f]+)$/i;
console.log(number.test("123"));  // → true
console.log(number.test("0xFF"));  // → true
```

#### 3. 效能考量

某些正則表達式模式可能導致過多的回溯，影響效能：

```javascript
// 不好的寫法 - 可能導致過度回溯
let badPattern = /([01]+)+b/;

// 更好的寫法
let goodPattern = /[01]+b/;
```

效能建議：

- 避免過度使用嵌套的重複運算子 (`+`,`*`)
- 優先使用更具體的模式而非過於寬鬆的模式
- 當只需要簡單匹配時，考慮使用字串方法替代

## 實際應用：解析 INI 文件

#### 1. 什麼是 INI 文件

INI 檔案是一種常見的設定檔格式，主要用來儲存程式的設定資訊。

##### 1.1 檔案格式規則

1. 基本結構
    - 可以有一般設定（不屬於任何區段）
    - 可以有多個區段（section）
    - 每個區段都有自己的設定項目
2. 語法規則
    - 空行會被忽略
    - 分號（`;`）開頭的是註解行
    - 區段標題格式：`[區段名稱]`
    - 設定項格式：`名稱=值`

```ini
searchengine=https://duckduckgo.com/?q=$1 ; 一般設定
spitefulness=9.7

; 這是註解
[larry] ; 區段開始
fullname=Larry Doe
type=kindergarten bully

[davaeorn] ; 另一個區段
fullname=Davaeorn
type=evil wizard
```

#### 2. 解析器實作重點

##### 2.1 分割行

```javascript
string.split(/\r?\n/)
```

- 用正則表達式 `/\r?\n/` 來處理不同作業系統的換行符
- `\r?` 表示可能有或沒有回車符（Windows 用 `\r\n`，Unix 用 `\n`）

##### 2.2 核心邏輯

```javascript
function parseINI(string) {
    let result = {};  // 儲存所有設定
    let section = result;  // 目前正在處理的區段
    
    for (let line of string.split(/\r?\n/)) {
      // 處理每一行…
    }
    return result;
}
```

##### 2.3 三種匹配模式

1. 一般設定：如 `name=value`
    ```javascript
    /^(\w+)=(.*)$/
    ```
2. 區段標題：如 `[section]`
    ```javascript
    /^\[(.*)\]$/
    ```
3. 註解或空行
    ```javascript
    /^\s*(;|$)/
    ```

#### 3. 解析結果範例

```javascript
// 輸入：
name=Vasilis
[address]
city=Tessaloniki

// 輸出：
{
    name: "Vasilis",
    address: {
        city: "Tessaloniki"
    }
}
```

#### 4. 完整程式碼

```javascript
function parseINI(string) {
  let result = {};
  let section = result;
  for (let line of string.split(/\r?\n/)) {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;|$)/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  };
  return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}
```


## 總結

本文透過深入淺出的方式，探討了 JavaScript 中的正則表達式（Regular Expression）。從最基本的正則表達式概念，到進階的匹配機制和實際應用，逐步展示了如何有效地使用正則表達式進行文字處理。同時也說明了不同匹配方法的特性、邊界條件處理，以及效能優化等重要概念。

#### 關鍵要點

- 正則表達式是處理文字模式的強大工具
- 字元集合和重複模式是構建複雜匹配的基礎
- 分組機制能夠提供更精確的匹配控制
- 貪婪與非貪婪匹配影響匹配結果的範圍
- 邊界和前瞻提供了精確的位置控制
- 選擇合適的匹配方法對效能至關重要

#### 實踐建議

- 優先使用字面量方式創建正則表達式
- 善用測試方法確認匹配結果
- 注意貪婪匹配可能帶來的問題
- 合理使用分組提高匹配精確度
- 考慮效能因素選擇適當的匹配策略

以上內容是基於 [9. Regular Expressions - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/09_regexp.html){target="_blank"} 所整理的精簡筆記。