import{_ as s,o as a,c as n,V as l}from"./chunks/framework.bd00fe0c.js";const B=JSON.parse('{"title":"web worker","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/浏览器/18. Web Worker/web worker.md","filePath":"面试复盘/浏览器/18. Web Worker/web worker.md","lastUpdated":1712573589000}'),p={name:"面试复盘/浏览器/18. Web Worker/web worker.md"},o=l(`<h1 id="web-worker" tabindex="-1"><em>web worker</em> <a class="header-anchor" href="#web-worker" aria-label="Permalink to &quot;*web worker*&quot;">​</a></h1><p>在运行大型或者复杂的 <em>JavaScript</em> 脚本的时候经常会出现浏览器假死的现象，这是由于 <em>JavaScript</em> 这个语言在执行的时候是采用单线程来执行而导致的。采用同步执行的方式进行运行，如果出现阻塞，那么后面的代码将不会执行。例如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#BABED8;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">{}</span></span></code></pre></div><p>那么能不能让这些代码在后台运行，或者让 <em>JavaScript</em> 函数在多个进程中同时运行呢？</p><p><em>HTML5</em> 所提出的 <em>Web Worker</em> 正是为了解决这个问题而出现的。</p><p><em>HTML5</em> 的 <em>Web Worker</em> 可以让 <em>Web</em> 应用程序具备后台的处理能力。它支持多线程处理功能，因此可以充分利用多核 <em>CPU</em> 带来的优势，将耗时长的任务分配给 <em>HTML5</em> 的 <em>Web Worker</em> 运行，从而避免了有时页面反应迟缓，甚至假死的现象。</p><p>本文将分为以下几个部分来介绍 <em>web worker</em>：</p><ul><li><em>web worker</em> 概述</li><li><em>web Worker</em> 使用示例</li><li>使用 <em>web Worker</em> 实现跨标签页通信</li></ul><h2 id="web-worker-概述" tabindex="-1"><em>web worker</em> 概述 <a class="header-anchor" href="#web-worker-概述" aria-label="Permalink to &quot;*web worker* 概述&quot;">​</a></h2><p>在 <em>Web</em> 应用程序中，<em>web Worker</em> 是一项后台处理技术。</p><p>在此之前，<em>JavaScript</em> 创建的 <em>Web</em> 应用程序中，因为所有的处理都是在单线程内执行的，所以如果脚本所需运行时间太长，程序界面就会长时间处于停止状态，甚至当等待时间超出一定的限度，浏览器就会进入假死的状态。</p><p>为了解决这个问题，<em>HTML5</em> 新增加了一个 <em>web Worker API</em>。</p><p>使用这个 <em>API</em>，用户可以很容易的创建在后台运行的线程，这个线程被称之为 <em>Worker</em>。如果将可能耗费较长时间的处理交给后台来执行，则对用户在前台页面中执行的操作没有影响。</p><p><em>web Worker</em> 的特点如下：</p><ul><li><p>通过加载一个 <em>JS</em> 文件来进行大量复杂的计算，而不挂起主进程。通过 <em>postMessage</em> 和 <em>onMessage</em> 进行通信。</p></li><li><p>可以在 <em>Worker</em> 中通过 <em>importScripts(url)</em> 方法来加载 <em>JavaScript</em> 脚本文件。</p></li><li><p>可以使用 <em>setTimeout( )，clearTimeout( )，setInterval( ) 和 clearInterval( )</em> 等方法。</p></li><li><p>可以使用 <em>XMLHttpRequest</em> 进行异步请求。</p></li><li><p>可以访问 <em>navigator</em> 的部分属性。</p></li><li><p>可以使用 <em>JavaScript</em> 核心对象。</p></li></ul><p>除了上述的优点，<em>web Worker</em> 本身也具有一定局限性的，具体如下：</p><ul><li><p>不能跨域加载 <em>JavaScript</em></p></li><li><p><em>Worker</em> 内代码不能访问 <em>DOM</em></p></li><li><p>使用 <em>Web Worker</em> 加载数据没有 <em>JSONP</em> 和 <em>Ajax</em> 加载数据高效。</p></li></ul><p>目前来看，<em>web Worker</em> 的浏览器兼容性还是很不错的，基本得到了主流浏览器的一致支持。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-074024.png" alt="image-20211206154023963"></p><p>在开始使用 <em>web Worker</em> 之前，我们先来看一下使用 <em>Worker</em> 时会遇到的属性和方法，如下：</p><ul><li><p><em>self</em>：<em>self</em> 关键值用来表示本线程范围内的作用域。</p></li><li><p><em>postMessage( )</em>：向创建线程的源窗口发送信息。</p></li><li><p><em>onMessage</em>：获取接收消息的事件句柄。</p></li><li><p><em>importScripts(urls)</em>：<em>Worker</em> 内部如果要加载其他脚本，可以使用该方法来导入其它 <em>JavaScript</em> 脚本文件。参数为该脚本文件的 <em>URL</em> 地址，导入的脚本文件必须与使用该线程文件的页面在同一个域中，并在同一个端口中。</p></li></ul><p>例如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 导入了 3 个 JavaScript 脚本</span></span>
<span class="line"><span style="color:#82AAFF;">importScripts</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">worker1.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">worker2.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">worker3.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="web-worker-使用示例" tabindex="-1"><em>web Worker</em> 使用示例 <a class="header-anchor" href="#web-worker-使用示例" aria-label="Permalink to &quot;*web Worker* 使用示例&quot;">​</a></h2><p>接下来我们来看一下 <em>web Worker</em> 的具体使用方式。</p><p><em>web Worker</em> 的使用方法非常简单，只需要创建一个 <em>web Worker</em> 对象，并传入希望执行的 <em>JavaScript</em> 文件即可。</p><p>之后在页面中设置一个事件监听器，用来监听由 <em>web Worker</em> 对象发来的消息。</p><p>如果想要在页面与 <em>web Worker</em> 之间建立通信，数据需要通过 <em>postMessage( )</em> 方法来进行传递。</p><p>创建 <em>web Worker</em>。步骤十分简单，只要在 <em>Worker</em> 类的构造器中，将需要在后台线程中执行的脚本文件的 <em>URL</em> 地址作为参数传入，就可以创建 <em>Worker</em> 对象，如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> worker </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Worker</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./worker.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><blockquote><p>注意：在后台线程中是不能访问页面或者窗口对象的，此时如果在后台线程的脚本文件中使用 <em>window</em> 或者 <em>document</em> 对象，则会引发错误。</p></blockquote><p>这里传入的 <em>JavaScript</em> 的 <em>URL</em> 可以是相对或者绝对路径，只要是相同的协议，主机和端口即可。</p><p>如果想获取 <em>Worker</em> 进程的返回值，可以通过 <em>onmessage</em> 属性来绑定一个事件处理程序。如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> worker </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Worker</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./worker.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">worker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmessage</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">the message is back!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这里第一行代码用来创建和运行 <em>Worker</em> 进程，第 <em>2</em> 行设置了 <em>Worker</em> 的 <em>message</em> 事件，当后台 Worker 的 <em>postMessage( )</em> 方法被调用时，该事件就会被触发。</p><p>使用 <em>Worker</em> 对象的 <em>postMessage( )</em> 方法可以给后台线程发送消息。发送的消息需要为文本数据，如果要发送任何 <em>JavaScript</em> 对象，需要通过 <em>JSON.stringify( )</em> 方法将其转换成文本数据。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">worker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">postMessage</span><span style="color:#BABED8;">(message)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>通过获取 <em>Worker</em> 对象的 <em>onmessage</em> 事件以及 <em>Worker</em> 对象的 <em>postMessage( )</em> 方法就可以实现线程之间的消息接收和发送。</p><p><em>Web Worker</em> 不能自行终止，但是能够被启用它们的页面所终止。</p><p>调用 <em>terminate( )</em> 函数可以终止后台进程。被终止的 <em>Web Workers</em> 将不再响应任何消息或者执行任何其他运算。</p><p>终止之后，<em>Worker</em> 不能被重新启动，但是可以使用同样的 <em>URL</em> 创建一个新的 <em>Worker</em>。</p><p>下面是 <em>web Worker</em> 的一个具体使用示例。</p><p><em>index.html</em></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">计数：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">output</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startBtn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">开始工作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stopBtn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">停止工作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> startBtn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startBtn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> stopBtn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stopBtn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> worker</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 用于存储 Worker 进程</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 开始 Worker 的代码</span></span>
<span class="line"><span style="color:#BABED8;">startBtn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 第一次进来没有 Worker 进程 , 创建一个新的 Worker 进程</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">worker</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Worker</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">worker.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 接收来自于后台的数据</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">worker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmessage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">event</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 停止 Worker 的代码</span></span>
<span class="line"><span style="color:#BABED8;">stopBtn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">worker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">terminate</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">worker</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><em>worker.js</em></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">timedCount</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 每次得到的结果都通过 postMessage 方法返回给前台</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">postMessage</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">timedCount()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">timedCount</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>在上面的代码中，当用户点击&quot;开始工作&quot;时，会创建一个 <em>Web Worker</em> 在后台进行计数。每次计的数都会通过 <em>postMessage( )</em> 方法返回给前台。</p><p>当用户点击&quot;停止工作&quot;时，则会调用 <em>terminate( )</em> 方法来终止 <em>Web Worker</em> 的运行。</p><h2 id="使用-web-worker-实现跨标签页通信" tabindex="-1">使用 <em>web Worker</em> 实现跨标签页通信 <a class="header-anchor" href="#使用-web-worker-实现跨标签页通信" aria-label="Permalink to &quot;使用 *web Worker* 实现跨标签页通信&quot;">​</a></h2><p><em>web Worker</em> 可分为两种类型：</p><ul><li><p>专用线程 <em>dedicated web worker</em></p></li><li><p>共享线程 <em>shared web worker</em></p></li></ul><p><em>Dedicated web worker</em> 随当前页面的关闭而结束，这意味着 <em>Dedicated web worker</em> 只能被创建它的页面访问。</p><p>与之相对应的 <em>Shared web worker</em> 共享线程可以同时有多个页面的线程链接。</p><p>前面我们示例 <em>web Worker</em> 时，实例化的是一个 Worker 类，这就代表是一个 <em>Dedicated web worker</em>，而要创建 <em>SharedWorker</em> 则需要实例化 <em>SharedWorker</em> 类。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> worker </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">SharedWorker</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sharedworker.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>下面我们就使用 <em>Shared web worker</em> 共享线程来实现跨标签页通信。</p><p><em>index.html</em></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请输入要发送的信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">发送</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> content </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> btn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> worker </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">SharedWorker</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">worker.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">        btn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">worker</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">port</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">postMessage</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">content</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><em>index2.html</em></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> btn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> worker </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">SharedWorker</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">worker.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        worker</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">port</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#BABED8;">        worker</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">port</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">来自worker的数据：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#82AAFF;">setInterval</span><span style="color:#BABED8;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 获取和发送消息都是调用 postMessage 方法，我这里约定的是传递&#39;get&#39;表示获取数据。</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">worker</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">port</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">postMessage</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">1000</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><em>worker.js</em></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">onconnect</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">port</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">ports</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">port</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmessage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 如果是 get 则返回数据给客户端</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">       </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">port</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">postMessage</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 否则把数据保存                  </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">data</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><hr><p>-<em>EOF</em>-</p>`,65),e=[o];function t(r,c,D,F,y,i){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{B as __pageData,A as default};
