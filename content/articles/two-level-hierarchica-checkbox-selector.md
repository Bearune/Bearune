---
category: 前端開發
title: 使用 Vue 自定義雙階選擇器：打造更靈活的選擇功能
description: 使用 Vue 3 Composition API 自定義雙階選擇器，實現靈活且可擴展的選擇功能，提升用戶體驗。
tags: ['vue', 'javascript','scss', '小組件']
date: 2024-10-04
image: /img/articles/two-level-hierarchica-checkbox-selector/成果展示.webp

head:
  - - meta
    - property: og:title
      content: 使用 Vue 自定義雙階選擇器：打造更靈活的選擇功能
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/two-level-hierarchica-checkbox-selector/成果展示.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/two-Level-hierarchica-checkbox-selector/
  - - meta
    - property: og:description
      content: 使用 Vue 3 Composition API 自定義雙階選擇器，實現靈活且可擴展的選擇功能，提升用戶體驗。

sitemap:
  loc: /articles/two-level-hierarchica-checkbox-selector
  lastmod: 2024-10-04
  changefreq: monthly
  priority: 0.8
---

## 前言

在網頁設計中，選單一直是相當重要的元素。以往我在製作選單時都會使用網頁預設的[checkbox](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/checkbox)來實現，但最近在工作中遇到了一個需要特定規則的雙階選擇器──傳統的方式雖然簡單，但在這個需求中使用以往的方式寫對我來說需要控制的因素反而更多。因此，我決定編寫一個自定義的組件，以便更靈活地處理選擇邏輯和顯示樣式，順便紀錄一下這個過程。

![雙階選擇器成果展示](/img/articles/two-level-hierarchica-checkbox-selector/成果展示.webp)

:anchor

## 問題：客製的雙階選擇器規則

這次需要的雙階選擇器需要符合以下幾點規則：

1. 父階層間可複選
2. 子階層間不可複選
3. 若選擇父階層，則必選子階層；反之若不選擇父階層，則不選擇子階層
4. 若選擇子階層，則必選父階層；反之若不選擇子階層，則不選擇父階層

有點繞口令，但簡單來說就是**把父階層視作一個分類，當分類下的項目（子階層）被選擇時，該分類就會被選擇，且每個分類下的項目一次只能選擇一個。**

::detailsBlock{title="若以前菜、主菜及甜點為例"}
1. 父階層間可複選  
  父階層是「前菜」、「主菜」和「甜點」，使用者可以選擇多個父階層，如：他們可以同時選擇「前菜」和「甜點」，而不必只限於一個選項。
1. 子階層間不可複選  
  每個父階層下都有子階層。以「前菜」為例，它可能包含「沙拉」和「湯」。在這種情況下，使用者只能從「沙拉」和「湯」中選擇一個；如果使用者選擇了「沙拉」，那麼「湯」就不能被選擇。
1. 若選擇父階層，則必選子階層；反之若不選擇父階層，則不選擇子階層  
  如果使用者選擇了「主菜」這個分類，就必須選擇「牛排」或「雞肉」中的一個作為子項。如果他們不選擇「主菜」，那麼也不能選擇「牛排」和「雞肉」。
1. 若選擇子階層，則必選父階層；反之若不選擇子階層，則不選擇父階層  
  如果使用者選擇了「甜點」下的「冰淇淋」，那麼「甜點」這個分類也會自動被選擇。相反，如果使用者取消對「冰淇淋」的選擇，「甜點」這個分類也會隨之取消選擇。
::

::client
<iframe height="697" style="width: 100%;" scrolling="no" title="Two-Level Hierarchical Checkbox Selector|雙層復選框選擇器" src="https://codepen.io/Lin-Donna/embed/preview/MWNKBrd?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/Lin-Donna/pen/MWNKBrd">
    Two-Level Hierarchical Checkbox Selector|雙層復選框選擇器</a> by Lin Donna (<a href="https://codepen.io/Lin-Donna">@Lin-Donna</a>)
    on <a href="https://codepen.io">CodePen</a>.
</iframe>
::

## 實作步驟

基於 Vue 3 的 Composition API，以下是實作的方法：

