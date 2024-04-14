import{_ as s,o as a,c as l,V as n}from"./chunks/framework.bd00fe0c.js";const d=JSON.parse('{"title":"CSS 属性的计算过程","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/CSS/07. CSS属性的计算过程/CSS属性的计算过程.md","filePath":"面试复盘/CSS/07. CSS属性的计算过程/CSS属性的计算过程.md","lastUpdated":1712573589000}'),p={name:"面试复盘/CSS/07. CSS属性的计算过程/CSS属性的计算过程.md"},e=n(`<h1 id="css-属性的计算过程" tabindex="-1"><em>CSS</em> 属性的计算过程 <a class="header-anchor" href="#css-属性的计算过程" aria-label="Permalink to &quot;*CSS* 属性的计算过程&quot;">​</a></h1><h2 id="经典真题" tabindex="-1">经典真题 <a class="header-anchor" href="#经典真题" aria-label="Permalink to &quot;经典真题&quot;">​</a></h2><ul><li>请简述 <em>CSS</em> 中属性的计算过程是怎样的</li></ul><h2 id="css-属性的计算过程-1" tabindex="-1"><em>CSS</em> 属性的计算过程 <a class="header-anchor" href="#css-属性的计算过程-1" aria-label="Permalink to &quot;*CSS* 属性的计算过程&quot;">​</a></h2><p>首先，让我们从最简单的代码开始，例如：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">this is a test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面是一段很简单的代码，就一个段落，然后设置了一个颜色属性为红色。</p><p>那么，我们的这个段落真的就只有一个属性值 <em>color</em> 么？</p><p><em>no、no、no</em>，真实的情况是这个元素所有的属性都拥有，只不过有一组默认的属性值。例如：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-065854.png" alt="image-20210916145853445"></p><p>当我们打开浏览器控制台，来到 <em>Elements &gt; Computed</em> 面板，我们就会发现就算这么一个小小的 <em>p</em>，虽然我们只设置了一个 <em>color</em> 属性，但是其实它一个属性都没落下，每个属性都是有默认值。</p><p>所以这里我们要讨论一下这个属性值的计算过程是什么样子的。</p><p>总的来讲，属性值的计算方法有下面 <em>4</em> 种，这也是属性值的计算顺序：</p><ul><li>确定声明值</li><li>层叠冲突</li><li>使用继承</li><li>使用默认值</li></ul><p><strong>确定声明值</strong></p><p>当我们在样式表中对某一个元素书写样式声明时，这个声明就会被当作 <em>CSS</em> 的属性值。</p><p>举个例子：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在上面的代码中，我们没有书写任何的 <em>CSS</em> 样式，所以这个时候就采用浏览器的默认样式</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">font-size</span><span style="color:#BABED8;">: 32px;</span></span>
<span class="line"><span style="color:#FFCB6B;">font-weight</span><span style="color:#BABED8;">: 700</span></span></code></pre></div><p>假设现在我们为这个 <em>h1</em> 设置一个样式：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">font-size</span><span style="color:#BABED8;">: 20px</span></span></code></pre></div><p>这就是我们的作者样式，当作者样式和浏览器默认样式中的声明值有冲突时，会优先把作者样式中的声明值当作 <em>CSS</em> 的属性值。</p><p>而 <em>font-weight</em> 并没有和作者样式冲突，所以不受影响。</p><p><strong>层叠冲突</strong></p><p>当样式表声明值有冲突时，就会使用层叠规则来确定 <em>CSS</em> 的属性值</p><p>例如：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">h1</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>在上面的代码中，两个选择器都选中了 <em>h1</em>，并且都设置了 <em>font-size</em> 属性值，同属于作者样式，这显然就属于层叠冲突了。</p><p>当发送层叠冲突时，这时就要根据选择器的权重值来计算究竟运用哪一条作者样式。</p><p>落败的作者样式在 <em>Elements&gt;Styles</em> 中会被划掉</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-071546.png" alt="image-20210916151546500" style="zoom:40%;"><p><strong>使用继承</strong></p><p>如果该条属性作者并没有设置，那么还不会着急去使用默认值，而是会去看一下能否继承到该属性值。例如：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">this is a test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">red</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>在上面的代码中，我们虽然没有在 <em>p</em> 段落上书写 <em>color</em> 属性，但是该属性能够从 <em>div</em> 上面继承而来，所以最终计算出来的值就是 <em>red</em></p><p><strong>使用默认值</strong></p><p>最终，如果没有作者样式，该属性值也无法继承而来，则会使用浏览器的默认样式。</p><h2 id="真题解答" tabindex="-1">真题解答 <a class="header-anchor" href="#真题解答" aria-label="Permalink to &quot;真题解答&quot;">​</a></h2><ul><li>请简述 <em>CSS</em> 中属性的计算过程是怎样的</li></ul><blockquote><p>参考答案：</p><p>1.确定声明值：参考样式表中没有冲突的声明，作为 <em>CSS</em> 属性值</p><p>2.层叠冲突：对样式表有冲突的声明使用层叠规则，确定 <em>CSS</em> 属性值</p><p>3.使用继承：对仍然没有值的属性，若可以继承则继承父元素的值</p><p>4.使用默认值：对仍然没有值得属性，全部使用默认属性值</p></blockquote><p>-<em>EOF</em>-</p>`,45),o=[e];function t(c,r,i,F,D,y){return a(),l("div",null,o)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
