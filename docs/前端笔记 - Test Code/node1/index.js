// 静态资源服务器
// http://localhost:9527/index.html => public/index.html
// http://localhost:9527/css/index.css => public/css/index.css

const http = require("https");
const URL = require("url");
const path = require("path");
const fs = require("fs");

async function getStat(filename) {
  try {
    return await fs.promises.stat(filename);
  } catch (error) {
    return null;
  }
}

/**
 * 得到要处理的文件内容
 */
async function getFileInfo(url) {
  const urlObj = URL.parse(url);
  let filename; // 要处理的文件路径
  filename = path.resolve(__dirname, "public", urlObj.pathname.substring(1));
  let stat = await getStat(filename);
  console.log(stat);
  if (!stat) {
    // 文件不存在
    return;
  } else if (stat.isDirectory()) {
    // 目录
    filename = path.resolve(__dirname, "public", urlObj.pathname.substring(1), "index.html");
    stat = await getStat(filename);
    if (!stat) {
      return null;
    } else {
      console.log("ok");
      return await fs.promises.readFile(filename);
    }
  } else {
    console.log('ok');
    return await fs.promises.readFile(filename);
  }
}

async function handler(req, res) {
  const info = await getFileInfo(req.url);
  if (info) {
    res.statusCode = 200;
    res.write(info);
  } else {
    res.statusCode = 404;
    res.write("Resource is not exist");
  }
  // res.write("Hello!!!");
  res.end();
}

const server = http.createServer(
  {
    key: fs.readFileSync(path.resolve(__dirname, "./server-key.pem")), // 私钥
    cert: fs.readFileSync(path.resolve(__dirname, "./server-cert.crt")), // 证书
  },
  handler
);
server.on("listening", () => {
  console.log("server listen 443");
});

server.listen(443);
