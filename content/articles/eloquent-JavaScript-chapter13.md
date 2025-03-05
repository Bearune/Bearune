---
category: 前端開發
title: JS 筆記#13 - JavaScript 與瀏覽器
description: Internet 作為全球電腦通訊基礎設施，透過標準協議如 HTTP、TCP/IP 實現資料傳輸，而 Web 則是建立其上的應用層服務，通過 HTML 構建互連網頁，並在瀏覽器沙盒環境中安全執行 JavaScript，形成了今日我們所熟知的網路生態系統，而瀏覽器市場的競爭與主導權變化將會持續影響著網頁標準的發展方向。
tags: ['javascript', 'Eloquent JavaScript 學習筆記系列']
date: 2025-03-05
keywords: 網際網路, Internet, 全球資訊網, World Wide Web, 網路協議, Network Protocol, HTML, JavaScript, 瀏覽器, Browser, TCP, HTTP, 沙盒, Sandbox, 網域名稱, Domain Name, URL, 網頁標準, Web Standards
image: /img/articles/eloquent-JavaScript/cover13.webp
draft: false

head:
  - - meta
    - property: og:title
      content: JS 筆記#13 - JavaScript 與瀏覽器
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://bearune.com/img/articles/eloquent-JavaScript/cover13.webp
  - - meta
    - property: og:url
      content: https://bearune.com/articles/eloquent-javascript-chapter13
  - - meta
    - property: og:description
      content: Internet 作為全球電腦通訊基礎設施，透過標準協議如 HTTP、TCP/IP 實現資料傳輸，而 Web 則是建立其上的應用層服務，通過 HTML 構建互連網頁，並在瀏覽器沙盒環境中安全執行 JavaScript，形成了今日我們所熟知的網路生態系統，而瀏覽器市場的競爭與主導權變化將會持續影響著網頁標準的發展方向。


sitemap:
  loc: /articles/eloquent-javascript-chapter13
  lastmod: 2025-03-05
  changefreq: monthly
  priority: 0.5
---

本系列內容是基於 [Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/){target="_blank"} 所整理的精簡筆記。

