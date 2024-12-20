---
category: 前端開發
title: JavaScript 的十個小知識
description: 1. JavaScript 與 Java 無關 雖然名字中都有「Java」，但 JavaScript 和 Java 其實是完全不同的語言！因為 Java 在當時很受歡迎，所以取了這個名字來搭順風車。 2. `NaN` 是個數字 `NaN` 是「Not-a-Number」的縮寫，但有趣的是`typeof NaN`的結果卻是 number。 3. 陣列也是物件 4. 0.1 + 0.2 !== 0.3 5. JavaScript 沒有真正的類別 6. `==` 與 `===` 的區別 7. `[] + []` 的結果是空字串
tags: ['javascript']
date: 2024-12-20
keywords: JavaScript 小知識, JavaScript 冷知識, JavaScript 特性, JavaScript 基礎, JavaScript 初學者, JavaScript 技巧, JavaScript 有趣事實, JavaScript 陣列, JavaScript 型別, JavaScript 精度問題, JavaScript 浮點數計算, JavaScript 原型, JavaScript class, JavaScript null 與 undefined, JavaScript 自動類型轉換, JavaScript NaN, JavaScript 嚴格模式, JavaScript 陣列長度, JavaScript == 與 ===, JavaScript 初學者指南
image: /img/articles/javascript-fun-facts/javascript.webp

head:
  - - meta
    - property: og:title
      content: JavaScript 的十個小知識
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/javascript-fun-facts/javascript.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/javascript-fun-facts
  - - meta
    - property: og:description
      content: 1. JavaScript 與 Java 無關 雖然名字中都有「Java」，但 JavaScript 和 Java 其實是完全不同的語言！因為 Java 在當時很受歡迎，所以取了這個名字來搭順風車。 2. `NaN` 是個數字 `NaN` 是「Not-a-Number」的縮寫，但有趣的是`typeof NaN`的結果卻是 number。 3. 陣列也是物件 4. 0.1 + 0.2 !== 0.3 5. JavaScript 沒有真正的類別 6. `==` 與 `===` 的區別 7. `[] + []` 的結果是空字串

sitemap:
  loc: /articles/javascript-fun-facts
  lastmod: 2024-12-21
  changefreq: monthly
  priority: 0.8
---

![JavaScript](/img/articles/javascript-fun-facts/javascript.webp)

### 1. JavaScript 與 Java 無關

雖然名字中都有「Java」，但 JavaScript 和 Java 其實是完全不同的語言！因為 Java 在當時很受歡迎，所以取了這個名字來搭順風車。
> 可參考：[Eloquent JavaScript - Introduction](https://eloquentjavascript.net/00_intro.html#p-XQARvdMdFm){target="_blank"}

### 2. `NaN` 是個數字

`NaN` 是「Not-a-Number」的縮寫，但有趣的是`typeof NaN`的結果卻是 number。
```javascript
console.log(typeof NaN); // "number"

// 以下運算會得出 NaN
console.log(Infinity - Infinity); // NaN
console.log(0 / 0); // NaN
```
> 可參考：[Eloquent JavaScript - Values, Types, and Operators](https://eloquentjavascript.net/01_values.html#p-pEEsuk9SRv){target="_blank"}

### 3. 陣列也是物件

如果檢查陣列的類型，會發現它其實是 object，所以同一個 Array 中可以有不同類型的變數。
```javascript
console.log(typeof []); // "object"
```
> 可參考：[W3Schools - Js Arrays](https://www.w3schools.com/js/js_arrays.asp){target="_blank"}、[Eloquent JavaScript - Data Structures: Objects and Arrays](https://eloquentjavascript.net/04_data.html#p-Rl8msr9DUz){target="_blank"}

### 4. 0.1 + 0.2 !== 0.3

JavaScript 中的浮點數計算可能會出現精度遺失的問題，因為 JavaScript 中數字的儲存遵循 IEEE 754 標準，以64位元雙精確度格式來儲存數字。

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```
>延伸閱讀：[為什麼0.1 + 0.2 !== 0.3？如何解決這個問題？](https://blog.csdn.net/mubo970901/article/details/108052108){target="_blank"}

### 5. JavaScript 沒有真正的類別
在 ES6 出現之前，JavaScript 並沒有 class 的概念。即使現在的 class 語法只是語法糖，背後實現仍然是基於原型繼承。

>延伸閱讀：[ES6 中的 class 是什麼？和函式構造函式差別是什麼？](https://www.explainthis.io/zh-hant/swe/what-is-class){target="_blank"}

### 6. `==` 與 `===` 的區別

`==` 會自動進行類型轉換，而 `===` 則不會。

```javascript
console.log(1 == "1");  // true
console.log(1 === "1"); // false

console.log(1 != "1");  // false
console.log(1 !== "1"); // true
```
> 可參考：[Eloquent JavaScript - Values, Types, and Operators](https://eloquentjavascript.net/01_values.html#p-GBtHgkKgjk){target="_blank"}

### 7. `[] + []` 的結果是空字串
將兩個空陣列相加，結果是個空字串，因為陣列會被轉成字串。

```javascript
console.log([] + []); // ""
console.log(typeof ([] + [])); // string
```

#### 補充

- 要合併陣列可用`Array.concat()`，詳細參閱[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat){target="_blank"}
```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```


### 8. 函式可以有默認參數

在 ES6 中，可以為函式設定默認參數，這讓程式碼更具可讀性。

```javascript
function greet(name = "朋友") {
  return `你好, ${name}!`;
}
console.log(greet()); // "你好, 朋友!"
```

> 可參考：[Eloquent JavaScript - Functions](https://eloquentjavascript.net/03_functions.html#p-ft2GpnObRn){target="_blank"}

### 9. `null` 與 `undefined` 是不同的

雖然它們看起來很相似，但 `null` 是一個明確代表不存在（空值）的值，而 `undefined` 則表示變數尚未被賦值。每個變數在初始化前一定都是`undefined`。

```javascript
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

> 可參考：[Eloquent JavaScript - Values, Types, and Operators](https://eloquentjavascript.net/01_values.html#p-XbK88HE+DJ){target="_blank"}

> 延伸閱讀：[ㄟ問你喔，null, undefined 和 not defined 是差在哪？](https://karennnnovelty.medium.com/%E3%84%9F%E5%95%8F%E4%BD%A0%E5%96%94-null-undefined-%E5%92%8C-not-defined-%E6%98%AF%E5%B7%AE%E5%9C%A8%E5%93%AA-98204edc07c7){target="_blank"}

### 10. 陣列長度是可變的

你可以手動設定陣列的長度，這會影響陣列內容。

```javascript
const arr = [1, 2, 3, 4];
arr.length = 2; 
console.log(arr); // [1, 2]
```

> 可參考：[MDN - JavaScript - Array：length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length){target="_blank"}