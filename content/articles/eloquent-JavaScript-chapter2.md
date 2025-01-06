---
category: 前端開發
title: 【JavaScript 學習筆記 02】程式結構 Chapter 2 Program Structure
description: 深入淺出學習 JavaScript 程式結構！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋表達式與語句、變數綁定與命名規則、函式定義與回傳值、控制流程（條件語句與迴圈）、程式風格最佳實踐等核心知識，幫助你快速掌握 JavaScript 程式設計的基礎概念與實用技巧。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2024-12-25
keywords: JavaScript, JavaScript 基礎, JavaScript 教學, JavaScript 表達式, JavaScript 語句, JavaScript 變數, JavaScript 綁定, JavaScript 命名規則, JavaScript 函式, JavaScript 回傳值, JavaScript 控制流程, JavaScript if-else, JavaScript switch, JavaScript 迴圈, JavaScript while 迴圈, JavaScript do 迴圈, JavaScript for 迴圈, JavaScript 程式風格, JavaScript 縮排, JavaScript 註解, JavaScript 命名慣例, JavaScript Pascal 命名法, JavaScript Camel Case, JavaScript Snake Case, JavaScript 程式設計, JavaScript 入門, JavaScript 學習筆記, JavaScript 範例, Eloquent JavaScript, JavaScript, JavaScript basics, JavaScript tutorial, JavaScript expressions, JavaScript statements, JavaScript variables, JavaScript bindings, JavaScript naming rules, JavaScript functions, JavaScript return values, JavaScript control flow, JavaScript if-else, JavaScript switch, JavaScript loops, JavaScript while loop, JavaScript do loop, JavaScript for loop, JavaScript coding style, JavaScript indentation, JavaScript comments, JavaScript naming conventions, JavaScript Pascal Case, JavaScript Camel Case, JavaScript Snake Case, JavaScript programming, JavaScript for beginners, JavaScript learning notes, JavaScript examples, Eloquent JavaScript
image: /img/articles/eloquent-JavaScript/cover2.webp

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 02】程式結構 Chapter 2 Program Structure
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover2.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-JavaScript-chapter2
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 程式結構！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋表達式與語句、變數綁定與命名規則、函式定義與回傳值、控制流程（條件語句與迴圈）、程式風格最佳實踐等核心知識，幫助你快速掌握 JavaScript 程式設計的基礎概念與實用技巧。

sitemap:
  loc: /articles/eloquent-JavaScript-chapter2
  lastmod: 2024-12-25
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> The best programs are those that manage to do something interesting while still being easy to understand.

![【JavaScript 學習筆記 02】Chapter 2 Program Structure](/img/articles/eloquent-JavaScript/cover2.webp)

:anchor

## 表達式（Expression）

表達式（Expression） 是一段能產生值的程式碼片段，無論這個值是數字、字串還是其他類型，都可以用於更複雜的運算或邏輯中。

- 例如：`22`、``"psychoanalysis"``、`1 + 1` 都是表達式。
- 表達式的功能類似於語言中的「句子片段」，它們是構成程式的基本組件，可以單獨存在，也可以組合成更複雜的計算。

## 語句（Statement）

語句（Statement） 是程式碼中的完整指令，通常用於執行某些動作，例如運算、輸出結果或改變程式的狀態。

#### 語句與表達式的區別

1. 表達式產生一個值，作為程式中的組件使用。
2. 語句是一條完整的指令，用於執行動作，並可能對外界產生影響（稱為副作用（side effects））。

>副作用（side effects）：指語句執行後，對程式或外部環境（如顯示輸出或修改變數）造成的影響。

#### 範例

```javascript
1; // Statement，沒有任何副作用。
console.log("Hello"); // Statement，具有副作用：在控制台顯示 "Hello"。
```

- 第一行是一條語句，但它僅執行了一個表達式，沒有改變程式的狀態，因此沒有副作用。
- 第二行也是一條語句，執行後會在控制台輸出字串 `"Hello"`，這是一種副作用。

## 綁定（Bindings）

綁定（Bindings）是程式用來記住數值或狀態的一種方式。在 JavaScript 中，綁定通常以變數（variables）的形式實現。

綁定的作用在於儲存程式執行過程中的數值或狀態，例如計算結果或用戶資料。如果沒有綁定，計算出的新值會立即消失，無法再被使用。綁定不僅可以儲存值，也可以更新值。

