# 精心收集的超实用的 JavaScript 代码片段（ES6+ 编写）

## Array 数组

### Array concatenation (数组拼接)

使用 Array.concat()，通过在 args 中附加任何副本和/或值来拆分一个数组。
JavaScript 代码：

```jsx
const ArrayConcat = (arr, ...args) => [].concat(arr ，... args);
// ArrayConcat（[1 ,, [1,2,3，[4]]）-> [1,2,3，[4]]
```

### Array difference (数组比较)

根据副本 b 创建一个 Set 对象，然后在上方 a 上使用 Array.filter()方法，过滤出数组 b 中不包含的值。

JavaScript 代码：

```jsx
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};
// difference([1,2,3], [1,2]) -> [3]
```

### Array includes (数组包含)

使用 slice() 来抵消数组/字符串，并且使用 indexOf() 来检查是否包含该值。如果省略最后一个参数 fromIndex ，则会检查整个数组/字符串。

JavaScript 代码:

```jsx
const includes = (collection, val, fromIndex = 0) =>
  collection.slice(fromIndex).indexOf(val) != -1;
// includes("30-seconds-of-code", "code") -> true
// includes([1, 2, 3, 4], [1, 2], 1) -> false
```

### Array intersection (数组交集)

根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，只保留数组 b 中也包含的值。

JavaScript 代码:

```jsx
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};
// intersection([1,2,3], [4,3,2]) -> [2,3]
```

### Array remove (移除数组中的元素)

使用 Array.filter() 和 Array.reduce() 来查找返回真值的数组元素，使用 Array.splice() 来移除元素。func 有三个参数(value, index, array)。

JavaScript 代码:

```jsx
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];
//remove([1, 2, 3, 4], n => n % 2 == 0) -> [2, 4]
```

### Array sample (数组取样随，机获取数组中的 1 个元素)

使用 Math.random() 生成一个随机数，乘以 length，并使用 Math.floor() 舍去小数获得到最接近的整数。这个方法也适用于字符串。

JavaScript 代码:

```jsx
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
// sample([3, 7, 9, 11]) -> 9
```

### Array union (数组合集)

用数组 a 和 b 的所有值创建一个 Set 对象，并转换成一个数组。

JavaScript 代码:

```jsx
const union = (a, b) => Array.from(new Set([...a, ...b]));
// union([1,2,3], [4,3,2]) -> [1,2,3,4]
```

### Array without (从数组中排除给定值)

使用 Array.filter() 创建一个排除所有给定值的数组。

JavaScript 代码:

```jsx
const without = (arr, ...args) => arr.filter((v) => args.indexOf(v) === -1);
// without([2, 1, 2, 3], 1, 2) -> [3]
// without([2, 1, 2, 3, 4, 5, 5, 5, 3, 2, 7, 7], 3, 1, 5, 2) -> [ 4, 7, 7 ]
```

### Array zip (创建一个分组元素数组)

使用 Math.max.apply() 获取参数中最长的数组。创建一个长度为返回值的数组，并使用 Array.from() 和 map-function 来创建一个分组元素数组。如果参数数组的长度不同，则在未找到值的情况下使用 undefined。

JavaScript 代码:

```jsx
const zip = (...arrays) => {
  const maxLength = Math.max.apply(
    null,
    arrays.map((a) => a.length)
  );
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};
//zip(['a', 'b'], [1, 2], [true, false]); -> [['a', 1, true], ['b', 2, false]]
//zip(['a'], [1, 2], [true, false]); -> [['a', 1, true], [undefined, 2, false]]
```

### Average of array of numbers (求数字数组的平均数)

使用 Array.reduce() 将数组中的每个值添加到一个累加器，使用 0 初始化，除以数组的 length (长度)。

JavaScript 代码:

```jsx
const average = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
// average([1,2,3]) -> 2
```

### Chunk array (数组分块)

使用 Array.from() 创建一个新的数组，它的长度与将要生成的 chunk(块) 数量相匹配。使用 Array.slice() 将新数组的每个元素映射到长度为 size 的 chunk 中。如果原始数组不能均匀分割，最后的 chunk 将包含剩余的元素。

JavaScript 代码:

```jsx
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
// chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
```

### Compact (过滤掉数组中所有假值元素)

