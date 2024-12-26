---
category: 前端開發
title: 【JavaScript 學習筆記 02】Chapter 2 Program Structure
description: 深入淺出學習 JavaScript 程式結構！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋表達式與語句、變數綁定與命名規則、函式定義與回傳值、控制流程（條件語句與迴圈）、程式風格最佳實踐等核心知識，幫助你快速掌握 JavaScript 程式設計的基礎概念與實用技巧。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2024-12-25
keywords: JavaScript, JavaScript 基礎, JavaScript 教學, JavaScript 表達式, JavaScript 語句, JavaScript 變數, JavaScript 綁定, JavaScript 命名規則, JavaScript 函式, JavaScript 回傳值, JavaScript 控制流程, JavaScript if-else, JavaScript switch, JavaScript 迴圈, JavaScript while 迴圈, JavaScript do 迴圈, JavaScript for 迴圈, JavaScript 程式風格, JavaScript 縮排, JavaScript 註解, JavaScript 命名慣例, JavaScript Pascal 命名法, JavaScript Camel Case, JavaScript Snake Case, JavaScript 程式設計, JavaScript 入門, JavaScript 學習筆記, JavaScript 範例, Eloquent JavaScript, JavaScript, JavaScript basics, JavaScript tutorial, JavaScript expressions, JavaScript statements, JavaScript variables, JavaScript bindings, JavaScript naming rules, JavaScript functions, JavaScript return values, JavaScript control flow, JavaScript if-else, JavaScript switch, JavaScript loops, JavaScript while loop, JavaScript do loop, JavaScript for loop, JavaScript coding style, JavaScript indentation, JavaScript comments, JavaScript naming conventions, JavaScript Pascal Case, JavaScript Camel Case, JavaScript Snake Case, JavaScript programming, JavaScript for beginners, JavaScript learning notes, JavaScript examples, Eloquent JavaScript
image: /img/articles/eloquent-JavaScript/cover2.webp

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 02】Chapter 2 Program Structure
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

## 表達式 Expression

Expression 是能產生一個值的代碼片段。

- 例如：`22`、``"psychoanalysis"``、`1 + 1` 都是表達式。
- 表達式的作用類似於語言中的「句子片段」，它們可以組合成更複雜的計算。

## 語句 Statement

Statement 是程式碼中的完整指令，通常用來執行某些動作。

- Statement 與 Expression 的區別
    - Expression 產生值，但 statement 則是完整的指令。
    - Statement 可以包含 expression，但 statement 可能會對外界產生影響（例如顯示輸出或改變機器的狀態），這種影響稱為「side effects」。

```javascript
1; // Statement，沒有任何副作用。
console.log("Hello"); // Statement，具有副作用：在控制台顯示 "Hello"。
```

## 綁定 Bindings

Bindings 是程式用來記住數值或狀態的一種方式，也是我們比較常說的**變數（variable）**，以下皆以變數稱之。

因為程式需要記住某些值或狀態（例如：計算結果或用戶資料）。而變數是用來「抓住」這些值的工具；若沒有變數，計算出的新值會立即消失，無法再被使用。我們不僅可以儲存變數，更可以更新變數：

- 存取變數  
    ```javascript
    let caught = 5 * 5;
    ```
- 更新變數  
    ```javascript
    let mood = 'light';
    console.log(mood); // → light
    mood = 'dark';
    console.log(mood); // → dark
    ```

#### let、var 和 const

##### let

- 現代 JavaScript 中用於創建變數的主要方式。
- 區塊範疇（block scope），更安全且易於控制。

