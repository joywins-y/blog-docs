# _JavaScript_ 面试题汇总

### 1. 根据下面 _ES6_ 构造函数的书写方式，要求写出 _ES5_ 的

```js
class Example {
  constructor(name) {
    this.name = name;
  }
  init() {
    const fun = () => {
      console.log(this.name);
    };
    fun();
  }
}
const e = new Example('Hello');
e.init();
```

### 2. 数组去重有哪些方法？（美团 _19_ 年）

### 3. 描述下列代码的执行结果

```js
foo(typeof a);
function foo(p) {
  console.log(this);
  console.log(p);
  console.log(typeof b);
  let b = 0;
}
```

### 4. 描述下列代码的执行结果

```js
class Foo {
  constructor(arr) {
    this.arr = arr;
  }
  bar(n) {
    return this.arr.slice(0, n);
  }
}
var f = new Foo([0, 1, 2, 3]);
console.log(f.bar(1));
console.log(f.bar(2).splice(1, 1));
console.log(f.arr);
```

### 5. 描述下列代码的执行结果

```js
01 function f(count) {
02    console.log(`foo${count}`);
03    setTimeout(() => { console.log(`bar${count}`); });
04 }
05 f(1);
06 f(2);
07 setTimeout(() => { f(3); });
```

### 6. 描述下列代码的执行结果

```js
var a = 2;
var b = 5;
console.log(a === 2 || (1 && b === 3) || 4);
```

### 7. 描述下列代码的执行结果

```js
export class ButtonWrapper {
  constructor(domBtnEl, hash) {
    this.domBtnEl = domBtnEl;
    this.hash = hash;
    this.bindEvent();
  }
  bindEvent() {
    this.domBtnEl.addEventListener('click', this.clickEvent, false);
  }
  detachEvent() {
    this.domBtnEl.removeEventListener('click', this.clickEvent);
  }
  clickEvent() {
    console.log(`The hash of the button is: ${this.hash}`);
  }
}
```

### 8. 箭头函数有哪些特点

### 9. 说一说类的继承

### 10. _new_ 操作符都做了哪些事？

### 11. _call、apply、bind_ 的区别 ？

### 12. 事件循环机制（宏任务、微任务）

### 13. 你了解 _node_ 中的事件循环机制吗？_node11_ 版本以后有什么改变

### 14. 什么是函数柯里化？

### 15. _promise.all_ 方法的使用场景？数组中必须每一项都是 _promise_ 对象吗？不是 _promise_ 对象会如何处理 ？

### 16. _this_ 的指向哪几种 ？

### 17. _JS_ 中继承实现的几种方式

### 18. 什么是事件监听

### 19. 什么是 _js_ 的闭包？有什么作用？

### 20. 事件委托以及冒泡原理

### 21. _let const var_ 的区别？什么是块级作用域？如何用？

### 22. _ES5_ 的方法实现块级作用域（立即执行函数） _ES6_ 呢？

### 23. _ES6_ 箭头函数的特性

### 24. 箭头函数与普通函数的区别 ？

### 25. _JS_ 的基本数据类型有哪些？基本数据类型和引用数据类型的区别

### 26. _NaN_ 是什么的缩写

### 27. _JS_ 的作用域类型

### 28. _undefined==null_ 返回的结果是什么？_undefined_ 与 _null_ 的区别在哪？

### 29. 写一个函数判断变量类型

### 30. _js_ 的异步处理函数

### 31. _defer_ 与 _async_ 的区别

### 32. 浏览器事件循环和任务队列

### 33. 原型与原型链 （美团 19 年）

### 34. 作用域与作用域链 （美团 19 年）

### 35. 闭包及应用场景以及闭包缺点 （美团 19 年）

### 36. 继承方式 （美团 19 年）

### 37. 原始值与引用值 （美团 19 年）

### 38. 描述下列代码的执行结果