### 第一步：網頁架構及數據渲染

![網頁架構及數據渲染](/img/articles/two-level-hierarchica-checkbox-selector/步驟一.webp)

#### 網頁結構設計

構建一個列表結構，其中每個類別（前菜、主餐、甜點）都包含其各自的子項（如沙拉、牛排、冰淇淋），這裡我使用 `ul` 列表來制定階層。

```vue-html
<template>
  <div class="box">
    <ul>
      <li v-for="item in data" :key="item.key"> // 類別
        {{ item.title }}
        <ul v-if="item.child && item.child.length">
          <li v-for="child in item.child" :key="child.key"> // 子項
            {{ child.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
```

#### 數據定義

定義一個數據源 `data`，該數據源包含各個菜品的類別及其對應的子項目。每個類別都包含 `key`（唯一標識）、`title`（顯示標題）和 `child`（子項列表）。以下是數據源的定義：

``` javascript
const data = [
  {
    key: "appetizers",
    title: "前菜 (Appetizers)",
    child: [
      { key: "salad", title: "🥗 沙拉 (Salad)" },
      { key: "soup", title: "🍲 湯 (Soup)" },
      { key: "spring_rolls", title: "🥟 春捲 (Spring Rolls)" }
    ]
  },
  {
    key: "main_courses",
    title: "主餐 (Main Courses)",
    child: [
      { key: "steak", title: "🥩 牛排 (Steak)" },
      { key: "chicken", title: "🍗 雞肉 (Chicken)" },
      { key: "pasta", title: "🍝 意大利麵 (Pasta)" }
    ]
  },
  {
    key: "desserts",
    title: "甜點 (Desserts)",
    child: [
      { key: "ice_cream", title: "🍦 冰淇淋 (Ice Cream)" },
      { key: "cake", title: "🍰 蛋糕 (Cake)" },
      { key: "fruit_tart", title: "🥧 水果塔 (Fruit Tart)" }
    ]
  },
  {
    key: "sauce",
    title: "特製醬料 (Special Sauce)",
    child: []
  }
];
```

### 第二步：CSS 設計

![CSS 設計](/img/articles/two-level-hierarchica-checkbox-selector/步驟二.webp)

