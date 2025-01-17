---
category: 前端開發
title: 【JavaScript 學習筆記 06】物件導向 Chapter 6 The Secret Life of Objects
description: 深入淺出學習 JavaScript 物件導向程式設計！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從物件導向的基本思維出發，探討封裝、繼承、多型等核心特性的重要性，並深入介紹 JavaScript 中類別與物件的概念與應用。內容包含物件導向的基礎觀念、JavaScript 特有的原型繼承系統，以及現代 JavaScript 中 Map 和 Symbol 的實際應用案例，幫助你掌握 JavaScript 中物件導向程式設計的技巧。從基礎觀念到實務應用，循序漸進地學習如何運用物件導向的方法來組織程式碼，提升程式的可維護性與擴展性。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-01-09
keywords: JavaScript 物件導向, JavaScript 類別, JavaScript 物件, JavaScript 繼承, JavaScript 多型, JavaScript 封裝, JavaScript 原型, JavaScript 原型鏈, JavaScript this, JavaScript constructor, JavaScript 建構子, JavaScript 實例, JavaScript Map, JavaScript Symbol, JavaScript 物件方法, JavaScript 靜態方法, JavaScript getter, JavaScript setter, JavaScript 存取器, JavaScript class, JavaScript 類別繼承, JavaScript extends, JavaScript super, JavaScript instanceof, JavaScript new 運算子, JavaScript 物件複製, JavaScript 物件屬性, JavaScript 私有屬性, JavaScript 程式設計, JavaScript 最佳實踐, JavaScript 學習筆記, JavaScript 入門教學, JavaScript 範例, Eloquent JavaScript, Object-oriented Programming, JavaScript OOP, JavaScript examples
image: /img/articles/eloquent-JavaScript/cover6.webp
draft: false

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 06】物件導向 Chapter 6 The Secret Life of Objects
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover6.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter6
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 物件導向程式設計！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記從物件導向的基本思維出發，探討封裝、繼承、多型等核心特性的重要性，並深入介紹 JavaScript 中類別與物件的概念與應用。內容包含物件導向的基礎觀念、JavaScript 特有的原型繼承系統，以及現代 JavaScript 中 Map 和 Symbol 的實際應用案例，幫助你掌握 JavaScript 中物件導向程式設計的技巧。從基礎觀念到實務應用，循序漸進地學習如何運用物件導向的方法來組織程式碼，提升程式的可維護性與擴展性。

sitemap:
  loc: /articles/eloquent-javascript-chapter6
  lastmod: 2025-01-09
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> An abstract data type is realized by writing a special kind of program […] which defines the type in terms of the operations which can be performed on it.── Barbara Liskov, Programming with Abstract Data Types

![【JavaScript 學習筆記 06】物件導向 Chapter 6 The Secret Life of Objects](/img/articles/eloquent-JavaScript/cover6.webp)

本文深入探討 JavaScript 中物件導向程式設計的核心概念，從基礎的類別與物件定義，到進階的繼承機制與多型應用。透過實際的程式碼範例，說明如何運用封裝、繼承、多型等物件導向的重要特性來組織和管理程式碼。同時也介紹了 JavaScript 特有的原型系統，以及 `Map`、`Symbol` 等現代 JavaScript 的重要功能。

:anchor

## 物件導向基礎概念

物件導向程式設計（Object-Oriented Programming, OOP）是一種以「物件」為中心的程式設計方法。它包含四個核心概念：物件導向思維作為基礎，封裝、繼承、多型作為三大特性，抽象資料類型作為設計方法，以及物件與類別作為實現手段。這些概念相互關聯，共同構成了完整的物件導向體系。

![OOP基礎概念架構](/img/articles/eloquent-JavaScript/OOP基礎概念架構.svg)


#### 1. 物件導向思維

物件導向思維是整個 OOP 的核心理念。它教導我們用物件的方式思考問題，將現實世界的實體對應到程式中的物件，這樣的思維方式讓程式設計更直觀、更容易理解和維護。

##### 例子：把果汁機想像成一個物件

以果汁機為例，它內部雖然包含複雜的機械結構和電路設計，但製造商將這些專業知識都隱藏在簡潔的外殼之下。使用者只需要知道如何操作幾個按鈕，就能輕鬆打出一杯果汁，完全不必了解內部的運作原理。只提供簡單的操作介面，既提高了使用效率，也避免了不必要的複雜度。畢竟每個想打果汁的人若是都要先學習材料科學和電學，那這果汁不喝也罷（翻桌）。

> 在 JavaScript 中，除了基本型別（primitive types）外，幾乎所有東西都是物件，包括函數、陣列、字串等。

#### 2. 封裝、繼承、多型

##### 2.1 封裝（Encapsulation）