#### 1. 使用綁定的基本操作

##### 1.1 存取綁定 

```javascript
let caught = 5 * 5;
console.log(caught); // → 25
```

##### 1.2 更新綁定  

```javascript
let mood = 'light';
console.log(mood); // → light
mood = 'dark';
console.log(mood); // → dark
```

#### 2. let、var 和 const

##### 2.1 let

- 現代 JavaScript 中創建綁定的主要方式。
- 具有區塊範疇（block scope），範圍更安全且易於控制。

> 延伸閱讀：[[JavaScript] 範疇（Scope）](https://hackmd.io/@lunzaizai/H1cR8kB8t){target="_blank"}

##### 2.2 var

- 舊版 JavaScript 中的綁定聲明方式，現在已不推薦使用。
- 不受區塊範疇限制，容易導致不可預期的行為，詳細差異會在後續章節提及。

##### 2.3 const

- 用於創建常量綁定，值在其生命週期內**不可重新賦值**。
- 適合用於不會改變的數值或參考，能提高程式的可讀性和可靠性。

```javascript
const greeting = "Hello";
console.log(greeting); // → Hello

greeting = "Bye"; // 語法錯誤，因為常量無法重新賦值
```

- `const` 無法重新賦值，但物件或陣列的內容仍然可以被改變： 
  ```javascript
  const person = { name: "John" };
  person.name = "Jane"; // 合法，因為物件內容可以修改
  console.log(person.name); // → Jane

  person = { name: "Mike" }; // 語法錯誤，因為無法重新賦值
  ```

#### 3. 初始化

- 如果綁定在定義時沒有賦值，則其值為 `undefined`。  
    ```javascript
    let emptyBinding;
    console.log(emptyBinding); // → undefined
    ```
- 可以在一條語句中定義多個綁定，但為了程式的可讀性，建議每行定義一個綁定。
    ```javascript
    let one = 1, two = 2;
    console.log(one + two); // → 3
    ```

#### 4. 綁定名稱命名規則

##### 4.1 有效名稱

- 必須以字母、`$` 或 `_` 開頭，不能以數字開頭。
- 名稱可以包含數字，但不得包含特殊字符（如 `@`、`#` 等）。
 
```javascript
let catch22 = "valid"; // 合法
let 22catch = "invalid"; // 非法，會產生語法錯誤
let $name = "valid"; // 合法
let _name = "valid"; // 合法
```

##### 4.2 關鍵字（Keywords）

JavaScript 中有一些具有特殊意義的詞，稱為關鍵字，不能用作綁定名稱。

```javascript
let let = 5; // 語法錯誤，因為 "let" 是 keywords
```

##### 4.3 保留字（Reserved Words）

某些詞雖然目前未被使用，但被保留為未來版本的關鍵字，也不能用作綁定名稱。

#### 5. 關鍵字與保留字列表

以下是 JavaScript 的關鍵字和保留字，這些詞無法用作綁定名稱：

```txt
break, case, catch, class, const, continue, debugger, default,
delete, do, else, enum, export, extends, false, finally, for,
function, if, implements, import, interface, in, instanceof, let,
new, package, private, protected, public, return, static, super,
switch, this, throw, true, try, typeof, var, void, while, with, yield
```

## 函式（Functions）

**函式（Function）** 是一段能重複運行的程式碼片段，可以透過呼叫來執行。呼叫函式需要在函式名稱後面加上括號，而括號中的內容稱為**參數（arguments）**。

```javascript
prompt("Enter passcode");
```

#### 1. 定義函式

在 JavaScript 中，可以使用 `function` 關鍵字來定義函式。以下是基本語法：

##### 範例：定義與呼叫函式

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // → Hello, Alice!
console.log(greet("Bob"));   // → Hello, Bob!
```

#### 2. 回傳值（Return Values）

有些函式執行後會生成一個值，這個值稱為回傳值（return values）。可以使用 `return` 關鍵字來指定函式的返回值。

##### 2.1 使用內建函式的回傳值

`Math.max` 是一個內建函式，用於返回多個數字中的最大值。

```javascript
console.log(Math.max(2, 4)); // → 4
```

回傳值也可以作為更大表達式的一部分來運算：

```javascript
console.log(Math.min(2, 4) + 100); // → 102
```

##### 2.2 自定義函式的回傳值

以下是自定義函式返回值的範例：

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // → 8
console.log(add(10, 20)); // → 30
```

> 函式會在第三章琢磨：[【JavaScript 學習筆記 03】Chapter 3 Functions](/articles/eloquent-javascript-chapter3){target="_blank"}

## 控制流程（Control flow）

控制流程決定了程式執行的順序與邏輯，讓程式能根據條件選擇性地執行某些程式碼，或重複執行特定的程式碼段。當程式包含多個語句時，這些語句正常情況下會由上至下執行。

#### 1. 有條件執行

當程式需要根據某個值執行不同的動作時，可以使用 `if-else` 語句或 `switch` 語句。

##### 1.1 if-else

`if-else` 是最常用的條件語句，適合處理範圍檢查或複雜條件。

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// → You are an adult.
```

##### 1.2 switch

`switch` 結構清晰，適合多條件分派。當條件值是固定的（如字串或數字）時，`switch` 會更加直觀。

```javascript
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("You chose an apple.");
    break;
  case "banana":
    console.log("You chose a banana.");
    break;
  default:
    console.log("Unknown fruit.");
    break;
}
// → You chose an apple.
```

1. `switch` 會檢查表達式，並從匹配的 `case` 開始執行。
2. 如果一個 `case` 區塊中沒有 `break`，程式會繼續執行下一個 `case` 的程式碼。
3. `default` 是可選的，當沒有匹配的值時執行。

::info
**有條件執行小結**

- `if-else`：適合處理複雜條件（例如：範圍檢查）。
- `switch`：適合處理固定條件值（例如：字串或數字）。
::

#### 2. 循環執行（Loops）

##### 2.1 While Loops

`while` 迴圈會在每次執行前檢查條件，若條件為 `true` 則執行，否則結束迴圈。

```javascript
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
// → 0
// → 2
// … 直到 number = 14，14 <= 12，跳出迴圈
```

- 適用場景：當條件未知，或需要根據某些狀態來決定是否繼續執行時。

##### 2.2 Do Loops

`do-while` 迴圈至少會執行一次，然後再檢查條件是否為 `true`。

```javascript
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);
```

- 適用場景：當需要確保程式碼至少執行一次時。

##### 2.3 For Loops

`for` 迴圈是一種結構清晰的迴圈，適合用於已知次數的情況。它將「初始化」、「條件檢查」和「更新狀態」集中在一起。

```javascript
for (let num = 0; num <= 12; num = num + 2) {
  console.log(num);
}
// → 0
// → 2
// …直到 num = 14，跳出迴圈
```

1. 初始化：`let num = 0`
2. 條件檢查：`num <= 12`
3. 更新計數器：`num = num + 2`

- 適用場景：當需要執行固定次數的迴圈時。

##### 2.4 打破循環

條件檢查得出 `false` 並不是唯一完成迴圈的方法，若在中間想提早結束迴圈，可以使用 `break`。

###### 範例：提早結束迴圈

以下程式碼會找出第一個大於或等於 20 且能被 7 整除的數字，然後跳出迴圈：

```javascript
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
// → 21
```

::info
**循環執行小結**

- `while`：適合條件未知的情況，根據條件執行迴圈。
- `do-while`：至少執行一次，然後根據條件決定是否繼續。
- `for`：適合已知次數的迴圈，結構清晰。
- `break`：用於提早結束迴圈。
::

## 程式風格（Coding Style）

#### 1. 分號

在 JavaScript 中，分號用於結束語句。雖然 JavaScript 的自動分號插入（Automatic Semicolon Insertion, ASI）機制可以在某些情況下省略分號，但這可能導致代碼被錯誤解讀。因此，建議在每個語句結尾都加上分號，這是更安全的做法。

> 延伸閱讀：[JS 加不加分號差在哪？](https://www.casper.tw/development/2020/09/20/js-semi/){target="_blank"}

> 延伸閱讀：[JavaScript 深入淺出 Automatic Semicolon Insertion 自動插入分號機制](https://shawnlin0201.github.io/JavaScript/JavaScript-Automatic-Semicolon-Insertion/){target="_blank"}

#### 2. 縮排

縮排是提升程式碼可讀性的重要方式。雖然程式執行時不會對縮排有要求，但對於人類來說，良好的縮排習慣可以讓程式碼結構更加清晰。

##### 常見縮排規範

- 兩個空格：適合程式碼較長或嵌套較深的情況，常見於 Google 的 JavaScript 風格指南。
- 四個空格：適合程式碼較短或需要更明顯的層次感，常見於一些大型專案。

```javascript
// 使用兩個空格
function sayHello() {
  console.log("Hello, world!");
}