![JS 筆記#13 - JavaScript 與瀏覽器](/img/articles/eloquent-JavaScript/cover13.webp)

接下來從這章開始我們會討論瀏覽器。可以說：如果沒有瀏覽器就沒有 JavaScript，或者如果有 JavaScript，也不會有人在意。

因為本章是在講關於網路與瀏覽器的歷史故事，建議去看[原文](https://eloquentjavascript.net/13_browser.html){target=_blank}，這裡只簡單整理了一些筆記。

:anchor

## 網際網路

#### 1. 網路基礎

- 電腦網路（Computer networks）自1950年代就已存在，允許電腦間通過電纜發送資料。
- 網際網路（互聯網，Internet）在1980年代開始連接全球電腦
- 電腦間通訊需要共同的協議來解釋傳輸的位元

> 延伸閱讀：[電腦網路-維基百科](https://zh.wikipedia.org/zh-tw/计算机网络){target=_blank}、[網際網路-維基百科](https://zh.wikipedia.org/zh-tw/互联网){target=_blank}

#### 2. 網路協議

- 網路協議描述了網路上的通訊方式
- 超文本傳輸協定 HTTP（HyperText Transfer Protocol）用於獲取資源（網頁、圖片等）
- 基本 HTTP 請求格式：`GET /index.html HTTP/1.1`（會在[第18章](https://eloquentjavascript.net/18_http.html){target=_blank}中更詳細介紹 HTTP）

::info
HTTP 是一個高層協議，它不直接處理資料如何在物理網路上傳輸的細節。它依賴於其他底層協議(如TCP/IP)來確保資料能夠完整、有序地從一個地方傳輸到另一個地方。這種分層設計使每個協議只需專注於解決特定層面的問題，而不必處理整個通信過程的所有複雜性。
::

#### 3. TCP 協議

在網路上確保資料完整、有序地傳輸是一個複雜的技術挑戰，而 TCP（Transmission Control Protocol）的設計有效地解決了這一個問題。TCP 通過確認機制、重傳機制和流量控制等方式，大大提高資料傳輸的可靠性，使應用程式能夠依賴它來確保資料在**大多數**情況下能夠完整、有序地到達目的地。

- TCP連接運作方式：一台電腦監聽特定埠號（Port），另一台電腦連接到該埠號，建立連接後形成雙向通道（2-way pipe）。
  - 監聽的電腦稱為**伺服器（Server）**
  - 連接的電腦稱為**客戶端（Client）**

::info
**埠**通常唸ㄈㄨˋ，破音字（有些鍵盤打不出來，可以打ㄅㄨˋ）。
::

## 全球資訊網（Web，World Wide Web）

#### 1. Web 基本概念

- 全球資訊網（World Wide Web），簡稱 WWW 或 Web。
- Web 是一組允許在瀏覽器中訪問網頁的協議和格式，是建立在 Internet 上的一個應用層服務。
- Web 的特點是由相互連結的網頁（Web Page）組成，形成巨大的網絡，若我們要成為 Web 的一部分（建立網頁），只需要將電腦連接到 Internet，並監聽 HTTP (port 80) 或 HTTPS (port 443) 。

#### 2. URL 結構

Web 上每個文檔都需要由一個統一資源定位符（URL）命名。譬如現在這個頁面的網址：`https://bearune.com/articles/eloquent-javascript-chapter13`
- 組成部分：`protocol://server/path`
  - 協議（`http://`, `https://`）
  - 伺服器（`bearune.com`）
  - 路徑（`articles/eloquent-javascript-chapter13`）

#### 3. IP 與網域名稱

連接到 Internet 的電腦會獲得一個 IP 地址（如：`172.233.65.93`），但因為這種地址不容易記憶，我們可以使用網域名稱（如：`bearune.com`）來指向特定 IP 地址。

> 參考資料：[全球資訊網-維基百科](https://zh.wikipedia.org/zh-tw/万维网){target=_blank}

## HTML（HyperText Markup Language）

#### 1. HTML 基本概念

- 超文本標記語言（HTML）是網頁的文檔格式，包含文本和標籤。
- 標籤會提供結構信息，其組成以尖括號 `<>` 包圍。

#### 2. HTML 文檔結構

- 以 `<!doctype html>` 開始，告訴瀏覽器使用現代 HTML，而不是過時的樣式。
- HTML文件通常包含一個 `head`（文檔信息）和一個 `body`（文檔內容）
  - `head` 中包含標題、字元編碼等信息
  - `body` 中包含標題、段落、連結等內容

#### 3. HTML 標籤類型

- 標籤有多種形式，通常元素以開始標籤（如：`<p>`）開頭，以結束標籤（如：`</p>`）結束。
- 屬性：某些開始標籤（如：`<a>`）會包含額外資訊，稱為屬性。屬性以 `name="value"` 形式添加（如：`href="https://bearune.com/"`）。
- 自閉合標籤：某些類型的標籤不包含任何內容，因此也不需要關閉標籤，稱為「自閉合標籤」（如`<meta charset="utf-8">`）。
- 特殊字元：如果想在文本中顯示保留字字元，有可能會產生衝突，這時候可以使用實體語法表示，如下：
  - `&lt;`：小於 `<`
  - `&gt;`：大於 `>`
  - `&amp;`：和 `&`
  - `&quot;`：引號 `"`

#### 4. HTML 解析特性

HTML 有非常強的容錯能力，會自動添加缺失的標籤，而這種方式已經標準化，所以現代的瀏覽器會以相同的方式處理不完整的 HTML。

## HTML 與 JavaScript

我們學 JavaScript，最重要的 HTML 標籤就是 `<script>`，它允許我們在文檔中包含一段 JavaScript。

#### 1. 在 HTML 中嵌入 JavaScript

使用 `<script>` 標籤嵌入JavaScript代碼，當瀏覽器讀取到 `<script>` 標籤時立即執行其中的代碼。

```html
<script>alert("hello!");</script>
```

#### 2. 引用外部 JavaScript 文件

在 HTML 裡寫大型 JavaScript 會很冗長且不切實際，這時候可以使用 `src` 屬性引用外部 JavaScript 文件，這裡要注意 `<script>` 標籤永遠必須有結束標籤，否則頁面的其餘部分會被解釋為腳本的一部分。

```html
<script src="code/hello.js"></script>
```

#### 3. JavaScript 模組與事件處理

- 我們可以通過 `type="module"` 屬性加載[第10章](/articles/eloquent-javascript-chapter10){target=_blank}提到的ES模組

```html
<script src="code/hello.js" type="module"></script>
```

- HTML 某些屬性還可以包含 JavaScript 程式，如 `onclick`：

```html
<button onclick="alert('Boom!');">DO NOT PRESS</button>
```

## 沙盒（Sandbox）與兼容性

#### 1. 瀏覽器安全沙盒

執行從 Internet 下載的檔案存在潛在風險，因為我們往往不清楚所瀏覽網站的真正經營者。這些未知的網站可能懷有惡意，在提供下載的程式中植入病毒，使我們成為駭客入侵的目標。

然而 Web 的一大優勢在於：我們無需完全信任網頁內容即可瀏覽。這正是現代瀏覽器對 JavaScript 程式能力進行限制的原因：它不能查看我們電腦上的檔案，也不能修改任何與它所嵌入的網頁無關的東西，以這種方式隔離程式設計環境，我們稱為「沙箱（sandboxing）」。

#### 2. 瀏覽器戰爭與兼容性

在過去單一瀏覽器壟斷市場時，其開發商會自行引入新功能而忽略了兼容性的問題，導致寫網頁的人很痛苦。直到 Firefox、Chrome、Safari 等多元競爭者的崛起促成了標準化進程，才使現代瀏覽器行為更加一致且穩定。但隨著近幾年 Google 的 Chrome 市占率持續攀升，這種統一性可能會再次以單一供應商的形式出現。

## 總結

Internet 作為全球電腦通訊基礎設施，透過標準協議如 HTTP、TCP/IP 實現資料傳輸，而 Web 則是建立其上的應用層服務，通過 HTML 構建互連網頁，並在瀏覽器沙盒環境中安全執行 JavaScript，形成了今日我們所熟知的網路生態系統，而瀏覽器市場的競爭與主導權變化將會持續影響著網頁標準的發展方向。

以上內容是基於 [13. JavaScript and the Browser - Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/13_browser.html){target=_blank} 所整理的精簡筆記。