```js
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(1);
      }, 0);
      setTimeout(() => {
        console.log(2);
        resolve(3);
      }, 0);
      resolve(4);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg, 5); // 1 bb
    });
    setTimeout(() => {
      console.log(6);
    }, 0);
  });
first().then((arg) => {
  console.log(arg, 7); // 2 aa
  setTimeout(() => {
    console.log(8);
  }, 0);
});
setTimeout(() => {
  console.log(9);
}, 0);
console.log(10);
```

### 39. 如何判断数组或对象（美团 19 年）

### 40. 对象深拷贝与浅拷贝，单独问了 _Object.assign_（美团 19 年）

### 42. 说说 _instanceof_ 原理，并回答下面的题目（美团 19 年）

```js
function A() {}
function B() {}
A.prototype = new B();
let a = new A();
console.log(a instanceof B); // true of false ?
```

###

### 43. 内存泄漏（美团 19 年）

### 44. _ES6_ 新增哪些东西？让你自己说（美团 19 年）

### 45. _weakmap、weakset_（美团 _19_ 年）

### 46. 为什么 _ES6_ 会新增 _Promise_（美团 19 年）

### 47. _ES5_ 实现继承？（虾皮）

### 48. 科里化？（搜狗）

### 49. 防抖和节流？（虾皮）

### 50. 闭包？（好未来---探讨了 _40_ 分钟）

### 51. 原型和原型链？（字节）

### 52. 排序算法---（时间复杂度、空间复杂度）

### 53. 浏览器事件循环和 _node_ 事件循环（搜狗）

### 54. 闭包的好处

### 55. _let、const、var_ 的区别

### 56. 闭包、作用域（可以扩充到作用域链）

### 57. _Promise_

### 58. 实现一个函数,对一个 url 进行请求,失败就再次请求,超过最大次数就走失败回调,任何一次成功都走成功回调

### 59. 冒泡排序

### 60. 数组降维

### 61. _call apply bind_

### 62. promise 代码题

```js
new Promise((resolve, reject) => {
  reject(1);
  console.log(2);
  resolve(3);
  console.log(4);
})
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log('reject1');
  });
try {
  new Promise((resolve, reject) => {
    throw 'error';
  })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log('reject2');
    });
} catch (err) {
  console.log(err);
}
```

### 63. _proxy_ 是实现代理，可以改变 _js_ 底层的实现方式, 然后说了一下和 _Object.defineProperty_ 的区别

### 64. 使用 _ES5_ 与 _ES6_ 分别实现继承

### 65. 深拷贝

### 66. _async_ 与 _await_ 的作用

### 67. 数据的基础类型（原始类型）有哪些

### 68. _typeof null_ 返回结果

### 69. 对变量进行类型判断的方式有哪些

### 70. _typeof_ 与 _instanceof_ 的区别？ _instanceof_ 是如何实现？

### 71. 引用类型有哪些，有什么特点

### 72. 如何得到一个变量的类型---指函数封装实现

### 73. 什么是作用域、闭包

### 74. 闭包的缺点是什么？闭包的应用场景有哪些？怎么销毁闭包？

### 75. *JS*的垃圾回收站机制

### 76. 什么是作用域链、原型链

### 77. _new_ 一个构造函数发生了什么

### 78. 对一个构造函数实例化后. 它的原型链指向什么

### 79. 什么是变量提升

### 80. == 和 === 的区别是什么

### 81. _Object.is_ 方法比较的是什么

### 82. 基础数据类型和引用数据类型，哪个是保存在栈内存中？哪个是在堆内存中？

### 83. 箭头函数解决了什么问题？

### 84. _new_ 一个箭头函数后，它的 _this_ 指向什么？

### 85. _promise_ 的其他方法有用过吗？如 _all、race_。请说下这两者的区别

### 86. _class_ 是如何实现的

### 87. _let、const、var_ 的区别

### 88. _ES6_ 中模块化导入和导出与 _common.js_ 有什么区别

### 89. 说一下普通函数和箭头函数的区别

