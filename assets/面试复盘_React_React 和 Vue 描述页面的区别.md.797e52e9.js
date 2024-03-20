import{_ as s,o as a,c as n,V as l}from"./chunks/framework.bd00fe0c.js";const E=JSON.parse('{"title":"React 和 Vue 描述页面的区别","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/React/React 和 Vue 描述页面的区别.md","filePath":"面试复盘/React/React 和 Vue 描述页面的区别.md","lastUpdated":1710918713000}'),p={name:"面试复盘/React/React 和 Vue 描述页面的区别.md"},o=l(`<h1 id="react-和-vue-描述页面的区别" tabindex="-1">React 和 Vue 描述页面的区别 <a class="header-anchor" href="#react-和-vue-描述页面的区别" aria-label="Permalink to &quot;React 和 Vue 描述页面的区别&quot;">​</a></h1><blockquote><p>面试题：React 和 Vue 是如何描述 UI 界面的？有一些什么样的区别？</p></blockquote><p><strong>标准且浅显的回答：</strong></p><blockquote><p>React 中使用的是 JSX，Vue 中使用的是模板来描述界面</p></blockquote><p>前端领域经过长期的发展，目前有两种主流的描述 UI 的方案：</p><ul><li>JSX</li><li>模板</li></ul><h2 id="jsx-历史来源" tabindex="-1">JSX 历史来源 <a class="header-anchor" href="#jsx-历史来源" aria-label="Permalink to &quot;JSX 历史来源&quot;">​</a></h2><p>JSX 最早起源于 React 团队在 React 中所提供的一种类似于 XML 的 ES 语法糖：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><p>经过 Babel 编译之后，就会变成：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// React v17 之前</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// React v17 之后</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> jsxRuntime </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react/jsx-runtime</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> jsxRuntime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">jsx</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>无论是 17 之前还是 17 之后，执行了代码后会得到一个对象：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ref</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">props</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_owner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_store</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这个其实就是大名鼎鼎的虚拟 DOM。</p><p>React 团队认为，UI 本质上和逻辑是有耦合部分的：</p><ul><li>在 UI 上面绑定事件</li><li>数据变化后通过 JS 去改变 UI 的样式或者结构</li></ul><p>作为一个前端工程师，JS 是用得最多，所以 React 团队思考屏蔽 HTML，整个都用 JS 来描述 UI，因为这样做的话，可以让 UI 和逻辑配合得更加紧密，所以最终设计出来了类 XML 形式的 JS 语法糖</p><p>由于 JSX 是 JS 的语法糖（本质上就是 JS），因此可以非常灵活的和 JS 语法组合使用，例如：</p><ul><li>可以在 if 或者 for 当中使用 jsx</li><li>可以将 jsx 赋值给变量</li><li>可以将 jsx 当作参数来传递，当然也可以在一个函数中返回一段 jsx</li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">({</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">isLoading</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">})</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">isLoading</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">loading...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Hello World</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这种灵活性就使得 jsx 可以轻松的描述复杂的 UI，如果和逻辑配合，还可以描述出复杂 UI 的变化。</p><p>使得 React 社区的早期用户可以快速实现各种复杂的基础库，丰富社区生态。又由于生态的丰富，慢慢吸引了更多的人来参与社区的建设，从而源源不断的形成了一个正反馈。</p><h2 id="模板的历史来源" tabindex="-1">模板的历史来源 <a class="header-anchor" href="#模板的历史来源" aria-label="Permalink to &quot;模板的历史来源&quot;">​</a></h2><p>模板的历史就要从后端说起。</p><p>在早期前后端未分离的时候，最流行的方案就是使用模板引擎，模板引擎可以看作是在正常的 HTML 上面进行挖坑（不同的模板引擎语法不一样），挖了坑之后，服务器端会将数据填充到挖了坑的模板里面，生成对应的 html 页面返回给客户端。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-03-060632.png" alt="image-20211103140631869" style="zoom:50%;"><p>所以在那个时期前端人员的工作，主要是 html、css 和一些简单的 js 特效（轮播图、百叶窗...），写好的 html 是不能直接用的，需要和后端确定用的是哪一个模板引擎，接下来将自己写好的 html 按照对应模板引擎的语法进行挖坑</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-03-063319.png" alt="image-20211103143319523" style="zoom:50%;"><p>不同的后端技术对应的有不同的模板引擎，甚至同一种后端技术，也会对应很多种模板引擎，例如：</p><ul><li><em>Java</em>（<em>JSP、Thymeleaf、Velocity、Freemarker</em>）</li><li><em>PHP</em>（<em>Smarty、Twig、HAML、Liquid、Mustache、Plates</em>）</li><li><em>Python</em>（<em>pyTenjin、Tornado.template、PyJade、Mako、Jinja2</em>）</li><li><em>node.js</em>（<em>Jade、Ejs、art-template、handlebars、mustache、swig、doT</em>）</li></ul><p>下面列举几个模板引擎代码片段</p><p>twig 模板引擎</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">基本语法</span></span>
<span class="line"><span style="color:#89DDFF;">{%</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> user in users </span><span style="color:#89DDFF;">%}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#BABED8;"> user</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">{%</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">%}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">No</span><span style="color:#BABED8;"> users have been found</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;">{%</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">endfor</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">%}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">指定布局文件</span></span>
<span class="line"><span style="color:#89DDFF;">{%</span><span style="color:#BABED8;"> extends </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">layout.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">%}</span></span>
<span class="line"><span style="color:#BABED8;">定义展示块</span></span>
<span class="line"><span style="color:#89DDFF;">{%</span><span style="color:#BABED8;"> block content </span><span style="color:#89DDFF;">%}</span></span>
<span class="line"><span style="color:#BABED8;">    Content of the page</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">{%</span><span style="color:#BABED8;"> endblock </span><span style="color:#89DDFF;">%}</span></span></code></pre></div><p>blade 模板引擎</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">应用程序名称 </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)&lt;/</span><span style="color:#BABED8;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#BABED8;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">       </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">section</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sidebar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">            这是 master 的侧边栏。</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">@</span><span style="color:#BABED8;">show</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">div </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#BABED8;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#BABED8;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#BABED8;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>EJS 模板引擎</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;%=title %&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;% for (var i=0; i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">supplies.length;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">i++)</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">{</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">%</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">supplies/&lt;%=supplies[i] %&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            &lt;%= supplies[i] %&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;% } %&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这些模板引擎对应的模板语法就和 Vue 里面的模板非常的相似。</p><p>现在随着前后端分离开发的流行，已经没有再用模板引擎的模式了，后端开发人员只需要书写数据接口即可。但是如果让一个后端人员来开前端的代码，那么 Vue 的模板语法很明显对于后端开发人员来讲要更加亲切一些。</p><p>最后我们做一个总结，虽然现在前端存在两种方式：JSX 和模板的形式都可以描述 UI，但是出发点是不同</p><p>模板语法的出发点是，既然前端框架使用 HTML 来描述 UI，那么我们就扩展 HTML，让 HTML 种能够描述一定程度的逻辑，也就是“从 UI 出发，扩展 UI，在 UI 中能够描述逻辑”。</p><p>JSX 的出发点，既然前端使用 JS 来描述逻辑，那么就扩展 JS，让 JS 也能描述 UI，也就是“从逻辑出发，扩展逻辑，描述 UI”。</p><p>这两者虽然都可以描述 UI，但是思路或者说方向是完全不同的，从而造成了整体框架架构上面也是不一样的。</p><h2 id="真题解答" tabindex="-1">真题解答 <a class="header-anchor" href="#真题解答" aria-label="Permalink to &quot;真题解答&quot;">​</a></h2><blockquote><p>题目：React 和 Vue 是如何描述 UI 界面的？有一些什么样的区别？</p><p>参考答案</p><p>在 React 中，使用 JSX 来描述 UI。因为 React 团队认为 UI 本质上与逻辑存在耦合的部分，作为前端工程师，JS 是用的最多的，如果同样使用 JS 来描述 UI，就可以让 UI 和逻辑配合的更密切。</p><p>使用 JS 来描述页面，可以更加灵活，主要体现在：</p><ul><li>可以在 if 语句和 for 循环中使用 JSX</li><li>可以将 JSX 赋值给变量</li><li>可以把 JSX 当作参数传入，以及在函数中返回 JSX</li></ul><p>而模板语言的历史则需要从后端说起。早期在前后端未分离时代，后端有各种各样的模板引擎，其本质是扩展了 HTML，在 HTML 中加入逻辑相关的语法，之后在动态的填充数据进去。如果单看 Vue 中的模板语法，实际上和后端语言中的各种模板引擎是非常相似的。</p><p>总结起来就是：</p><p>模板语法的出发点是，既然前端框架使用 HTML 来描述 UI，那么就扩展 HTML 语法，使它能够描述逻辑，也就是“从 UI 出发，扩展 UI，在 UI 中能够描述逻辑”。</p><p>而 JSX 的出发点是，既然前端使用 JS 来描述逻辑，那么就扩展 JS 语法，让它能够描述 UI，也就是“从逻辑出发，扩展逻辑，描述 UI”。</p><p>虽然这两者都达到了同样的目的，但是对框架的实现产生了不同的影响。</p></blockquote>`,45),e=[o];function t(c,D,r,F,y,i){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{E as __pageData,u as default};