使用 Array.filter() 过滤掉数组中所有 假值元素(false, null, 0, "", undefined, and NaN)。

JavaScript 代码:

```jsx
const compact = (arr) => arr.filter((v) => v);
// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
```

### Count occurrences of a value in array (计数数组中某个值的出现次数)

每次遇到数组中的指定值时，使用 Array.reduce() 来递增计数器。

JavaScript 代码:

```jsx
const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
// countOccurrences([1,1,2,1,2,3], 1) -> 3
```

### Deep flatten array (深度平铺数组)

使用递归。通过空数组([]) 使用 Array.concat() ，结合 展开运算符( ... ) 来平铺数组。递归平铺每个数组元素。

JavaScript 代码:

```jsx
const deepFlatten = (arr) =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));
// deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
```

### Drop elements in array (删除数组中的元素)

循环数组，使用 Array.shift() 删除数组的第一个元素，直到函数的返回值为 true 。返回其余的元素。

JavaScript 代码:

```jsx
const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr.shift();
  return arr;
};
// dropElements([1, 2, 3, 4], n => n >= 3) -> [3,4]
```

### Fill array (填充数组)

使用 Array.map() 将指定值映射到 start(包含)和 end (排除)之间。省略 start 将从第一个元素开始，省略 end 将在最后一个元素完成。

JavaScript 代码:

```jsx
const fillArray = (arr, value, start = 0, end = arr.length) =>
  arr.map((v, i) => (i >= start && i < end ? value : v));
// fillArray([1,2,3,4],'8',1,3) -> [1,'8','8',4]
```

### Filter out non-unique values in an array (过滤出数组中的非唯一值)

使用 Array.filter() 滤除掉非唯一值，使数组仅包含唯一值。

JavaScript 代码:

```jsx
const filterNonUnique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
// filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
```

### Flatten array up to depth (根据指定的 depth 平铺数组)

每次递归，使 depth 减 1 。使用 Array.reduce() 和 Array.concat() 来合并元素或数组。默认情况下， depth 等于 1 时停递归。省略第二个参数 depth ，只能平铺 1 层的深度 (单层平铺)。

JavaScript 代码:

```jsx
const flattenDepth = (arr, depth = 1) =>
  depth != 1
    ? arr.reduce(
        (a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v),
        []
      )
    : arr.reduce((a, v) => a.concat(v), []);
// flattenDepth([1,[2],[[[3],4],5]], 2) -> [1,2,[3],4,5]
```

### Flatten array (平铺数组)

使用 Array.reduce() 获取数组中的所有元素，并使用 concat() 将其平铺。

JavaScript 代码:

```jsx
const flatten = (arr) => arr.reduce((a, v) => a.concat(v), []);
// flatten([1,[2],3,4]) -> [1,2,3,4]
```

### Get max value from array (获取数组中的最大值)

结合使用 Math.max() 与 展开运算符( ... )，获取数组中的最大值。

JavaScript 代码:

```jsx
const arrayMax = (arr) => Math.max(...arr);
// arrayMax([10, 1, 5]) -> 10
```

### Get min value from array (获取数组中的最小值)

结合使用 Math.max() 与 展开运算符( ... )，获取数组中的最小值。

JavaScript 代码:

```jsx
const arrayMin = (arr) => Math.min(...arr);
// arrayMin([10, 1, 5]) -> 1
```

### Group by (数组分组)

使用 Array.map() 将数组的值映射到函数或属性名称。使用 Array.reduce() 来创建一个对象，其中的 key 是从映射结果中产生。

JavaScript 代码:

```jsx
const groupBy = (arr, func) =>
  arr
    .map(typeof func === "function" ? func : (val) => val[func])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
// groupBy([6.1, 4.2, 6.3], Math.floor) -> {4: [4.2], 6: [6.1, 6.3]}
// groupBy(['one', 'two', 'three'], 'length') -> {3: ['one', 'two'], 5: ['three']}
```

### Head of list (获取数组的第一个元素)

使用 arr[0] 返回传递数组的第一个元素。

JavaScript 代码:

```jsx
const head = (arr) => arr[0];
// head([1,2,3]) -> 1
```

### Initial of list (排除数组中最后一个元素)