### 90. 说一下 _promise_ 和 _async_ 和 _await_ 什么关系

### 91. 说一下你学习过的有关 _ES6_ 的知识点

### 92. 了解过 _js_ 中 _arguments_ 吗？接收的是实参还是形参？

### 93. _ES6_ 相比于 _ES5_ 有什么变化

### 94. 强制类型转换方法有哪些？

### 95. 纯函数

### 96. _JS_ 模块化

### 97. 看过 _jquery_ 源码吗？

### 98. 说一下 _js_ 中的 _this_

### 99. _apply call bind_ 区别，手写

### 100. 手写 _reduce flat_

### 101. == 隐试转换的原理？是怎么转换的

### 102. ['1', '2', '3'].map(parseInt) 结果是什么，为什么 （字节）

### 103. 防抖，节流是什么，如何实现 （字节）

### 104. 介绍下 _Set、Map、WeakSet_ 和 _WeakMap_ 的区别（字节）

### 105. _setTimeout、Promise、Async/Await_ 的区别（字节）

### 106. _Promise_ 构造函数是同步执行还是异步执行，那么 _then_ 方法呢？（字节）

### 107. 情人节福利题，如何实现一个 _new_ （字节）

let Parent = function (name, age) {
this.name = name;
this.age = age;
};
Parent.prototype.sayName = function () {
console.log(this.name);
};
//自己定义的 new 方法
let newMethod = function (Parent, ...rest) {
// 1.以构造器的 prototype 属性为原型，创建新对象；
let child = Object.create(Parent.prototype);
// 2.将 this 和调用参数传给构造器执行
let result = Parent.apply(child, rest);
// 3.如果构造器没有手动返回对象，则返回第一步的对象
return typeof result === 'object' ? result : child;
};
//创建实例，将构造函数 Parent 与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';
//最后检验，与使用 new 的效果相同
console.log(child instanceof Parent)//true
console.log(child.hasOwnProperty('name'))//true
console.log(child.hasOwnProperty('age'))//true
console.log(child.hasOwnProperty('sayName'))//false

### 108. 实现一个 _sleep_ 函数（字节）

### 109. 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果 （字节）

### 110. 实现 5.add(3).sub(2) (百度)

### 111. 给定两个数组，求交集

### 112. 为什么普通 _for_ 循环的性能远远高于 _forEach_ 的性能，请解释其中的原因。

### 113. 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。

### 114. 使用 _JavaScript Proxy_ 实现简单的数据绑定

### 115. 数组里面有 _10_ 万个数据，取第一个元素和第 _10_ 万个元素的时间相差多少（字节）

### 116. 打印出 _1~10000_ 以内的对称数

### 117. 简述同步和异步的区别

### 118. 怎么添加、移除、复制、创建、和查找节点

### 119. 实现一个函数 _clone_ 可以对 _Javascript_ 中的五种主要数据类型（_Number、string、 Object、Array、Boolean_）进行复制

### 120. 如何消除一个数组里面重复的元素

### 121. 写一个返回闭包的函数

### 122. 使用递归完成 1 到 100 的累加

### 123. _Javascript_ 有哪几种数据类型

### 124. 如何判断数据类型

### 125. console.log(1+'2')和 console.log(1-'2')的打印结果

### 126. _JS_ 的事件委托是什么，原理是什么

### 127. 如何改变函数内部的 _this_ 指针的指向

### 128. _JS_ 延迟加载的方式有哪些？

### 129. 说说严格模式的限制

### 130. _attribute_ 和 _property_ 的区别是什么？

### 131. _ES6_ 能写 _class_ 么，为什么会出现 _class_ 这种东西?

### 132. 常见兼容性问题

### 133. 函数防抖节流的原理

### 134. 原始类型有哪几种？_null_ 是对象吗？

### 135. 为什么 _console.log(0.2+0.1==0.3) // false_

### 136. 说一下 _JS_ 中类型转换的规则？