把複雜的內部實作隱藏起來，只提供簡單的操作介面，就像使用電視時只要會按遙控器就好，不需要懂得電視內部的電路設計。

##### 2.2 繼承（Inheritance）

讓新類別可以繼承現有類別的特性，就像狗和貓（新類別）都繼承了動物（現有類別）的基本特徵（有生命、會呼吸、需要吃東西等），但各自又有自己獨特的行為。

##### 2.3 多型（Polymorphism）

同樣的操作方式可以應用在不同類型的物件上，就像`按下開關`這個動作可以用在電燈、電扇、電視等不同電器上，雖然每個電器打開後的行為都不同。

::info
這三個概念合在一起就構成了物件導向程式設計的核心：

- 封裝：隱藏複雜性，提供簡單介面
- 繼承：重用現有程式碼，建立類別階層
- 多型：用統一的方式處理不同類型的物件
::

在理解了物件導向的基本思維和三大特性後，我們需要一個方法來組織和設計我們的程式。這就是抽象資料類型的概念……

#### 3. 抽象資料類型（Abstract Data Types）

抽象資料類型（ADT）是一種程式設計的組織單位，它著重於：

✅ 定義「是什麼」和「能做什麼」  
❌ 不管「怎麼做到」

具體來說，ADT 定義了：

1. 一組資料的本質
2. 這些資料可以執行的操作（介面）
3. 不涉及具體實作細節

::info

**💡 經典範例：堆疊（Stack）**  
- 它定義了什麼是堆疊（後進先出的資料結構）
- 它定義了可以對堆疊做什麼操作（push、pop、peek）
- 但它不關心這些操作是用陣列還是鏈表來實現的
::

::info
**ADT 與物件導向的關係**

- 提供定義類別介面的方法
- 支援資料抽象化的概念
- 幫助實現封裝原則
::

有了抽象資料類型的概念，我們來看看如何用類別和物件來具體實現這些抽象概念……

#### 4. 類別與物件

類別（Class）是一個模板或藍圖，而物件（Object）是根據這個模板創建出來的實例，這種關係支援了程式碼的重用和組織，是物件導向程式設計的基石。


::info
以簡單的比喻來說：
- 類別 ＝ 動物種類（貓）
- 物件 ＝ 具體的動物個體（小黑、大橘等）
::

- 一個類別可以有多個物件（貓這個物種可以有很多隻具體的貓）
- 每個物件都有自己的屬性，但共享類別定義的方法（每隻貓都有自己的年齡、毛色，但是所有的貓都會「喵喵叫」）。
- 物件是類別的實例化結果，代表了真實世界中的具體事物（真實存在的某一隻貓）

```javascript
// 貓的類別（定義了所有貓的共同特徵）
class Cat {
    constructor(name, color, age) {
        this.name = name;    // 名字（屬性）
        this.color = color;  // 毛色（屬性）
        this.age = age;      // 年齡（屬性）
    }
    meow() {                 // 所有的貓都會喵喵叫（共享的方法）
        return `${this.name}：喵喵！`;
    }
}
// 創建不同的貓（物件）
const blackCat = new Cat("小黑", "黑色", 3);
const whiteCat = new Cat("小花", "白色", 2);
console.log(blackCat.meow()); // 輸出：小黑：喵喵！
console.log(whiteCat.meow()); // 輸出：小花：喵喵！
```

#### 小結

::info
這四個概念形成了一個完整的體系：

1. 物件導向思維幫助我們以物件的方式思考問題
2. 三大特性（封裝、繼承、多型）提供實現機制
3. 抽象資料類型提供了高層次的設計方法
4. 物件與類別則提供具體的程式實現方式
::


## 類別與物件的實作

想像我們要創建一個「貓咪模擬器」，需要有很多不同的貓咪，每隻都有自己的特性和行為。這就是物件導向程式設計(OOP)的核心思想──使用物件作為程式的組織單位。

![類別與物件實作架構](/img/articles/eloquent-JavaScript/類別與物件實作架構.svg)

#### 1. 類別定義 (Class Definition)

類別就像是一個「貓咪製造說明書」，定義了：

- 貓咪應該具備什麼特徵（屬性）
- 貓咪能做什麼事情（方法）

```javascript
class Cat {
  constructor(name, color) {
    this.name = name; // 特徵：名字
    this.color = color; // 特徵：毛色
  }
  
  meow() { // 行為：叫聲
    console.log('喵～');
  }
}
```

- 使用 `class` 關鍵字定義類別（貓）
- 使用構造函數 `constructor` 來初始化新物件（名字、毛色）
- 方法直接定義在類別中（貓咪行為）


#### 2. 建立物件 (Object Creation)

