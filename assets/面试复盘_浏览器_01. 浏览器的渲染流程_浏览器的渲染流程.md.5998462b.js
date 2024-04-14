import{_ as s,o as e,c as a,V as p}from"./chunks/framework.bd00fe0c.js";const D=JSON.parse('{"title":"浏览器的渲染流程","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/浏览器/01. 浏览器的渲染流程/浏览器的渲染流程.md","filePath":"面试复盘/浏览器/01. 浏览器的渲染流程/浏览器的渲染流程.md","lastUpdated":1712573589000}'),o={name:"面试复盘/浏览器/01. 浏览器的渲染流程/浏览器的渲染流程.md"},l=p(`<h1 id="浏览器的渲染流程" tabindex="-1">浏览器的渲染流程 <a class="header-anchor" href="#浏览器的渲染流程" aria-label="Permalink to &quot;浏览器的渲染流程&quot;">​</a></h1><p>本文主要包含以下内容：</p><ul><li>浏览器渲染整体流程</li><li>解析 <em>HTML</em></li><li>样式计算</li><li>布局</li><li>分层</li><li>生成绘制指令</li><li>分块</li><li>光栅化</li><li>绘制</li><li>常见面试题</li></ul><h2 id="浏览器渲染整体流程" tabindex="-1">浏览器渲染整体流程 <a class="header-anchor" href="#浏览器渲染整体流程" aria-label="Permalink to &quot;浏览器渲染整体流程&quot;">​</a></h2><p>浏览器，作为用户浏览网页最基本的一个入口，我们似乎认为在地址栏输入 <em>URL</em> 后网页自动就出来了。殊不知在用户输入网页地址，敲下回车的那一刻，浏览器背后做了诸多的事情。</p><p>去除 <em>DNS</em> 查找等这些细枝末节的工作，整个大的部分可以分为两个，那就是<strong>网络</strong>和<strong>渲染</strong>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-024403.png" alt="image-20220908104403123" style="zoom:45%;"><p>首先，浏览器的网络线程会发送 <em>http</em> 请求，和服务器之间进行通信，之后将拿到的 <em>html</em> 封装成一个渲染任务，并将其传递给渲染主线程的消息队列。在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。</p><p>网络线程和服务器之间通信的过程并非本节课咱们要讨论的，本节课咱们要研究的主要内容，是浏览器的渲染进程如何将一个密密麻麻的 <em>html</em> 字符串渲染成最终页面的。</p><p>我们先来看一下整体流程，整个渲染流程分为多个阶段，分别是： <em>HTML</em> 解析、样式计算、布局、分层、生成绘制指令、分块、光栅化、绘制：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-024727.png" alt="image-20220908104726589" style="zoom:50%;"><p>每个阶段都有明确的输入输出，上一个阶段的输出会成为下一个阶段的输入。</p><p>这样，整个渲染流程就形成了一套组织严密的生产流水线。</p><p>接下来，咱们就一起来看一下每一个阶段的各个流程究竟是在干什么。</p><h2 id="解析-html" tabindex="-1">解析 <em>HTML</em> <a class="header-anchor" href="#解析-html" aria-label="Permalink to &quot;解析 *HTML*&quot;">​</a></h2><p>首先第一步就是解析 <em>html</em>，生成 <em>DOM</em> 树。</p><p>当我们打开一个网页时，浏览器都会去请求对应的 <em>HTML</em> 文件。虽然平时我们写代码时都会分为 <em>HTML、CSS、JS</em> 文件，也就是字符串，但是计算机硬件是不理解这些字符串的，所以在网络中传输的内容其实都是 <em>0</em> 和 <em>1</em> 这些字节数据。</p><p>当浏览器接收到这些字节数据以后，它会将这些字节数据转换为字符串，也就是我们写的代码。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-20-091349.png" alt="image-20211120171348433" style="zoom:50%;"><p>当数据转换为字符串以后，浏览器会先将这些字符串通过词法分析转换为标记（ <em>token</em> ），这一过程在词法分析中叫做标记化（ <em>tokenization</em> ）。</p><p>为什么需要标记化呢？原因很简单，现在浏览器虽然将字节数据转为了字符串，但是此时的字符串就如何一篇标题段落全部写在一行的文章一样，浏览器此时仍然是不能理解的。</p><p>例如：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">this is a test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>因此现在所做的标记化，本质就是要将这长长的字符串分拆成一块块，并给这些内容打上标记，便于理解这些最小单位的代码是什么意思。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-20-091409.png" alt="image-20211120171408897" style="zoom:50%;"><p>将整个字符串进行了标记化之后，就能够在此基础上构建出对应的 <em>DOM</em> 树出来。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-035155.png" alt="image-20220908115154504" style="zoom:50%;"><p>上面的步骤，我们就称之为解析 <em>HTML</em>。整个流程如下图：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-20-091451.png" alt="image-20211120171451336" style="zoom:50%;"><p>在解析 <em>HTML</em> 的过程中，我们可以能会遇到诸如 <em>style、link</em> 这些标签，聪明的你应该已经想到了，这是和我们网页样式相关的内容。此时就会涉及到 <em>CSS</em> 的解析。</p><p>为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，率先下载 <em>HTML</em> 中的外部 <em>CSS</em> 文件和外部的 <em>JS</em> 文件。</p><p>如果主线程解析到 <em>link</em> 位置，此时外部的 <em>CSS</em> 文件还没有下载解析好，主线程不会等待，继续解析后续的 <em>HTML</em>。这是因为下载和解析 <em>CSS</em> 的工作是在预解析线程中进行的。这就是 <em>CSS</em> 不会阻塞 <em>HTML</em> 解析的根本原因。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-041457.png" alt="image-20220908121457474" style="zoom:50%;"><p>最终，<em>CSS</em> 的解析在经历了从字节数据、字符串、标记化后，最终也会形成一颗 <em>CSSOM</em> 树。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-040737.png" alt="image-20220908120737384" style="zoom:50%;"><p>上面也有提到，预解析线程除了下载外部 <em>CSS</em> 文件以外，还会下载外部 <em>JS</em> 文件，那么这里同学们自然也会好奇针对 <em>JS</em> 代码浏览器是如何处理的？</p><p>如果主线程解析到 <em>script</em> 位置，会停止解析 <em>HTML</em>，转而等待 <em>JS</em> 文件下载好，并将全局代码解析执行完成后，才能继续解析 <em>HTML</em>。</p><p>为什么呢？</p><p>这是因为 <em>JS</em> 代码的执行过程可能会修改当前的 <em>DOM</em> 树，所以 <em>DOM</em> 树的生成必须暂停。这就是 <em>JS</em> 会阻塞 <em>HTML</em> 解析的根本原因。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-042138.png" alt="image-20220908122137888" style="zoom:50%;"><p>因此，如果你想首屏渲染的越快，就越不应该在最前面就加载 <em>JS</em> 文件，这也是都建议将 <em>script</em> 标签放在 <em>body</em> 标签底部的原因。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    ...</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>另外，在现代浏览器中，为我们提供了新的方式来避免 <em>JS</em> 代码阻塞渲染的情况：</p><ul><li><em>async</em></li><li><em>defer</em></li><li><em>prefetch</em></li><li><em>preload</em></li></ul><p>关于这几种方式的区别，我们在另外一篇文章中再具体来看。</p><p>最后总结一下此阶段的成果，第一步完成后，会得到 <em>DOM</em> 树和 <em>CSSOM</em> 树，浏览器的默认样式、内部样式、外部样式、行内样式均会包含在 <em>CSSOM</em> 树中。</p><p>得到了两棵树，如下图所示：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-043007.png" alt="image-20220908123007132" style="zoom:50%;"><h2 id="样式计算" tabindex="-1">样式计算 <a class="header-anchor" href="#样式计算" aria-label="Permalink to &quot;样式计算&quot;">​</a></h2><p>接下来进入第二步：样式计算</p><p>拥有了 <em>DOM</em> 树我们还不足以知道页面的外貌，因为我们通常会为页面的元素设置一些样式。主线程会遍历得到的 <em>DOM</em> 树，依次为树中的每个节点计算出它最终的样式，称之为 <em>Computed Style</em>。</p><p>在这一过程中，很多预设值会变成绝对值，比如 <em>red</em> 会变成 <em>rgb(255,0,0)</em>；相对单位会变成绝对单位，比如 <em>em</em> 会变成 <em>px</em>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-20-091530.png" alt="image-20211120171529844" style="zoom:50%;"><p>浏览器会确定每一个节点的样式到底是什么，并最终生成一颗样式规则树，这棵树上面记录了每一个 <em>DOM</em> 节点的样式。</p><p>另外需要注意的是，这里所指的浏览器确定每一个节点的样式，是指在样式计算时会对所有的 <em>DOM</em> 节点计算出<strong>所有的</strong>样式属性值。如果开发者在书写样式时，没有写某一项样式，那么大概率会使用其默认值。例如：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-061516.png" alt="image-20220813141516153"></p><p>关于样式计算的详细过程，请参阅文章《<em>CSS</em> 属性计算过程》。</p><p>这一步完成后，我们就得到一棵带有样式的 <em>DOM</em> 树。也就是说，经过样式计算后，之前的 <em>DOM</em> 数和 <em>CSSOM</em> 数合并成了一颗带有样式的 <em>DOM</em> 树。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-061123.png" alt="image-20220908141123262" style="zoom:50%;"><h2 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h2><p>前面这些步骤完成之后，渲染进程就已经知道页面的具体文档结构以及每个节点拥有的样式信息了，可是这些信息还是不能最终确定页面的样子。</p><p>举个例子，假如你现在想通过电话告诉你的朋友你身边的一幅画的内容：“画布上有一个红色的大圆圈和一个蓝色的正方形”，单凭这些信息你的朋友是很难知道这幅画具体是什么样子的，因为他不知道大圆圈和正方形具体在页面的什么位置，是正方形在圆圈前面呢还是圆圈在正方形的前面。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-063058.png" alt="image-20220908143057988" style="zoom:50%;"><p>渲染网页也是同样的道理，只知道网站的文档流以及每个节点的样式是远远不足以渲染出页面内容的，还需要通过布局（<em>layout</em>）来计算出每个节点的几何信息（<em>geometry</em>）。</p><p>生成布局树的具体过程是：主线程会遍历刚刚构建的 <em>DOM</em> 树，根据 <em>DOM</em> 节点的计算样式计算出一个布局树（<em>layout tree</em>）。布局树上每个节点会有它在页面上的 <em>x，y</em> 坐标以及盒子大小（<em>bounding box sizes</em>）的具体信息。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-063741.png" alt="image-20220908143740837" style="zoom:50%;"><p>布局树大部分时候，和 <em>DOM</em> 树并非一一对应。虽然它长得和先前构建的 <em>DOM</em> 树差不多，但是不同的是这颗树只有那些可见的（<em>visible</em>）节点信息。</p><p>比如 <em>display:none</em> 的节点没有几何信息，因此不会生成到布局树；</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-064042.png" alt="image-20220908144042164" style="zoom:50%;"><p>又比如使用了伪元素选择器，虽然 <em>DOM</em> 树中不存在这些伪元素节点，但它们拥有几何信息，所以会生成到布局树中。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-064105.png" alt="image-20220908144104772" style="zoom:50%;"><p>还有匿名行盒、匿名块盒等等都会导致 <em>DOM</em> 树和布局树无法一一对应。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-064945.png" alt="image-20220908144944360" style="zoom:50%;"><h2 id="分层" tabindex="-1">分层 <a class="header-anchor" href="#分层" aria-label="Permalink to &quot;分层&quot;">​</a></h2><p>在确认了布局树后，接下来就是绘制了么？</p><p>还不急，这里还会有一个步骤，就是<strong>分层</strong>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-070423.png" alt="image-20220908150422668" style="zoom:50%;"><p>分层的好处在于，将来某一个层改变后，仅会对该层进行后续处理，从而提升效率。</p><p>为了确定哪些元素需要放置在哪一层，主线程需要遍历整颗布局树来创建一棵层次树（<em>Layer Tree</em>）</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-070247.png" alt="image-20220908150246720" style="zoom:50%;"><p>滚动条、堆叠上下文、<em>transform</em>、<em>opacity</em> 等样式都会或多或少的影响分层结果，也可以通过使用 <em>will-change</em> 属性来告诉浏览器对其分层。</p><h2 id="生成绘制指令" tabindex="-1">生成绘制指令 <a class="header-anchor" href="#生成绘制指令" aria-label="Permalink to &quot;生成绘制指令&quot;">​</a></h2><p>分层工作结束后，接下来就是生成绘制指令。</p><p>主线程会为每个层单独产生绘制指令集，用于描述这一层的内容该如何画出来。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-071357.png" alt="image-20220908151357092" style="zoom:50%;"><p>这里的绘制指令，类似于“将画笔移动到 <em>xx</em> 位置，放下画笔，绘制一条 <em>xx</em> 像素长度的线”，我们在浏览器所看到的各种复杂的页面，实际上都是这样一条指令一条指令的执行所绘制出来的。</p><p>如果你熟悉 <em>Canvas</em>，那么这样的指令类似于：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beginPath</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 开始路径</span></span>
<span class="line"><span style="color:#BABED8;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">moveTo</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 移动画笔</span></span>
<span class="line"><span style="color:#BABED8;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 绘画出一条直线</span></span>
<span class="line"><span style="color:#BABED8;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closePath</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 闭合路径</span></span>
<span class="line"><span style="color:#BABED8;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 进行勾勒</span></span></code></pre></div><p>但是你要注意，这一步只是生成诸如上面代码的这种绘制指令集，还没有开始执行这些指令。</p><p>另外，还有一个重要的点你需要知道，生成绘制指令集后，渲染主线程的工程就暂时告一段落，接下来主线程将每个图层的绘制信息提交给合成线程，剩余工作将由合成线程完成。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-072311.png" alt="image-20220908152310570" style="zoom:50%;"><h2 id="分块" tabindex="-1">分块 <a class="header-anchor" href="#分块" aria-label="Permalink to &quot;分块&quot;">​</a></h2><p>合成线程首先对每个图层进行分块，将其划分为更多的小区域。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-073041.png" alt="image-20220908153040434" style="zoom:50%;"><p>此时，它不再是像主线程那样一个人在战斗，它会从线程池中拿取多个线程来完成分块工作。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-073140.png" alt="image-20220908153140082" style="zoom:50%;"><h2 id="光栅化" tabindex="-1">光栅化 <a class="header-anchor" href="#光栅化" aria-label="Permalink to &quot;光栅化&quot;">​</a></h2><p>分块完成后，进入<strong>光栅化</strong>阶段。所谓光栅化，就是将每个块变成位图。</p><p>更简单的理解就是确认每一个像素点的 <em>rgb</em> 信息，如下图所示：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-085823.png" alt="image-20220908165823172" style="zoom:50%;"><p>光栅化的操作，并不由合成线程来做，而是会由合成线程将块信息交给 <em>GPU</em> 进程，以极高的速度完成光栅化。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-090342.png" alt="image-20220908170342666" style="zoom:50%;"><p><em>GPU</em> 进程会开启多个线程来完成光栅化，并且优先处理靠近视口区域的块。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-090810.png" alt="image-20220908170809995" style="zoom:50%;"><h2 id="绘制" tabindex="-1">绘制 <a class="header-anchor" href="#绘制" aria-label="Permalink to &quot;绘制&quot;">​</a></h2><p>最后一步，我们总算迎来了真正的绘制。</p><p>当所有的图块都被栅格化后，合成线程会拿到每个层、每个块的位图，从而生成一个个「指引（quad）」信息。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-090959.png" alt="image-20220908170958873" style="zoom:50%;"><p>指引会标识出每个位图应该画到屏幕的哪个位置，以及会考虑到旋转、缩放等变形。</p><p>变形发生在合成线程，与渲染主线程无关，这就是 <em>transform</em> 效率高的本质原因。</p><p>合成线程会通过 IPC 向浏览器进程（<em>browser process</em>）提交（<em>commit</em>）一个渲染帧。这个时候可能有另外一个合成帧被浏览器进程的 <em>UI</em>线程（<em>UI thread</em>）提交以改变浏览器的 <em>UI</em>。这些合成帧都会被发送给 <em>GPU</em> 完成最终的屏幕成像。</p><p>如果合成线程收到页面滚动的事件，合成线程会构建另外一个合成帧发送给 <em>GPU</em> 来更新页面。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-091857.png" alt="image-20220908171856640" style="zoom:50%;"><p>最后总结一下浏览器从拿到 <em>html</em> 文档到最终渲染出页面的整体流程，如下图：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-092525.png" alt="image-20220908172524782" style="zoom:50%;"><h2 id="常见面试题" tabindex="-1">常见面试题 <a class="header-anchor" href="#常见面试题" aria-label="Permalink to &quot;常见面试题&quot;">​</a></h2><ol><li>什么是 <em>reflow</em>？</li></ol><blockquote><p><em>reflow</em> 的本质就是重新计算 <em>layout</em> 树。</p><p>当进行了会影响布局树的操作后，需要重新计算布局树，会引发 <em>layout</em>。</p><p>为了避免连续的多次操作导致布局树反复计算，浏览器会合并这些操作，当 <em>JS</em> 代码全部完成后再进行统一计算。所以，改动属性造成的 <em>reflow</em> 是异步完成的。</p><p>也同样因为如此，当 <em>JS</em> 获取布局属性时，就可能造成无法获取到最新的布局信息。</p><p>浏览器在反复权衡下，最终决定获取属性立即 <em>reflow</em>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-092554.png" alt="image-20220908172553393" style="zoom:50%;"></blockquote><ol start="2"><li>什么是 <em>repaint</em>？</li></ol><blockquote><p><em>repaint</em> 的本质就是重新根据分层信息计算了绘制指令。</p><p>当改动了可见样式后，就需要重新计算，会引发 <em>repaint</em>。</p><p>由于元素的布局信息也属于可见样式，所以 <em>reflow</em> 一定会引起 <em>repaint</em>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-092823.png" alt="image-20220908172822640" style="zoom:50%;"></blockquote><ol start="3"><li>为什么 <em>transform</em> 的效率高？</li></ol><blockquote><p>因为 <em>transform</em> 既不会影响布局也不会影响绘制指令，它影响的只是渲染流程的最后一个「<em>draw</em>」阶段</p><p>由于 <em>draw</em> 阶段在合成线程中，所以 <em>transform</em> 的变化几乎不会影响渲染主线程。反之，渲染主线程无论如何忙碌，也不会影响 <em>transform</em> 的变化。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-09-08-092652.png" alt="image-20220908172651862" style="zoom:50%;"></blockquote><p>-<em>EOF</em>-</p>`,123),n=[l];function t(m,c,i,r,y,g){return e(),a("div",null,n)}const F=s(o,[["render",t]]);export{D as __pageData,F as default};
