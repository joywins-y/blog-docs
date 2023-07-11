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

当你需要取多个数组中的交集。根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，只保留数组 b 中也包含的值。

JavaScript 代码:

```jsx
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};
// intersection([1,2,3], [4,3,2]) -> [2,3]

const intersection = (a, ...arr) =>
  [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
// intersection([1, 2, 3, 4], [2, 3, 4, 7, 8], [1, 3, 4, 9]);
// [3, 4]
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

### Array sample (数组取样随机获取数组中的 1 个元素)

使用 Math.random() 生成一个随机数，乘以 length，并使用 Math.floor() 舍去小数获得到最接近的整数。这个方法也适用于字符串。

JavaScript 代码:

```jsx
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
// sample([3, 7, 9, 11]) -> 9

const closest = (arr, n) =>
  arr.reduce((prev, curr) =>
    Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  );
closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
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

### 查找最大值索引

但你需要找到一个数组中的最大值的索引

```js
const indexOfMax = (arr) =>
  arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
indexOfMax([1, 3, 9, 7, 5]); // 2
```

### Get min value from array (获取数组中的最小值)

结合使用 Math.max() 与 展开运算符( ... )，获取数组中的最小值。

JavaScript 代码:

```jsx
const arrayMin = (arr) => Math.min(...arr);
// arrayMin([10, 1, 5]) -> 1
```

### 查找最小值索引

但你需要找到一个数组中的最小值的索引

```js
cconst indexOfMin = (arr) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)
indexOfMin([2, 5, 3, 4, 1, 0, 9]) // 5
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

### 生成数组

当你需要要生成一个 0-99 的数组

方案 1：

```js
const createArr = (n) => Array.from(new Array(n), (v, i) => i);
const arr = createArr(100); // 0 - 99 数组
// console.log(arr)
```

方案 2：

```js
const createArr = (n) => new Array(n).fill(0).map((v, i) => i);
// createArr(100); // 0 - 99数组
```

### 打乱数组

当你有一个数组，你需要打乱这个数组的排序

```js
const randomSort = (list) => list.sort(() => Math.random() - 0.5);
// randomSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // 随机排列结果
```

### 压缩多个数组

当你需要将多个数组压缩成一个数组

```js
const zip = (...arr) =>
  Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) =>
    arr.map((a) => a[i])
  );
// zip([1, 2, 3, 4], ["a", "b", "c", "d"], ["A", "B", "C", "D"]);
// [[1, 'a', 'A'], [2, 'b', 'B'], [3, 'c', 'C'], [4, 'd', 'D']]
```

### 矩阵交换行和列

当你需要将一个矩阵的行和列进行互相交换

```js
const transpose = (matrix) =>
  matrix[0].map((col, i) => matrix.map((row) => row[i]));
transpose(
  [
    // [
    [1, 2, 3], //      [1, 4, 7],
    [4, 5, 6], //      [2, 5, 8],
    [7, 8, 9], //      [3, 6, 9],
  ] //  ]
);
```
