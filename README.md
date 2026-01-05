# 虛構公司「狗狗窩研究所」形象網站

本專案為一個虛構的寵物相關公司形象網站，結合品牌介紹、內容展示與會員系統。

主要目標是練習 SPA 架構、前後端 API 串接，以及身分驗證流程。

[線上預覽]()

## 網站特色

- 單頁式應用程式
- 響應式設計
- 使用者可註冊帳號並登入
- 使用 Cookie 和 Local storage 進行身份認證
  - 管理員帳號可存取後台會員資料與統計資訊
  - 未登入使用者無法進入管理頁面

## 使用框架與套件
### 框架

- Vue.js

### 套件

- Vue Router
- Bootstrap
- Headroom.js
- AOS
- TypeIt
- CounterUp2
- Chart.js
- Flask *(API)*

### 設計規劃

- Figma
  - [設計](https://www.figma.com/design/kMEDyQ7LsMzNS4NGZp08Np/No.-4---Doggo-Nest?t=rb8eOWDkppMv0cu3-1)
  - [流程圖](https://www.figma.com/board/J4FEaEFeYTDQhspMwlILql/No.-4---Doggo-Nest-Flow?t=rb8eOWDkppMv0cu3-1)

## 網站結構

```
┌─ 導覽列
|    ├─ 管理員頁面
|    |   └─ 會員資料統計
|    |   └─ 會員清單
|    ├─ 認養流程
|    ├─ 登入
|    └─ 註冊
├─ 首頁
├─ 最新消息
├─ 訂閱電子報
├─ 公司標語（Missions）
├─ 服務內容
├─ 狗狗性格小測驗
├─ 公司標語
├─ 產品列表
├─ 好評回饋
├─ 公司標語
├─ 關於我們
├─ 團隊
├─ 合作夥伴
├─ 公司標語
├─ 聯絡我們
├─ 訂閱電子報
├─ 公司標語
└─ 頁尾
     ├─ Google 地圖（外部網站）
     └─ 社交平台（外部網站）
         ├─ Facebook
         ├─ Instagram
         ├─ Twitter
         └─ Line
         
```