當我們有了「貓咪說明書」（類別）後，就可以用它來製造貓咪（物件）:

```javascript
// 創建新的貓咪物件
const kitty1 = new Cat('小花', '橘色');
const kitty2 = new Cat('小黑', '黑色');

kitty1.meow(); // 輸出: 喵～
kitty2.meow(); // 輸出: 喵～

```

- 使用 `new` 來創建新物件，`constructor` 會自動執行並設定初始狀態
- 每個物件都是獨立的個體，擁有自己的屬性值，但共享相同的方法

#### 3. 屬性與方法 (Properties & Methods)

物件有兩個基本組成部分：

- 屬性是物件的特徵，例如貓咪的名字 `name` 和毛色 `color`
- 方法是物件可以執行的操作，例如貓咪的叫聲 `meow()`

##### 3.1 this 關鍵字與綁定

在方法中，`this` 關鍵字指向當前物件，用來存取該物件的屬性或調用其他方法。

> `this` 就像是貓咪的自我認知 —— 「這是我的名字」、「這是我的精力值」。不過有時候貓咪會搞不清楚自己是誰（就像現實中的貓咪一樣）。

使用 `this` 時，需要特別注意使用一般函數的情況，以下是幾種常見情況的正確使用方式：

1. 基本類別方法
    ```javascript
    class Cat {
      constructor(name) {
        this.name = name;
      }
      
      meow() {
        console.log(`${this.name}: 喵！`);  // ✅ this 正確指向貓咪
      }
    }
    ```
2. 異步情境中的 `this`
    ```javascript
    class Cat {
      constructor(name) {
        this.name = name;
      }
      
      delayedMeow() {
        // ❌ 錯誤方式：this 會遺失
        setTimeout(function() {
          console.log(`${this.name}: 喵！`);
        }, 1000);
        
        // ✅ 正確方式：使用箭頭函數
        setTimeout(() => {
          console.log(`${this.name}: 喵！`);
        }, 1000);
      }
    }
    ```
3. 事件處理中的 `this`
    ```javascript
    class Button {
      constructor(text) {
        this.text = text;
      }
      
      // ✅ 需要處理事件時使用箭頭函數
      handleClick = () => {
        console.log(`按鈕 ${this.text} 被點擊`);
      }
    }
    ```

##### 3.2 最佳實踐建議

箭頭函數看起來可以解決所有錯誤方式，但每個實例都會創建獨立的方法副本，造成記憶體使用增加，所以需看情況使用，以下是最佳實踐建議：

1. 一般情況：使用標準方法定義  
    ```javascript
    class Animal {
      speak() {  // ✅ 一般方法，共享於原型鏈
        console.log(`${this.name} 說話了`);
      }
    }
    ```
2. 需要綁定 this 時：選擇以下方式之一
    ```javascript
    class Widget {
      // 方式一：在建構函數中綁定
      constructor() {
        this.handleEvent = this.handleEvent.bind(this);
      }
      
      // 方式二：使用箭頭函數（但會佔用較多記憶體）
      handleEvent = () => {
        console.log(this.name);
      }
    }
    ```

::info
**記憶體使用提示**  
- 一般方法：所有實例共享同一個方法，記憶體效率高
- 箭頭函數：每個實例都會創建獨立的方法副本，僅在必要時使用  
::

#### 4. 封裝與私有成員 (Encapsulation & Private Members)

為了保護物件的內部狀態，我們可以使用私有屬性和方法：

```javascript
class Cat {
  #energy = 100;  // 私有屬性
  #mood = 100;    // 私有屬性
  
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  
  #updateEnergy() {    // 私有方法
    this.#energy -= 10;
  }
  
  play() {
    if (this.#energy < 20) {
      console.log(`${this.name} 太累了！`);
      return;
    }
    this.#updateEnergy();
    console.log(`${this.name} 開心地玩耍中`);
  }
}
```

- 使用 `#` 標記私有成員
- 私有成員只能在類別內部使用（`#energy`、`#mood`、`#updateEnergy()`）
- 提供公開方法來安全地操作私有資料（`play()`）

#### 5. 靜態方法 (Static Methods)

