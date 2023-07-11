## Utility 实用函数

### Escape regular expression (转义正则表达式)

使用 replace() 来转义特殊字符。

JavaScript 代码:

```jsx
const escapeRegExp = (str) => str.replace(/[._+?^${}()|[\]\\]/g, "\\$&");
// escapeRegExp('(test)') -> \\(test\\)
```

### Get native type of value (获取原生类型的值)

返回值小写的构造函数名称，如果值为 undefined 或 null ，则返回 “undefined” 或 “null”。

JavaScript 代码:

```jsx
const getType = (v) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
// getType(new Set([1,2,3])) -> "set"
```

### Is array(是否为数组)

使用 Array.isArray() 来检查一个值是否为一个数组。

JavaScript 代码:

```jsx
const isArray = (val) => !!val && Array.isArray(val);
// isArray(null) -> false
// isArray([1]) -> true
```

### Is boolean(是否为布尔值)

使用 typeof 来检查一个值是否为一个布尔值。

JavaScript 代码:

```jsx
const isBoolean = (val) => typeof val === "boolean";
// isBoolean(null) -> false
// isBoolean(false) -> true
```

### Is function(是否为函数)

使用 typeof 来检查一个值是否为一个函数。

JavaScript 代码:

```jsx
const isFunction = (val) => val && typeof val === "function";
// isFunction('x') -> false
// isFunction(x => x) -> true
```

### Is number(是否为数字)

使用 typeof 来检查一个值是否为一个数字。

JavaScript 代码:

```jsx
const isNumber = (val) => typeof val === "number";
// isNumber('1') -> false
// isNumber(1) -> true
```

### Is string(是否为字符串)

使用 typeof 来检查一个值是否为一个字符串。

JavaScript 代码:

```jsx
const isString = (val) => typeof val === "string";
// isString(10) -> false
// isString('10') -> true
```

### Is symbol(是否为 symbol)

使用 typeof 来检查一个值是否为一个 symbol 。

JavaScript 代码:

```jsx
const isSymbol = (val) => typeof val === "symbol";
// isSymbol('x') -> false
// isSymbol(Symbol('x')) -> true
```

### Measure time taken by function (计算函数执行所花费的时间)

使用 console.time() 和 console.timeEnd() 来测量开始和结束时间之间的差，以确定回调执行的时间。

JavaScript 代码:

```jsx
const timeTaken = (callback) => {
  console.time("timeTaken");
  const r = callback();
  console.timeEnd("timeTaken");
  return r;
};
// timeTaken(() => Math.pow(2, 10)) -> 1024
// (logged): timeTaken: 0.02099609375ms
```

### Number to array of digits (将数字转化为整数数组)

将数字转换为字符串，使用 split() 来转换构建一个数组。使用 Array.map() 和 parseInt() 将每个值转换为整数。

JavaScript 代码:

```jsx
const digitize = (n) => ("" + n).split("").map((i) => parseInt(i));
// digitize(2334) -> [2, 3, 3, 4]
```

### Ordinal suffix of number (数字序号的后缀)

使用模运算符(%)来查找各位和十位的值。查找哪些序号模式数字匹配。如果数字在十位模式中找到，请使用十位的序数。

JavaScript 代码:

```jsx
const toOrdinalSuffix = (num) => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ["st", "nd", "rd", "th"],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};
// toOrdinalSuffix("123") -> "123rd"
```

### Random integer in range (在指定的范围内生成一个随机整数)

使用 Math.random() 生成一个随机数并将其映射到所需的范围，使用 Math.floor() 使其成为一个整数。
JavaScript 代码:

```jsx
const randomIntegerInRange = (min, max) => Math.floor(Math.random() _ (max - min + 1)) + min;
// randomIntegerInRange(0, 5) -> 2
```

### Random number in range (在指定的范围内生成一个随机数)

使用 Math.random() 生成一个随机值，使用乘法将其映射到所需的范围。

JavaScript 代码:

```jsx
const randomInRange = (min, max) => Math.random() _ (max - min) + min;
// randomInRange(2,10) -> 6.0211363285087005
```

### RGB to hexadecimal(RGB 转 Hex)

使用按位左移运算符(<<)和 toString(16) 将给定的 RGB 参数转换为十六进制字符串，然后使用 padStart(6,'0') 得到一个 6 位的十六进制值。

JavaScript 代码:

1. 方法一

```jsx
const rgbToHex = (r, g, b) =>
  "#" + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
// rgbToHex(255, 165, 1) -> '#ffa501'
```

2. 方法二

```jsx
const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(255, 255, 255);
//  #ffffff
```

### Hexcode to RGB (Hex 转 RGB)