// 使用四個空格
function sayHello() {
    console.log("Hello, world!");
}
```

無論選擇哪種縮排方式，**保持一致性**是最重要的。

#### 3. 命名規則

變數和函式的命名應該具有描述性，並遵循統一的命名規則。以下是幾種常見的命名風格：

##### 3.1 命名風格

1. Snake Case：`fuzzy_little_turtle`  
  常見於某些後端語言（例如 Python）。
2. Pascal Case：`FuzzyLittleTurtle`  
   通常用於類名或建構函式名稱，例如：
   ```javascript
   class FuzzyLittleTurtle {
     constructor() {
       this.name = "Turtle";
     }
   }
   ```
3. Lower Camel-Case：`fuzzyLittleTurtle`  
   JavaScript 中最常見的命名方式，適用於變數和函式名稱，例如：
   ```javascript
   let fuzzyLittleTurtle = "Turtle";
   function getTurtleName() {
     return fuzzyLittleTurtle;
   }
   ```

##### 3.2 命名規則的建議

- 使用描述性名稱，例如：`totalAmount` 而非 `x`。
- 避免縮寫，除非是廣為人知的縮寫（例如：`id` 表示 `identifier`）。
- 在同一專案中保持命名風格的一致性。

>延伸閱讀：[常見的命名規則(Camel Case, Snake Case, Kebab Case)](https://blog.camel2243.com/posts/common-naming-convention-camel-case-snake-case-kebab-case/)

#### 4. 註解

註解的目的是補充程式碼的意圖，幫助讀者理解程式碼的功能與邏輯。良好的註解應該簡潔明確，避免過度冗長。

##### 4.1 註解的類型

1. 單行註解：使用 `//`，適合簡短的說明。
    ```javascript
    let accountBalance = calculateBalance(account); // 計算帳戶餘額
    accountBalance.adjust(); // 調整餘額
    ```
