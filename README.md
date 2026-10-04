# ZERO-TEC™ Official Website - zerotec.tw

## V8 黑底筆刷版 (已刪 V8/ZT + 全文字好讀版)

### 架構
- `src/App.tsx` = 官網全部內容 (產品、價格、文案都在這)
- `src/assets/logo-black.jpg` = 黑底紫 Z
- `src/assets/logo-transparent.png` = 透明紫 Z

### 維護方式 (方式二 - GitHub 自動部署)

#### 第一次設定 (只要做一次，3分鐘)

1. 去 GitHub.com → New repository → 名稱 `zerotec-tw` → Private → Create
2. 把這個資料夾全部檔案上傳 (Upload files 或 git push)
3. 去 Cloudflare Dashboard → Workers 和 Pages → 建立應用程式 → 連接到 Git → 選 `zerotec-tw` 倉庫
4. 建置設定: 
   - 框架: Vite
   - 建置指令: `npm run build`
   - 輸出目錄: `dist`
5. 按 部署 → 完成！以後 zerotec.tw 會自動跟 GitHub 同步

#### 以後要改網站 (30秒)

1. 去 GitHub 倉庫 → 點 `src/App.tsx` → 鉛筆圖示 Edit
2. 改文字 (搜尋 ZT-01 改產品，搜尋 official@ 改信箱)
3. 按 Commit changes → 自動部署，10秒後 zerotec.tw 更新

#### 常用修改位置

- 產品名稱/價格: App.tsx 搜 `products` 或 `ZT-01`
- 聯絡信箱: App.tsx 搜 `official@`
- IG 連結: App.tsx 搜 `instagram`
- Logo: 直接在 GitHub 上傳新圖覆蓋 src/assets/ 裡的兩張，檔名保持一樣

#### 緊急回退

改壞了？去 GitHub → History → 找到上一版 → Revert，自動退回。

---
© 2025 ZERO-TEC™ EST. TAIWAN