使用 arr.slice(0,-1) 返回排除了最后一个元素的数组。

JavaScript 代码:

```jsx
const initial = (arr) => arr.slice(0, -1);
// initial([1,2,3]) -> [1,2]
```

### Initialize array with range (初始化特定范围的数组)

使用 Array(end-start) 创建所需长度的数组，使用 Array.map() 在一个范围内填充所需的值。
您可以省略 start ，默认值 0。
JavaScript 代码:

```jsx
const initializeArrayRange = (end, start = 0) =>
  Array.apply(null, Array(end - start)).map((v, i) => i + start);
// initializeArrayRange(5) -> [0,1,2,3,4]
```

### Initialize array with values (初始化特定范围和值的数组)

使用 Array(n) 创建所需长度的数组，使用 fill(v) 以填充所需的值。您可以忽略 value ，使用默认值 0 。

JavaScript 代码:

```jsx
const initializeArray = (n, value = 0) => Array(n).fill(value);
// initializeArray(5, 2) -> [2,2,2,2,2]
```

### Last of list (获取数组的最后一个元素)

使用 arr.slice(-1)[0] 来获取给定数组的最后一个元素。

JavaScript 代码:

```jsx
const last = (arr) => arr.slice(-1)[0];
// last([1,2,3]) -> 3
```

### Median of array of numbers (获取数字数组的中值)

找到数字数组的中间值，使用 Array.sort() 对值进行排序。如果 length 是奇数，则返回中间值数字，否则返回两个中间值数值的平均值。

JavaScript 代码:

```jsx
const median = (arr) => {
  const mid = Math.floor(arr.length / 2),
    nums = arr.sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
// median([5,6,50,1,-5]) -> 5
// median([0,10,-2,7]) -> 3.5
```

### 计算数组平均值

计算平均值的方式很多，计算的逻辑都是一样的， 但是实现方式各不相同，一行代码简单实现：

JavaScript 代码:

```jsx
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
average([1, 9, 18, 36]); //16
```

### Nth element of array (获取数组的第 N 个元素)

使用 Array.slice() 获取数组的第 n 个元素。如果索引超出范围，则返回 [] 。省略第二个参数 n ，将得到数组的第一个元素。

JavaScript 代码:

```jsx
const nth = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
// nth(['a','b','c'],1) -> 'b'
// nth(['a','b','b']-2) -> 'a'
```

### Pick(提取)

使用 Array.reduce() 只 过滤/萃取 出 arr 参数指定 key (如果 key 存在于 obj 中)的属性值，。JavaScript 代码:

```jsx
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
// pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']) -> { 'a': 1, 'c': 3 }
// pick(object, ['a', 'c'])['a'] -> 1
```

### Shuffle array (随机排列数组)

使用 Array.sort() 来重新排序元素，比较器中使用 Math.random() 。
JavaScript 代码:

```jsx
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
// shuffle([1,2,3]) -> [2,3,1]
```

### Similarity between arrays (获取数组交集)

使用 filter() 移除不在 values 中的值，使用 includes() 确定。
JavaScript 代码:

```jsx
const similarity = (arr, values) => arr.filter((v) => values.includes(v));
// similarity([1,2,3], [1,2,4]) -> [1,2]
```

### Sum of array of numbers (数字数组求和)

使用 Array.reduce() 将每个值添加到累加器，并使用 0 值初始化。
JavaScript 代码:

```jsx
const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);
// sum([1,2,3,4]) -> 10
```

### Tail of list (返回剔除第一个元素后的数组)

如果数组的 length 大于 1 ，则返回 arr.slice(1)，否则返回整个数组。
JavaScript 代码:

```jsx
const tail = (arr) => (arr.length > 1 ? arr.slice(1) : arr);
// tail([1,2,3]) -> [2,3]
// tail([1]) -> [1]
```

Take right(从一个给定的数组中创建一个后 N 个元素的数组)

### 使用 Array.slice() 来创建一个从第 n 个元素开始从末尾的数组。

JavaScript 代码:

```jsx
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
// takeRight([1, 2, 3], 2) -> [ 2, 3 ]
// takeRight([1, 2, 3]) -> [3]
```

### Take(从一个给定的数组中创建一个前 N 个元素的数组)