### 137. 深拷贝和浅拷贝的区别？如何实现

### 138. 如何判断 _this_？箭头函数的 _this_ 是什么

### 139. _call、apply_ 以及 _bind_ 函数内部实现是怎么样的

### 140. 为什么会出现 _setTimeout_ 倒计时误差？如何减少

### 141. 谈谈你对 _JS_ 执行上下文栈和作用域链的理解

### 142. _new_ 的原理是什么？通过 _new_ 的方式创建对象和通过字面量创建有什么区别？

### 143. _prototype_ 和 \_\__proto_\_\_ 区别是什么？

### 144. 使用 ES5 实现一个继承？

### 145. 取数组的最大值（_ES5、ES6_）

### 146. _ES6_ 新的特性有哪些？

### 147. _Promise_ 有几种状态, _Promise_ 有什么优缺点 ?

### 148. _Promise_ 构造函数是同步还是异步执行，_then_ 呢 ? _Promise_ 如何实现 _then_ 处理 ?

### 149. _Promise_ 和 _setTimeout_ 的区别 ?

### 150. 如何实现 _Promise.all_ ?

### 151. 如何实现 _Promise.finally_ ?

### 152. 如何判断 _img_ 加载完成

### 153. 如何阻止冒泡？

### 154. 如何阻止默认事件？

### 155. 如何用原生 _js_ 给一个按钮绑定两个 _onclick_ 事件？

### 156. 拖拽会用到哪些事件

### 157. _document.write_ 和 _innerHTML_ 的区别

### 158. _jQuery_ 的事件委托方法 _bind 、live、delegate、one、on_ 之间有什么区别？

### 159. _$(document).ready_ 方法和 _window.onload_ 有什么区别？

### 160. jquery 中$.get()提交和$.post()提交有区别吗？

### 161. _await async_ 如何实现 （阿里）

### 162. _clientWidth,offsetWidth,scrollWidth_ 的区别

### 163. 产生一个不重复的随机数组

### 164. _continue_ 和 _break_ 的区别

### 165. 如何在 _jquery_ 上扩展插件，以及内部原理（腾讯）

### 166. _async/await_ 如何捕获错误

### 167. _Proxy_ 对比 _Object.defineProperty_ 的优势

### 168. 原型链，可以改变原型链的规则吗?

### 169. 讲一讲继承的所有方式都有什么？手写一个寄生组合式继承

### 170. _JS_ 基本数据类型有哪些？栈和堆有什么区别，为什么要这样存储。（快手）

### 171. _setTimeout(() => {}, 0)_ 什么时候执行

### 172. _js_ 有函数重载吗（网易）

### 173. 给你一个数组，计算每个数出现的次数，如果每个数组返回的数都是独一无二的就返回 _true_ 相反则返回的 _flase_

### 174. 封装一个能够统计重复的字符的函数，例如 _aaabbbdddddfff_ 转化为 _3a3b5d3f_

### 175. 写出代码的执行结果，并解释为什么？

```js
function a() {
  console.log(1);
}
(function () {
  if (false) {
    function a() {
      console.log(2);
    }
  }
  console.log(typeof a);
  a();
})();
```

### 176. 写出代码的执行结果，并解释为什么？

```js
alert(a);
a();
var a = 3;
function a() {
  alert(10);
}
alert(a);
a = 6;
a();
```

### 177. 写出下面程序的打印顺序，并简要说明原因

```js
setTimeout(function () {
  console.log('set1');
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log('then4');
    });
    console.log('then2');
  });
});
new Promise(function (resolve) {
  console.log('pr1');
  resolve();
}).then(function () {
  console.log('then1');
});

setTimeout(function () {
  console.log('set2');
});
console.log(2);

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log('then3');
});
```

### 178. _javascript_ 中什么是伪数组？如何将伪数组转换为标准数组

### 179. _array_ 和 _object_ 的区别

### 180. _jquery_ 事件委托

