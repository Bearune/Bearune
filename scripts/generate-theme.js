import fs from 'fs'; // 引入 Node.js 的 fs 模塊來寫入文件
import path from 'path'; // 用於解析文件路徑
import chroma from 'chroma-js'; // 引入 chroma.js 進行顏色轉換
import { themeColorsLight, themeColorsDark } from '../assets/scss/theme.js'; // 引入顏色設定

// 將顏色轉換為 OKLCH 格式
const convertToOklch = (hexColor) => {
  const oklchColor = chroma(hexColor).oklch();
  // 檢查是否有 NaN 值
  if (oklchColor.some(item => isNaN(item))) {
    console.warn(`Invalid color for ${hexColor}. Using default color.`);
    // 如果是 NaN，返回一個預設的 OKLCH 顏色 (例如，黑色)
    return `100% 0 0`;
  }
  return `${(oklchColor[0] * 100).toFixed(2)}% ${oklchColor[1].toFixed(2)} ${oklchColor[2].toFixed(2)}`;
};

// 生成 CSS 變數的函數
const generateCSSVariables = (colors) => {
  return Object.entries(colors)
    .map(([key, value]) => {
      const oklchColor = convertToOklch(value); // 將 Hex 顏色轉換為 OKLCH 顏色
      // console.log(oklchColor);
      return `  --${key}: ${oklchColor};`; // 返回轉換後的 CSS 變數
    })
    .join('\n'); // 用換行符號拼接每個變數
};

// 生成 light 和 dark 兩個模式的 CSS 內容
const lightCSSContent = `:root {\n${generateCSSVariables(themeColorsLight)}\n}`;
const darkCSSContent = `:root[data-theme="dark"] {\n${generateCSSVariables(themeColorsDark)}\n}`;

// 寫入 CSS 變數到生成的 CSS 文件
fs.writeFileSync(path.resolve('./assets/scss/theme.css'), lightCSSContent + '\n' + darkCSSContent);

// 輸出完成訊息
console.log('CSS variables for light and dark themes (in OKLCH) generated in theme.css');
