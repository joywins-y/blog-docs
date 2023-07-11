## 正则

### Phone number formatting (手机号格式化)

当你需要将手机号码格式化成 xxx-xxxx-xxxx 的形式

```js
const formatPhone = (str, sign = "-") =>
  str
    .replace(/(\W|\s)/g, "")
    .split(/^(\d{3})(\d{4})(\d{4})$/)
    .filter((item) => item)
    .join(sign);

formatPhone("13123456789"); // '131-2345-6789'
formatPhone("13 1234 56 789", " "); // '131 2345 6789'
```

### Remove extra spaces (去除多余空格)

当你需要将一段文本中的多个空格合并成一个空格

```js
const setTrimOut = (str) => str.replace(/\s\s+/g, " ");
const str = setTrimOut("hello,   jack");

console.log(str); // hello, jack
```
