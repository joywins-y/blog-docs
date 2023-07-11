## Function 函数

### Chain asynchronous functions (链式调用异步函数)

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

### Asynchronous function judgment (异步函数判断)

判断一个函数是否属于异步函数

```js
const isAsyncFunction = (v) =>
  Object.prototype.toString.call(v) === "[object AsyncFunction]";
// isAsyncFunction(async function () {}); // true
```
