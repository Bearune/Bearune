---
category: 前端開發
title: 【JavaScript 學習筆記 04】Data Structures - Objects and Arrays
description: 深入淺出學習 JavaScript 資料結構與操作！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋 JavaScript 中的基礎資料結構（陣列、物件）、屬性與方法、現代 JavaScript 特性（解構賦值、展開運算符、可選鏈運算符）、常用陣列方法（map、filter、reduce）以及實用工具（Math 物件、JSON），幫助你快速掌握 JavaScript 資料處理的核心知識與應用技巧。從基礎概念到進階應用，循序漸進地學習如何有效組織和操作數據，提升程式設計能力。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-01-04
keywords: JavaScript 資料結構, JavaScript 陣列, JavaScript 物件, JavaScript 屬性, JavaScript 方法, JavaScript 可變性, JavaScript 參考型別, JavaScript 基本型別, JavaScript 字串操作, JavaScript 陣列操作, JavaScript 物件操作, JavaScript 解構賦值, JavaScript 展開運算符, JavaScript 可選鏈運算符, JavaScript Math物件, JavaScript JSON, JavaScript 序列化, JavaScript 反序列化, JavaScript 資料處理, JavaScript 資料集, JavaScript 循環, JavaScript for迴圈, JavaScript forEach, JavaScript map, JavaScript filter, JavaScript reduce, JavaScript 最佳實踐, JavaScript 學習筆記, JavaScript 入門教學, JavaScript 範例, JavaScript 資料型別, JavaScript 記憶體管理, JavaScript 淺拷貝, JavaScript 深拷貝, JavaScript 隨機數, JavaScript 數學運算, JavaScript 數據交換, Eloquent JavaScript, JavaScript examples, JavaScript data structures, JavaScript arrays, JavaScript objects, JavaScript properties, JavaScript methods
image: /img/articles/eloquent-JavaScript/cover4.webp

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 04】Data Structures - Objects and Arrays
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover4.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-JavaScript-chapter4
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 資料結構與操作！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記涵蓋 JavaScript 中的基礎資料結構（陣列、物件）、屬性與方法、現代 JavaScript 特性（解構賦值、展開運算符、可選鏈運算符）、常用陣列方法（map、filter、reduce）以及實用工具（Math 物件、JSON），幫助你快速掌握 JavaScript 資料處理的核心知識與應用技巧。從基礎概念到進階應用，循序漸進地學習如何有效組織和操作數據，提升程式設計能力。

sitemap:
  loc: /articles/eloquent-JavaScript-chapter4
  lastmod: 2025-01-04
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> The best programs are those that manage to do something interesting while still being easy to understand.

![【JavaScript 學習筆記 04】Data Structures - Objects and Arrays](/img/articles/eloquent-JavaScript/cover4.webp)

在現代網頁開發中，有效地組織和操作數據是一項關鍵技能。JavaScript 作為一個動態語言，提供了豐富的數據結構和操作方法，讓我們能夠靈活地處理各種複雜的數據需求。本文將深入探討 JavaScript 中的核心數據結構和常用操作方法，從基本的陣列和物件，到現代 JavaScript 的新特性，以及實用的工具和應用。

:anchor

## 資料集（Datasets）

資料集是一個有組織的數據集合，通常使用陣列（Array）或物件（Object）來儲存和管理相關的數據值。

```javascript
// 一個學生成績的資料集（Array）
let studentScores = [85, 92, 78, 95, 88];

// 一個更複雜的學生資料資料集（Object）
let studentData = {
    name: "小明",
    scores: [85, 92, 78],
    age: 15,
    class: "3A"
};
```

就像一個資料的容器，可以有系統地存放和管理相關的資訊，方便我們後續進行存取和處理──陣列與物件正是分別實現這種資料集概念的基本工具之一。

## 屬性（Properties）

#### 1. 什麼是屬性？

屬性是 JavaScript 中物件或值所擁有的特性或資料。除了 `null` 和 `undefined` 外，所有 JavaScript 值都有屬性。

::info
想像一個物件（比如字串、陣列）是一個工具箱：
- **屬性**是工具箱裡東西的特徵（比如螺絲起子的長度或材質）
::