使用 Array.slice() 创建一个数组包含第一个元素开始，到 n 个元素结束的数组。
JavaScript 代码:

```jsx
const take = (arr, n = 1) => arr.slice(0, n);
// take([1, 2, 3], 5) -> [1, 2, 3]
// take([1, 2, 3], 0) -> []
```

### Unique values of array (数组去重)

使用 ES6 的 Set 和 ...rest 操作符剔除重复的值。

JavaScript 代码:

```jsx
const unique = (arr) => [...new Set(arr)];
// unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
```

## Browser 浏览器

### Bottom visible (页面的底部是否可见)

使用 scrollY，scrollHeight 和 clientHeight 来确定页面的底部是否可见。

JavaScript 代码:

```jsx
const bottomVisible = (_) =>
  document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight ||
  document.documentElement.clientHeight;
// bottomVisible() -> true
```

### Current URL (获取当前页面 URL)

使用 window.location.href 获取当前页面 URL。

JavaScript 代码:

```jsx
const currentUrl = (_) => window.location.href;
// currentUrl() -> 'https://google.com'
```

### Element is visible in viewport (判断元素是否在可视窗口可见)

使用 Element.getBoundingClientRect() 和 window.inner(Width|Height) 值来确定给定元素是否在可视窗口中可见。省略第二个参数来判断元素是否完全可见，或者指定 true 来判断它是否部分可见。

JavaScript 代码:

```jsx
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    return partiallyVisible ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) : top >= 0 && left >= 0 && bottom < = innerHeight && right <= innerWidth;
};
// 举个例子，有一个 100x100 可视窗口， 和一个 10x10px 元素定位在 {top: -1, left: 0, bottom: 9, right: 10}
// elementIsVisibleInViewport(el) -> false (not fully visible)
// elementIsVisibleInViewport(el, true) -> true (partially visible)
```

### Get scroll position (获取滚动条位置)

如果浏览器支持 pageXOffset 和 pageYOffset ，那么请使用 pageXOffset 和 pageYOffset ，否则请使用 scrollLeft 和 scrollTop 。你可以省略 el 参数，默认值为 window。
JavaScript 代码:

```jsx
const getScrollPos = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});
// getScrollPos() -> {x: 0, y: 200}
```

### Redirect to URL (重定向到 URL)

使用 window.location.href 或 window.location.replace() 重定向到 url 。传递第二个参数来模拟链接点击(true – 默认值)或 HTTP 重定向(false)。

JavaScript 代码:

```jsx
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
// redirect('https://google.com')
```

### Scroll to top (回到顶部)

使用 document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部距离。从顶部滚动一小部分距离。使用 window.requestAnimationFrame() 来实现滚动动画。
JavaScript 代码:

```jsx
const scrollToTop = (_) => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
// scrollToTop()
```

## Date 日期

### Get days difference between dates (获取两个日期之间相差的天数)

计算 Date 对象之间的差异(以天为单位)。

JavaScript 代码:

```jsx
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
// getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")) -> 9
// getDaysDiffBetweenDates(new Date("2019-12-13"), new Date("2017-12-22")) -> -721

const daysBetween = (date1, date2) =>
  Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

daysBetween(new Date("2017-12-13"), new Date("2017-12-22")); // 9
daysBetween(new Date("2019-12-13"), new Date("2017-12-22")); // 721
```

### Query whether a day is a working day (查询某天是否为工作日)

我们自己写日历组件时经常会用到，判断某个日期是否为工作日；周一至周五为工作日:

JavaScript 代码:

```jsx
const isWeekday = (date) => date.getDay() % 6 !== 0;

isWeekday(new Date(2022, 03, 11));
// true
```

### The difference in days between two dates (两日期之间相差的天数)

日常开发中经常遇到需要显示剩余天数， 一般我们就需要计算两日期之间相差天数

JavaScript 代码:

```jsx
const dayDiff = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDiff(new Date("2021-10-21"), new Date("2022-02-12"));
// Result: 114
```

### Function 函数

Chain asynchronous functions (链式调用异步函数)
循环遍历包含异步事件的函数数组，每次异步事件完成后调用 next 。

JavaScript 代码:

