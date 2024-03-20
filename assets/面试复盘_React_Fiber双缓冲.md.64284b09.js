import{_ as s,o as n,c as a,V as l}from"./chunks/framework.bd00fe0c.js";const d=JSON.parse('{"title":"Fiber 双缓冲","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/React/Fiber双缓冲.md","filePath":"面试复盘/React/Fiber双缓冲.md","lastUpdated":1710918713000}'),o={name:"面试复盘/React/Fiber双缓冲.md"},p=l(`<h1 id="fiber-双缓冲" tabindex="-1">Fiber 双缓冲 <a class="header-anchor" href="#fiber-双缓冲" aria-label="Permalink to &quot;Fiber 双缓冲&quot;">​</a></h1><blockquote><p>面试题：谈一谈你对 React 中 Fiber 的理解以及什么是 Fiber 双缓冲？</p></blockquote><h2 id="对-fiber-的理解" tabindex="-1">对 Fiber 的理解 <a class="header-anchor" href="#对-fiber-的理解" aria-label="Permalink to &quot;对 Fiber 的理解&quot;">​</a></h2><p>实际上，我们可以从三个维度来理解 Fiber：</p><ul><li>是一种架构，称之为 Fiber 架构</li><li>是一种数据类型</li><li>动态的工作单元</li></ul><p><strong>是一种架构，称之为 Fiber 架构</strong></p><p>在 React v16 之前，使用的是 Stack Reconciler，因此那个时候的 React 架构被称之为 Stack 架构。从 React v16 开始，重构了整个架构，引入了 Fiber，因此新的架构也被称之为 Fiber 架构，Stack Reconciler 也变成了 Fiber Reconciler。各个 FiberNode 之间通过链表的形式串联起来：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">FiberNode</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">tag</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">pendingProps</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">mode</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 周围的 Fiber Node 通过链表的形式进行关联</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">child</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">sibling</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>是一种数据类型</strong></p><p>Fiber 本质上也是一个对象，是在之前 React 元素基础上的一种升级版本。每个 FiberNode 对象里面会包含 React 元素的类型、周围链接的 FiberNode 以及 DOM 相关信息：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">FiberNode</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">tag</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">pendingProps</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">mode</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 类型</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">tag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">tag</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">elementType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">stateNode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 映射真实 DOM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>动态的工作单元</strong></p><p>在每个 FiberNode 中，保存了本次更新中该 React 元素变化的数据，还有就是要执行的工作（增、删、更新）以及副作用的信息：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">FiberNode</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">tag</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">pendingProps</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">mode</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 副作用相关</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">flags</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">NoFlags</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">subtreeFlags</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">NoFlags</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">deletions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 与调度优先级有关</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">lanes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">NoLanes</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">childLanes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">NoLanes</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p>为什么指向父 FiberNode 的字段叫做 return 而非 parent？</p><p>因为作为一个动态的工作单元，return 指代的是 FiberNode 执行完 completeWork 后返回的下一个 FiberNode，这里会有一个返回的动作，因此通过 return 来指代父 FiberNode</p></blockquote><h2 id="fiber-双缓冲-1" tabindex="-1">Fiber 双缓冲 <a class="header-anchor" href="#fiber-双缓冲-1" aria-label="Permalink to &quot;Fiber 双缓冲&quot;">​</a></h2><p>Fiber 架构中的双缓冲工作原理类似于显卡的工作原理。</p><p>显卡分为前缓冲区和后缓冲区。首先，前缓冲区会显示图像，之后，合成的新的图像会被写入到后缓冲区，一旦后缓冲区写入图像完毕，就会前后缓冲区进行一个互换，这种将数据保存在缓冲区再进行互换的技术，就被称之为双缓冲技术。</p><p>Fiber 架构同样用到了这个技术，在 Fiber 架构中，同时存在两颗 Fiber Tree，一颗是真实 UI 对应的 Fiber Tree，可以类比为显卡的前缓冲区，另外一颗是在内存中构建的 FiberTree，可以类比为显卡的后缓冲区。</p><p>在 React 源码中，很多方法都需要接收两颗 FiberTree：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">cloneChildFibers</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">current</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">workInProgress</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>current 指的就是前缓冲区的 FiberNode，workInProgress 指的就是后缓冲区的 FiberNode。</p><p>两个 FiberNode 会通过 alternate 属性相互指向：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">current</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">alternate </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> workInProgress</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">workInProgress</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">alternate </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> current</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>接下来我们从首次渲染（mount）和更新（update）这两个阶段来看一下 FiberTree 的形成以及双缓存机制：</p><p><strong>mount 阶段</strong></p><p>首先最顶层有一个 FiberNode，称之为 FiberRootNode，该 FiberNode 会有一些自己的任务：</p><ul><li>Current Fiber Tree 与 Wip Fiber Tree 之间的切换</li><li>应用中的过期时间</li><li>应用的任务调度信息</li></ul><p>现在假设有这么一个结构：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">add</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(num </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> rootElement </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRoot</span><span style="color:#BABED8;">(rootElement)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>当执行 ReactDOM.createRoot 的时候，会创建如下的结构：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-24-071516.png" alt="image-20230224151515483" style="zoom:50%;"><p>此时会有一个 HostRootFiber，FiberRootNode 通过 current 来指向 HostRootFiber。</p><p>接下来进入到 mount 流程，该流程会基于每个 React 元素以深度优先的原则依次生成 wip FiberNode，并且每一个 wipFiberNode 会连接起来，如下图所示：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-24-072421.png" alt="image-20230224152421236" style="zoom:50%;"><p>生成的 wip FiberTree 里面的每一个 FiberNode 会和 current FiberTree 里面的 FiberNode 进行关联，关联的方式就是通过 alternate。但是目前 currentFiberTree 里面只有一个 HostRootFiber，因此就只有这个 HostRootFiber 进行了 alternate 的关联。</p><p>当 wip FiberTree 生成完毕后，也就意味着 render 阶段完毕了，此时 FiberRootNode 就会被传递给 Renderer（渲染器），接下来就是进行渲染工作。渲染工作完毕后，浏览器中就显示了对应的 UI，此时 FiberRootNode.current 就会指向这颗 wip Fiber Tree，曾经的 wip Fiber Tree 它就会变成 current FiberTree，完成了双缓存的工作：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-24-072953.png" alt="image-20230224152953358" style="zoom:50%;"><p><strong>update 阶段</strong></p><p>点击 p 元素，会触发更新，这一操作就会开启 update 流程，此时就会生成一颗新的 wip Fiber Tree，流程和之前是一样的</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-24-073250.png" alt="image-20230224153250126" style="zoom:48%;"><p>新的 wip Fiber Tree 里面的每一个 FiberNode 和 current Fiber Tree 的每一个 FiberNode 通过 alternate 属性进行关联。</p><p>当 wip Fiber Tree 生成完毕后，就会经历和之前一样的流程，FiberRootNode 会被传递给 Renderer 进行渲染，此时宿主环境所渲染出来的真实 UI 对应的就是左边 wip Fiber Tree 所对应的 DOM 结构，FiberRootNode.current 就会指向左边这棵树，右边的树就再次成为了新的 wip Fiber Tree</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-24-073639.png" alt="image-20230224153638862" style="zoom:50%;"><p>这个就是 Fiber 双缓存的工作原理。</p><p>另外值得一提的是，开发者是可以在一个页面创建多个应用的，比如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRoot</span><span style="color:#BABED8;">(rootElement1)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App1</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRoot</span><span style="color:#BABED8;">(rootElement2)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App2</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRoot</span><span style="color:#BABED8;">(rootElement3)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App3</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>在上面的代码中，我们创建了 3 个应用，此时就会存在 3 个 FiberRootNode，以及对应最多 6 棵 Fiber Tree 树。</p><h2 id="真题解析" tabindex="-1">真题解析 <a class="header-anchor" href="#真题解析" aria-label="Permalink to &quot;真题解析&quot;">​</a></h2><blockquote><p>题目：谈一谈你对 React 中 Fiber 的理解以及什么是 Fiber 双缓冲？</p><p>参考答案：</p><p>Fiber 可以从三个方面去理解：</p><ul><li><strong>FiberNode 作为一种架构</strong>：在 React v15 以及之前的版本中，Reconceiler 采用的是递归的方式，因此被称之为 Stack Reconciler，到了 React v16 版本之后，引入了 Fiber，Reconceiler 也从 Stack Reconciler 变为了 Fiber Reconceiler，各个 FiberNode 之间通过链表的形式串联了起来。</li><li><strong>FiberNode 作为一种数据类型</strong>：Fiber 本质上也是一个对象，是之前虚拟 DOM 对象（React 元素，createElement 的返回值）的一种升级版本，每个 Fiber 对象里面会包含 React 元素的类型，周围链接的 FiberNode，DOM 相关信息。</li><li><strong>FiberNode 作为动态的工作单元</strong>：在每个 FiberNode 中，保存了“本次更新中该 React 元素变化的数据、要执行的工作（增、删、改、更新 Ref、副作用等）”等信息。</li></ul><p>所谓 Fiber 双缓冲树，指的是在内存中构建两颗树，并直接在内存中进行替换的技术。在 React 中使用 Wip Fiber Tree 和 Current Fiber Tree 这两颗树来实现更新的逻辑。Wip Fiber Tree 在内存中完成更新，而 Current Fiber Tree 是最终要渲染的树，两颗树通过 alternate 指针相互指向，这样在下一次渲染的时候，直接复用 Wip Fiber Tree 作为下一次的渲染树，而上一次的渲染树又作为新的 Wip Fiber Tree，这样可以加快 DOM 节点的替换与更新。</p></blockquote>`,51),e=[p];function t(r,c,F,y,i,D){return n(),a("div",null,e)}const b=s(o,[["render",t]]);export{d as __pageData,b as default};