```javascript
// length 是字串的屬性
let myString = "Hello";
console.log(myString.length); // → 5

// PI 是 Math 物件的屬性
console.log(Math.PI); // → 3.141592653589793

// null 沒有屬性
null.length; // → TypeError: null has no properties
```

#### 2. 屬性的特性

1. 唯一性：同一個物件中的屬性名稱必須是唯一的
2. 資料性質：屬性可以儲存各種類型的值
3. 動態性：可以動態添加或刪除
4. 命名規則：
     - 可以使用任何字串作為屬性名
     - 特殊字符或空格需要使用特殊語法訪問

#### 3. 訪問屬性的方式

##### 3.1 點記法（dot notation）

- 最常用且直觀的方式
- 屬性名必須是有效的標識符

```javascript
let person = {name: "John", age: 25};
console.log(person.name); // → "John"
console.log(person.age); // → 25
```

##### 3.2 方括號記法（bracket notation）

- 更靈活的訪問方式
- 可以使用變數或表達式
- 可以使用任何字串作為屬性名

```javascript
let person = {
    name: "Bearune",
    "user-age": 25,
    "favorite color": "blue"
};

// 使用變數
let prop = "name";
console.log(person[prop]); // → "Bearune"

// 特殊屬性名
console.log(person["user-age"]); // → 25
console.log(person["favorite color"]); // → "blue"
```

> 參考：[Property (JavaScript) - 術語表 - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Property/JavaScript){target="_blank"}

## 方法（Methods）

#### 1. 什麼是方法？

方法是 JavaScript 中物件或值所擁有的可執行函式。除了 `null` 和 `undefined` 外，所有 JavaScript 值都繼承了某些方法。

::info
想像一個物件（比如字串、陣列）是一個工具箱：
- **屬性**是工具箱裡東西的特徵（比如螺絲起子的長度或材質）
- **方法**是工具箱裡可以執行的動作（比如使用螺絲起子轉動螺絲）

簡單來說：方法就是「物件可以執行的功能」或「物件可以做的事情」
::

```javascript
// 字串方法示例
let greeting = "Hello";
console.log(greeting.toUpperCase()); // → "HELLO"

// 物件方法示例
let person = {
    name: "John",
    sayHi: function() {
        return "Hi!";
    }
};
```

#### 2. 方法的呼叫方式

方法必須通過其所屬的物件或資料類型來呼叫：

```javascript
let text = "hello world";
console.log(text.toUpperCase()); // → HELLO WORLD（通過點記號呼叫方法）

let arr = [1, 2, 3];
arr.push(4); // → [1, 2, 3, 4]（陣列方法呼叫）
```

#### 3. 內建方法概覽

JavaScript 提供了許多內建方法：

##### 3.1 字串方法