```jsx
const chainAsync = (fns) => {
  let curr = 0;
  const next = () => fns[curr++](next);
  next();
};
/* chainAsync([ next => { console.log('0 seconds'); setTimeout(next, 1000); }, next => { console.log('1 second'); setTimeout(next, 1000); }, next => { console.log('2 seconds'); } ]) */
```

### Curry (函数式编程术语：柯里化)

使用递归。如果提供的参数(args)数量足够，调用传递函数 fn 。否则返回一个柯里化后的函数 fn ，期望剩下的参数。如果你想柯里化一个接受可变参数数量的函数(可变参数数量的函数，例如 Math.min() )，你可以选择将参数个数传递给第二个参数 arity。

JavaScript 代码:

```jsx
const curry = (fn, arity = fn.length, ...args) => arity < = args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
// curry(Math.pow)(2)(10) -> 1024
// curry(Math.min, 3)(10)(50)(2) -> 2
```

### Pipe (函数式编程术语：管道或导流)

使用 Array.reduce() 来执行从左到右的函数组合。第一个(最左边的)函数可以接受一个或多个参数；其余的函数必须是一元函数。

JavaScript 代码:

```jsx
const pipe = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );
/* const add5 = x => x + 5 const multiply = (x, y) => x * y const multiplyAndAdd5 = pipe(multiply, add5) multiplyAndAdd5(5, 2) -> 15 */
```

### Promisify (柯里化一个 Promise 函数)

使用柯里化返回一个函数，这个函数返回一个调用原始函数的 Promise 。使用 ...rest 运算符传入所有参数。在 Node 8+ 中，你可以使用 util.promisify

JavaScript 代码:

```jsx
const promisify =
  (func) =>
  (...args) =>
    new Promise((resolve, reject) =>
      func(...args, (err, result) => (err ? reject(err) : resolve(result)))
    );
// const delay = promisify((d, cb) => setTimeout(cb, d))
// delay(2000).then(() => console.log('Hi!')) -> Promise resolves after 2s
```

Run promises in series (运行连续的 promises)
使用 Array.reduce() 通过创建 promise 链来运行连续的 promises，其中每个 promise 在 resolved 时返回下一个 promise 。
JavaScript 代码:

```jsx
const series = (ps) => ps.reduce((p, next) => p.then(next), Promise.resolve());
// const delay = (d) => new Promise(r => setTimeout(r, d))
// series([() => delay(1000), () => delay(2000)]) -> executes each promise sequentially, taking a total of 3 seconds to complete
```

### Sleep (休眠)

延迟执行 async 函数的一部分，通过把它放到 sleep 状态，返回一个 Promise 。

JavaScript 代码:

```jsx
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
/* async function sleepyWork() { console.log('I\'m going to sleep for 1 second.'); await sleep(1000); console.log('I woke up after 1 second.'); } */
```

### Math 数学方法

Collatz algorithm(考拉兹算法)
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

### Media 媒体

Speech synthesis (语音合成，实验阶段)
使用 SpeechSynthesisUtterance.voice 和 indow.speechSynthesis.getVoices() 将消息转换为语音。使用 window.speechSynthesis.speak() 播放消息。了解有关 Web Speech API 的 SpeechSynthesisUtterance 接口的更多信息。

JavaScript 代码:

```jsx
const speak = (message) => {
  const msg = new SpeechSynthesisUtterance(message);
  msg.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(msg);
};
// speak('Hello, World') -> plays the message
```

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

### Object 对象

Object from key-value pairs (根据键值对创建对象)
使用 Array.reduce() 来创建和组合键值对。

JavaScript 代码:

```jsx
const objectFromPairs = (arr) =>
  arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});
// objectFromPairs([['a',1],['b',2]]) -> {a: 1, b: 2}
```

### Object to key-value pairs (对象转化为键值对 )

使用 Object.keys() 和 Array.map() 遍历对象的键并生成一个包含键值对的数组。

JavaScript 代码:

```jsx
const objectToPairs = (obj) => Object.keys(obj).map((k) => [k, obj[k]]);
// objectToPairs({a: 1, b: 2}) -> [['a',1],['b',2]])
```

### Shallow clone object (浅克隆对象)

使用 Object.assign() 和一个空对象({})来创建原始对象的浅拷贝。

JavaScript 代码:

