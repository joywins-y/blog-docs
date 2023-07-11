# 数组扁平化

数组扁平化是指将一个多维数组转换为一个一维数组。在 JavaScript 中，可以使用递归或者 ES6 中的 flat()方法实现数组扁平化。

1. 递归实现：

```jsx
function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
var arr = [1, [2, 3], [4, [5, 6]]];
console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6]
```

2. ES6 中的 flat()方法：

```jsx
var arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6]
// flat()方法可以接受一个参数，表示要扁平化的层数，如果不传参数则默认为1。
// 例如：
var arr = [1, [2, [3, 4]]];
console.log(arr.flat()); // [1, 2, [3, 4]] console.log(arr.flat(2)); // [1, 2, 3, 4]
```