### 181. _JS_ 基本数据类型

### 182. 请实现一个模块 _math_，支持链式调用`math.add(2,4).minus(3).times(2);`

### 183. 请简述 _ES6_ 代码转成 _ES5_ 代码的实现思路。

### 184. 下列代码的执行结果

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end');
```

### 185. _JS_ 有哪些内置对象？

### 186. _DOM_ 怎样添加、移除、移动、复制、创建和查找节点

### 187. _eval_ 是做什么的？

### 188. _null_ 和 _undefined_ 的区别？

### 189. _new_ 操作符具体干了什么呢？

### 190. 去除字符串中的空格

### 191. 常见的内存泄露，以及解决方案

### 192. 箭头函数和普通函数里面的 _this_ 有什么区别

### 193. 设计⼀个⽅法(_isPalindrom_)以判断是否回⽂(颠倒后的字符串和原来的字符串⼀样为回⽂)

### 194. 设计⼀个⽅法(_findMaxDuplicateChar_)以统计字符串中出现最多次数的字符

### 195. 设计⼀段代码，使得通过点击按钮可以在 _span_ 中显示⽂本框中输⼊的值

### 196. _map_ 和 _forEach_ 的区别？

### 197. _Array_ 的常用方法

### 198. 数组去重的多种实现方式

### 199. 什么是预解析（预编译）

### 200. 原始值类型和引用值类型的区别是什么？

### 201. 冒泡排序的思路，不用 _sort_

### 202. _symbol_ 用途

### 203. 什么是函数式编程，应用场景是什么

### 204. 事件以及事件相关的兼容性问题

### 205. _JS_ 小数不精准，如何计算

### 206. 写一个 _mySetInterVal(fn, a, b)_，每次间隔 _a,a+b,a+2b_ 的时间，然后写一个 _myClear_，停止上面的 _mySetInterVal_

### 207. 合并二维有序数组成一维有序数组，归并排序的思路

### 208. 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

### 209. 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）(滴滴 _2020_)

### 210. 手写发布订阅（头条 2020）

### 211. 手写用 _ES6proxy_ 如何实现 _arr[-1]_ 的访问（滴滴 2020）

### 212. 下列代码执行结果

```js
console.log(1);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});
```

### 213. Number() 的存储空间是多大？如果后台发送了一个超过最大自己的数字怎么办

### 214. 事件是如何实现的？(字节 2020)

### 215. 下列代码执行结果

```js
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
```

### 216. 判断数组的方法，请分别介绍它们之间的区别和优劣

### 217. JavaScript 中的数组和函数在内存中是如何存储的？

### 218. _JavaScript_ 是如何运行的？解释型语言和编译型语言的差异是什么？

### 219. 列举你所了解的编程范式？

### 220. 什么是面向切面（AOP）的编程？

### 221. _JavaScript_ 中的 _const_ 数组可以进行 _push_ 操作吗？为什么？

### 222. JavaScript 中对象的属性描述符有哪些？分别有什么作用？

### 223. _JavaScript_ 中 _console_ 有哪些 _api_ ?

### 224. 简单对比一下 _Callback、Promise、Generator、Async_ 几个异步 _API_ 的优劣？

### 225. _Object.defineProperty_ 有哪几个参数？各自都有什么作用

### 226. _Object.defineProperty_ 和 _ES6_ 的 _Proxy_ 有什么区别？

### 227. _intanceof_ 操作符的实现原理及实现

### 228. 强制类型转换规则？

### 229. _Object.is_( ) 与比较操作符 “===”、“==” 的区别

### 230. `+` 操作符什么时候用于字符串的拼接？

### 231. _object.assign_ 和扩展运算法是深拷贝还是浅拷贝

### 232. _const_ 对象的属性可以修改吗

### 233. 如果 _new_ 一个箭头函数的会怎么样

### 234. 扩展运算符的作用及使用场景

### 235. _Proxy_ 可以实现什么功能？

### 236. 对象与数组的解构的理解

### 237. 如何提取高度嵌套的对象里的指定属性？

### 238. _Unicode、UTF-8、UTF-16、UTF-32_ 的区别？

### 239. 为什么函数的 _arguments_ 参数是类数组而不是数组？如何遍历类数组?

### 240. _escape、encodeURI、encodeURIComponent_ 的区别

### 241. _use strict_ 是什么意思 ? 使用它区别是什么？

### 242. _for...in_ 和 _for...of_ 的区别

### 243. _ajax、axios、fetch_ 的区别

### 244. 下面代码的输出是什么？（ _D_ ）

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: _Lydia_ 和 _undefined_
- B: _Lydia_ 和 _ReferenceError_
- C: _ReferenceError_ 和 _21_
- D: _undefined_ 和 _ReferenceError_

### 245. 下面代码的输出是什么？（ _C_ ）

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: _0 1 2_ 和 _0 1 2_
- B: _0 1 2_ 和 _3 3 3_
- C: _3 3 3_ 和 _0 1 2_

### 246. 下面代码的输出是什么？（ _B_ ）

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter();
shape.perimeter();
```