```jsx
const shallowClone = (obj) => Object.assign({}, obj);
/* const a = { x: true, y: 1 }; const b = shallowClone(a); a === b -> false */
```

注：JavaScript 中的对象拷贝方法有很多，这里有个总结，有兴趣可以看一下：https://www.html.cn/archives/8319

### String 字符串

Anagrams of string (with duplicates) (字符串的排列组合，带有重复项)
使用递归。对于给定字符串中的每个字母，为其余字母创建所有部分字母。使用 Array.map() 将字母与每个部分字母组合在一起，然后使用 Array.reduce() 将所有字母组合到一个数组中。基本情况是字符串 length 等于 2 或 1 。

JavaScript 代码:

```jsx
const anagrams = str => { if (str.length < = 2) return str.length === 2 ? [str, str[1] + str[0]] : [str]; return str.split('').reduce((acc, letter, i) => acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []); };
// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']
```

### Capitalize first letter of every word (大写每个单词的首字母)

使用 replace() 来匹配每个单词的第一个字符，并使用 toUpperCase() 来将其大写。

JavaScript 代码:

```jsx
const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
// capitalizeEveryWord('hello world!') -> 'Hello World!'
```

### Capitalize first letter (首字母大写)

使用解构和 toUpperCase() 大写第一个字母，...rest 第一个字母后获得字符数组，然后 Array.join('')再次使它成为一个字符串。省略 lowerRest 参数以保持字符串的剩余部分不变，或者将其设置为 true 这会将字符串的剩余部分转换为小写。

JavaScript 代码:

```jsx
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));
// capitalize('myName') -> 'MyName'
// capitalize('myName', true) -> 'Myname'
```

### Check for palindrome (检查回文)

使用 toLowerCase() 转换字符串，并使用 replace() 从中删除非字母数字字符。然后，在将其转换为 tolowerCase() 之后，将 split('') 为单独的字符，reverse() ，join('')并与原始非反转字符串进行比较。

JavaScript 代码:

```jsx
const palindrome = (str) => {
  const s = str.toLowerCase().replace(/[\W_]/g, "");
  return s === s.split("").reverse().join("");
};
// palindrome('taco cat') -> true
```

### Reverse a string (反转一个字符串)

使用数组解构和 Array.reverse() 来反转字符串中字符的顺序。使用 join('')合并字符串。JavaScript 代码:

```jsx
const reverseString = (str) => [...str].reverse().join("");
// reverseString('foobar') -> 'raboof'
```

or

```js
const reverse = (str) => str.split("").reverse().join("");
reverse("this is reverse");
// esrever si siht
```

### Sort characters in string (alphabetical) (按字母顺序排列字符串)

使用 split('') 分割字符串，通过 localeCompare() 排序字符串 Array.sort() ，使用 join('') 进行重组。

JavaScript 代码:

```jsx
const sortCharactersInString = (str) =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
// sortCharactersInString('cabbage') -> 'aabbceg'
```

### Truncate a String (截断一个字符串)

确定字符串的 length 是否大于 num。返回截断所需长度的字符串，用 ... 附加到结尾或原始字符串。

JavaScript 代码:

```jsx
const truncate = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str;
// truncate('boomerang', 7) -> 'boom...'
```

### Utility 实用函数

Escape regular expression (转义正则表达式)
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
const uuid = \_ => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) ); // uuid() -> '7982fcfe-5721-4632-bede-6000885be57d'
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

### Check device type (检查设备类型)

使用 `navigator.userAgent` 判断是移动设备还是 PC 端

JavaScript 代码:

```jsx
const judgeDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "PC";

judgeDeviceType(); // PC | Mobile
```

### Copy text to clipboard (文字复制到剪贴板)

`Clipboard API` 它的所有操作都是异步的，返回`Promise`对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板

JavaScript 代码:

```jsx
const copyText = async (text) => await navigator.clipboard.writeText(text);

copyText("单行代码 前端世界");
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

### 获取字符串中的指定字符数

该函数可以获取空格数和随后的单词数，或者用于获取字符串中某个分隔符的计数

JavaScript 代码:

```jsx
const characterCount = (str, char) => str.split(char).length - 1;

characterCount("hello world", "l"); // 3
```
