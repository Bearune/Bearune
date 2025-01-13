---
category: 前端開發
title: 【JavaScript 學習筆記 07】專案練習 Chapter 7 Project - A Robot
description: 深入淺出學習 JavaScript 狀態管理與演算法優化！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記以一個具體的機器人送包裹案例，展示了如何在 JavaScript 中實現高效的狀態管理和路徑規劃。從基本的隨機移動策略開始，逐步改進到智能尋路算法，完整呈現了程式優化的過程。內容涵蓋了狀態管理模式、不可變性原則、廣度優先搜尋算法等重要概念，並通過實際程式碼展示了這些概念的應用。透過循序漸進的方式，幫助讀者理解如何設計和優化複雜的程式系統。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-01-11
keywords: JavaScript 狀態管理, JavaScript 演算法, JavaScript 路徑規劃, JavaScript 不可變性, JavaScript 集中式管理, JavaScript 廣度優先搜尋, JavaScript BFS, JavaScript 效能優化, JavaScript 物件導向, JavaScript 類別, JavaScript 資料結構, JavaScript 圖論, JavaScript Map, JavaScript Array, JavaScript 函數式程式設計, JavaScript 純函數, JavaScript 記憶體管理, JavaScript 程式設計原則, JavaScript 最佳實踐, JavaScript 案例研究, JavaScript 程式優化, JavaScript 系統設計, JavaScript 學習筆記, JavaScript 入門教學, JavaScript 範例, Eloquent JavaScript, Algorithm Optimization, State Management, JavaScript examples
image: /img/articles/eloquent-JavaScript/cover7.webp
draft: false

head:
  - - meta
    - property: og:title
      content: 【JavaScript 學習筆記 07】專案練習 Chapter 7 Project - A Robot
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover7.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-JavaScript-chapter7
  - - meta
    - property: og:description
      content: 深入淺出學習 JavaScript 狀態管理與演算法優化！本系列內容是基於 Eloquent JavaScript 4th edition (2024) 所整理的精簡筆記。本篇筆記以一個具體的機器人送包裹案例，展示了如何在 JavaScript 中實現高效的狀態管理和路徑規劃。從基本的隨機移動策略開始，逐步改進到智能尋路算法，完整呈現了程式優化的過程。內容涵蓋了狀態管理模式、不可變性原則、廣度優先搜尋算法等重要概念，並通過實際程式碼展示了這些概念的應用。透過循序漸進的方式，幫助讀者理解如何設計和優化複雜的程式系統。

sitemap:
  loc: /articles/eloquent-JavaScript-chapter7
  lastmod: 2025-01-11
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

> The question of whether Machines Can Think [...] is about as relevant as the question of whether Submarines Can Swim.── Edsger Dijkstra, The Threats to Computing Science

![【JavaScript 學習筆記 07】專案練習 Chapter 7 Project - A Robot](/img/articles/eloquent-JavaScript/cover7.webp)

本文將使用 JavaScript 物件導向實作一個機器人送包裹的案例，並透過這個案例，深入理解物件導向程式設計的原理與技巧。

:anchor

## 在草地村莊送包裹

我們將設計一個機器人，它需要在一個村莊中收送包裹。村莊中有11個地點，14條道路，機器人需要先拿到包裹，才能送到目的地。任務完成條件是所有包裹都送達。草地村如下圖所示：

![草地村](/img/articles/eloquent-JavaScript/village2x.png)

這個村莊可以用點與線組成：點即是地點；線則是道路。它的道路我們可以用以下陣列來表示：

```javascript
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];
```

- 每一項都是 `A-B` 表示 A 與 B 相連成一條路，例如： `Alice's House-Bob's House` 表示 Alice's House 與 Bob's House 相連成一條路。


## Step 1 理解問題本質

在開始編寫程式之前，我們需要清楚地理解這個系統的核心需求。

#### 1. 基本條件

- 環境：11個地點，14條道路組成的村莊
- 任務：收集並投遞分散在各地的包裹
- 完成條件：所有包裹都送達指定地點

#### 2. 核心問題

要設計這個系統，我們需要解決三個關鍵問題：

- 如何表示村莊的地理結構？
- 如何追蹤包裹和機器人的狀態？
- 如何實現機器人的移動決策？

#### 3. 設計思路對比

##### 3.1 傳統物件導向思路 ❌

