# 前端面试真题之 JS 篇

## 请简述 JavaScript 中的 this

JS 中的 this 是一个相对复杂的对象，不是简单几句能解释清楚的。粗略的讲，函数的调用方式决定了 this 的值。我阅读了网上很多关于 this 的文章，「Arnav Aggrawal」 写的比较清楚。

this 取值符合一下规则：

1. 在调用函数时使用 new 关键字，函数内的 this 是一个全新的对象。如果 apply、call 或者 bind 方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。

2. 当函数作为对象的方法被调用时，函数内的 this 是调用该函数的对象。 比如当 obj.method() 被调用时，函数内的 this 将绑定到 obj 对象。

3. 如果调用函数不符合上述规则，那么 this 的值指向全局对象（global object）。

4. 浏览器环境下 this 的值指向 window 对象，但是在严格模式（'use strict'），this 的值为 undefined。

-   如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定 this 值。如果该函数时 ES2015 中的箭头函数，将忽略上面的所有规则，this 将被设置为它被创建时的上下文。

## 说说你对 AMD 和 CommonJS 的了解

它们都是实现模块体系的方式，直到 ES2015 出现之前，JavaScript 一直没有模块体系。CommonJS 是同步的，而 AMD（Asynchronous Module Definition）从全称中可以明显看出是异步的。CommonJS 的设计是为服务器端开发考虑的，而 AMD 支持异步加载模块，更适合浏览器。

我发现 AMD 的语法非常冗长，CommonJS 更接近其他语言 import 声明语句的用法习惯。大多数情况下，我认为 AMD 没有使用的必要，因为如果把所有 JavaScript 都捆绑进一个文件中，将无法得到异步加载的好处。此外，CommonJS 语法上更接近 Node 编写模块的风格，在前后端都使用 JavaScript 开发之间进行切换时，语境的切换开销较小。

我很高兴看到 ES2015 的模块加载方案同时支持同步和异步，我们终于可以只使用一种方案了。虽然它尚未在浏览器和 Node 中完全推出，但是我们可以使用代码转换工具进行切换。

## 请解释下面代码为什么不能用作 IIFE：function foo(){}();，需要做出哪些修改才能使其成为 IIFE？

IIFE（Immediately Invoked Function Expressions）代表立即执行函数。JavaScript 解析器将 function foo(){}(); 解析成 function foo(){}和();。其中，前者是函数声明，后者（一对括号）是试图调用一个函数，却没有指定名称，因此它会抛出 Uncaught SyntaxError：Unexpected token ）的错误。

修改方法：
再添加一对括号，形式上有两种：(function foo(){})() 和 (function foo(){}())。
以上函数不会暴露到全局作用域，如果不需要在函数内部引用自身，可以省略函数的名称。

你可能会用到 void 操作符：void function foo(){}();。但是这种做法是有问题的。表达式的值是 undefined，所以如果你的 IIFE 有返回值，不要用这种做法。例如：

```js
const foo = void (function bar() {
    return "foo";
})();

console.log(foo); // undefined
```

## null、undefined 和未声明变量之间有什么区别？如何检查判断这些状态值？

当你没有提前使用 var、let 或 const 声明变量，就为一个变量赋值时，该变量是未声明变量（undeclared variables）。未声明变量会脱离当前作用域，成为全局作用域下定义的变量。在严格模式下，给未声明的变量赋值，会抛出 ReferenceError 错误。和使用全局变量一样，使用未声明变量也是非常不好的做法，应当尽可能避免。要检查判断它们，需要将用到它们的代码放在 try/catch 语句中。

```js
function foo() {
    x = 1; // 在严格模式下，抛出 ReferenceError 错误
}

foo();
console.log(x); // 1
```

当一个变量已经声明，但没有赋值时，该变量的值是 undefined。如果一个函数的执行结果被赋值给一个变量，但是这个函数却没有返回任何值，那么该变量的值是 undefined。要检查它，需要使用严格相等（===）或者使用 typeof，它会返回'undefined'字符串。请注意，不能使用非严格相等（==）来检查，因为如果变量值为 null，使用非严格相等也会返回 true。

```js
var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeod foo === 'undefined'); // true

console.log(foo == null); // true 错误，不要使用非严格相等

function bar(){}
var b = bar();
console.log(b); // undefined
```

null 只能被显式赋值给变量。它表示空值，与被显式赋值 undefined 的意义不同。要检查判断 null 值，需要使用严格相等运算符。请注意，和前面一样，不能使用非严格相等（==）来检查，因为如果变量值为 undefined，使用非严格相等也会返回 true。