**靜態方法屬於類別本身**，而不是類別的實例：

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
```

`Temperature.fromFahrenheit()` 是一個靜態方法，它可以用華氏直接建立一個新的 `Temperature` 實例，而不需要先建立一個 `Temperature` 實例，再呼叫 `setFahrenheit()` 方法。

```javascript
let boil = Temperature.fromFahrenheit(212);
console.log(boil.celsius);
// → 100
```

##### 5.1 這樣有什麼好處？

1. **提供替代建構方式**：提供多種建構方式，讓使用者有更多彈性
    ```javascript
    // 使用一般建構子
    let temp1 = new Temperature(22);  // 使用攝氏

    // 使用靜態方法
    let temp2 = Temperature.fromFahrenheit(71.6);  // 使用華氏
    ```
2. **不需要實例化即可提供公用程式功能**：適合用於工具函數，能節省記憶體（如：`Object.keys()`可以直接呼叫使用）。
3. **命名空間管理**：將相關的常數和方法組織在一起，避免全域命名空間污染。
    ```javascript
    class Config {
      static API_URL = 'https://api.example.com';
      static MAX_RETRY = 3;
      
      static getFullUrl(endpoint) {
        return `${this.API_URL}/${endpoint}`;
      }
    }
    ```

##### 5.2 靜態方法的特性

- 直接通過類別呼叫，不需要建立實例
- 無法訪問 `this` 關鍵字所指向的實例
-  可以訪問其他靜態方法和靜態屬性
- 常用於實作工廠方法或公用程式函數

##### 5.3 什麼時候適合使用？

- 當方法不需要存取實例狀態時
- 需要提供工具函數或輔助方法時
- 實作工廠模式或建構輔助方法時
- 管理共享資源或設定時
- 需要組織相關功能但不需要實例化時

##### 5.4 定義方式

在方法前加上 `static` 關鍵字

```javascript
class ClassName {
  static methodName() {
    // 實作邏輯
  }
}
```

#### 6. Getter 與 Setter

Getter 和 Setter 是特殊的方法，讓我們能**以存取屬性的方式來呼叫方法**。以下以溫度為例：

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
```

`Temperature` 類別有兩個屬性：`celsius` 和 `fahrenheit`，它允許我們以攝氏及華氏讀取和寫入溫度，但它在內部只存儲攝氏，並且在輸入或讀取華氏時進行攝氏之間的轉換。

##### 6.1 這樣有什麼好處？

1. **封裝與一致性**：溫度計內部只存儲攝氏，但使用者可以以攝氏或華氏讀取和寫入，這提供了更高的封裝性，使用者不需要知道內部的實現細節。
2. **簡化使用者介面**：使用者可以像存取一般屬性一樣操作溫度：`temp.fahrenheit = 86`，而不需要呼叫轉換方法：`temp.setFahrenheit(86)` 或 `temp.celsiusToFahrenheit()`，這讓程式碼更直觀、更容易閱讀。
3. **自動轉換**：轉換邏輯被封裝在類別內部，使用者不須要記住或處理轉換公式，如此也能降低出錯機會。
   > 試想，如果溫度儲存器只有攝氏，並且沒有封裝轉換邏輯，而你目前只有華氏，就必須要使用`let temp = new Temperature((86-32)/1.8);`，這樣麻煩又容易出錯。
4. **維護性**：如果需要修改溫度的轉換邏輯，只需要在類別內部修改，而不需要修改所有使用溫度計的程式碼。
5. **彈性擴充**：如果需要新增其他溫度單位，只需要新增新的 getter 和 setter，而不需要修改現有的程式碼。
  
##### 6.2 什麼時候適合使用？

- 需要在讀取/寫入屬性時進行驗證（如檢查範圍）
- 屬性值需要即時計算（如計算面積）
- 需要在存取時進行格式轉換（如溫度）
- 想要保護內部資料，提供受控制的存取方式（如私有屬性）

##### 6.3 定義方式

1. 使用 `get` 關鍵字定義 getter：
    ```javascript
    get propertyName() {
      return computedValue;
    }
    ```
2. 使用 `set` 關鍵字定義 setter:
    ```javascript
    set propertyName(value) {
      // 驗證與處理邏輯
      this.internalValue = value;
    }
    ```

## 繼承與擴展

![繼承與擴展架構](/img/articles/eloquent-JavaScript/繼承與擴展架構.svg)

#### 1. 類別繼承 （Class Inheritance）

就像孩子繼承父母的特徵一樣，JavaScript 中的類別也可以繼承其他類別的特性。這讓我們能夠建立有層次的程式結構，並重用已有的程式碼。

##### 1.1 extends 關鍵字

使用 `extends` 關鍵字，我們可以定義一個新的類別，它繼承自另一個類別。以下是一個簡單的例子：

```javascript
// 父類別：功夫大師
class KungFuMaster {
  punch() { console.log("普通的打拳"); }
}

// 子類別：李小龍
class BruceLee extends KungFuMaster {
  punch() { 
    console.log("閃電般的寸拳！"); 
  }
}
```
在這個例子中，`BruceLee` 類別繼承自 `KungFuMaster` 類別，並且覆寫了 `punch` 方法。當我們創建一個 `BruceLee` 的實例並呼叫 `punch` 方法時，會看到不同的結果：

##### 1.2 super 呼叫