我們（可能只有我）下意識會將這個世界的各種元素定義為一個類：一個用於機器人的類、一個用於包裹的類、一個用於地點的類。這些類都包含描述其當前狀態的屬性。

```javascript
class Robot {
  constructor() {
    this.location = null;
    this.holdingParcels = [];
  }
}

class Location {
  constructor() {
    this.name = "";
    this.parcels = [];
    this.connected = [];
  }
}

class Parcel {
  constructor() {
    this.currentLocation = null;
    this.destination = null;
    this.status = "waiting";
  }
}
```

可是這樣不對！這種設計會造成以下問題：

- 狀態分散在多個物件中
- 物件之間相互依賴
- 狀態更新複雜
- 難以追蹤系統整體狀態

##### 3.2 狀態集中管理思路 ✅

在這個例子中，其實我們只需要創建一個類，它包含機器人當前的位置，以及未投遞包裹的集合，並且每個包裹都有一個當前位置和一個目的地位置，這樣就足夠了。

```javascript
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels; // [{place, address}]
  }
}
```

這樣有以下幾個優點：

- 狀態集中管理
- 更新邏輯清晰
- 易於追蹤和調試
- 減少相互依賴

## Step 2 設計資料結構

首先將道路清單 `roads` 轉換為更易用的格式：

```javascript
// 原始道路資料
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

// 轉換函數
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);  // 道路是雙向的
  }
  return graph;
}

const roadGraph = buildGraph(roads);
```

轉換後的結構：

```javascript
//  roadGraph
{
    "Alice's House": ["Bob's House", "Cabin", "Post Office"],
    "Bob's House": ["Alice's House", "Town Hall"],
    "Cabin": ["Alice's House"],
    "Post Office": ["Alice's House", "Marketplace"],
    "Town Hall": ["Bob's House", "Daria's House", "Marketplace", "Shop"],
    "Daria's House": ["Ernie's House", "Town Hall"],
    "Ernie's House": ["Daria's House", "Grete's House"],
    "Grete's House": ["Ernie's House", "Farm", "Shop"],
    "Farm": ["Grete's House", "Marketplace"],
    "Shop": ["Grete's House", "Marketplace", "Town Hall"],
    "Marketplace": ["Farm", "Post Office", "Shop", "Town Hall"]
}
```

## Step 3 實現狀態管理

設計一個類來表示系統狀態：

```javascript
class VillageState {
  constructor(place, parcels) {
    this.place = place;  // 機器人當前位置
    this.parcels = parcels;  // [{place, address}]，未送達的包裹列表
  }
}
```

關鍵思路：

- 不要用多個物件來表示狀態，會很複雜
- 只儲存必要資訊（機器人位置和包裹狀態）

## Step 4 實現基本移動

我們需要一個 `move` 函式來模擬機器人的移動功能，這個函式會接受當前狀態和要前往的地點，然後回傳一個新的狀態，其中機器人的位置會更新，而包裹的狀態也會根據移動而判斷是否到達目的地。

```javascript
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {  // 參數 = 目標位置字串
    //  1. 檢查是否可以移動到目標位置
    if (!roadGraph[this.place].includes(destination)) {
      return this; //  如果不能移動，返回當前狀態
    }
    //  2. 更新包裹狀態
    let parcels = this.parcels.map(p => {
      //  機器人的位置不是包裹的目的地，則不更新包裹位置
      //  反之則更新包裹位置為目的地，如此可以方便第三步的過濾已送達包裹
      if (p.place != this.place) return p;
      return {place: destination, address: p.address};
    //  3. 移除已送達的包裹
    }).filter(p => p.place != p.address);
    
    //  4. 返回新狀態
    return new VillageState(destination, parcels);  // 根據不可變性（Immutability），不修改原有狀態
  }
}
```

這裡使用了 `map` 和 `filter` 方法來處理包裹：

- `map`: 對每個包裹是否到達進行判斷
- `filter`: 過濾掉已送達的包裹

#### 1. 不可變性（Immutability） 

在這個實例中我們使用了不可變性，不可變型即物件的狀態一旦創建就不能被直接修改，每次修改都會創建一個新的物件實例。例子如下：

```javascript
// 可變狀態（傳統方式）
class MutableRobot {
  constructor() {
    this.location = "Post Office";
    this.parcels = [];
  }
  
  // 直接修改狀態 ❌
  moveTo(newLocation) {
    this.location = newLocation;
  }
}

// 不可變狀態（推薦方式）
class ImmutableRobot {
  constructor(location, parcels) {
    this.location = location;
    this.parcels = parcels;
  }
  
  // 返回新實例，不修改原狀態 ✅
  moveTo(newLocation) {
    return new ImmutableRobot(newLocation, this.parcels);
  }
}
```