```js
var foo = null;
console.log(foo === null); // true

console.log(foo == undefined); // true 错误，不要使用非严格相等
```

## 什么是闭包（closure），为什么使用闭包？

什么是闭包？

闭包是函数和声明该函数的词法环境的组合。词法作用域中使用的域，是变量在代码中声明的位置所决定的。闭包是即使被外部函数返回，依然可以访问到外部（封闭）函数作用域的函数。

为什么使用闭包？

-   利用闭包实现数据私有化或模拟私有化方法。这个方法也称为模块模式（module pattern）。

*   部分参数函数（partial applications）柯里化（currying）

## 请说明.forEach 循环和.map 循环的主要区别，它们分别在什么情况下使用？

forEach

-   遍历数组中的元素

*   为每个元素执行回调

-   无返回值

```js
const a = [1, 2, 3];
const b = a.forEach((n, i) => {
    // 执行与 n、i 相关的代码
});

// b = undefined
```

map

-   遍历数组中的元素

*   通过对每个元素调用函数，将每个元素“映射（map）”到一个新元素，从而创建一个新数组

```js
const a = [1, 2, 3];
const b = a.forEach((n, i) => {
    return n * 2;
});

// b = [2, 4, 6]
```

.forEach 和 .map 的主要区别在于 .map 返回一个新的数组。如果你想要得到一个结果，但不想改变原始数组，用 .map。如果你只需要在数组上做迭代修改，用 .forEach。

## 匿名函数的典型应用场景是什么？

匿名函数可以在 IIFE 中使用，来封装局部作用域内的代码，以便其声明的变量不会暴露到全局作用域。

```js
(function () {
    // 一些代码
})();
```

匿名函数可以只作为只用一次，不需要在其他地方使用的回调函数。当处理函数在调用它们的程序内部被定义时，代码具有更好地自闭性和可读性，可以省去寻找该处理函数的函数体位置的麻烦。

```js
setTimeout(function () {
    console.log("Hello world!");
}, 1000);
```

匿名函数可以用于函数式编程或 Lodash（类似于回调函数）。

```js
const arr = [1, 2, 3];
const b = arr.map(function (el) {
    return el * 2;
});
console.log(b); // [2, 4, 6]
```

## .call 和 .apply 有什么区别？

.call 和 .apply 都用于调用函数，第一个参数将用作函数内 this 的值。然而，.call 接受逗号分隔的参数作为后面的参数，而 .apply 接受一个参数数组作为后面的参数。一个简单的记忆方法是，从 call 中的 C 联想到逗号分隔（comma-separated），从 apply 中的 A 联想到数组（array）。

```js
function add(a, b) {
    return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

## 请说明 Function.prototype.bind 的用法

摘自 MDN：

> bind()方法创建一个新的函数，当被调用时，将其 this 关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

在 React 中可能经常这样做：将 this 的值绑定到想要传递给其他函数的类的方法中，是非常有用的。

## 请尽可能详细地解释 Ajax

Ajax（asynchronous JavaScript and XML）

Ajax（asynchronous JavaScript and XML）是使用客户端上的许多 Web 技术，创建异步 Web 应用的一种 Web 开发技术。借助 Ajax，Web 应用可以异步（在后台）向服务器发送数据和从服务器检索数据，而不会干扰现有页面的显示和行为。通过将数据交换层与表示层分离，Ajax 允许网页和扩展 Web 应用程序动态更改内容，而无需重新加载整个页面。实际上，现在通常将 XML 替换为 JSON，因为 JavaScript 对 JSON 有原生支持优势。

XMLHttpRequest API 经常用于异步通信。此外还有 fetch API。

使用 Ajax 的优缺点分别是什么？

优点：

-   交互性更好，来自服务器的新内容可以动态更改，无需重新加载整个页面。

*   减少与服务器的连接，因为脚本和样式只需要被请求一次。

-   状态可以维护在一个页面上。JavaScript 变量和 DOM 状态将得到保持，因为主容器页面未被重新加载。

*   基本上包括大部分 SPA 的优点。

缺点：

-   动态网页很难收藏

*   如果 JavaScript 已在浏览器中被禁用，则不起作用。

-   有些网络爬虫不执行 JavaScript，也不会看到 JavaScript 加载的内容。

*   基本上包括大部分 SPA 的缺点
