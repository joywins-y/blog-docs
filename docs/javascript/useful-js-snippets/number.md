## Number 数字

### Truncated numbers (截断数字)

当你需要将小数点后的某些数字截断而不取四舍五入

```js
const toFixed = (n, fixed) =>
  `${n}`.match(new RegExp(`^-?\d+(?:.\d{0,${fixed}})?`))[0];
// toFixed(10.255, 2); // 10.25
```

### Rounding (四舍五入)

当你需要将小数点后的某些数字截断，并取四舍五入

```js
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
// round(10.255, 2); // 10.26
```

### Zero padding (补零)

当你需要在一个数字 num 不足 len 位数的时候前面补零操作

```js
const replenishZero = (num, len, zero = 0) =>
  num.toString().padStart(len, zero);
// replenishZero(8, 2); // 08
```
