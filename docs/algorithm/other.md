题目

有一个数组 arr = [a1, a2, a3, b1, b2, b3, c1, c2, c3...], 通过算法将数组进行拆分, 转化为如下格式的数组 [a1, b1, c1], [a2, b2, c2], [a3, b3, c3]并实现通用公式

```js
function rangeArr(arr = [], result = []) {
    arr.forEach((item) => {
        // exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null
        let i = /\d*$/.exec(item)[0];
        console.log(i);
        result[i] ? result[i].push(item) : (result[i] = [item]);
    });
    return result.filter(Boolean);
}
const r = rangeArr(["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]);
console.log(r);
```