- A: _20_ 和 _62.83185307179586_
- B: _20_ 和 _NaN_
- C: _20_ 和 _63_
- D: _NaN_ 和 _63_

### 247. 下面代码的输出是什么？（ _A_ ）

```
+true;
!"Lydia";
```

- A: _1_ 和 _false_
- B: _false_ 和 _NaN_
- C: _false_ 和 _false_

### 248. 哪个选项是不正确的？（ _A_ ）

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: _mouse.bird.size_
- B: _mouse[bird.size]_
- C: _mouse[bird["size"]]_
- D: 以上选项都对

### 249. 下面代码的输出是什么？（ _A_ ）

```javascript
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

- A: _Hello_
- B: _undefined_
- C: _ReferenceError_
- D: _TypeError_

### 250. 下面代码的输出是什么？（ _C_ ）

```js
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: _true_ _false_ _true_
- B: _false_ _false_ _true_
- C: _true_ _false_ _false_
- D: _false_ _true_ _true_

### 251. 下面代码的输出是什么？（ _D_ ）

```js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
freddie.colorChange('orange');
```

- A: _orange_
- B: _purple_
- C: _green_
- D: _TypeError_

### 252. 下面代码的输出是什么？（ _A_ ）

```js
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: _{}_
- B: _ReferenceError: greetign is not defined_
- C: _undefined_

### 253. 当我们执行以下代码时会发生什么？（ _A_ ）

```js
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A 什么都不会发生
- B: _SyntaxError. You cannot add properties to a function this way._
- C: _undefined_
- D: _ReferenceError_

> **分析：**
>
> 因为函数也是对象！（原始类型之外的所有东西都是对象）
>
> 函数是一种特殊类型的对象，我们可以给函数添加属性，且此属性是可调用的。

### 254. 下面代码的输出是什么？（ _A_ ）

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = () => this.firstName + this.lastName;

console.log(member.getFullName());
```

- A: _TypeError_
- B: _SyntaxError_
- C: _Lydia Hallie_
- D: _undefined_ _undefined_

### 255. 下面代码的输出是什么？（ _A_ ）

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
```

- A: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _undefined_
- B: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _Person { firstName: "Sarah", lastName: "Smith" }_
- C: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _{}_
- D: _Person { firstName: "Lydia", lastName: "Hallie" }_ 和 _ReferenceError_

### 256. 事件传播的三个阶段是什么？（ _D_ ）

- A: 目标 > 捕获 > 冒泡
- B: 冒泡 > 目标 > 捕获
- C: 目标 > 冒泡 > 捕获
- D: 捕获 > 目标 > 冒泡

### 257. 下面代码的输出是什么？（ _C_ ）