2. 多行註解：使用 `/* */`，適合較長的說明或模組級別的註解。
    ```javascript
    /*
    這段程式碼用於處理帳戶餘額。
    它會先計算餘額，然後進行調整，
    最後將結果加入報告中。
    */
    const myNumber = 11213;
    ```

##### 4.2 註解的最佳實踐

- 簡潔明確：註解應該直接說明程式碼的功能或邏輯，不要重複程式碼內容。
- 避免過度註解：過多的註解可能會使程式碼難以閱讀，應該讓程式碼本身具有自解性。
- 使用標籤：例如 `TODO`、`FIXME`、`NOTE`，幫助標記需要後續處理的部分。

##### 範例：使用標籤註解

```javascript
// TODO: 優化此函式的效能
function processLargeData(data) {
  // FIXME: 當資料量過大時，可能會導致記憶體不足
  return data.map(item => item * 2);
}
```

> 延伸閱讀：[常用註解標籤 - TODO、FixMe、XXX](https://hackmd.io/@CynthiaChuang/Common-Comment-Keywords){target="_blank"}

::info
**程式風格小結**

- 分號：建議在每個語句結尾加上分號，避免潛在的語法錯誤。
- 縮排：選擇兩個或四個空格，並保持一致性。
- 命名規則：使用描述性名稱，並根據用途選擇合適的命名風格。
- 註解：簡潔明確，避免過度註解，並善用標籤來記錄待處理事項。

::

## 總結

程式由語句組成，語句可以包含更小的語句，而這些語句通常由表達式構成，表達式也能進一步拆分為更小的表達式。透過條件語句（`if-else`、`switch`）與循環語句（`while`、`do`、`for`），我們可以控制程式的執行流程。而綁定用於儲存資料，環境則是綁定的集合，JavaScript 也提供了一些內建綁定讓程式撰寫更方便。函數則是可重複使用的程式碼，能接受參數並返回結果，關於函數我們將在下一章詳細說明。

以上內容是基於 [2. Program Structure - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/02_program_structure.html){target="_blank"} 所整理的精簡筆記。