---
category: 前端開發
title: JavaScript Date 日期與時間的基礎使用指南
description: 深入了解 JavaScript Date 類的基礎應用，包含創建日期對象、時間戳操作及日期解析，掌握處理日期時間的核心概念和實用技巧。
tags: ['javascript']
date: 2025-01-17
keywords: JavaScript Date, 日期對象, 時間戳, UTC時間, 日期解析, 時間操作, Date.now(), getTime, 日期格式化, JavaScript時間處理
image: /img/articles/date-class/javaScript-date-class-structure.svg
draft: false

head:
  - - meta
    - property: og:title
      content: JavaScript Date 類的基礎使用指南
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/date-class/javaScript-date-class-structure.svg
  - - meta
    - property: og:url
      content: https://bearune.com/articles/date-class
  - - meta
    - property: og:description
      content: 深入了解 JavaScript Date 類的基礎應用，包含創建日期對象、時間戳操作及日期解析，掌握處理日期時間的核心概念和實用技巧。

sitemap:
  loc: /articles/date-class
  lastmod: 2025-01-17
  changefreq: monthly
  priority: 0.5
---

JavaScript 的 `Date` 類提供了處理日期和時間的標準方法。以下是其核心概念和使用方式：

![JavaScript Date Class Structure](/img/articles/date-class/javaScript-date-class-structure.svg)

## 創建日期對象

1. 當前時間
    ```javascript
    const now = new Date();  // 創建當前日期時間的對象
    ```
2. 指定時間
    ```javascript
    // 基本格式：new Date(年, 月, 日, 時, 分, 秒, 毫秒)
    const date = new Date(2009, 11, 9);  // → 2009年12月9日
    // 注意：月份從0開始計數（0～11）
    ```

## 時間戳操作

JavaScript 使用 1970 年 1 月 1 日 UTC 為基準的毫秒數來儲存時間：

```javascript
// 獲取時間戳
const timestamp = new Date().getTime();
// 或使用
const currentTime = Date.now();

// 從時間戳創建日期
const dateFromTimestamp = new Date(timestamp);
```

## 日期解析示例

以下是一個從字串解析日期的實用函數：

```javascript
function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));  // → 2003年1月30日
```
此處使用了正則表達式 `exec` 方法，可以參考：<br>[【JavaScript 學習筆記 09】正則表達式 Chapter 9 Regular Expressions](/articles/eloquent-javascript-chapter9){target=_blank}

## 注意事項

1. 月份編號從 0 開始（0～11），這是一個常見的混淆點
2. 日期編號從 1 開始
3. 時、分、秒、毫秒參數是可選的，默認為 0
4. 使用 `getFullYear()` 而不是過時的 `getYear()`