`super` 關鍵字用於呼叫父類別的同名方法或屬性。在子類別的建構子中，我們通常會先呼叫父類別的建構子，以確保父類別的初始化邏輯被執行。以下是一個例子：

```javascript
class Student extends Person {
  constructor(name, grade) {
    super(name);  // 先呼叫人類初始化
    this.grade = grade;  // 再加學生的特性
  }
  
  introduce() {
    super.introduce();  // 先介紹人類的身份：名字、性別等等
    console.log(`我是${this.grade}年級的學生`);  // 補充學生介紹
  }
}
```

##### 1.3 方法覆寫（Method Overriding）

在子類別中，我們可以覆寫父類別的方法，以提供不同的行為。以下是一個例子：

```javascript
class Cat {
  speak() { return "喵喵喵"; }
}

class FancyCat extends Cat {
  speak() { return "本喵不屑與你說話！"; }  // 傲嬌的貓咪版本
}

const cat = new FancyCat();
console.log(cat.speak());  // "本喵不屑與你說話！"
```

#### 2. 原型系統（Prototype System）

##### 2.1 原型繼承機制（Prototype Inheritance）

在 JavaScript 中，物件可以有原型，而原型也可以有原型，形成了一個原型鏈。

![原型繼承機制](/img/articles/eloquent-JavaScript/原型繼承機制.svg)

> 想像一個倒金字塔，當我們查找一個屬性時，會從最底層（具體的實例物件）開始，然後逐層向上查找，直到找到屬性或到達原型鏈的頂端（Object.prototype）。

```javascript
const animal = {
  eat: function() { return "吃吃吃！"; }
};

const rabbit = Object.create(animal);
rabbit.hop = function() { return "跳跳跳！"; };

console.log(rabbit.eat());  // "吃吃吃！" (繼承自 animal)
console.log(rabbit.hop());  // "跳跳跳！" (自己的方法)
```

在這個例子中，`rabbit` 是 `animal` 的原型，因此它繼承了 `animal` 的 `eat` 方法。

##### 2.2 Object.prototype

在 JavaScript 中，每個物件都有一個原型，而 `Object.prototype` 是所有物件的頂端原型。它提供了許多內建的方法，例如 `toString()`、`hasOwnProperty()` 等等。

> 這就像是所有生物的祖先，連人類、動物、植物、微生物等等，都可追溯到這個共同的祖先。

```javascript
console.log({}.toString());  // [object Object]
```

##### 2.3 原型鏈查找順序（Prototype Chain）

在 JavaScript 中，當我們嘗試訪問一個物件的屬性時，如果該物件本身沒有這個屬性，JavaScript 會在原型鏈上繼續尋找，直到找到屬性或到達原型鏈的頂端（Object.prototype）。

```javascript
const animal = {
  eat: function() { return "吃吃吃！"; }
};
const rabbit = Object.create(animal);
rabbit.hop = function() { return "跳跳跳！"; };
console.log(rabbit.eat());  // "吃吃吃！" (繼承自 animal)
console.log(rabbit.hop());  // "跳跳跳！" (自己的方法)
```

在這個例子中，`rabbit` 是 `animal` 的原型，因此它繼承了 `animal` 的 `eat` 方法。

#### 3. 類別繼承與原型繼承比較

##### 3.1 實現機制本質不同

- 類別繼承
  ```javascript
  // 類別是一個模板
  class Animal {
    constructor(name) {
      this.name = name;  // 每個實例都會複製這些屬性
    }
  }

  class Dog extends Animal {
    bark() {
      console.log('Woof!');
    }
  }

  const dog1 = new Dog('Max');
  const dog2 = new Dog('Bella');
  // dog1 和 dog2 各自擁有自己的 name 屬性副本
  ```
- 原型繼承
  ```javascript
  // 直接創建物件並連結
  const animal = {
    name: 'animal'
  };

  const dog = Object.create(animal);
  dog.bark = function() {
    console.log('Woof!');
  };

  // dog 不會複製 animal 的屬性，而是通過連結訪問
  console.log(dog.name);  // 通過原型鏈查找到 'animal'
  ```

##### 3.2 關鍵區別

1. 記憶體使用
   - 類別：每個實例都會複製屬性
   - 原型：共享原型物件的屬性，不複製
2. 修改影響
    ```javascript
    // 類別
    class Animal {
      constructor() { this.legs = 4; }
    }
    const dog1 = new Animal();
    const dog2 = new Animal();
    dog1.legs = 3;  // 只影響 dog1
    console.log(dog2.legs);  // 仍然是 4

    // 原型
    const animal = { legs: 4 };
    const dog1 = Object.create(animal);
    const dog2 = Object.create(animal);
    animal.legs = 3;  // 影響所有繼承的物件
    console.log(dog2.legs);  // 變成 3
    ```
