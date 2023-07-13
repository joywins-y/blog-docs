export default [
  {
    text: "浏览器工作原理与实践",
    items: [
      {
        text: "开篇词 (1讲)",
        items: [{ text: "开篇词", link: "/browser/开篇词 (1讲)/开篇词" }],
      },
      {
        text: "宏观视角下的浏览器 (6讲)",
        items: [
          {
            text: "01 Chrome架构",
            link: "/browser/宏观视角下的浏览器 (6讲)/01 | Chrome架构：仅仅打开了1个页面，为什么有4个进程？",
          },
          {
            text: "02 TCP协议",
            link: "/browser/宏观视角下的浏览器 (6讲)/02 | TCP协议：如何保证页面文件能被完整送达浏览器？",
          },
          {
            text: "03 HTTP请求流程",
            link: "/browser/宏观视角下的浏览器 (6讲)/03 | HTTP请求流程：为什么很多站点第二次打开速度会很快？",
          },
          {
            text: "04 导航流程",
            link: "/browser/宏观视角下的浏览器 (6讲)/04 | 导航流程：从输入URL到页面展示，这中间发生了什么？",
          },
          {
            text: "05 渲染流程（上）",
            link: "/browser/宏观视角下的浏览器 (6讲)/05 | 渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的？",
          },
          {
            text: "06 渲染流程（下）",
            link: "/browser/宏观视角下的浏览器 (6讲)/06 | 渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的？",
          },
        ],
      },
      {
        text: "浏览器中的JavaScript执行机制 (5讲)",
        items: [
          {
            text: "07 变量提升",
            link: "/browser/浏览器中的JavaScript执行机制 (5讲)/07 | 变量提升：JavaScript代码是按顺序执行的吗？",
          },
          {
            text: "08 调用栈",
            link: "/browser/浏览器中的JavaScript执行机制 (5讲)/08 | 调用栈：为什么JavaScript代码会出现栈溢出？",
          },
          {
            text: "09 块级作用域",
            link: "/browser/浏览器中的JavaScript执行机制 (5讲)/09 | 块级作用域：var缺陷以及为什么要引入let和const？",
          },
          {
            text: "10 作用域链和闭包",
            link: "/browser/浏览器中的JavaScript执行机制 (5讲)/10 | 作用域链和闭包：代码中出现相同的变量，JavaScript引擎是如何选择的？",
          },
          {
            text: "11 this",
            link: "/browser/浏览器中的JavaScript执行机制 (5讲)/11 | this：从JavaScript执行上下文的视角讲清楚this",
          },
        ],
      },
      {
        text: "V8工作原理 (3讲)",
        items: [
          {
            text: "12 栈空间和堆空间",
            link: "/browser/V8工作原理 (3讲)/12 | 栈空间和堆空间：数据是如何存储的？",
          },
          {
            text: "13 垃圾回收",
            link: "/browser/V8工作原理 (3讲)/13 | 垃圾回收：垃圾数据是如何自动回收的？",
          },
          {
            text: "14 编译器和解释器",
            link: "/browser/V8工作原理 (3讲)/14 | 编译器和解释器：V8是如何执行一段JavaScript代码的？",
          },
        ],
      },
      {
        text: "浏览器中的页面循环系统 (6讲)",
        items: [
          {
            text: "15 消息队列和事件循环",
            link: "/browser/浏览器中的页面循环系统 (6讲)/15 | 消息队列和事件循环：页面是怎么“活”起来的？",
          },
          {
            text: "16 WebAPI",
            link: "/browser/浏览器中的页面循环系统 (6讲)/16 | WebAPI：setTimeout是如何实现的？",
          },
          {
            text: "17 WebAPI",
            link: "/browser/浏览器中的页面循环系统 (6讲)/17 | WebAPI：XMLHttpRequest是怎么实现的？",
          },
          {
            text: "18 宏任务和微任务",
            link: "/browser/浏览器中的页面循环系统 (6讲)/18 | 宏任务和微任务：不是所有任务都是一个待遇",
          },
          {
            text: "19 Promise",
            link: "/browser/浏览器中的页面循环系统 (6讲)/19 | Promise：使用Promise，告别回调函数",
          },
          {
            text: "20 async await",
            link: "/browser/浏览器中的页面循环系统 (6讲)/20 | async await：使用同步的方式去写异步代码",
          },
        ],
      },
      {
        text: "浏览器中的页面 (8讲)",
        items: [
          {
            text: "21 Chrome开发者工具",
            link: "/browser/浏览器中的页面 (8讲)/21 | Chrome开发者工具：利用网络面板做性能分析",
          },
          {
            text: "22 DOM树",
            link: "/browser/浏览器中的页面 (8讲)/22 | DOM树：JavaScript是如何影响DOM树构建的？",
          },
          {
            text: "23 渲染流水线",
            link: "/browser/浏览器中的页面 (8讲)/23 | 渲染流水线：CSS如何影响首次加载时的白屏时间？",
          },
          {
            text: "24 分层和合成机制",
            link: "/browser/浏览器中的页面 (8讲)/24 | 分层和合成机制：为什么CSS动画比JavaScript高效？",
          },
          {
            text: "25 页面性能",
            link: "/browser/浏览器中的页面 (8讲)/25 | 页面性能：如何系统地优化页面？",
          },
          {
            text: "26 虚拟DOM",
            link: "/browser/浏览器中的页面 (8讲)/26 | 虚拟DOM：虚拟DOM和实际的DOM有何不同？",
          },
          {
            text: "27 渐进式网页应用（PWA）",
            link: "/browser/浏览器中的页面 (8讲)/27 | 渐进式网页应用（PWA）：它究竟解决了Web应用的哪些问题？",
          },
          {
            text: "28 WebComponent",
            link: "/browser/浏览器中的页面 (8讲)/28 | WebComponent：像搭积木一样构建Web应用",
          },
        ],
      },
      {
        text: "浏览器中的网络 (3讲)",
        items: [
          {
            text: "29 HTTP-1",
            link: "/browser/浏览器中的网络 (3讲)/29 | HTTP-1：HTTP性能优化",
          },
          {
            text: "30 HTTP-2",
            link: "/browser/浏览器中的网络 (3讲)/30 | HTTP-2：如何提升网络速度？",
          },
          {
            text: "31 HTTP-3",
            link: "/browser/浏览器中的网络 (3讲)/31 | HTTP-3：甩掉TCP、TLS 的包袱，构建高效网络",
          },
        ],
      },
      {
        text: "浏览器安全 (5讲)",
        items: [
          {
            text: "32 同源策略",
            link: "/browser/浏览器安全 (5讲)/32 | 同源策略：为什么XMLHttpRequest不能跨域请求资源？",
          },
          {
            text: "33 跨站脚本攻击（XSS）",
            link: "/browser/浏览器安全 (5讲)/33 | 跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性？",
          },
          {
            text: "34 CSRF攻击",
            link: "/browser/浏览器安全 (5讲)/34 | CSRF攻击：陌生链接不要随便点",
          },
          {
            text: "35 安全沙箱",
            link: "/browser/浏览器安全 (5讲)/35 | 安全沙箱：页面和系统之间的隔离墙",
          },
          {
            text: "36 HTTPS",
            link: "/browser/浏览器安全 (5讲)/36 | HTTPS：让数据传输更安全",
          },
        ],
      },
      {
        text: "结束语",
        items: [
          {
            text: "",
            link: "/browser/结束语/",
          },
        ],
      },
      {
        text: "课外加餐 (6讲)",
        items: [
          {
            text: "加餐一 浏览上下文组",
            link: "/browser/课外加餐 (6讲)/加餐一 | 浏览上下文组：如何计算Chrome中渲染进程的个数？",
          },
          {
            text: "加餐二 任务调度",
            link: "/browser/课外加餐 (6讲)/加餐二 | 任务调度：有了setTimeOut，为什么还要使用rAF？",
          },
          {
            text: "加餐三 加载阶段性能",
            link: "/browser/课外加餐 (6讲)/加餐三 | 加载阶段性能：使用Audits来优化Web性能",
          },
          {
            text: "加餐四 页面性能工具",
            link: "/browser/课外加餐 (6讲)/加餐四 | 页面性能工具：如何使用Performance？",
          },
          {
            text: "加餐五 性能分析工具",
            link: "/browser/课外加餐 (6讲)/加餐五 | 性能分析工具：如何分析Performance中的Main指标？",
          },
          {
            text: "加餐六 HTTPS",
            link: "/browser/课外加餐 (6讲)/加餐六 | HTTPS：浏览器如何验证数字证书？",
          },
        ],
      },
    ],
  },
];
