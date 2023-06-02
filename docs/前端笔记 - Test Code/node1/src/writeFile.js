const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./demo/index.txt");

async function test() {
  await fs.promises.writeFile(filename, "write hahaha", {
    flag: "a", // 追加内容
  });
  console.log("写入成功");
}

test();