```js
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: _NaN_
- B: _TypeError_
- C: _"12"_
- D: _3_

### 258. 下面代码的输出是什么？（ _C_ ）

```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: _1 1 2_
- B: _1 2 2_
- C: _0 2 2_
- D: _0 1 2_

### 259. 下面代码的输出是什么？（ _B_ ）

```js
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: _Lydia_ _21_ _["", "is", "years old"]_
- B: _["", "is", "years old"]_ _Lydia_ _21_
- C: _Lydia_ _["", "is", "years old"]_ _21_

### 260. 下面代码的输出是什么？（ _C_ ）

```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: _You are an adult!_
- B: _You are still an adult._
- C: _Hmm.. You don't have an age I guess_

### 261. 下面代码的输出是什么？（ _C_ ）

```js
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- A: _"number"_
- B: _"array"_
- C: _"object"_
- D: _"NaN"_

### 262. 下面代码的输出是什么？（ _C_ ）

```js
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
```

- A: _21_
- B: _undefined_
- C: _ReferenceError_
- D: _TypeError_

### 263. 下面代码的输出是什么？（ _A_ ）

```js
const sum = eval('10*10+5');
```

- A: _105_
- B: _"105"_
- C: _TypeError_
- D: _"10\*10+5"_

### 264. _cool_secret_ 可以访问多长时间？（ _B_ ）

```js
sessionStorage.setItem('cool_secret', 123);
```

- A：永远，数据不会丢失。
- B：用户关闭选项卡时。
- C：当用户关闭整个浏览器时，不仅是选项卡。
- D：用户关闭计算机时。

### 265. 下面代码的输出是什么？（ _B_ ）

```js
var num = 8;
var num = 10;

console.log(num);
```

- A: _8_
- B: _10_
- C: _SyntaxError_
- D: _ReferenceError_

### 266. 下面代码的输出是什么？（ _C_ ）

```js
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```

- A: _false_ _true_ _false_ _true_
- B: _false_ _true_ _true_ _true_
- C: _true_ _true_ _false_ _true_
- D: _true_ _true_ _true_ _true_

### 267. 下面代码的输出是什么？（ _C_ ）

```js
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: _{ a: "one", b: "two" }_
- B: _{ b: "two", a: "three" }_
- C: _{ a: "three", b: "two" }_
- D: _SyntaxError_

### 268. 下面代码的输出是什么？（ _C_ ）

```js
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- A: _1 2_
- B: _1 2 3_
- C: _1 2 4_
- D: _1 3 4_

### 269. 下面代码的输出是什么？（ _A_ ）

```js
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();
```

- A: _"Just give Lydia pizza already!"_
- B: _TypeError: not a function_
- C: _SyntaxError_
- D: _undefined_

### 270. 下面代码的输出是什么？（ _B_ ）

```js
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: _123_
- B: _456_
- C: _undefined_
- D: _ReferenceError_

### 271. 下面代码的输出是什么？（ _B_ ）

```js
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();
```

- A: _First_ _Second_ _Third_
- B: _First_ _Third_ _Second_
- C: _Second_ _First_ _Third_
- D: _Second_ _Third_ _First_

### 272. 单击按钮时 _event.target_ 是什么？（ _C_ ）

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>
```

- A: _div_ 外部
- B: _div_ 内部
- C: _button_
- D: 所有嵌套元素的数组

### 273. 单击下面的 _html_ 片段打印的内容是什么？（ _A_ ）

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

- A: _p_ _div_
- B: _div_ _p_
- C: _p_
- D: _div_

### 274. 下面代码的输出是什么？（ _D_ ）

```js
const person = { name: 'Lydia' };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- A: _undefined is 21_ _Lydia is 21_
- B: _function_ _function_
- C: _Lydia is 21_ _Lydia is 21_
- D: _Lydia is 21_ _function_

### 275. 下面代码的输出是什么？（ _B_ ）

```js
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```

- A: _"object"_
- B: _"number"_
- C: _"function"_
- D: _"undefined"_

