## Math 数学方法

### Collatz algorithm(考拉兹算法)
如果 n 是偶数，则返回 n/2 。否则返回 3n+1 。

JavaScript 代码:

```jsx
const collatz = (n) => (n % 2 == 0 ? n / 2 : 3 * n + 1);
// collatz(8) --> 4
// collatz(5) --> 16
```

注：考拉兹猜想(英语：Collatz conjecture)，又称为奇偶归一猜想、3n ＋ 1 猜想、冰雹猜想、角谷猜想、哈塞猜想、乌拉姆猜想或叙拉古猜想，是指对于每一个正整数，如果它是奇数，则对它乘 3 再加 1，如果它是偶数，则对它除以 2，如此循环，最终都能够得到 1。– 维基百科。

### Distance between two points (两点之间的欧氏距离)

使用 Math.hypot() 计算两点之间的欧氏距离( Euclidean distance)。

JavaScript 代码:

```jsx
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
// distance(1,1, 2,3) -> 2.23606797749979
```

注：欧氏距离( Euclidean distance)是一个通常采用的距离定义，它是在 m 维空间中两个点之间的真实距离。

### Divisible by number (可以被某个数整除)

使用模运算符(%)来检查余数是否等于 0 。
JavaScript 代码:

```jsx
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
// isDivisible(6,3) -> true
```

### Even or odd number (判断奇偶数)

使用模运算符(%)来检查数字是奇数还是偶数。如果数字是偶数，则返回 true ，如果是奇数，则返回 false 。

JavaScript 代码:

```jsx
const isEven = (num) => num % 2 === 0;
// isEven(3) -> false
```

### Factorial (阶乘)

使用递归。如果 n 小于或等于 1 ，则返回 1 。否则返回 n 和 n - 1 的阶乘。

JavaScript 代码:

```jsx
const factorial = n => n < = 1 ? 1 : n * factorial(n - 1);
 // factorial(6) -> 720
```

### Fibonacci array generator (斐波纳契数组发生器)

创建一个指定长度的空数组，初始化前两个值( 0 和 1 )。使用 Array.reduce() 向数组中添加值，使用最的值是两个值的和(前两个除外)。

JavaScript 代码:

```jsx
const fibonacci = (n) =>
  Array(n)
    .fill(0)
    .reduce(
      (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      []
    );
// fibonacci(5) -> [0,1,1,2,3]
```

### Greatest common divisor (GCD) (最大公约数)

使用递归。当 y 等于 0 的情况下，返回 x 。否则，返回 y 和 x/y 余数最大公约数。

JavaScript 代码:

```jsx
const gcd = (x, y) => (!y ? x : gcd(y, x % y));
// gcd (8, 36) -> 4
```

### Hamming distance (汉明距离)

使用 XOR 运算符( ^ )查找这两个数字之间的位差，使用 toString(2) 转换为二进制字符串。使用 match(/1/g) 计算并返回字符串中 1 的数量。

JavaScript 代码:

```jsx
const hammingDistance = (num1, num2) =>
  ((num1 ^ num2).toString(2).match(/1/g) || "").length;
// hammingDistance(2,3) -> 1
```

注：在信息论中，两个等长字符串之间的汉明距离(英语：Hamming distance)是两个字符串对应位置的不同字符的个数。换句话说，它就是将一个字符串变换成另外一个字符串所需要替换的字符个数。- 维基百科

### Percentile (百分比)

使用 Array.reduce() 来计算有多少数字小于等于该值，并用百分比表示。

JavaScript 代码:

```jsx
const percentile = (arr, val) =>
  (100 *
    arr.reduce(
      (acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0),
      0
    )) /
  arr.length;
// percentile([1,2,3,4,5,6,7,8,9,10], 6) -> 55
```

### Powerset (幂集)

使用 Array.reduce() 与 Array.map() 结合来遍历元素，并将其组合成一个包含所有排列组合的数组。

JavaScript 代码:

```jsx
const powerset = (arr) =>
  arr.reduce((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]]);
// powerset([1,2]) -> [[], [1], [2], [2,1]]
```

### Round number to n digits (精确的几位小数)

使用 Math.round() 和模板字面量将数字四舍五入为指定的小数位数。省略第二个参数 decimals ，数字将被四舍五入到一个整数。

JavaScript 代码:

```jsx
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
// round(1.005, 2) -> 1.01
```

### Standard deviation (标准偏差)

使用 Array.reduce() 来计算均值，方差已经值的方差之和，方差的值，然后确定标准偏差。您可以省略第二个参数来获取样本标准偏差，或将其设置为 true 以获得总体标准偏差。

JavaScript 代码:

```jsx
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr
      .reduce((acc, val) => acc.concat(Math.pow(val - mean, 2)), [])
      .reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};
// standardDeviation([10,2,38,23,38,23,21]) -> 13.284434142114991 (sample)
// standardDeviation([10,2,38,23,38,23,21], true) -> 12.29899614287479 (population)
```

