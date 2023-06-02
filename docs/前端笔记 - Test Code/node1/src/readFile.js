const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, './demo/index.txt');

// fs.readFile(filename, "utf-8", (err, content) => {
//     console.log(content);
// })

// Sync 函数是同步的，会导致JS运行阻塞，及其影响性能
// 通常，在程序启动时运行有限的次数即可
// const content = fs.readFileSync(filename, 'utf8');
// console.log(content);

async function test() {
    const content = await fs.promises.readFile(filename, 'utf-8');
    console.log(content);
}

test();