### 276. 下面这些值哪些是假值？（ _A_ ）

```js
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
```

- A: _0_ _""_ _undefined_
- B: _0_ _new Number(0)_ _""_ _new Boolean(false)_ _undefined_
- C: _0_ _""_ _new Boolean(false)_ _undefined_
- D: 所有都是假值。

### 278. 下面代码的输出是什么？（ _B_ ）

```js
console.log(typeof typeof 1);
```

- A: _"number"_
- B: _"string"_
- C: _"object"_
- D: _"undefined"_

### 279. 下面代码的输出是什么？（ _C_ ）

```js
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: _[1, 2, 3, 7 x null, 11]_
- B: _[1, 2, 3, 11]_
- C: _[1, 2, 3, 7 x empty, 11]_
- D: _SyntaxError_

### 280. 下面代码的输出是什么？（ _A_ ）

```js
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

- A: _1_ _undefined_ _2_
- B: _undefined_ _undefined_ _undefined_
- C: _1_ _1_ _2_
- D: _1_ _undefined_ _undefined_

### 281. _JavaScript_ 中的所有内容都是…（ _A_ ）

- A：原始或对象
- B：函数或对象
- C：技巧问题！只有对象
- D：数字或对象

### 282. 下面代码的输出是什么?

```js
[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- A: _[0, 1, 2, 3, 1, 2]_
- B: _[6, 1, 2]_
- C: _[1, 2, 0, 1, 2, 3]_
- D: _[1, 2, 6]_

### 283. 下面代码的输出是什么？（ _B_ ）

```js
!!null;
!!'';
!!1;
```

- A: _false_ _true_ _false_
- B: _false_ _false_ _true_
- C: _false_ _true_ _true_
- D: _true_ _true_ _false_

### 284. _setInterval_ 方法的返回值什么？（ _A_ ）

```js
setInterval(() => console.log('Hi'), 1000);
```

- A：一个唯一的 _id_
- B：指定的毫秒数
- C：传递的函数
- D：_undefined_

### 285. 下面代码的返回值是什么？（ _A_ ）

```js
[...'Lydia'];
```

- A: _["L", "y", "d", "i", "a"]_
- B: _["Lydia"]_
- C: _[[], "Lydia"]_
- D: _[["L", "y", "d", "i", "a"]]_

### 286. _document.write_ 和 _innerHTML_ 有哪些区别？

### 287. 假设有两个变量 _a_ 和 _b_，他们的值都是数字，如何在不借用第三个变量的情况下，将两个变量的值对调？

### 288. 前端为什么提倡模块化开发？

### 289. 请解释 _JSONP_ 的原理，并用代码描述其过程。

### 290. 列举几种 _JavaScript_ 中数据类型的强制转换和隐式转换。

### 291. 分析以下代码的执行结果并解释为什么。

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

console.log(a.x);
console.log(b.x);
```

### 292. 分析以下代码的执行结果并解释为什么。

```js
// example 1
var a = {},
  b = '123',
  c = 123;
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);

// example 2
var a = {},
  b = Symbol('123'),
  c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);

// example 3
var a = {},
  b = { key: '123' },
  c = { key: '456' };
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);
```

### 293. 下面的代码打印什么内容？为什么？

```js
var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();
```

### 294. 下面代码中，_a_ 在什么情况下会执行输出语句打印 _1_ ？

```js
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}
```

### 295. 介绍前端模块化的发展。

### 296. 请指出 _document.onload_ 和 document.ready 两个事件的区别

### 297. 表单元素的*readonly* 和 _disabled_ 两个属性有什么区别？

### 298. 列举几种你知道的数组排序的方法。

### 299. 区分什么是“客户区坐标”、“页面坐标”、“屏幕坐标”？

### 300. 如何编写高性能的 _JavaScript_？

### 301. 下面的代码输出什么？

```js
var a = function () {
  return 5;
};
a.toString = function () {
  return 3;
};
console.log(a + 7);
```