##### 1.1 不可變性的優點

對於複雜、多線程系統，不可變性更安全，因為它避免了多線程環境下的狀態競爭問題，我們應該盡量使用不可變性。具體有以下幾個優點：

1. 線程安全性
    ```javascript
    // 多線程場景
    function processRobotTask(robot) {
      // 不用擔心其他線程意外修改 robot 狀態
      // 每個操作都是獨立的，不會相互干擾
      let newRobot = robot.moveTo("Shop");
      let anotherTask = robot.moveTo("Farm");
    }
    ```
2. 更容易預測和調試
    ```javascript
    // 狀態追蹤更加清晰
    let initialState = new VillageState("Post Office", parcels);
    let state1 = initialState.move("Alice's House");
    let state2 = state1.move("Bob's House");

    // 可以輕鬆追蹤每一步的變化
    console.log(initialState);  // 原始狀態不變
    console.log(state1);        // 第一次移動的狀態
    console.log(state2);        // 第二次移動的狀態
    ```
3. 簡化狀態管理
    ```javascript
    // 狀態回溯和時間旅行更容易
    class StateHistory {
      constructor() {
        this.states = [];
      }
      
      addState(state) {
        this.states.push(state);
      }
      
      // 輕鬆回到任何之前的狀態
      getStateAt(index) {
        return this.states[index];
      }
    }
    ```
4. 函數純度和可預測性
    ```javascript
    // 純函數：相同輸入必定產生相同輸出
    function calculateRoute(currentState) {
      // 不直接修改輸入狀態
      return currentState.parcels.map(parcel => 
        findRoute(roadGraph, currentState.place, parcel.address)
      );
    }
    ```

##### 1.2 不可變性 vs 可變性

| 特性       | 可變性   | 不可變性   |
| ---------- | -------- | ---------- |
| 狀態修改   | 直接修改 | 創建新實例 |
| 線程安全   | 否       | 是         |
| 調試難度   | 高       | 低         |
| 記憶體效率 | 高       | 相對較低   |
| 狀態追蹤   | 困難     | 容易       |

在草地村機器人範例中，不可變性幫助我們：

- 追蹤機器人每一步的精確狀態
- 輕鬆實現路徑回溯
- 避免意外的狀態修改

## Step 5 模擬機器人運作

為了讓我們的送貨機器人開始工作，我們需要實現兩個關鍵部分：運行系統和機器人的決策邏輯。

#### 1. 運行系統 (`runRobot`)

首先實現一個模擬系統，用來執行機器人的動作：

```javascript
function runRobot(state, robot, memory) {
  // memory 參數用於儲存機器人的路徑規劃資訊
  for (let turn = 0;; turn++) {  // 直到所有包裹都送達才結束
    if (state.parcels.length == 0) {  // 如果所有包裹都送達，則結束循環
      console.log(`完成任務，共花費 ${turn} 回合`);
      break;
    }
    let action = robot(state, memory);  // 執行機器人函數，取得下一步移動方向
    state = state.move(action.direction);  // 更新機器人狀態（VillageState物件）
    memory = action.memory;  // 更新記憶（memory物件）
    console.log(`移動到 ${action.direction}`);
  }
}
```

這個系統會：

- 追蹤機器人的回合數
- 檢查是否所有包裹都已送達
- 執行機器人的決策
- 更新村莊狀態
- 記錄移動過程

#### 2. 隨機機器人 (`randomRobot`)

為了確保系統能正常運行，我們先實現最簡單的策略──讓機器人隨機移動：

```javascript
// 隨機選擇陣列某項
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

// 隨機選擇路徑
function randomRobot(state) {
  // 隨機選擇一個相鄰位置
  return {
    direction: randomPick(roadGraph[state.place]),
    // （可省略）不需要記憶，返回 undefined
    memory: undefined
    };
}
```

這個機器人：

- 不需要記憶（忽略 `memory` 參數）
- 只是單純地從當前位置可用的道路中隨機選擇一條
- 返回選擇的方向，不包含記憶資訊

##### 2.1 執行模擬