3. 運行時行為
    ```javascript
    // 類別 - 結構固定
    class Animal {}
    const dog = new Animal();
    // 無法在運行時改變 Animal 的原型

    // 原型 - 可動態修改
    const animal = {};
    const dog = Object.create(animal);
    // 可以隨時修改原型鏈
    Object.setPrototypeOf(dog, newProto);
    ```

::info
- 類別繼承像是「複印機」：創建新實例時會複製所有屬性
- 原型繼承像是「參考書」：所有物件共享同一本書，不複製內容
::

##### 3.3 比較表格

| 特性       | 類別繼承（Class Inheritance） | 原型繼承（Prototype Inheritance） |
| ---------- | ----------------------------- | --------------------------------- |
| 概念基礎   | 基於類別的藍圖概念            | 基於物件的連結概念                |
| 繼承方式   | 垂直的類別層次結構            | 水平的物件鏈結                    |
| 語法       | `class` 和 `extends`          | `Object.create()` 或原型鏈        |
| 屬性查找   | 在實例化時複製                | 通過原型鏈即時查找                |
| 靈活性     | 結構固定，修改需要改類別      | 結構靈活，可動態修改原型          |
| 記憶體使用 | 每個實例都複製屬性            | 共享原型中的屬性和方法            |
| 效能       | 直接訪問實例屬性較快          | 需要在原型鏈上查找                |
| 使用場景   | 需要明確類型層次的大型應用    | 需要靈活擴展的動態系統            |
| 程式碼組織 | 結構清晰，易於維護            | 較為靈活但可能較混亂              |
| 封裝性     | 支援 private、protected 等    | 主要依賴閉包實現私有性            |

## 進階概念

![進階概念架構](/img/articles/eloquent-JavaScript/進階概念架構.svg)

#### 1. 多型性（Polymorphism）

多型性是指「不同類型的物件可以透過相同的介面被處理」的程式設計特性。

> 想像一個動物園裡的餵食時間，每種動物都會「吃」，但吃相天差地遠。

##### 1.1 基本定義

```javascript
// 多型允許不同物件只要實現相同介面就能被統一處理
function printLength(hasLength) {
  console.log(`長度是: ${hasLength.length}`);
}

// 不同類型但都有 length 屬性
printLength([1, 2, 3]);        // 陣列 - 長度是: 3
printLength("Hello");          // 字串 - 長度是: 5
printLength({length: 100});    // 自訂物件 - 長度是: 100
```

##### 1.2 實現方式

1. 方法覆寫（Method Overriding）
    ```javascript
    class Animal {
      makeSound() {
        console.log("動物的聲音");
      }
    }

    class Dog extends Animal {
      makeSound() {
        console.log("汪汪!");
      }
    }

    class Cat extends Animal {
      makeSound() {
        console.log("喵喵~");
      }
    }

    // 多型性的展現
    const animals = [new Dog(), new Cat()];
    animals.forEach(animal => animal.makeSound());
    // 汪汪!
    // 喵喵~
    ```
2. 介面實現
    ```javascript
    // toString 方法的多型展現
    Rabbit.prototype.toString = function() {
      return `一隻 ${this.type} 兔子`;
    };

    let killerRabbit = new Rabbit("殺手");
    console.log(String(killerRabbit)); // "一隻殺手兔子"
    ```

##### 1.3 多型性的優點

1. 彈性擴展
    - 新增功能不需修改現有程式碼
    - 符合開放封閉原則
2. 程式碼重用
    - 共用的行為可定義在父類別
    - 特殊行為在子類別實現
3. 介面統一
    - 不同物件可以有相同的操作方式
    - 降低程式碼耦合度

##### 1.4 實際應用範例

```javascript
// 1. 陣列類介面
const arrayLike = {
  length: 2,
  0: "A",
  1: "B"
};

// 任何具有 length 和索引屬性的物件都能使用陣列方法
Array.prototype.forEach.call(arrayLike, item => {
  console.log(item); // 輸出 "A" 和 "B"
});

// 2. 字串轉換介面
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  
  toString() {
    return `${this.celsius}°C`;
  }
}

let temp = new Temperature(22);
console.log(`現在溫度是: ${temp}`); // 自動調用 toString()
```

##### 1.5 最佳實踐建議

1. 設計原則
    - 優先考慮介面設計
    - 保持方法的單一職責
    - 確保介面的一致性
2. 注意事項
    - 避免過度使用繼承
    - 優先使用組合而非繼承
    - 保持介面簡單明確

#### 2. Map 資料結構

Map 是 JavaScript 提供的一種特殊資料結構，用於儲存鍵值對（key-value pairs）的集合。將姓名映射到年齡，如下：

