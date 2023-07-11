## Digital conversion 数字转换

### Conversion (进制转换)

将 10 进制转换成 n 进制，可以使用 toString(n)

```js
const toDecimal = (num, n = 10) => num.toString(n);
// 假设数字10要转换成2进制
// toDecimal(10, 2); // '1010'
```

将 n 进制转换成 10 进制，可以使用 parseInt(num, n)

```js
// 10的2进制为1010
const toDecimalism = (num, n = 10) => parseInt(num, n);
// toDecimalism(1010, 2);
```
