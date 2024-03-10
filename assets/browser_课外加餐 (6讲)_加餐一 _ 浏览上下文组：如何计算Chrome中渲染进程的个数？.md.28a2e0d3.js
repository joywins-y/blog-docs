import{_ as s,o as a,c as o,V as n}from"./chunks/framework.bd00fe0c.js";const p="/blog-docs/assets/image.46bac5c0.png",l="/blog-docs/assets/image-1.c2d99191.png",e="/blog-docs/assets/image-2.44d3ed7c.png",t="/blog-docs/assets/image-3.e70c3049.png",r="/blog-docs/assets/image-4.c9fae9ed.png",c="/blog-docs/assets/image-5.9ec2677e.png",i="/blog-docs/assets/image-6.863054f6.png",D="/blog-docs/assets/image-7.91bc1ddc.png",A=JSON.parse('{"title":"加餐一｜浏览上下文组：如何计算 Chrome 中渲染进程的个数？","description":"","frontmatter":{},"headers":[],"relativePath":"browser/课外加餐 (6讲)/加餐一 | 浏览上下文组：如何计算Chrome中渲染进程的个数？.md","filePath":"browser/课外加餐 (6讲)/加餐一 | 浏览上下文组：如何计算Chrome中渲染进程的个数？.md","lastUpdated":1690972140000}'),F={name:"browser/课外加餐 (6讲)/加餐一 | 浏览上下文组：如何计算Chrome中渲染进程的个数？.md"},y=n('<h1 id="加餐一-浏览上下文组-如何计算-chrome-中渲染进程的个数" tabindex="-1">加餐一｜浏览上下文组：如何计算 Chrome 中渲染进程的个数？ <a class="header-anchor" href="#加餐一-浏览上下文组-如何计算-chrome-中渲染进程的个数" aria-label="Permalink to &quot;加餐一｜浏览上下文组：如何计算 Chrome 中渲染进程的个数？&quot;">​</a></h1><p><img src="'+p+'" alt="Alt text"></p><p>你好，我是李兵。 在留言区，经常有朋友问到如何计算 Chrome 中渲染进程个数的问题，那么今天我就来完整地解答这个问题。</p><p>在前面“04 | 导航流程”这一讲中我们介绍过了，在默认情况下，如果打开一个标签页，那么浏览器会默认为其创建一个渲染进程。不过我们在“04 | 导航流程”中还介绍了同一站点的概念，如果从一个标签页中打开了另一个新标签页，当新标签页和当前标签页属于同一站点的话，那么新标签页会复用当前标签页的渲染进程。</p><p>具体地讲，如果我从极客邦 (www.geekbang.org) 的标签页中打开新的极客时间 (time.geekbang.org) 标签页，由于这两个标签页属于同一站点 (相同协议、相同根域名)，所以他们会共用同一个渲染进程。你可以看下面这张 Chrome 的任务管理器截图：</p><p><img src="'+l+'" alt="多个标签页运行在同一个渲染进程" title="多个标签页运行在同一个渲染进程"></p><div style="text-align:center;font-size:12px;color:#999;margin-bottom:8px;">多个标签页运行在同一个渲染进程</div><p>观察上图，我们可以看到，极客邦官网和极客时间标签页都共用同一个渲染进程，该进程 ID 是 84748。</p><p>不过如果我们分别打开这两个标签页，比如先打开极客邦的标签页，然后再新建一个标签页，再在这个新标签页中打开极客时间，这时候我们可以看到这两个标签页分别使用了两个不同的渲染进程。你可以参看下图：</p><p><img src="'+e+'" alt="多个标签页运行在不同的渲染进程中" title="多个标签页运行在不同的渲染进程中"></p><div style="text-align:center;font-size:12px;color:#999;margin-bottom:8px;">多个标签页运行在不同的渲染进程中</div><p>那么到了这里，你一定会很好奇，既然都是同一站点，为什么从 A 标签页中打开 B 标签页，就会使用同一个渲染进程，而分别打开这两个标签页，又会分别使用不同的渲染进程？</p><h2 id="标签页之间的连接" tabindex="-1">标签页之间的连接 <a class="header-anchor" href="#标签页之间的连接" aria-label="Permalink to &quot;标签页之间的连接&quot;">​</a></h2><p>要搞清楚这个问题，我们要先来分析下浏览器标签页之间的连接关系。</p><p>我们知道，浏览器标签页之间是可以通过 JavaScript 脚本来连接的，通常情况下有如下几种连接方式：</p><p><strong>第一种是通过<code>&lt;a&gt;</code>标签来和新标签建立连接</strong>，这种方式我们最熟悉，比如下面这行代码是从极客邦标签页里面拷贝过来的：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://time.geekbang.org/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">极客时间</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这是从极客邦官网中打开极客时间的链接，点击该链接会打开新的极客时间标签页，新标签页中的 window.opener 的值就是指向极客邦标签页中的 window，这样就可以在新的极客时间标签页中通过 opener 来操作上个极客邦的标签页了。这样我们可以说，这两个标签页是有连接的。</p><p>另外，<strong>还可以通过 JavaScript 中的 window.open 方法来和新标签页建立连接</strong>，演示代码如下所示：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">new_window </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://time.geekbang.org</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>通过上面这种方式，可以在当前标签页中通过 new_window 来控制新标签页，还可以在新标签页中通过 window.opener 来控制当前标签页。所以我们也可以说，如果从 A 标签页中通过 window.open 的方式打开 B 标签页，那么 A 和 B 标签页也是有连接的。</p><p>其实通过上述两种方式打开的新标签页，不论这两个标签页是否属于同一站点，他们之间都能通过 opener 来建立连接，所以他们之间是有联系的。在 WhatWG 规范中，把这一类具有相互连接关系的标签页称为<strong>浏览上下文组 ( browsing context group)</strong>。</p><p>既然提到浏览上下文组，就有必要提下浏览上下文，通常情况下，我们把一个标签页所包含的内容，诸如 window 对象，历史记录，滚动条位置等信息称为浏览上下文。这些通过脚本相互连接起来的浏览上下文就是浏览上下文组。如果你有兴趣，可以参考下规范文档。</p><p>也就是说，如果在极客邦的标签页中，通过链接打开了多个新的标签页，不管这几个新的标签页是否是同一站点，他们都和极客邦的标签页构成了浏览上下文组，因为这些标签页中的 opener 都指向了极客邦标签页。</p><p><strong>Chrome 浏览器会将浏览上下文组中属于同一站点的标签分配到同一个渲染进程中</strong>，这是因为如果一组标签页，既在同一个浏览上下文组中，又属于同一站点，那么它们可能需要在对方的标签页中执行脚本。因此，它们必须运行在同一渲染进程中。</p><p>现在我们清楚了浏览器是怎么分配渲染进程的了，接下来我们就可以来分析文章开头提的那个问题了：</p><blockquote><p>既然都是同一站点，为什么从 A 标签页中打开 B 标签页，就会使用同一个渲染进程？ 而分别打开这两个标签页，又会分别使用不同的渲染进程？</p></blockquote><p>首先来看第一种，在极客邦标签页内部通过链接打开极客时间标签页，那么极客时间标签页和极客邦标签页属于同一个浏览上下文组，且它们属于同一站点，所以浏览器会将它们分配到同一个渲染进程之中。</p><p>而第二种情况就简单多了，因为第二个标签页中并没有第一个标签页中的任何信息，第一个标签页也不包含任何第二个标签页中的信息，所以他们不属于同一个浏览上下文组，因此即便他们属于同一站点，也不会运行在同一个渲染进程之中。下面是我画的计算标签页的流程图，你可以参考下：</p><p><img src="'+t+'" alt="计算标签页使用的渲染进程数目" title="计算标签页使用的渲染进程数目"></p><div style="text-align:center;font-size:12px;color:#999;margin-bottom:8px;">计算标签页使用的渲染进程数目</div><h2 id="一个-例外" tabindex="-1">一个“例外” <a class="header-anchor" href="#一个-例外" aria-label="Permalink to &quot;一个“例外”&quot;">​</a></h2><p>好了，现在我们清楚了 Chrome 浏览器为标签页分配渲染进程的策略了：</p><ol><li><p><strong>如果两个标签页都位于同一个浏览上下文组，且属于同一站点，那么这两个标签页会被浏览器分配到同一个渲染进程中。</strong><br></p></li><li><p><strong>如果这两个条件不能同时满足，那么这两个标签页会分别使用不同的渲染进程来渲染。</strong></p></li></ol><p>现在你可以想一下，如果从 A 标签页中打开 B 标签页，那我们能肯定 A 标签页和 B 标签页属于同一浏览上下文组吗？</p><p>答案是“不能”，下面我们就来看个例子，在“04 | 导航流程”的留言区中，ID 为“芳华年月”的朋友就提出了这样的一个问题：</p><blockquote><p>请问老师，<a href="https://linkmarket.aliyun.com" target="_blank" rel="noreferrer">https://linkmarket.aliyun.com</a> 内新开的标签页都是新开一个渲染进程，能帮忙解释下吗?</p></blockquote><p>我们先来复现下“芳华年月”所描述的现象，首先打开 linkmarket.aliyun.com 这个标签页，再在这个标签页中随便点击两个链接，然后就打开了两个新的标签页了，如下图所示：</p><p><img src="'+r+'" alt="“例外”情况" title="“例外”情况"></p><div style="text-align:center;font-size:12px;color:#999;margin-bottom:8px;">“例外”情况</div><p>我通过 A 标签页中的链接打开了两个新标签页，B 和 C，而且我们也可以看出来，A、B、C 三个标签页都属于同一站点，正常情况下，它们应该共用同一个渲染进程，不过通过上图我们可以看出来，A、B、C 三个标签页分别使用了三个不同的渲染进程。</p><p>既然属于同一站点，又不在同一个渲染进程中，所以可以推断这三个标签页不属于同一个浏览上下文组，那么我们接下来的分析思路就很清晰了：</p><ol><li><p>首先验证这三个标签页是不是真的不在同一个浏览上下文组中；</p></li><li><p>然后再分析它们为什么不在同一浏览上下文组。</p></li></ol><p>为了验证猜测，我们可以通过控制台，来看看 B 标签页和 C 标签标签页的 opener 的值，结果发现这两个标签页中的 opener 的值都是 null，这就确定了 B、C 标签页和 A 标签页没有连接关系，当然也就不属于同一浏览上下文组了。</p><p>验证了猜测，接下来的我们就是来查查，阿里的这个站点是不是采用了什么特别的手段，移除了这两个标签页之间的连接关系。</p><p>我们可以看看实现链接的 HTML 文件，如下图所示：</p><p><img src="'+c+`" alt="链接使用了 rel = noopener" title="链接使用了 rel = noopener"></p><div style="text-align:center;font-size:12px;color:#999;margin-bottom:8px;">链接使用了 rel = noopener</div><p>通过上图，我们可以发现，a 链接的 rel 属性值都使用了 noopener 和 noreferrer，通过 noopener，我们能猜测得到这两个值是让被链接的标签页和当前标签页不要产生连接关系。</p><p>通常，将 noopener 的值引入 rel 属性中，就是告诉浏览器通过这个链接打开的标签页中的 opener 值设置为 null，引入 noreferrer 是告诉浏览器，新打开的标签页不要有引用关系。</p><p>好了，到了这里我们就知道了，通过 linkmarket.aliyun.com 标签页打开新的标签页要使用单独的一个进程，是因为使用了 rel= noopener 的属性，所以新打开的标签页和现在的标签页就没有了引用关系，当然它们也就不属于同一浏览上下文组了。这也同时解答了“芳华年月”所提出的问题。</p><h2 id="站点隔离" tabindex="-1">站点隔离 <a class="header-anchor" href="#站点隔离" aria-label="Permalink to &quot;站点隔离&quot;">​</a></h2><p>上面我们都是基于标签页来分析渲染进程的，不过我在“35 ｜安全沙箱”中介绍过了，目前 Chrome 浏览器已经默认实现了站点隔离的功能，这意味着标签页中的 iframe 也会遵守同一站点的分配原则，如果标签页中的 iframe 和标签页是同一站点，并且有连接关系，那么标签页依然会和当前标签页运行在同一个渲染进程中，如果 iframe 和标签页不属于同一站点，那么 iframe 会运行在单独的渲染进程中。</p><p>我们先来看下面这个具体的例子吧：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">站点隔离:demo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">iframe</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">800px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">iframe</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iframe.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">iframe</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">iframe</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.infoq.cn/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">iframe</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">iframe</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://time.geekbang.org/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">iframe</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">iframe</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.geekbang.org/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">iframe</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在 Chrome 浏览器中打开上面这个标签页，然后观察 Chrome 的任务管理，我们会发现这个标签页使用了四个渲染进程，如下图所示：</p><p><img src="`+i+'" alt="iframe 使用单独的渲染进程" title="iframe 使用单独的渲染进程"></p><div style="text-align:center;font-size:12px;color:#999;margin-bottom:8px;">iframe 使用单独的渲染进程</div><p>结合上图和 HTML 代码，我们可以发现，由于 InfoQ、极客邦两个 iframe 与父标签页不属于同一站点，所以它们会被分配到不同的渲染进程中，而 iframe.html 和源标签页属于同一站点，所以它会和源标签页运行在同一个渲染进程中。下面是我画的计算 iframe 使用渲染进程数目的流程图，你可以对照着参考下：</p><p><img src="'+D+'" alt="计算 iframe 所使用的渲染进程数目" title="计算 iframe 所使用的渲染进程数目"></p><div style="text-align:center;font-size:12px;color:#999;margin-bottom:8px;">计算 iframe 所使用的渲染进程数目</div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>好了，本节的内容就介绍到这里，下面我来总结下本文的主要内容：</p><p>首先我们使用了两种不同的方式打开两个标签页，第一种是从 A 标签页中通过链接打开了 B 标签页，第二种是分别打开 A 和 B 标签页，这两种情况下的 A 和 B 都属于同一站点。</p><p>通过 Chrome 的任务管理器我们发现，虽然 A 标签页和 B 标签页都属于同一站点，不过通过第一种方式打开的 A 标签页和 B 标签页会共用同一个渲染进程，而通过第二种方式打开的两个标签页却分别使用了两个不同的渲染进程。</p><p>这是因为，使用同一个渲染进程需要满足两个条件：首先 A 标签页和 B 标签页属于同一站点，其次 A 标签页和 B 标签页需要有连接关系。</p><p>接着，我们分析了一个“例外”，如果在链接中加入了 rel=noopener 属性，那么通过链接打开的新标签页和源标签页之间就不会建立连接关系了。</p><p>最后我们还分析了站点隔离对渲染进程个数的影响，如果 A 标签页中的 iframe 和 A 标签页属于同一站点，那么该 iframe 和 A 标签页会共用同一个渲染进程，如果不是，则该 iframe 会使用单独的渲染进程。</p><p>好了，到了这里相信你已经会计算渲染进程的个数了。</p><p>在最后我们还要补充下同源策略对同一站点的限制，虽然 Chrome 会让有连接且属于同一站点的标签页运行在同一个渲染进程中，不过如果 A 标签页和 B 标签页属于同一站点，却不属于同源站点，那么你依然无法通过 opener 来操作父标签页中的 DOM，这依然会受到同源策略的限制。</p><p>简单地讲，极客邦和极客时间属于同一站点，但是他们并不是同源的，因为同源是需要相同域名的，虽然根域名 geekbang.org 相同，但是域名却是不相同的，一个是 time.geekbang.org，一个是 www.geekbang.org， 因此浏览器判断它们不是同源的，所以依然无法通过 time.geekbang.org 标签页中的 opener 来操作 www.geekbang.org 中的 DOM。</p><h2 id="思考题" tabindex="-1">思考题 <a class="header-anchor" href="#思考题" aria-label="Permalink to &quot;思考题&quot;">​</a></h2><p>那么今天留给你的思考题是，你认为 Chrome 为什么使用同一站点划分渲染进程，而不是使用同源策略来划分渲染进程？</p>',73),g=[y];function m(d,h,_,B,b,f){return a(),o("div",null,g)}const C=s(F,[["render",m]]);export{A as __pageData,C as default};