在這個步驟裡大部分的樣式怎麼設定都行，主要需要注意的是我使用 `<li>` 的[偽元素](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) `::before` 及 `::after` 來代表 `checkbox` 正方形的可選框。這裡我是使用SCSS來撰寫，以下為截取的樣式，全部的程式碼可以[點我](https://codepen.io/Lin-Donna/pen/MWNKBrd)。

```css
ul {
  li {
    position: relative;

    // ::before作為可選框的正方形外框
    &::before {
      content: "";
      width: 14px;
      height: 14px;
      border-radius: 5px;
      border: 1px $primary solid;
      position: absolute;
      top: 13px;
      left: 0;
      margin: auto;
    }

    // ::after作為已選擇的可選框樣式
    // 這裡我在::before裡建立一個實心填滿的正方形
    &.selected {
      &::after {
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 4px;
        background-color: $primary;
        position: absolute;
        top: 15px;
        bottom: 0;
        left: 2px;
      }
    }
  }
}

```

:ads

### 第三步：製作切換選擇

核心作法是：**檢查項目或子項目是否被選中，如果沒有被選中則加入到選中陣列**，這是為了迎合我工作上需要的上傳格式，所以直接將選中的內容拼成一個無序的陣列，實際上只需要在原本的數據源 data 裡面多新增一個變數去紀錄是否選取即可。

``` javascript
const selectedProcess = ref([]); // 已選擇的項目陣列

// item為父項；child為子項，預設子項為空
const toggleProcess = (item, child = null) => {
  // 從已選擇的項目陣列 selectedProcess 裡尋找是否存在父項，並回傳索引
  // 使用 data 的 key 尋找
  // Array.findIndex() 回傳 -1 代表不在陣列中
  const existingIndex = selectedProcess.value.findIndex(
    (selection) => selection.item.key === item.key
  );

  // 以「是否有無子項」為區分
  // 若有子項，代表使用者點選子項
  if (child) {
    // 若 selectedProcess 找不到父項 = 父項未選擇 ---> 添加父項及子項
    if (existingIndex === -1) {
      selectedProcess.value.push({ item, child });
    } else { // 若 selectedProcess 找到父項 = 父項已選擇 ---> 更新父項裡的子項
      const existingSelection = selectedProcess.value[existingIndex];
            // 若已選擇相同的子項，則取消選擇
      if (existingSelection.child?.key === child.key) {
        selectedProcess.value.splice(existingIndex, 1);
      } else { // 反之則更換子項
        selectedProcess.value[existingIndex].child = child;
      }
    }
  } else { // 若子項為空，代表使用者點選父項
    // 若 selectedProcess 找不到父項 = 父項未選擇 ---> 添加父項及子項
    if (existingIndex === -1) {
      // 若主項存在子項，預設選擇第一個子項
      if (item.child && item.child.length > 0) {
        selectedProcess.value.push({ item, child: item.child[0] });
      } else { // 若主項無子項，直接選擇
        selectedProcess.value.push({ item, child: null });
      } 
    } else {  // 若子項為空且 selectedProcess 找到父項 = 父項已選擇 ---> 取消選擇父項
      selectedProcess.value.splice(existingIndex, 1);
    }
  }
};
```

挺繞口令的，**事實上就是實現 Toggle**──點擊一個項目後，若原本有選則取消選取；若原本沒有選取則選取，*差別只在使用者究竟是從主項點選還是子項點選*，這會決定切換的走向。

::detailsBlock{title="文字流程"}
- 由子項點選的指令 ---> 確認父項是否已選取
  - 若父項已選取 ---> 確認子項原本是誰被選取
    - 若子項原本是自己 ---> 取消整個項的選取
    - 若子項原本是它項 ---> 改成自己
  - 若父項未選取 ---> 選取父項及自己
- 由父項點選的指令 ---> 確認自己是否已選取
  - 若自己已選取 ---> 取消整個項的選取
  - 若自己未選取 ---> 確認是否有子項
    - 自己有子項 ---> 選取自己及第一個子項
    - 自己無子項 ---> 不需要選取子項
::

### 第四步：點擊事件綁定

在原本的架構上添加點擊綁定事件，`@click` 是 Vue 中用來綁定事件的指令之一，它的完整語法是 `v-on:click`，可以調用方法並直接傳遞參數。

這裡我希望添加在由 `v-for` 建立的架構上，當我點選其中一個項目時，會觸發 `toggleProcess()`，並傳入該項目的內容。

```vue-html
<template>
  <div class="box">
    <ul>
      <li v-for="item in data" :key="item.key"> // [!code --]
      <li v-for="item in data" :key="item.key" @click="toggleProcess(item)"> // [!code ++]
        {{ item.title }}
        <ul v-if="item.child && item.child.length">
          <li v-for="child in item.child" :key="child.key"> // [!code --]
          <li v-for="child in item.child" :key="child.key" @click.stop="toggleProcess(item, child)"> // [!code ++]
            {{ child.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
```

> 使用 @click.stop 防止點擊子項時冒泡至父項，確保選擇的父子層次邏輯獨立運行。

### 第五步：顯示結果

![製作切換選擇](/img/articles/two-level-hierarchica-checkbox-selector/步驟三.webp)

製作好了 Toggle ，現在我們要顯示結果到螢幕上。在第二步撰寫樣式中，定義了一個名為 `.selected` 的類別。當條件判斷為 `true` 時，該類別會動態添加到 `<template>` 中的相應元素上，以應用指定的樣式。

#### 條件判斷邏輯

首先實現條件判斷函式，用來檢查當前項目是否處於選中狀態。此函式接收父項 `item` 和可選的子項 `child` 作為參數，並通過 `key` 進行判斷。

``` javascript
const isSelected = (item, child = null) => {
  return selectedProcess.value.some(
    (selection) =>
      selection.item.key === item.key &&
      (child ? selection.child?.key === child.key : true)
  );
};
```

::detailsBlock{title="文字流程"}
- 檢查 `selectedProcess` 中是否有匹配的父項 `item`
  - 若無匹配父項，則返回 `false`
  - 若匹配到父項，進一步檢查子項 `child`
    - 如果 `child` 為 `null`，則表示僅判斷父項的選擇狀態，返回 `true`
    - 如果 `child` 不為 `null`，則需要檢查該父項下的子項：
      - 若子項不匹配，返回 `false`
      - 若子項匹配，則返回 `true`
::

#### 動態應用樣式

基於 `isSelected` 函式的判斷結果，當 `true` 時為元素添加 `selected` 類別，否則移除該類別。此類別控制樣式的顯示，使得被選中的項目具有不同的視覺效果。

```vue-html
<template>
  <div class="box">
    <ul>
      <li v-for="item in data" :key="item.key" @click="toggleProcess(item)"> // [!code --]
      <li v-for="item in data" :key="item.key" :class="{ selected: isSelected(item) }" @click="toggleProcess(item)"> // [!code ++]
        {{ item.title }}
        <ul v-if="item.child && item.child.length">
          <li v-for="child in item.child" :key="child.key" @click.stop="toggleProcess(item, child)"> // [!code --]
          <li v-for="child in item.child" :key="child.key" :class="{ selected: isSelected(item, child) }" @click.stop="toggleProcess(item, child)"> // [!code ++]
            {{ child.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
```

至此一個客製的雙階選擇器就寫好了～

### 額外步驟

![雙階選擇器成果展示](/img/articles/two-level-hierarchica-checkbox-selector/成果展示.webp)

除了讓選擇框內顯示選中的項目，我還需要在其他區域展示已選擇的項目。為此我實現了一個「You choose...」欄位，專門用來顯示當前的選擇狀態。這也是我使用陣列來存儲選擇項目的原因之一，透過將選擇的父項和子項存儲到陣列中，可以方便地追蹤和顯示使用者的選擇。

具體說明如下：

- 選中的項目像標籤一樣並行排列
- 每個標籤顯示選中的子項標題（如果存在），否則顯示父項標題。
- 每個標籤綁定 `@click` 事件，允許使用者點擊標籤來取消選擇對應的項目。

```vue-html
<template>
  <div class="container"> // [!code ++]
    <div class="box"> // [!code ++]
      <div><b>You choose...</b></div> // [!code ++]
        <div class="box_inner"> // [!code ++]
          <div class="tag" v-for="(selected, index) in selectedProcess":key="selected.key" @click="toggleProcess(selected.item, selected.child)"> // [!code ++]
            <span v-if="selected.child">{{ selected.child.title }}</span> // [!code ++]
            <span v-else>{{ selected.item.title }}</span> // [!code ++]
        </div> // [!code ++]
      </div> // [!code ++]
    </div> // [!code ++]
    <div class="box">
      <ul>
        <li v-for="item in data" :key="item.key" :class="{ selected: isSelected(item) }" @click="toggleProcess(item)">
          {{ item.title }}
          <ul v-if="item.child && item.child.length">
            <li v-for="child in item.child" :key="child.key" :class="{ selected: isSelected(item, child) }" @click.stop="toggleProcess(item, child)">
              {{ child.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div> // [!code ++]
</template>
```

## 最終成果

::client
<iframe height="697" style="width: 100%;" scrolling="no" title="Two-Level Hierarchical Checkbox Selector|雙層復選框選擇器" src="https://codepen.io/Lin-Donna/embed/preview/MWNKBrd?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/Lin-Donna/pen/MWNKBrd">
    Two-Level Hierarchical Checkbox Selector|雙層復選框選擇器</a> by Lin Donna (<a href="https://codepen.io/Lin-Donna">@Lin-Donna</a>)
    on <a href="https://codepen.io">CodePen</a>.
</iframe>
::

## 結語

原本一開始需要實現這個需求時，以為自己三兩下就可以寫出來，結果要判斷的規則跟最後需要傳給後端的資料相對一般 `checkbox` 複雜，於是我決定自定義一個選擇器，還可以自訂樣式。雖然這個方法還有優化的空間，並非最完美的解決方案，但在有限的時間內完成這個自定義選擇器是一次寶貴的練習經驗。希望未來有時間能進一步精簡和優化這個組件，提升其性能和可維護性。