要開始模擬，我們需要一個初始狀態，要有具體包裹數量、包裹位置和收件地址，以及機器人初始位置。這裡我們可以創建隨機初始狀態的方法：

```javascript
VillageState.random = function(parcelCount = 5) { // parcelCount 可以指定包裹數量，預設5個
  // 生成隨機包裹位置和收件地址
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels); // 回傳實例物件，機器人初始位置為 Post Office
};
```

#### 3. 執行效率分析

```javascript
runRobot(VillageState.random(), randomRobot, []);
```

> 為了更直觀地觀察模擬過程，作者有提供視覺化模擬工具：[runRobotAnimation](https://eloquentjavascript.net/code/#7){target=_blank}，只要按 `runcode` 即可執行。

平均效率分析：

- 5個包裹：約需要 75-100 回合
- 完全隨機：效率不穩定

::info
**小結**  

這種隨機策略雖然最終能完成任務，但效率很低，需要大量的回合才能送完所有包裹。這為我們後續改進機器人的策略提供了基準。
::

## Step 6 改進版本1：固定路線機器人

在觀察了隨機機器人的效率問題後，我們可以借鑒現實世界郵差的工作方式來改進。

#### 1. 設計固定路線

如果我們能找到一條經過村莊所有地點的路線，機器人只需要跑兩次這條路線就能完成任務：

- 第一次：收集所有包裹
- 第二次：投遞所有包裹

```javascript
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];
```
#### 2. 實現路線跟隨機器人

這個機器人需要記住當前的路線進度：

```javascript
function routeRobot(state, memory) {
  // 初始化或重置路線
  if (!memory || memory.length == 0) {
    memory = mailRoute;
  }
  // 返回下一步方向和更新後的記憶
  return {
    direction: memory[0],
    memory: memory.slice(1)
  };
}
```

#### 3. 執行效率分析

```javascript
runRobot(VillageState.random(), routeRobot, []);
```

平均效率分析：

- 固定效率：最多 26 回合（13步 × 2次）
- 穩定性高：效率不受包裹分布影響
- 適合固定路線的配送任務

::info
**小結**

雖然這個方法比隨機尋路更有效率，但它仍然不夠智能。因為它不考慮包裹的實際位置，即使附近有包裹，也可能會繞遠路去遵循固定路線。
::

## Step 7 改進版本2： 智能尋路機器人

為了進一步提升效率，我們需要讓機器人能夠根據實際情況規劃路線。

#### 1. 路徑決策邏輯優化

```javascript
function goalOrientedRobot({place, parcels}, route) {
  // 當前路線完成（為空）時，需要重新規劃路線
  if (route.length == 0) {
    let parcel = parcels[0];  // 選擇第一個未送達的包裹作為當前任務
    // 路線規劃策略：
    // 1. 如果包裹還在其原始位置，機器人需要先前往取包裹
    // 2. 如果包裹已在機器人手上，則規劃送往目的地的路線
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}
```

#### 2. 路徑搜尋算法改進

這裡我們實現一個典型的[廣度優先搜尋(BFS)](https://zh.wikipedia.org/zh-tw/%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2){target=_blank}，其優點如下：

- 保證找到最短路徑
- 避免陷入死循環
- 效率較高

```javascript
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];

  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      // 1. 找到目標，返回完整路線
      // 2. 如果是新位置，加入待探索列表
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}
```

#### 3. 執行效率比較

```javascript
runRobot(VillageState.random(), goalOrientedRobot, []);
```

效率分析：

- 平均效率：約 16 回合完成 5 個包裹
- 動態調整：根據包裹位置即時規劃路線
- 最短路徑：每次移動都選擇最短距離

::info
**小結**  

智能尋路機器人雖然比固定路線機器人更有效率，但仍有改進空間。比如它一次只考慮一個包裹，可能會在村莊中來回奔波，即使附近還有其他包裹。
::

#### 4. 持續優化（補充）

根據剛才實作的智能尋路機器人，我們可以分析出幾個問題：

1. 只考慮第一個包裹，忽略了其他包裹的位置
2. 沒有考慮路線的整體效率
3. 沒有優先級排序策略

因此，我們可以進一步優化智能尋路機器人，使其考慮所有包裹的位置，並優先處理距離最近的包裹。具體方法是優先選擇前往取包裹而不是送達包裹的路線。

```javascript
function smarterRobot(state, memory) {
  // 如果已有規劃好的路線，繼續執行
  if (memory.length > 0) {
    return { direction: memory[0], memory: memory.slice(1) };
  }
  // 找出所有需要處理的任務（取包裹和送包裹）
  let tasks = [];

  // 收集所有待取的包裹
  state.parcels.forEach(parcel => {
    if (parcel.place !== state.place) {
      tasks.push({
        type: 'pickup',
        place: parcel.place,
        parcel: parcel,
        distance: findRoute(roadGraph, state.place, parcel.place).length
      });
    }
  });

  // 收集所有已取得但未送達的包裹
  state.parcels.forEach(parcel => {
    if (parcel.place === state.place) {
      tasks.push({
        type: 'deliver',
        place: parcel.address,
        parcel: parcel,
        distance: findRoute(roadGraph, state.place, parcel.address).length
      });
    }
  });

  // 如果沒有任務，說明已完成
  if (tasks.length === 0) return { direction: state.place, memory: [] };

  // 任務優先級排序：
  // 1. 優先選擇距離最近的任務
  // 2. 在距離相同時，優先取包裹而不是送包裹
  tasks.sort((a, b) => {
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    }
    return a.type === 'pickup' ? -1 : 1;
  });

  // 選擇最優先的任務並規劃路線
  let task = tasks[0];
  let route = findRoute(roadGraph, state.place, task.place);

  return { direction: route[0], memory: route.slice(1) };
}
```

這個改進版本的機器人有以下優勢：

1. 全局考慮：每次規劃時會考慮所有包裹的位置和狀態
2. 智能優先級：
   - 優先處理距離最近的任務，減少不必要的移動
   - 在距離相同時優先取包裹，因為這樣可以同時運送多個包裹
3. 動態規劃：
   - 每次移動後重新評估情況
   - 根據當前位置選擇最優路線
4. 效率提升：
   - 減少了來回移動的次數
   - 通過優先處理近距離任務來優化整體效率

## 比較不同策略

我們可以比較不同策略的效率，並計算平均回合數。這裡我們編寫一個函數 `compateRobots`，它接收我們剛剛實作的這四種路徑策略，並分別執行 100 次相同的隨機任務，最後計算每種策略的平均回合數。

```javascript
function compareRobots(robot1, memory1, robot2, memory2, robot3, memory3, robot4, memory4) {
  // 執行100次測試，計算平均步數
  let total1 = 0, total2 = 0, total3 = 0, total4 = 0;
  for (let i = 0; i < 100; i++) {
    let state = VillageState.random();
    total1 += runRobot(state, robot1, memory1);
    total2 += runRobot(state, robot2, memory2);
    total3 += runRobot(state, robot3, memory3);
    total4 += runRobot(state, robot4, memory4);
  }
  console.log('平均步數');
  console.log(`隨機路線：${total1 / 100}`);
  console.log(`固定路線：${total2 / 100}`);
  console.log(`智能路線：${total3 / 100}`);
  console.log(`更智能路線：${total4 / 100}`);
}

compareRobots(randomRobot, [], routeRobot, [], goalOrientedRobot, [], smarterRobot, []);
```

若要沿用剛才的實作方法，記得將 `runRobot` 函數稍作修改：

```javascript{5}
function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      // console.log(`完成任務，共花費 ${turn} 回合`);
      return turn;  // 刪除 break，改為 return turn
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    // console.log(`移動到 ${action.direction}`);
  }
}
```

執行結果如下：
```txt
平均步數
隨機路線：70.86 回合
固定路線：18.01 回合
智能路線：14.28 回合
更智能路線：11.92 回合
```

::info
**小結**

從以上結果我們可以得知機器人運送效率為更智能路線＞智能路線＞固定路線＞隨機路線。
::

## 總結

本文透過一個機器人送包裹的案例，深入探討了 JavaScript 中的狀態管理和程式設計原則。從最初的隨機移動策略，到固定路線，再到智能尋路，逐步展示了如何通過改進演算法來優化系統效能。同時也說明了不可變性、集中式狀態管理等現代程式設計理念的重要性。

#### 關鍵要點

- 集中式狀態管理優於分散式物件設計
- 不可變性原則能提升程式的可預測性和可維護性
- 路徑規劃演算法對效能優化的重要性
- 合理的抽象和設計能大幅降低系統複雜度
- 漸進式優化策略能有效提升系統效能

以上內容是基於 [7. Project: A Robot - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/07_robot.html){target=_blank} 所整理的精簡筆記。