使用 Array.slice() , Array.map() 和 match() 将十六进制颜色代码(前缀为#)转换为 RGB 值的字符串。

JavaScript 代码:

```jsx
const hexToRgb = (hex) =>
  `rgb(${hex
    .slice(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join()})`;
// hexToRgb('#27ae60') -> 'rgb(39,174,96)'
```

```js
const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
```

### 生成随机十六进制

随机生成十六进制颜色值

```js
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
console.log(randomHexColor());
// #a2ce5b
```

### Swap values of two variables (交换两个变量的值)

使用数组解构来交换两个变量之间的值。

JavaScript 代码:

```jsx
[varA, varB] = [varB, varA];
// [x, y] = [y, x]
```

### URL parameters(网址参数)

通过适当的正则表达式，使用 match() 来获得所有的键值对， Array.reduce() 来映射和组合成一个单一的对象。将 location.search 作为参数传递给当前 url。

JavaScript 代码:

1. 方式一

```jsx
const getUrlParameters = (url) =>
  url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
      ),
      {}
    );
// getUrlParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}
```

2. 方式二

```js
const getParameters = (URL) =>
  JSON.parse(
    `{"${decodeURI(
      URL.split("?")[1]
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
    )}"}`
  );

// getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1"); ==> {q: 'js+md', newwindow: '1'}
```

### UUID generator (UUID 生成器)

使用 crypto API 生成符一个 UUID，符合 RFC4122 版本 4 。

JavaScript 代码:

```jsx
const uuid = \_ => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) );
// uuid() -> '7982fcfe-5721-4632-bede-6000885be57d'
```

```js
const uuid = (a) => (a ? (a ^ ((Math.random() \* 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid))
```

### Validate email(邮箱验证)

使用正则表达式来检查电子邮件是否有效。如果电子邮件有效，则返回 true ，否则返回 false 。

JavaScript 代码:

```jsx
const validateEmail = (str) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  );
// validateEmail(mymail@gmail.com) -> true
```

### Validate number (数字验证)

使用 !isNaN 和 parseFloat() 来检查参数是否是一个数字。使用 isFinite() 来检查数字是否是有限数。使用 Number() 来检查强制转换是否成立。

JavaScript 代码:

```jsx
const validateNumber = (n) =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
// validateNumber('10') -> true
```

### Value or default (值或者默认值)

返回 value ，如果传递的值是 falsy ，则返回默认值。

JavaScript 代码:

```jsx
const valueOrDefault = (value, d) => value || d;
// valueOrDefault(NaN, 30) -> 30
```

### Check if object is empty (检查对象是否为空)

检查对象是否为空，即当对象等于`{}`时，也能正确识别

```js
const isEmpty = (obj) =>
  obj ? Reflect.ownKeys(obj).length === 0 && obj.constructor === Object : false;
isEmpty({}); // true
isEmpty({ a: "not empty" }); //false
```

### Check if the current tab is in the background (检查当前选项卡是否在后台)

浏览器使用选项卡式浏览，任何网页都有可能在后台，此时对用户来说是没有在浏览器的，那么如何快速检测到你的网页对用户是隐藏还是可见呢

JavaScript 代码:

```jsx
const isTabActive = () => !document.hidden;

isTabActive(); // true|false
```

### Check if element is in focus (检测元素是否处于焦点)

`activeElement` 属性返回文档中当前获得焦点的元素

JavaScript 代码:

```jsx
const elementIsInFocus = (el) => el === document.activeElemet;
elementIsInFocus(anyElement); // 元素处于焦点返回true，反之返回false
```

### get selected text (获取选定的文本)

使用内置的 getSelection 获取用户选择的文本:

JavaScript 代码:

```jsx
const getSelectedText = () => window.getSelection().toString();

getSelectedText();
// 返回选中的内容
```

### Convert Fahrenheit/Celsius (转换华氏/摄氏)

处理温度有时会晕头转向。这两个函数则能帮助大家将华氏温度转换为摄氏温度，以及将摄氏温度转换为华氏温度。

- 将华氏温度转换为摄氏温度

JavaScript 代码:

```jsx
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

fahrenheitToCelsius(50); // 10
```

- 将摄氏温度转华氏温度

JavaScript 代码:

```jsx
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

celsiusToFahrenheit(100); // 212
```

### Get the specified number of characters in a string (获取字符串中的指定字符数)

该函数可以获取空格数和随后的单词数，或者用于获取字符串中某个分隔符的计数

JavaScript 代码:

```jsx
const characterCount = (str, char) => str.split(char).length - 1;

characterCount("hello world", "l"); // 3
```

### compares two objects (比较两个对象)

当你需要比较两个对象，js 的等于只能判断对象的地址是否相同，当地址不相同的时候无法判断两个对象的键值对是否一致。

```js
const isEqual = (...objects) =>
  objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
// isEqual({ name: "jack" }, { name: "jack" }); // true
// isEqual({ name: "jack" }, { name: "jack1" }, { name: "jack" }); // false
```

### get random ip (获取随机 ip)

当你需要生成一个 ip 地址

```js
const randomIp = () =>
Array(4)
.fill(0)
.map((\_, i) => Math.floor(Math.random() \* 255) + (i === 0 ? 1 : 0))
.join('.');
```

### get cookies (获取 cookie)

当你需要将 cookie 转换成对象

```js
const getCookie = () =>
  document.cookie
    .split(";")
    .map((item) => item.split("="))
    .reduce((acc, [k, v]) => (acc[k.trim().replace('"', "")] = v) && acc, {});

getCookie();
```

### mandatory wait (强制等待)

当你需要等待一段时间，但又不想写在 setTimeout 函数中，造成回调地狱

```js
const sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t));
sleep(2000).then(() => {
  console.log("time");
});
```