```javascript
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(ages);  // → Map(3) { 'Boris' => 39, 'Liang' => 22, 'Júlia' => 62 }
```

##### 2.1 為什麼不用一般物件？

可以先參考以下例子：

```javascript
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
```

明明我們沒有叫 toString 這樣的人！這是因為 JavaScript 的物件會自動包含一些預設的屬性，例如 `toString`。所以，我們不能用物件來儲存鍵值對，因為它們會被自動添加到物件中。

當然你可以使用 `Object.create(null)` 創建沒有原形的物件：

```javascript
let ages = Object.create(null);
ages["Boris"] = 39;
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? false
```

但當我們嘗試使用物件作為屬性名時，該物件會被自動轉換為字串：

```javascript
let ages = {};
let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

ages[user1] = 25;
ages[user2] = 39;

console.log(ages);  // → { '[object Object]': 39 }
// 兩個不同的物件都被轉換成相同的字串 '[object Object]'
console.log(ages[user1]); // → 39
console.log(ages[user2]); // → 39
```

相比之下，Map 可以使用任何類型作為鍵，不會進行自動轉換：

```javascript
let ages = new Map();
let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

ages.set(user1, 25);
ages.set(user2, 39);

console.log(ages); // → Map(2) { { name: 'Alice' } => 25, { name: 'Bob' } => 39 }
console.log(ages.get(user1)); // → 25
console.log(ages.get(user2)); // → 39
```

##### 2.2 Map 的基本操作

Map 提供了多個實用的方法來操作資料：

```javascript
let ages = new Map();

// 設置值
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

// 取得值
console.log(ages.get("Boris")); // → 39

// 檢查是否存在
console.log(ages.has("Liang")); // → true
console.log(ages.has("Jack")); // → false

// 刪除值
ages.delete("Boris");
console.log(ages.has("Boris")); // → false

// 取得 Map 大小
console.log(ages.size); // → 2

// 清空 Map
ages.clear();
console.log(ages.size); // → 0
```

##### 2.3 Map 的迭代

Map 提供了多種迭代方法，可以方便地遍歷鍵值對：

```javascript
let ages = new Map([
  ["Boris", 39],
  ["Liang", 22],
  ["Júlia", 62]
]);

// 取得所有的鍵（keys）
for (let name of ages.keys()) {
  console.log(name);
}
// → Boris
// → Liang
// → Júlia

// 取得所有的值（values）
for (let age of ages.values()) {
  console.log(age);
}
// → 39
// → 22
// → 62

// 取得所有的項目（entries）
for (let [name, age] of ages.entries()) {
  console.log(`${name} is ${age}`);
}
// → Boris is 39
// → Liang is 22
// → Júlia is 62

// 使用 forEach
ages.forEach((age, name) => {
  console.log(`${name} is ${age}`);
});
// → Boris is 39
// → Liang is 22
// → Júlia is 62
```

##### 2.4 Map 的轉換

Map 可以很容易地與陣列和物件互相轉換：

```javascript
// 從陣列創建 Map
let pairs = [["name", "Boris"], ["age", 39]];
let userInfo = new Map(pairs);

// Map 轉換為陣列
let pairsArray = Array.from(userInfo);
console.log(pairsArray); // → [["name", "Boris"], ["age", 39]]

// Map 轉換為物件
let obj = Object.fromEntries(userInfo);
console.log(obj); // → {name: "Boris", age: 39}

// 物件轉換為 Map
let objToMap = new Map(Object.entries(obj));
```

##### 小結

相比普通物件，Map 提供了更多的內建方法和更好的彈性，特別適合用於需要頻繁增刪改查的場景，或是需要使用非字串類型作為鍵的情況。

> 延伸閱讀：[Map - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Map){target="_blank"}

#### 3. Symbol

Symbol 是在 ES6 中新增的一種原始數據類型，主要用於創建唯一的標識符。

##### 3.1 基本用法

```javascript
// 創建 Symbol
let sym = Symbol("name");
console.log(sym == Symbol("name"));  // → false，Symbol 永遠是唯一的

// 作為物件屬性
Rabbit.prototype[sym] = 55;
console.log(killerRabbit[sym]);  // → 55
```

##### 3.2 Symbol 的特性

1. **唯一性**
   - 每個 Symbol 都是獨一無二的，即使描述相同
   - 無法被複製或重複創建
2. **作為屬性名**：可以作為物件的屬性名稱，不會與字串屬性衝突
3. **描述性但不具實質意義**：Symbol 可以帶有描述字串，但僅用於辨識，不影響 Symbol 的唯一性。

