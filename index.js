const fontkit = require('fontkit');
const fs = require('fs');

// 输入 TTF 文件路径
const ttfPath = './ChangAnunitype-Regular.TTF';
// 输出 TXT 文件路径
const outputPath = './characters.txt';

// 读取字体文件
const font = fontkit.openSync(ttfPath);

// 获取字体支持的字符代码点
const characters = [...font.characterSet]
  .map(codePoint => String.fromCodePoint(codePoint)) // 将代码点转换为字符
  .join(''); // 拼接成一个字符串

// 将字符写入 TXT 文件
fs.writeFileSync(outputPath, characters, 'utf8');

console.log(`已成功提取字符到 ${outputPath}`);
