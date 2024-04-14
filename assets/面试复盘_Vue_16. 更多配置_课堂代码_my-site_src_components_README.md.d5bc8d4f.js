import{_ as t,o as a,c as s,V as e}from"./chunks/framework.bd00fe0c.js";const D=JSON.parse('{"title":"Avatar","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/Vue/16. 更多配置/课堂代码/my-site/src/components/README.md","filePath":"面试复盘/Vue/16. 更多配置/课堂代码/my-site/src/components/README.md","lastUpdated":1712573589000}'),l={name:"面试复盘/Vue/16. 更多配置/课堂代码/my-site/src/components/README.md"},n=e(`<h1 id="avatar" tabindex="-1">Avatar <a class="header-anchor" href="#avatar" aria-label="Permalink to &quot;Avatar&quot;">​</a></h1><img src="http://mdrs.yuanjin.tech/img/20201130153821.png" alt="image-20201130153821293" style="zoom:50%;"><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>头像图片路径</td><td>String</td><td>是</td><td>无</td></tr><tr><td>size</td><td>头像尺寸，宽高相等</td><td>Number</td><td>否</td><td>150</td></tr></tbody></table><h1 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;Icon&quot;">​</a></h1><img src="http://mdrs.yuanjin.tech/img/20201130153927.png" alt="image-20201130153927256" style="zoom:50%;"><p>图标组件</p><p>使用的图标源来自于「阿里巴巴矢量库」</p><h2 id="属性-1" tabindex="-1">属性 <a class="header-anchor" href="#属性-1" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>图标类型</td><td>String</td><td>是</td><td>无</td></tr></tbody></table><p>有效的图标类型：</p><img src="http://mdrs.yuanjin.tech/img/20201130155542.jpg" alt="iShot2020-11-30下午03.47.09" style="zoom:33%;"><h1 id="pager" tabindex="-1">Pager <a class="header-anchor" href="#pager" aria-label="Permalink to &quot;Pager&quot;">​</a></h1><img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;"><h2 id="属性-2" tabindex="-1">属性 <a class="header-anchor" href="#属性-2" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页码</td><td>Number</td><td>否</td><td>1</td></tr><tr><td>total</td><td>总数据量</td><td>Number</td><td>否</td><td>0</td></tr><tr><td>limit</td><td>页容量</td><td>Number</td><td>否</td><td>10</td></tr><tr><td>visibleNumber</td><td>可见页码数</td><td>Number</td><td>否</td><td>10</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>含义</th><th>事件参数</th><th>参数类型</th></tr></thead><tbody><tr><td>pageChange</td><td>页码变化</td><td>新的页码</td><td>Number</td></tr></tbody></table><h1 id="empty" tabindex="-1">Empty <a class="header-anchor" href="#empty" aria-label="Permalink to &quot;Empty&quot;">​</a></h1><img src="http://mdrs.yuanjin.tech/img/20201130165011.png" alt="image-20201130165011681" style="zoom:50%;"><p>该组件需要在外层容器中横向垂直居中</p><h2 id="属性-3" tabindex="-1">属性 <a class="header-anchor" href="#属性-3" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>显示的文字</td><td>String</td><td>否</td><td>&quot;无数据&quot;</td></tr></tbody></table><h1 id="imageloader" tabindex="-1">ImageLoader <a class="header-anchor" href="#imageloader" aria-label="Permalink to &quot;ImageLoader&quot;">​</a></h1><p>该组件可以实现一个渐进式图片</p><p><img src="http://mdrs.yuanjin.tech/img/20201115132049.gif" alt="alt tag"></p><h2 id="属性-4" tabindex="-1">属性 <a class="header-anchor" href="#属性-4" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>原始图片的路径</td><td>String</td><td>是</td><td>无</td></tr><tr><td>placeholder</td><td>原始图片加载完成前的占位图片</td><td>String</td><td>是</td><td>无</td></tr><tr><td>duration</td><td>原始图片加载完成后，切换到原始图经过的毫秒数</td><td>Number</td><td>否</td><td>500</td></tr></tbody></table><h2 id="事件-1" tabindex="-1">事件 <a class="header-anchor" href="#事件-1" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>含义</th><th>事件参数</th><th>参数类型</th></tr></thead><tbody><tr><td>load</td><td>原始图片加载完成后触发</td><td>无</td><td>无</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ImageLoader</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&amp;crop=entropy&amp;w=3456&amp;h=2304</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h1 id="siteaside" tabindex="-1">SiteAside <a class="header-anchor" href="#siteaside" aria-label="Permalink to &quot;SiteAside&quot;">​</a></h1><img src="http://mdrs.yuanjin.tech/img/20201130200148.png" alt="image-20201130200148681" style="zoom:33%;"><p>网站侧边栏</p><p>宽度和高度撑满外层容器</p><h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout&quot;">​</a></h1><p>使用示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Layout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#left</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      左边栏区域，宽度适应内容，溢出隐藏</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      主区域，宽度占满剩余空间，溢出隐藏</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#right</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      右边栏区域，宽度适应内容，溢出隐藏</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Layout</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><img src="http://mdrs.yuanjin.tech/img/20201202154014.png" alt="image-20201202154014492" style="zoom:40%;"><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table><thead><tr><th>插槽名</th><th>含义</th></tr></thead><tbody><tr><td>default</td><td>中间主区域</td></tr><tr><td>left</td><td>左边栏</td></tr><tr><td>right</td><td>右边栏</td></tr></tbody></table><h1 id="messagearea" tabindex="-1">MessageArea <a class="header-anchor" href="#messagearea" aria-label="Permalink to &quot;MessageArea&quot;">​</a></h1><p>消息区域组件，可用于「评论区」和「留言板」</p><p><img src="http://mdrs.yuanjin.tech/img/20210118140742.png" alt="image-20210118140742643"></p><h2 id="属性-5" tabindex="-1">属性 <a class="header-anchor" href="#属性-5" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>列表标题</td><td>String</td><td>否</td><td>&quot;&quot;</td></tr><tr><td>subTitle</td><td>列表副标题</td><td>String</td><td>否</td><td>&quot;&quot;</td></tr><tr><td>list</td><td>列表数据</td><td>Array</td><td>否</td><td>[]</td></tr><tr><td>isListLoading</td><td>列表是否正在加载中</td><td>Boolean</td><td>否</td><td>false</td></tr></tbody></table><h2 id="事件-2" tabindex="-1">事件 <a class="header-anchor" href="#事件-2" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>含义</th><th>事件参数</th><th>参数类型</th></tr></thead><tbody><tr><td>submit</td><td>用户点击提交时触发</td><td>数据对象</td><td>Object</td></tr></tbody></table><p><code>submit</code>的事件参数格式为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">nickname</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">昵称</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">内容</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,51),o=[n];function d(r,p,h,c,i,y){return a(),s("div",null,o)}const F=t(l,[["render",d]]);export{D as __pageData,F as default};