```javascript
// 創建兩個 Symbol，給它們相同的「姓名」(描述字串)
let symbol1 = Symbol("斯帕");
let symbol2 = Symbol("斯帕");

console.log(symbol1 === symbol2);  // → false，即使「姓名」相同，但是不同的「身分證號碼」
```

::info
**為什麼要有描述字串？**  
描述字串主要用於在開發過程中幫助開發者理解 Symbol 的用途，方便除錯和提高可讀性。
::

##### 3.3 Symbol.iterator

JavaScript 提供的內建的 Symbol，用於定義物件的迭代行為，讓物件可以使用 `for...of` 循環。我們以自定義的購物車類別為例，展示如何使用 `Symbol.iterator` 來實現自定義的迭代行為：

```javascript
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(name, price) {
        this.items.push({ name, price });
    }

    // 實作 Symbol.iterator
    [Symbol.iterator]() {
        let index = 0;
        
        return {
            next: () => {
                if (index < this.items.length) {
                    return {
                        value: this.items[index++],
                        done: false
                    };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

// 創建購物車並添加商品
const cart = new ShoppingCart();
cart.addItem("蘋果", 30);
cart.addItem("香蕉", 25);
cart.addItem("橘子", 20);

// 使用 for...of 遍歷購物車
for (let item of cart) {
    console.log(`${item.name}: $${item.price}`);
}
// → 蘋果: $30
// → 香蕉: $25
// → 橘子: $20

// 使用展開運算符
const itemArray = [...cart];
console.log(itemArray);
// → [{ name: '蘋果', price: 30 }, { name: '香蕉', price: 25 }, { name: '橘子', price: 20 }]
``` 

- 方法定義：使用 `[Symbol.iterator]()` 作為方法名稱
- 回傳值：方法必須回傳一個迭代器物件，這個物件需要有：
  - `next()` 方法
  - `next()` 方法必須回傳具有 `value` 和 `done` 屬性的物件
- 迭代結束：當迭代完成時，回傳 `{ done: true }`


**什麼時候適合使用？**  
- 當你的類別包含一系列可遍歷的元素
- 當你想要自定義遍歷的順序或方式
- 當你想要讓你的類別可以使用 `for...of`、展開運算符等功能

> 延伸閱讀：[Symbol.iterator - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator){target=_blank}

#### 4. instanceof 運算子

`instanceof` 運算子用於檢查一個物件是否是特定類別的實例。

##### 4.1 基本用法

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        return `${this.name} says woof!`;
    }
}

const myDog = new Dog('Max');

console.log(myDog instanceof Dog);      // true
console.log(myDog instanceof Animal);   // true
console.log(myDog instanceof Object);   // true
console.log(myDog instanceof Array);    // false
```

- 基本型別檢查：基本型別（如 `Number`、`String`、`Boolean`）的 `instanceof` 常回傳 `false`，除非使用 `new` 建立物件，因為基本型別在 JavaScript 中是原始值，而不是物件。
  ```javascript
  const str = "Hello";
  console.log(str instanceof String);     // false
  console.log(new String("Hello") instanceof String);  // true
  ```
- 陣列檢查：陣列也是物件，所以 `instanceof` 可以用來檢查陣列是否是 `Array` 的實例。
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr instanceof Array);      // true
  console.log(arr instanceof Object);     // true
  ```

##### 4.2 instanceof 的原理

`instanceof` 的運作原理是檢查物件的原型鏈（prototype chain）。它會沿著物件的 `[[Prototype]]` 鏈向上查找，直到找到符合的原型或到達原型鏈的頂端。

- `instanceof` 運算子實際上是檢查右側構造函數的 `prototype` 屬性是否出現在左側物件的原型鏈上
- 原型鏈查找會一直進行到原型鏈的頂端（`null`）

```javascript
console.log(Object.getPrototypeOf([1, 2, 3]) === Array.prototype);  // → true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);  // → true
console.log(Object.getPrototypeOf(Object.prototype) === null);  // → true
```

## 總結

本文從物件導向的基本思維出發，介紹了 JavaScript 中的物件導向程式設計概念和實作技巧。透過類別定義、繼承機制、原型系統等核心主題，展示了如何運用物件導向方法來組織複雜的程式邏輯。同時也探討了 `Map` 資料結構和 `Symbol` 等現代 JavaScript 特性，說明了它們在實際開發中的應用場景。

#### 關鍵要點

- 物件導向的四大支柱：封裝、繼承、多型和抽象化
- JavaScript 的類別系統建立在原型繼承之上
- 適當使用封裝可以提高程式碼的可維護性
- `Map` 和 `Symbol` 等現代特性提供了更強大的程式設計工具
- 合理運用多型可以提升程式碼的彈性和可擴展性

以上內容是基於 [6. The Secret Life of Objects - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/06_object.html){target=_blank} 所整理的精簡筆記。