> 延伸閱讀：[[JavaScript] 範疇（Scope）](https://hackmd.io/@lunzaizai/H1cR8kB8t){target="_blank"}

##### var

- 舊版 JavaScript 中的變數方式，現在較少使用。
- 它的行為與 `let` 有些不同（例如：不受區塊範疇限制），詳細差異會在後續章節提及。

##### const

用於創建常量綁定，綁定的值在其生命週期內不能被重新賦值，就是不能改變。

```javascript
const greeting = "Hello";
console.log(greeting); // → Hello

greeting = "Bye";
console.log(greeting); // 會報錯
```

::info
**小結**

- `let` 是現代首選：更安全且範疇更清晰。
- `const` 適用於常量，可以提高程式的可讀性和可靠性。
- 避免使用 `var`，因其行為不直觀，應盡量避免使用。
::

#### 初始化

- 如果變數在定義時沒有賦值，則它的值為 `undefined`。  
    ```javascript
    let emptyBinding;
    console.log(emptyBinding); // → undefined
    ```
- 可以在一個 statement 中定義多個變數，並用逗號分隔。但為了可讀性，我個人**不建議這麼做**。
    ```javascript
    let one = 1, two = 2;
    console.log(one + two); // → 3
    ```

#### 變數名稱命名規則

##### 有效名稱

- 主要由一個或多個字母組成
- 可以包含數字，但**不能以數字開頭**。
- 可以包含 **`$`** 和 **`_`**，但不可包含其他標點符號或特殊字符（如：`@`、`#`等）。
```javascript
let catch22 = "valid"; // 合法
let 22catch = "invalid"; // 非法，會產生語法錯誤
let $name = "valid"; // 合法
let _name = "valid"; // 合法
```

##### 關鍵字 Keywords

JavaScript 中有一些具有特殊意義的詞，稱為 keywords，不能用作變數名稱。

```javascript
let let = 5; // 語法錯誤，因為 "let" 是 keywords
```

##### 保留字 Reserved Words

有些詞雖然目前在 JavaScript 中未被使用，但被保留為未來版本的 keywords，這些詞也不能用作變數名稱。

##### 關鍵字及保留字列表

```javascript
break, case, catch, class, const, continue, debugger, default,
delete, do, else, enum, export, extends, false, finally, for,
function, if, implements, import, interface, in, instanceof, let,
new, package, private, protected, public, return, static, super,
switch, this, throw, true, try, typeof, var, void, while, with, yield
```

## 函式 Functions

Function 是一段能重複運行的程式碼片段，可以透過呼叫來執行。呼叫 function 需要在函式名稱後面加上括號，而括號中的內容稱為**參數（arguments）**。
```javascript
prompt("Enter passcode");
```

#### 回傳值 Return Values

有些函式執行後會生成一個值，這個值稱為回傳值（return values）。

##### 實例

`Math.max` 是一個內建函式，用於返回多個數字中的最大值。

```javascript
console.log(Math.max(2, 4)); // → 4
```

而返回值也可以作為更大表達式的一部分來運算：

```javascript
console.log(Math.min(2, 4) + 100); // → 102
```

::info
**小結**
- 函式呼叫本身是一個 expression，因為它能生成值。
- 函式返回的值可以直接使用於 expression 中，或進一步處理。
::

## 控制流程 Control flow

當程式包含多個 statement，這些 statement 正常情況下會由上至下執行。

#### 有條件執行

並非所有項目都是筆直的道路，當程式需要根據某個值執行不同的動作時，可以使用 `if-else` 語句或 `switch` 語句。

##### if-else

```javascript
if (1 + 1 == 2) console.log("It's true");
// → It's true
```

##### switch

`switch` 結構清晰，適合多條件分派，但語法稍顯笨重，且較容易因為忘記加 `break` 出錯。

```javascript
switch (expression) {
  case value1:
    // 執行的程式碼
    break;
  case value2:
    // 執行的程式碼
    break;
  default:
    // 當沒有匹配的值時執行
    break;
}
```

1. `switch` 會檢查 expression，並從匹配的 `case` 開始執行；如果沒有匹配的值，執行 `default` 區塊。
2. 如果一個 `case` 區塊中沒有 `break`，無論是否匹配，程式會繼續執行下一個 `case` 的程式碼，所以 `break` 非常重要。

::info
**小結**

- 當處理複雜條件（例如：範圍檢查）時，`if-else` 會更加靈活。
- 當條件值是固定的（例如：字串或數字）時，`switch` 會更加直觀。
::

#### 循環執行 Loops

##### While Loops

以 `while` 開頭的 statement 會建立一個迴圈，判斷括號裡的 statement 是否為 `true`，若為 `true` 則進入迴圈，直到括號裡的 statement 為 `false`，結束迴圈。

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

##### Do Loops

和 `while` 不一樣的是，`do` 會在第一次執行後才測試是否停止，也就是說 `do` loop 至少會執行一次。

```javascript
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);
```

##### For Loops

提到 `for` 迴圈，可以先了解許多迴圈遵循的計數器模式：

1. 初始化：定義一個計數器（counter）來追蹤迴圈的進度。
2. 條件檢查：使用條件表達式檢查是否繼續執行迴圈。
3. 更新狀態：在每次迴圈結束時更新計數器的值。

而使用 `while` 時，上述步驟通常是分散的：

```javascript
let number = 0; // 1. 初始化
while (num <= 12) { // 2. 條件檢查
  console.log(num);
  num = num + 2; // 3.更新狀態
}
```

`for` 迴圈就是將「初始化」、「條件檢查」和「更新狀態」集中在一起，讓結構更清晰：

```javascript
for (let num = 0; num <= 12; num = num + 2) {
  console.log(num);
}
```

1. 初始化：`let num = 0`
2. 條件檢查：`num <= 12`
3. 更新計數器：`num = num + 2`

##### 打破循環

條件檢查得出 `false` 並不是唯一完成循環的方法，若在中間想提早結束循環，可以使用 `break`。
例如：以下程式使用`break`，只要找出第一個大於或等於 20 且能被 7 整除的數字就跳出迴圈：
```javascript
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
// → 21
```

## 程式風格 Coding Style

#### 分號

在 JavaScript 中，分號用於結束語句。雖然 JavaScript 可以選擇不加分號，但某些情況下可能會導致代碼被錯誤解讀，因此若對分號省略的規則不熟悉，為了避免潛在錯誤，建議在每個語句結尾都加上分號，這是更安全的做法。

> 延伸閱讀：[JS 加不加分號差在哪？ | 卡斯伯's Blog](https://www.casper.tw/development/2020/09/20/js-semi/){target="_blank"}

#### 縮排

縮排可以增加程式碼的可讀性，沒有縮排電腦也能正常接受程式，但人類會不好讀。並且根據喜好不同，有人喜歡使用四個空格、有人喜歡用兩個空格代表縮排，都是可以的。

#### 大寫

當我們想要明確的命名一個變數時，因為變數名稱不包含空格，但依舊可以使用多個單字來描述變數內容，大抵有這四種習慣寫法：
```javascript
fuzzylittleturtle
fuzzy_little_turtle // Snake Case
FuzzyLittleTurtle // Pascal
fuzzyLittleTurtle // Lower Camel-Case
```
最後一種命名方法是大多數程式設計師會遵循的風格──除了第一個單字以外的每個單字開頭都大寫，也稱為 Lower Camel-Case。無論使用哪一種方法，同一份專案遵循相同的約定會讓程式碼更加和諧。

>延伸閱讀：[常見的命名規則(Camel Case, Snake Case, Kebab Case)](https://blog.camel2243.com/posts/common-naming-convention-camel-case-snake-case-kebab-case/)

#### 註解

原始程式碼有時無法清楚表達程式的意圖，或者可能過於晦澀難懂，這時候註解可以補充說明，幫助程式的讀者理解程式碼的功能與邏輯；同時註解也方便記錄與程式相關的想法、背景資訊等內容，方便後續維護。最棒的是註解不會對程式有任何影響。

1. 單行註解 `//`  
    ```javascript
    let accountBalance = calculateBalance(account); // 計算帳戶餘額
    accountBalance.adjust(); // 調整餘額
    ```

2. 多行註解 `/**/`  
    ```javascript
    /*
    這段程式碼用於處理帳戶餘額。
    它會先計算餘額，然後進行調整，
    最後將結果加入報告中。
    */
    const myNumber = 11213;
    ```
> 延伸閱讀：[常用註解標籤 - TODO、FixMe、XXX](https://hackmd.io/@CynthiaChuang/Common-Comment-Keywords){target="_blank"}

## 總結

現在我們知道程式是由 statement 建構的，statement 可以包含更多更小的 statement。而這些 statement 通常都會包含 expression，並且 expression 還可以由更小的 expression 組成。

我們可以透過有條件執行（`if-else` 及 `switch`）、循環迴圈（`while`、`do` 及 `for`）statement 控制流程的走向。

在我們的程式中，變數用於儲存資料，環境是所有變數的集合，JavaScript 也提供了一些標準變數，讓我們可以更便利的寫程式。
最後，function 是一段可重複使用的程式碼，可以接受參數並返回結果。

以上內容是基於 [2. Program Structure - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/02_program_structure.html){target="_blank"} 所整理的精簡筆記。