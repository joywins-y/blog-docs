## Object 对象

### Object from key-value pairs (根据键值对创建对象)

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

### Invert object keys (反转对象键值)

当你需要将对象的键值对交换

```js
const invert = (obj) =>
  Object.keys(obj).reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {});
// invert({ name: "jack" }); // {jack: 'name'}
```

### Shallow clone object (浅克隆对象)

使用 Object.assign() 和一个空对象({})来创建原始对象的浅拷贝。

JavaScript 代码:

```jsx
const shallowClone = (obj) => Object.assign({}, obj);
/* const a = { x: true, y: 1 }; const b = shallowClone(a); a === b -> false */
```

注：JavaScript 中的对象拷贝方法有很多，这里有个总结，有兴趣可以看一下：https://www.html.cn/archives/8319

### Remove invalid attributes (删除无效属性)

当你需要删除一个对象中的属性值为 null 或 undefined 的所有属性

```js
const removeNullUndefined = (obj) =>
  Object.entries(obj).reduce(
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {}
  );
// removeNullUndefined({name: '', age: undefined, sex: null}) // { name: '' }
```

### String to object (字符串转对象)

当你需要将一串字符串比如'{name: "jack"}'转换成对象时，直接使用 JSON.parse 将会报错。

```js
const strParse = (str) =>
  JSON.parse(
    str.replace(/(\w+)\s*:/g, (_, p1) => `"${p1}":`).replace(/\'/g, '"')
  );
// strParse('{name: "jack"}')
```
