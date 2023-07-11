## Browser 浏览器

### Current URL (获取当前页面 URL)

使用 window.location.href 获取当前页面 URL。

JavaScript 代码:

```jsx
const currentUrl = (_) => window.location.href;
// currentUrl() -> 'https://google.com'
```

### Redirect to URL (重定向到 URL)

使用 window.location.href 或 window.location.replace() 重定向到 url 。传递第二个参数来模拟链接点击(true – 默认值)或 HTTP 重定向(false)。

JavaScript 代码:

```jsx
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
// redirect('https://google.com')
```

### reload current page (重新加载当前页面)

```js
const reload = () => location.reload();
// reload();
```

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

### Scroll to top (回到顶部)

使用 document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部距离。从顶部滚动一小部分距离。使用 window.requestAnimationFrame() 来实现滚动动画。

JavaScript 代码:

```jsx
const scrollToTop = (_) => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    /**
     * window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
     * 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
     */
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
// scrollToTop();
```

如果你需要将页面翻到最顶部（无动画版）

```js
const goToTop = () => window.scrollTo(0, 0);
// goToTop();
```

### element scrolling (元素滚动)

如果你希望将一个元素顺滑的滚动到可视区域的起点

```js
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });
// scrollToTop(document.body);
```

如果你希望将一个元素顺滑的滚动到可视区域的终点

```js
const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "end" });
// scrollToBottom(document.body);
```

### strip html from given text (从给定文本中剥离 html)

当你需要在某个文本中将里面的标签全部过滤掉

```js
const stripHtml = (html) =>
  new DOMParser().parseFromString(html, "text/html").body.textContent || "";
// stripHtml("<div>test</div>"); // 'test'
```

### Check if the current IE browser (检查当前是否 IE 浏览器)

```js
const isIE = !!document.documentMode;
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

// judgeDeviceType(); // PC | Mobile
```

### Copy text to clipboard (文字复制到剪贴板)

`Clipboard API` 它的所有操作都是异步的，返回`Promise`对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板

JavaScript 代码:

```jsx
const copyText = async (text) => await navigator.clipboard?.writeText(text);

// copyText("单行代码 前端世界");
```
