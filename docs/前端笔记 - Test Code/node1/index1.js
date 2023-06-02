// console.log(global);
// console.log(__dirname);

{
  /* <iframe
  width="1280"
  height="720"
  src="https://www.youtube.com/embed/wItUc5NPhh4"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; */
}

// const buffer = Buffer.from('adsda', 'utf-8');
// console.log(buffer);
// console.log('当前命令行:', process.cwd());
// require(module);

// const fs = require("fs");
// const path = require("path");
// const filename = path.resolve(__dirname, "./src/b.txt");
// fs.readFile(filename, "utf-8", (err, content) => {
//   console.log(content);
// });
// console.log('1');
// 输出结果：1 b.txt文件内容

// const content = fs.readFileSync(filename, 'utf-8');
// console.log(content);
// console.log('2');
// 输出结果: b.txt文件内容 2

const path = require('path');

console.log(path.sep);

console.log(path.extname('.index.index'));