```javascript
let str = " Hello World";
// 字串轉小寫
str.toLowerCase(); // → "hello world"

// 字串轉大寫
str.toUpperCase(); // → "HELLO WORLD"

//移除字串起始及結尾處的空白字元
str.trim(); // → "Hello World"
```
>延伸閱讀：[String 通用方法 - JavaScript - MDN Web Docs ](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String#%E6%96%B9%E6%B3%95){target="_blank"}

##### 3.2 陣列方法

```javascript
let arr = [1, 2, 3];

// 添加元素
arr.push(4); // → [1, 2, 3, 4]

// 移除最後元素
arr.pop(); // → [1, 2, 3]

// join：陣列轉字串（透過 Array 的方法）
arr.join("-"); // → "1-2-3"
```

>延伸閱讀：[Array 方法 - JavaScript - MDN Web Docs ](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#%E6%96%B9%E6%B3%95){target="_blank"}


#### 4. 自定義方法

可以為自己的物件創建自定義方法：

```javascript
let user = {
    name: "Bearune",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    },
};
console.log(user.greet()); // → "Hello, I'm Bearune"
```

## 可變性（Mutability）

我們在[第一章](/articles/eloquent-javascript-chapter1#字串strings){target="_blank"}有提到字串的不可變性，這邊會更詳細解釋 JavaScript 中的可變性概念。

#### 1. 不可變 vs 可變

##### 1.1 不可變（Immutable）

基本型別（Primitive types）都是不可變的，範例如下：

```javascript
let str = "hello";
str.toUpperCase(); // 返回新字串 "HELLO"
console.log(str); // 仍然是 "hello"

str = "bye"; // 這是變數重新賦值（Reassignment），不是改變字串本身

let num = 42;
num.toString(); // 返回新字串 "42"
console.log(num); // 仍然是 42
```

由上述可知：

1. 數字、字串、布林值本身不能被修改
2. 所有的字串操作都會創建新字串
3. 變數可以指向新的字串，但不能修改原有字串的內容

##### 1.2 可變（Mutable）

物件和陣列是可變的，範例如下：

```javascript
let arr = [1, 2, 3];
arr.push(4); // 修改原陣列
console.log(arr); // → [1, 2, 3, 4]

let obj = {x: 1};
obj.y = 2; // 修改原物件
console.log(obj); // → {x: 1, y: 2}

```

#### 2. 基本型別與參考型別

##### 2.1 基本型別

基本型別傳遞值，範例如下：

```javascript
let a = 5;
let b = a; // 複製值
a = 10;
console.log(b); // 仍然是 5
```

##### 2.2 參考型別（參考傳遞）

參考型別傳遞參考（Reference），範例如下：

```javascript
let obj1 = {name: "John"};
let obj2 = obj1; // 複製參考
obj1.name = "Jane";
console.log(obj2.name); // → "Jane"（因為指向同一個物件）
```

#### 3. 變數綁定與值的特性

可以重新賦值並不等於可變性，具體可以看下方比較。

```javascript
// 1. 重新賦值：由 let/const 決定
let x = 1;
x = 2;    // ✅ let 可以重新賦值

const y = 1;
y = 2;    // ❌ const 不能重新賦值

// 2. 可變性：由值的類型決定
const obj = { count: 0 };
obj.count = 1;    // ✅ 物件可變
obj = {};        // ❌ 但不能重新賦值

let str = "hello";
str[0] = "H";    // ❌ 字串不可變

```

##### 可變性 vs 重新賦值

| 概念     | 可變性             | 重新賦值                    |
| -------- | ------------------ | --------------------------- |
| 定義     | 值本身是否可以改變 | 變數是否可以指向新的值      |
| 控制方式 | 由值的類型決定     | 由宣告方式（let/const）決定 |
| 基本型別 | ❌ 不可變           | ✅ let 可以 / ❌ const 不可以 |
| 物件型別 | ✅ 可變             | ✅ let 可以 / ❌ const 不可以 |

簡單來說：

- `let` / `const` 決定能不能重新賦值
- 值的類型決定能不能修改內容

## 陣列（Array）

陣列是 JavaScript 中最基本且最重要的資料結構之一，它提供了一個有序的資料集合。想像它是一個可以存放多個項目的容器。

#### 1. 陣列的建立

```javascript
// 字面值語法
let fruits = ["蘋果", "香蕉", "橘子"];

// Array 建構函數
let numbers = new Array(1, 2, 3);

// 空陣列
let empty = [];
```

陣列具有以下特點：

1. 有序集合：元素按照插入順序排列
2. 異質性：可以存儲不同類型的值
3. 動態長度：可以隨時增加或減少元素
4. 零基索引（Zero-based indexing）：索引從 0 開始計數

```javascript
  let mixedArray = ["文字", 42, true, { name: "物件" }];
```

>延伸閱讀：[從零開始的編號 - 維基百科](https://zh.wikipedia.org/wiki/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E7%9A%84%E7%B7%A8%E8%99%9F){target="_blank"}

#### 2. 陣列的屬性

1. length：返回陣列的長度。
    ```javascript
    let arr = [1, 2, 3];
    console.log(arr.length); // → 3
    ```
2. constructor：返回建立該陣列的函式。
    ```javascript
    console.log([].constructor === Array); // → true
    ```
3. prototype：允許您向陣列添加新的屬性和方法。

#### 3. 陣列的方法

##### 3.1 修改原陣列的方法

- `push()`：在尾部新增
- `pop()`：從尾部刪除
- `unshift()`：在頭部新增
- `shift()`：從頭部刪除
- `splice()`：在陣列中添加/刪除元素

```javascript
let arr = ["a", "b", "c"];
arr.push("d"); // → ["a", "b", "c", "d"]
arr.unshift("x"); // → ["x", "a", "b", "c", "d"]
arr.pop(); // → ["x", "a", "b", "c"]
arr.shift(); // → ["a", "b", "c"]
arr.splice(1, 1, "新元素"); // → ["a", "新元素", "c"]
```

##### 3.2 不修改原陣列的方法

- `slice()`：切片（不改變原陣列）
- `concat()`：合併兩個或多個陣列
- `join()`：將陣列元素連接成字串
- `indexOf()`：搜尋陣列中的元素
- `includes()`：檢查陣列是否包含特定元素

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 3)); // → [2, 3]
console.log(numbers.concat([6, 7])); // → [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.join("-")); // → "1-2-3-4-5"
console.log(numbers.indexOf(3)); // → 2
console.log(numbers.includes(3)); // → true
```

##### 3.3 陣列的訪問與修改

要訪問陣列中的元素，我們使用索引（index）方式。索引代表了元素在陣列中的位置。

```javascript
let numbers = [2, 3, 5, 7, 11];

// 使用索引讀取
console.log(numbers[0]); // → 2

// 使用索引修改
numbers[1] = 4;
console.log(numbers); // → [2, 4, 5, 7, 11]

// 使用變數作為索引
let i = 2;
console.log(numbers[i]); // → 5

// 訪問不存在的索引
console.log(numbers[10]); // → undefined
```

## 字串（String）

我們在 [Chapter 1](/articles/eloquent-javascript-chapter1#字串strings){target="_blank"} 已經有介紹關於字串的基本用法，這裡就不多贅述。

#### 1. 字串的屬性

在 JavaScript 中，字串的自有屬性（own property）只有 `length`。

#### 2. 字串的方法

字串的方法可以在 MDN Web Docs 的 [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#static_methods){target="_blank"} 查找，這裡僅舉幾個常用的例子。

##### 2.1 大小寫轉換：toUpperCase / toLowerCase

```javascript
let str = "Hello World";
console.log(str.toUpperCase());  // → "HELLO WORLD"
console.log(str.toLowerCase());  // → "hello world"
```

##### 2.2 空白處理：trim

```javascript
let str = "   Hello World   ";
console.log(str.trim()); // → "Hello World"
console.log(str.trimStart()); // → "Hello World   "
console.log(str.trimEnd()); // → "   Hello World"
```

##### 2.3 分割與合併：split / join

```javascript
// split：字串轉陣列
let str = "apple,banana,orange";
let arr = str.split(","); // → ["apple", "banana", "orange"]

// join：陣列轉字串（透過 Array 的方法）
console.log(arr.join("-")); // → "apple-banana-orange"
```

##### 2.4 其他常用方法

```javascript
let str = "Hello World";

// 子字串處理
console.log(str.substring(0, 5)); // → "Hello"
console.log(str.slice(6)); // → "World"

// 搜尋與取代
console.log(str.indexOf("World")); // → 6
console.log(str.replace("World", "JavaScript")); // → "Hello JavaScript"

// 字元位置存取
console.log(str.charAt(0)); // → "H"
console.log(str[0]); // → "H"（另一種寫法）

// 包含檢查
console.log(str.includes("World")); // → true
console.log(str.startsWith("Hello")); // → true
console.log(str.endsWith("World")); // → true
```

## 物件（Objects）

物件是 JavaScript 中最基本且最重要的資料結構之一，它提供了一個以鍵值對（key-value pairs）組織的資料集合。

#### 1. 物件的基本概念

##### 1.1 物件是屬性的集合

```javascript
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
```

##### 1.2 物件是參考型別

```javascript
let obj1 = { x: 10 };
let obj2 = obj1; // obj2 指向同一個物件
obj2.x = 20;
console.log(obj1.x); // → 20
```

#### 2. 物件的建立與使用

在 JavaScript 中，有多種創建物件的方式，每種方式都有其特定的使用場景。

##### 2.1 物件字面量（Object Literal）

物件字面量是最直接的方式。

```javascript
const car = {
    brand: "Toyota",
    model: "Camry"
};
```

##### 2.2 建構函式

建構函式適合需要創建多個相似物件的情況。

```javascript
function Person(name) {
    this.name = name;
}
const person1 = new Person("John");
```

##### 2.3 Object.create()

`Object.create()` 是一種特殊的建立物件方式，它允許我們指定一個物件作為新建物件的原型。這種方式特別適合當我們想要建立一個繼承自特定物件的新物件時使用。

```javascript
const personProto = {
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};
const john = Object.create(personProto);
john.name = "John";
console.log(john.greet()); // → "Hello, I'm John"
```

##### 2.4 類別語法（ES6+）

類別語法是現代 JavaScript 的物件導向方式。

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
}
const dog = new Animal("Rex");
```

#### 3. 物件的屬性

我們先建立一個物件，接下來會以這個物件為例：

```javascript
const user = {
    name: "Bearune", 
    email:"bearune.official@gmail.com",
};
```

##### 3.1 屬性存取

1. 直接存取屬性（使用點記號或方括號記法）
    ```javascript
    // 點記法：最常用
    console.log(user.name); // → Bearune

    // 方括號記法：適合動態屬性名
    user["email"] = "bearune.official@gmail.com";
    ```
2. 設置屬性
    ```javascript
    user.age = 25; // 新增或更新屬性
    ```
3. 特殊屬性名
    ```javascript
    let descriptions = {
        work: "Went to work",
        "touched tree": "Touched a tree" // 含空格需要引號
    }
    console.log(descriptions["touched tree"]); // 呼叫函空格的 key 需要使用方括號記法
    ```

##### 3.2 檢查屬性是否存在

基本的檢查方法可以參考下列三種：

1. `in` 運算符
   - 會檢查整個原型鏈
2. `hasOwnProperty()` 實例方法
   - 只檢查自有屬性
3. `Object.hasOwn()` 靜態方法
   - 是最新也最推薦的方式
   - 同 `hasOwnProperty()`，但更安全

```javascript
// 方法 1：in 運算符
"name" in user;

// 方法 2：hasOwnProperty 實例方法
user.hasOwnProperty("name");

// 方法 3：Object.hasOwn 靜態方法
Object.hasOwn(user, "name");
```

#### 4. 物件的方法

物件的方法可以在 MDN Web Docs 的 [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods){target="_blank"} 查找，這裡僅舉幾個常用的例子。

##### 4.1 Object.keys()

`Object.keys()` 是一個將物件所有的鍵名（key）提取成陣列的方法。

```javascript
Object.keys({x: 0, y: 0, z: 2}); // → [x, y, z]
```

##### 4.2 Object.values()

`Object.values()` 是一個將物件所有的值（value）提取成陣列的方法。

```javascript
Object.values({x: 0, y: 0, z: 2}); // → [0, 0, 2]
```

##### 4.3 Object.entries()

`Object.entries()` 是一個將物件轉換成 [key, value] 形式陣列的方法

```javascript
Object.values({x: 0, y: 0, z: 2}); // → [["x", 0], ["y", 0], ["z", 2]]
```
##### 4.4 Object.assign()

`Object.assign()` 是一個將一個或多個來源物件的屬性複製到目標物件的方法。

```javascript
// 將新的屬性合併到 user 物件中
Object.assign(user, {b: 3, c: 4});

console.log(user);
// {
//     name: "Bearune",
//     email: "bearune.official@gmail.com",
//     b: 3,
//     c: 4
// }
```

#### 5. 物件的比較與複製

##### 5.1 物件比較

- 物件比較時，`===` 比較的是參考（記憶體位址），所以就算兩個物件長得一模一樣，若是參考不同就會視為 `false`。
- JavaScript 沒有內建的深度比較方法，但有多種方式可以實現物件內容的比較：
  - 淺層比較：可以用 `Object.keys()`
  - 深層比較：可以用 `JSON.stringify()` 或自己實作遞迴比較

```javascript
// 參考比較
let obj1 = {value: 10};
let obj2 = {value: 10};
console.log(obj1 === obj2); // → false（不同參考）

// 相同參考
const obj1 = {x: 1};
const obj2 = obj1;
console.log(obj1 === obj2); // → true
```

##### 5.2 物件複製

1. 淺拷貝
    ```javascript
    const original = {x: 1, y: {z: 2}};
    const shallowCopy1 = Object.assign({}, original);
    const shallowCopy2 = {...original};
    // 淺拷貝只複製一層，內部物件仍然共享參考
    shallowCopy1.y.z = 3;
    console.log(original.y.z); // → 3
    ```
1. 深拷貝
    ```javascript
    const deepCopy = JSON.parse(JSON.stringify(original));
    // 深拷貝建立完全獨立的副本
    deepCopy.y.z = 4;
    console.log(original.y.z); // → 3

    // 注意：JSON.stringify() 的限制
    // - 無法處理函式
    // - 無法處理 undefined
    // - 無法處理循環參考 
    ```

## 資料操作（Data Manipulation）

#### 1. 陣列循環

陣列循環是處理陣列資料最基本的操作方式。JavaScript 提供了多種循環方法，每種方法都有其適用場景。

##### 1.1 傳統 for 循環

最基本且最靈活的循環方式，適合需要精確控制迭代過程的場景。

```javascript
const numbers = [1, 2, 3, 4, 5];

// 基本用法
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 反向遍歷
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// 步進值控制
for (let i = 0; i < numbers.length; i += 2) {
    console.log(numbers[i]); // 只輸出偶數索引的元素
}
```

##### 1.2 for...of 循環

ES6 引入的新語法，提供了更簡潔的遍歷方式，適合需要遍歷所有元素的場景。

```javascript
const fruits = ['apple', 'banana', 'orange'];

// 基本用法
for (const fruit of fruits) {
    console.log(fruit);
}

// 搭配解構賦值
const entries = [['name', 'John'], ['age', 30]];
for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}
```

##### 1.3 forEach 方法

函數式編程方法，提供了更優雅的遍歷方式，特別適合需要對每個元素執行相同操作的場景。

```javascript
const numbers = [1, 2, 3, 4, 5];

// 基本用法
numbers.forEach(num => console.log(num));

// 使用索引
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// 使用完整參數
numbers.forEach((num, index, array) => {
    console.log(`${num} is at index ${index} in ${array}`);
});
```

#### 2. 現代 JavaScript 特性

##### 2.1 其餘參數和展開運算符

使用 `...` 語法可以更靈活地處理陣列和物件。

1. 其餘參數（Rest Parameters）  
   - 用於函數定義，收集多個參數到一個陣列中。
   - 只能出現在參數列表最後
   - 一個函數只能有一個其餘參數
    ```javascript
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3, 4)); // → 10
    ```
2. 展開運算符（Spread Operator）
   - 用於展開物件
   - 可用於函數調用、陣列字面量、物件字面量
   - 對於物件，重複的屬性以最後一個為準

    ```javascript
    // 陣列展開
    const numbers = [1, 2, 3];
    const moreNumbers = [...numbers, 4, 5];
    console.log(moreNumbers); // → [1, 2, 3, 4, 5]

    // 物件展開
    const defaults = { theme: 'light', fontSize: 12 };
    const userSettings = { ...defaults, fontSize: 14 };
    console.log(userSettings); // → { theme: 'light', fontSize: 14 }
    ```

##### 2.2 解構賦值（Destructuring）

允許從陣列和物件中提取值並賦給變數，使程式碼更簡潔。

```javascript
// 陣列解構
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // → 1
console.log(second); // → 2
console.log(rest); // → [3, 4, 5]

// 物件解構
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// 基本解構
const { name, age } = user;
console.log(name); // → "John"
console.log(age); // → "30"

// 巢狀解構
const { address: { city } } = user;
console.log(city); // → "New York"

// 設定預設值
const { career = 'Unknown' } = user;
console.log(career); // → "Unknown"

// 重命名
const { name: userName } = user;
console.log(userName); // → "John"
```

##### 2.3 可選鏈運算符（Optional Chaining Operator）

可選鏈運算符 `?.` 允許我們安全地存取可能為 `null` 或 `undefined` 的物件屬性，避免出現錯誤。

```javascript
const user = {
    name: 'John',
    details: {
        address: {
            street: 'Main St'
        }
    }
};

// 寫法1：不使用可選鏈
const street1 = user.details && user.details.address && user.details.address.street; // → "Main St"

// 寫法2：使用可選鏈
const street2 = user.details?.address?.street; // → "Main St"

// 寫法3：搭配空值合併運算符
const street3 = user.details?.address?.street ?? 'Unknown'; // → "Main St"

// 方法調用
const result = user.someMethod?.(); // → undefined

```

#### 3. 實用的陣列方法

現代 JavaScript 提供了許多強大的陣列方法，可以更有效地處理資料，具體可以閱讀 MDN Web Docs 的 [Instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)。

```javascript
const numbers = [1, 2, 3, 4, 5];

// map：轉換陣列元素
const doubled = numbers.map(x => x * 2);
// → [2, 4, 6, 8, 10]

// filter：過濾陣列元素
const evens = numbers.filter(x => x % 2 === 0);
// → [2, 4]

// reduce：將陣列縮減為單一值
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// → 15

// find：尋找符合條件的第一個元素
const found = numbers.find(x => x > 3);
// → 4

// some：檢查是否有元素符合條件
const hasEven = numbers.some(x => x % 2 === 0);
// → true

// every：檢查是否所有元素都符合條件
const allPositive = numbers.every(x => x > 0);
// → true
```

## 工具與應用

了解完如何完轉資料集，這邊再額外介紹一些書裡提到的工具與應用。

#### 1. Math 物件

Math 物件提供了執行數學運算的屬性和方法。它是一個靜態物件，不需要建立實例就能使用。

##### 1.1 數學運算與函數

```javascript
// 基本常數
console.log(Math.PI); // → 3.141592653589793
console.log(Math.E); // → 2.718281828459045

// 基本運算
console.log(Math.abs(-5)); // → 5（絕對值）
console.log(Math.pow(2, 3)); // → 8（冪次方）
console.log(Math.sqrt(16)); // → 4（平方根）

// 三角函數
console.log(Math.sin(Math.PI / 2)); // → 1
console.log(Math.cos(0)); // → 1
console.log(Math.tan(Math.PI / 4)); // → 1

// 對數運算
console.log(Math.log(Math.E)); // → 1（自然對數）
console.log(Math.log10(100)); // → 2（以10為底的對數）
```

##### 1.2 隨機數生成

```javascript
// 基本隨機數
console.log(Math.random()); // → 0 到 1 之間的隨機數（不含1）

// 生成特定範圍的隨機整數
function getRandomInt(min, max) {
    min = Math.ceil(min); // 向上捨入至整數
    max = Math.floor(max); // 向下捨入至整數
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 6)); // → 1 到 6 之間的隨機整數（模擬骰子）

// 隨機選取陣列元素
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(getRandomElement(fruits)); // → 隨機水果
```

::info
**補充：偽隨機數**  
JavaScript 的 `Math.random()` 使用確定性算法生成隨機數。這種方法通過精心設計的數學公式，將一個初始種子值轉換成看似隨機的數列。這些數字具有良好的統計特性，但因為算法是確定性的，所以嚴格來說不是真正的隨機。
::

##### 1.3 數值處理

```javascript
// 捨入函數（至整數）
console.log(Math.round(3.6)); // → 4（四捨五入）
console.log(Math.floor(3.6)); // → 3（向下捨入）
console.log(Math.ceil(3.2)); // → 4（向上捨入）

// 最大值和最小值
console.log(Math.max(1, 5, 3)); // → 5
console.log(Math.min(1, 5, 3)); // → 1

// 使用展開運算符處理陣列
const numbers = [1, 5, 3];
console.log(Math.max(...numbers)); // → 5

// 數值的精確處理
function roundToDecimal(number, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(number * factor) / factor;
}

console.log(roundToDecimal(3.14159, 2)); // → 3.14
```

#### 2. JSON

JSON（JavaScript Object Notation）是一種輕量級的資料交換格式，被廣泛用於網路應用程式中的資料傳輸。

JSON 是一個簡單但強大的數據交換格式，特別適合於：
- 網路數據傳輸
- 配置文件
- 數據存儲
- 跨語言數據交換

##### 2.1 JSON 基礎

```javascript
// ❌ 不允許的 JSON 格式
{
    name: "Bearune", // 屬性名稱必須使用雙引號
    calculate: function(), // 不允許函數
    data: undefined, // 不允許 undefined
    // 這是註釋 // 不允許註釋
}

// ✅ 正確的 JSON 格式
{
    "name": "Bearune",
    "age": 25,
    "isStudent": true,
    "hobbies": ["reading", "gaming"],
    "address": {
        "city": "Toronto",
        "country": "Canada"
    }
}
```

##### 2.2 序列化與反序列化

- 序列化（Serialization）是將程式中的物件或資料結構轉換為可儲存或傳輸的格式的過程。
- 反序列化（Deserialization）則是將已序列化的資料轉換回原始物件的過程。

以 JSON 為例：

```javascript
// 原始物件
const user = {
    name: "Bearune",
    age: 25,
    hobbies: ["reading", "gaming"],
    address: {
        city: "Taipei",
        street: "Main St."
    }
};

// 序列化：物件 → 字串
const serializedData = JSON.stringify(user);
console.log(typeof serializedData); // → "string"
console.log(serializedData);
// → '{"name":"Bearune","age":25,"hobbies":["reading","gaming"],"address":{"city":"Taipei","street":"Main St."}}'

// 反序列化：字串 → 物件
const deserializedData = JSON.parse(serializedData);
console.log(typeof deserializedData); // → "object"
console.log(deserializedData.name); // → "Bearune
```

##### 2.3 JSON 限制

1. JSON 不支援某些的數據類型
    ```javascript
    const data = {
        // 1. 函數
        function: () => console.log('Hello'),
        method: function() { return 42; },
        
        // 2. undefined
        undefined: undefined,
        undefinedValue: void 0,
        
        // 3. Symbol
        symbol: Symbol('test'),
        symbolKey: Symbol.for('key'),
        
        // 4. 日期物件
        date: new Date(),
        
        // 5. 正則表達式
        regex: /hello/g,
        
        // 6. Map 和 Set
        map: new Map([['key', 'value']]),
        set: new Set([1, 2, 3]),
        
        // 7. 正常值（用於比較）
        string: 'Hello',
        number: 42,
        boolean: true,
        null: null,
        array: [1, 2, 3]
    };

    console.log(JSON.stringify(data));
    // 輸出：
    // {
    // "date":"2025-01-04T19:05:34.856Z",
    // "regex":{},
    // "map":{},
    // "set":{},
    // "string":"Hello",
    // "number":42,
    // "boolean":true,
    // "null":null,
    // "array":[1,2,3]
    // }
    ```
2. 循環引用無法序列化
    ```javascript
    // 循環引用會導致錯誤
    const obj = {};
    obj.self = obj;
    /*
    obj = {
        self: {
            self: {
                self: {
                    // 無限循環...
                }
            }
        }
    }
    */

    try {
      // 永遠無法到達終點，最終拋出 "Converting circular structure to JSON" 錯誤
      JSON.stringify(obj);
    } catch (e) {
      console.log("循環引用無法序列化");
    }
    ```
  3. 特殊值處理
      ```javascript
      console.log(JSON.stringify({
          // 數值類型的特殊值
          number: NaN, // → null
          positiveInfinity: Infinity, // → null
          negativeInfinity: -Infinity, // → null
          
          // null 值
          null: null, // → null（保持不變）
          
          // 其他特殊值
          undefined: undefined, // → 被忽略（不會出現在結果中）
          function: () => {}, // → 被忽略
          symbol: Symbol('test'), // → 被忽略
          
          // 正常數值
          regularNumber: 123, // → 123（正常序列化）
          zero: 0, // → 0
          negativeZero: -0 // → 0
      }));

      // 輸出：
      // {
      // "number":null,
      // "positiveInfinity":null,
      // "negativeInfinity":null,
      // "null":null,
      // "regularNumber":123,
      // "zero":0,
      // "negativeZero":0
      // } 
      ```

##### 2.4 資料交換應用

1. API 通訊
    ```javascript
    // 發送 HTTP 請求
    fetch('api/users')
        .then(response => response.json())  // 解析 JSON 響應
        .then(data => console.log(data));
    ```
2. 本地存儲
    ```javascript
    // 儲存到 localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // 讀取從 localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));
    ```
3. 配置文件
    ```javascript
    // config.json
    {
        "apiUrl": "https://api.example.com",
        "timeout": 5000,
        "debug": false
    }
    ```

## 總結

在這篇文章中，我們深入探討了 JavaScript 中的數據結構和操作方法：

1. 基礎數據結構
   - 陣列（Array）：有序集合的實現
   - 物件（Object）：鍵值對的組織方式
   - 屬性（Properties）和方法（Methods）的概念和使用
2. 現代 JavaScript 特性
   - 解構賦值
   - 展開運算符
   - 可選鏈運算符
   - 其他實用的陣列方法
3. 實用工具與應用
   - Math 物件：數學運算和隨機數生成
   - JSON：數據交換和序列化

以上內容是基於 [4. Data Structures: Objects and Arrays - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/04_data.html) 所整理的精簡筆記。