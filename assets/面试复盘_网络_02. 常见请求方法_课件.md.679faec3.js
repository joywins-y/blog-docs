import{_ as l,o as a,c as s,V as o}from"./chunks/framework.bd00fe0c.js";const D=JSON.parse('{"title":"请求方法的本质","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/网络/02. 常见请求方法/课件.md","filePath":"面试复盘/网络/02. 常见请求方法/课件.md","lastUpdated":1712573589000}'),t={name:"面试复盘/网络/02. 常见请求方法/课件.md"},e=o(`<h1 id="请求方法的本质" tabindex="-1">请求方法的本质 <a class="header-anchor" href="#请求方法的本质" aria-label="Permalink to &quot;请求方法的本质&quot;">​</a></h1><p><strong>请求方法是请求行中的第一个单词，它向服务器描述了客户端发出请求的动作类型。在 HTTP 协议中，不同的请求方法只是包含了不同的语义，但服务器和浏览器的一些约定俗成的行为造成了它们具体的区别</strong></p><p><img src="http://mdrs.yuanjin.tech/img/20210914102745.png" alt="image-20210914102745190"></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">fetch</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.baidu.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">heiheihei</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 告诉百度，我这次请求是来嘿嘿嘿的</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>上面的请求中，我们使用了自定义方法<code>heiheihei</code>。虽然百度服务器无法理解这样的请求是在干什么，但这样的请求也是可以正常发送到百度服务器的。</p><p>在实践中，客户端和服务器慢慢的形成了一个共识，约定俗成的规定了一些常见的请求方法：</p><ul><li>GET，表示向服务器获取资源。业务数据在请求行中，无须请求体</li><li>POST，表示向服务器提交信息，通常用于产生新的数据，比如注册。业务数据在请求体中</li><li>PUT，表示希望修改服务器的数据，通常用于修改。业务数据在请求体中</li><li>DELETE，表示希望删除服务器的数据。业务数据在请求行中，无须请求体。</li><li>OPTIONS，发生在跨域的预检请求中，表示客户端向服务器申请跨域提交</li><li>TRACE，回显服务器收到的请求，主要用于测试和诊断</li><li>CONNECT，用于建立连接管道，通常在代理场景中使用，网页中很少用到</li></ul><h1 id="get-和-post-的区别" tabindex="-1">GET 和 POST 的区别 <a class="header-anchor" href="#get-和-post-的区别" aria-label="Permalink to &quot;GET 和 POST 的区别&quot;">​</a></h1><p><strong>由于浏览器和服务器约定俗称的规则</strong>，造成了 GET 和 POST 请求在 web 中的区别：</p><ol><li>浏览器在发送 GET 请求时，不会附带请求体</li><li>GET 请求的传递信息量有限，适合传递少量数据；POST 请求的传递信息量是没有限制的，适合传输大量数据。</li><li>GET 请求只能传递 ASCII 数据，遇到非 ASCII 数据需要进行编码；POST 请求没有限制</li><li>大部分 GET 请求传递的数据都附带在 path 参数中，能够通过分享地址完整的重现页面，但同时也暴露了数据，若有敏感数据传递，不应该使用 GET 请求，至少不应该放到 path 中</li><li>刷新页面时，若当前的页面是通过 POST 请求得到的，则浏览器会提示用户是否重新提交。若是 GET 请求得到的页面则没有提示。</li><li>GET 请求的地址可以被保存为浏览器书签，POST 不可以</li></ol><h1 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h1><ol><li>http 常见请求方法有哪些？</li></ol><blockquote><p>参考答案：</p><ul><li>GET，表示向服务器获取资源</li><li>POST，表示向服务器提交信息，通常用于产生新的数据，比如注册</li><li>PUT，表示希望修改服务器的数据，通常用于修改</li><li>DELETE，表示希望删除服务器的数据</li><li>OPTIONS，发生在跨域的预检请求中，表示客户端向服务器申请跨域提交</li><li>TRACE，回显服务器收到的请求，主要用于测试和诊断</li><li>CONNECT，用于建立连接管道，通常在代理场景中使用，网页中很少用到</li></ul></blockquote><ol start="2"><li>GET 和 POST 的区别（流利说）</li></ol><blockquote><p>参考答案：</p><p>从 http 协议的角度来说，GET 和 POST 它们都只是请求行中的第一个单词，除了语义不同，其实没有本质的区别。</p><p>之所以在实际开发中会产生各种区别，主要是因为浏览器的默认行为造成的。</p><p>受浏览器的影响，在实际开发中，GET 和 POST 有以下区别：</p><ol><li>浏览器在发送 GET 请求时，不会附带请求体</li><li>GET 请求的传递信息量有限，适合传递少量数据；POST 请求的传递信息量是没有限制的，适合传输大量数据。</li><li>GET 请求只能传递 ASCII 数据，遇到非 ASCII 数据需要进行编码；POST 请求没有限制</li><li>大部分 GET 请求传递的数据都附带在 path 参数中，能够通过分享地址完整的重现页面，但同时也暴露了数据，若有敏感数据传递，不应该使用 GET 请求，至少不应该放到 path 中</li><li>刷新页面时，若当前的页面是通过 POST 请求得到的，则浏览器会提示用户是否重新提交。若是 GET 请求得到的页面则没有提示。</li><li>GET 请求的地址可以被保存为浏览器书签，POST 不可以</li></ol></blockquote>`,15),i=[e];function p(n,c,r,T,E,h){return a(),s("div",null,i)}const _=l(t,[["render",p]]);export{D as __pageData,_ as default};
