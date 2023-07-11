## Node

### Write JSON to file (将 JSON 写到文件)

使用 fs.writeFile()，模板字面量 和 JSON.stringify() 将 json 对象写入到 .json 文件中。

JavaScript 代码:

```jsx
const fs = require("fs");
const jsonToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
// jsonToFile({test: "is passed"}, 'testJsonFile') -> writes the object to 'testJsonFile.json'
```
