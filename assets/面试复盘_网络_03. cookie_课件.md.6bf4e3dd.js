import{_ as o,o as e,c as s,V as a}from"./chunks/framework.bd00fe0c.js";const g=JSON.parse('{"title":"一个不大不小的问题","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/网络/03. cookie/课件.md","filePath":"面试复盘/网络/03. cookie/课件.md","lastUpdated":1712573589000}'),l={name:"面试复盘/网络/03. cookie/课件.md"},p=a(`<h1 id="一个不大不小的问题" tabindex="-1">一个不大不小的问题 <a class="header-anchor" href="#一个不大不小的问题" aria-label="Permalink to &quot;一个不大不小的问题&quot;">​</a></h1><p>假设服务器有一个接口，通过请求这个接口，可以添加一个管理员</p><p>但是，不是任何人都有权力做这种操作的</p><p>那么服务器如何知道请求接口的人是有权力的呢？</p><p>答案是：只有登录过的管理员才能做这种操作</p><p>可问题是，客户端和服务器的传输使用的是http协议，http协议是无状态的，什么叫无状态，就是<strong>服务器不知道这一次请求的人，跟之前登录请求成功的人是不是同一个人</strong></p><p><img src="http://mdrs.yuanjin.tech/img/image-20200417161014030.png" alt="img"></p><p><img src="http://mdrs.yuanjin.tech/img/image-20200417161244373.png" alt="img"></p><p>由于http协议的无状态，服务器<strong>忘记</strong>了之前的所有请求，它无法确定这一次请求的客户端，就是之前登录成功的那个客户端。</p><blockquote><p>你可以把服务器想象成有着严重脸盲症的东哥，他没有办法分清楚跟他说话的人之前做过什么</p></blockquote><p>于是，服务器想了一个办法</p><p>它按照下面的流程来认证客户端的身份</p><ol><li>客户端登录成功后，服务器会给客户端一个出入证</li><li>后续客户端的每次请求，都必须要附带这个出入证</li></ol><p><img src="http://mdrs.yuanjin.tech/img/image-20200417161950450.png" alt="img"></p><p>服务器发扬了认证不认人的优良传统，就可以很轻松的识别身份了。</p><p>但是，用户不可能只在一个网站登录，于是客户端会收到来自各个网站的出入证，因此，就要求客户端要有一个类似于卡包的东西，能够具备下面的功能：</p><ol><li><strong>能够存放多个出入证</strong>。这些出入证来自不同的网站，也可能是一个网站有多个出入证，分别用于出入不同的地方</li><li><strong>能够自动出示出入证</strong>。客户端在访问不同的网站时，能够自动的把对应的出入证附带请求发送出去。</li><li><strong>正确的出示出入证</strong>。客户端不能将肯德基的出入证发送给麦当劳。</li><li><strong>管理出入证的有效期</strong>。客户端要能够自动的发现那些已经过期的出入证，并把它从卡包内移除。</li></ol><p>能够满足上面所有要求的，就是cookie</p><p>cookie类似于一个卡包，专门用于存放各种出入证，并有着一套机制来自动管理这些证件。</p><p>卡包内的每一张卡片，称之为<strong>一个cookie</strong>。</p><h1 id="cookie的组成" tabindex="-1">cookie的组成 <a class="header-anchor" href="#cookie的组成" aria-label="Permalink to &quot;cookie的组成&quot;">​</a></h1><p>cookie是浏览器中特有的一个概念，它就像浏览器的专属卡包，管理着各个网站的身份信息。</p><p>每个cookie就相当于是属于某个网站的一个卡片，它记录了下面的信息：</p><ul><li>key：键，比如「身份编号」</li><li>value：值，比如袁小进的身份编号「14563D1550F2F76D69ECBF4DD54ABC95」，这有点像卡片的条形码，当然，它可以是任何信息</li><li>domain：域，表达这个cookie是属于哪个网站的，比如<code>yuanjin.tech</code>，表示这个cookie是属于<code>yuanjin.tech</code>这个网站的</li><li>path：路径，表达这个cookie是属于该网站的哪个基路径的，就好比是同一家公司不同部门会颁发不同的出入证。比如<code>/news</code>，表示这个cookie属于<code>/news</code>这个路径的。（后续详细解释）</li><li>secure：是否使用安全传输（后续详细解释）</li><li>expire：过期时间，表示该cookie在什么时候过期</li></ul><p>当浏览器向服务器发送一个请求的时候，它会瞄一眼自己的卡包，看看哪些卡片适合附带捎给服务器</p><p>如果一个cookie<strong>同时满足</strong>以下条件，则这个cookie会被附带到请求中</p><ul><li>cookie没有过期</li><li>cookie中的域和这次请求的域是匹配的 <ul><li>比如cookie中的域是<code>yuanjin.tech</code>，则可以匹配的请求域是<code>yuanjin.tech</code>、<code>www.yuanjin.tech</code>、<code>blogs.yuanjin.tech</code>等等</li><li>比如cookie中的域是<code>www.yuanjin.tech</code>，则只能匹配<code>www.yuanjin.tech</code>这样的请求域</li><li>cookie是不在乎端口的，只要域匹配即可</li></ul></li><li>cookie中的path和这次请求的path是匹配的 <ul><li>比如cookie中的path是<code>/news</code>，则可以匹配的请求路径可以是<code>/news</code>、<code>/news/detail</code>、<code>/news/a/b/c</code>等等，但不能匹配<code>/blogs</code></li><li>如果cookie的path是<code>/</code>，可以想象，能够匹配所有的路径</li></ul></li><li>验证cookie的安全传输 <ul><li>如果cookie的secure属性是true，则请求协议必须是<code>https</code>，否则不会发送该cookie</li><li>如果cookie的secure属性是false，则请求协议可以是<code>http</code>，也可以是<code>https</code></li></ul></li></ul><p>如果一个cookie满足了上述的所有条件，则浏览器会把它自动加入到这次请求中</p><p>具体加入的方式是，<strong>浏览器会将符合条件的cookie，自动放置到请求头中</strong>，例如，当我在浏览器中访问百度的时候，它在请求头中附带了下面的cookie：</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200417170328584.png" alt="img"></p><p>看到打马赛克的地方了吗？这部分就是通过请求头<code>cookie</code>发送到服务器的，它的格式是<code>键=值; 键=值; 键=值; ...</code>，每一个键值对就是一个符合条件的cookie。</p><p>**cookie中包含了重要的身份信息，永远不要把你的cookie泄露给别人！！！**否则，他人就拿到了你的证件，有了证件，就具备了为所欲为的可能性。</p><h1 id="如何设置cookie" tabindex="-1">如何设置cookie <a class="header-anchor" href="#如何设置cookie" aria-label="Permalink to &quot;如何设置cookie&quot;">​</a></h1><p>由于cookie是保存在浏览器端的，同时，很多证件又是服务器颁发的</p><p>所以，cookie的设置有两种模式：</p><ul><li>服务器响应：这种模式是非常普遍的，当服务器决定给客户端颁发一个证件时，它会在响应的消息中包含cookie，浏览器会自动的把cookie保存到卡包中</li><li>客户端自行设置：这种模式少见一些，不过也有可能会发生，比如用户关闭了某个广告，并选择了「以后不要再弹出」，此时就可以把这种小信息直接通过浏览器的JS代码保存到cookie中。后续请求服务器时，服务器会看到客户端不想要再次弹出广告的cookie，于是就不会再发送广告过来了。</li></ul><h2 id="服务器端设置cookie" tabindex="-1">服务器端设置cookie <a class="header-anchor" href="#服务器端设置cookie" aria-label="Permalink to &quot;服务器端设置cookie&quot;">​</a></h2><p>服务器可以通过设置响应头，来告诉浏览器应该如何设置cookie</p><p>响应头按照下面的格式设置：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">set-cookie</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cookie1</span></span>
<span class="line"><span style="color:#F07178;">set-cookie</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cookie2</span></span>
<span class="line"><span style="color:#F07178;">set-cookie</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cookie3</span></span>
<span class="line"><span style="color:#FFCB6B;">...</span></span></code></pre></div><p>通过这种模式，就可以在一次响应中设置多个cookie了，具体设置多少个cookie，设置什么cookie，根据你的需要自行处理</p><p>其中，每个cookie的格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">键=值; path=?; domain=?; expire=?; max-age=?; secure; httponly</span></span></code></pre></div><p>每个cookie除了键值对是必须要设置的，其他的属性都是可选的，并且顺序不限</p><p>当这样的响应头到达客户端后，<strong>浏览器会自动的将cookie保存到卡包中，如果卡包中已经存在一模一样的卡片（其他path、domain相同），则会自动的覆盖之前的设置</strong>。</p><p>下面，依次说明每个属性值：</p><ul><li><p><strong>path</strong>：设置cookie的路径。如果不设置，浏览器会将其自动设置为当前请求的路径。比如，浏览器请求的地址是<code>/login</code>，服务器响应了一个<code>set-cookie: a=1</code>，浏览器会将该cookie的path设置为请求的路径<code>/login</code></p></li><li><p><strong>domain</strong>：设置cookie的域。如果不设置，浏览器会自动将其设置为当前的请求域，比如，浏览器请求的地址是</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">http://www.yuanjin.tech</span></span></code></pre></div><p>，服务器响应了一个</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">set-cookie: a=1</span></span></code></pre></div><p>，浏览器会将该cookie的domain设置为请求的域</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">www.yuanjin.tech</span></span></code></pre></div><ul><li>这里值得注意的是，如果服务器响应了一个无效的域，浏览器是不认的</li><li>什么是无效的域？就是响应的域连根域都不一样。比如，浏览器请求的域是<code>yuanjin.tech</code>，服务器响应的cookie是<code>set-cookie: a=1; domain=baidu.com</code>，这样的域浏览器是不认的。</li><li>如果浏览器连这样的情况都允许，就意味着张三的服务器，有权利给用户一个cookie，用于访问李四的服务器，这会造成很多安全性的问题</li></ul></li><li><p><strong>expire</strong>：设置cookie的过期时间。这里必须是一个有效的GMT时间，即格林威治标准时间字符串，比如<code>Fri, 17 Apr 2020 09:35:59 GMT</code>，表示格林威治时间的<code>2020-04-17 09:35:59</code>，即北京时间的<code>2020-04-17 17:35:59</code>。当客户端的时间达到这个时间点后，会自动销毁该cookie。</p></li><li><p><strong>max-age</strong>：设置cookie的相对有效期。expire和max-age通常仅设置一个即可。比如设置<code>max-age</code>为<code>1000</code>，浏览器在添加cookie时，会自动设置它的<code>expire</code>为当前时间加上1000秒，作为过期时间。</p><ul><li>如果不设置expire，又没有设置max-age，则表示会话结束后过期。</li><li>对于大部分浏览器而言，关闭所有浏览器窗口意味着会话结束。</li></ul></li><li><p><strong>secure</strong>：设置cookie是否是安全连接。如果设置了该值，则表示该cookie后续只能随着<code>https</code>请求发送。如果不设置，则表示该cookie会随着所有请求发送。</p></li><li><p><strong>httponly</strong>：设置cookie是否仅能用于传输。如果设置了该值，表示该cookie仅能用于传输，而不允许在客户端通过JS获取，这对防止跨站脚本攻击（XSS）会很有用。</p><ul><li>关于如何通过JS获取，后续会讲解</li></ul></li><li><p>关于什么是XSS，不在本文讨论范围</p></li></ul><p>下面来一个例子，客户端通过<code>post</code>请求服务器<code>http://yuanjin.tech/login</code>，并在消息体中给予了账号和密码，服务器验证登录成功后，在响应头中加入了以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">set-cookie: token=123456; path=/; max-age=3600; httponly</span></span></code></pre></div><p>当该响应到达浏览器后，浏览器会创建下面的cookie：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">token</span></span>
<span class="line"><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#F07178;">domain</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">yuanjin.tech</span></span>
<span class="line"><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#F07178;">expire</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> 2020-04-17 18:55:00 </span><span style="color:#676E95;font-style:italic;">#假设当前时间是2020-04-17 17:55:00</span></span>
<span class="line"><span style="color:#F07178;">secure</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#任何请求都可以附带这个cookie，只要满足其他要求</span></span>
<span class="line"><span style="color:#F07178;">httponly</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#不允许JS获取该cookie</span></span></code></pre></div><p>于是，随着浏览器后续对服务器的请求，只要满足要求，这个cookie就会被附带到请求头中传给服务器：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">cookie</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">token=123456; 其他cookie...</span></span></code></pre></div><p>现在，还剩下最后一个问题，就是如何删除浏览器的一个cookie呢？</p><p>如果要删除浏览器的cookie，只需要让服务器响应一个同样的域、同样的路径、同样的key，只是时间过期的cookie即可</p><p><strong>所以，删除cookie其实就是修改cookie</strong></p><p>下面的响应会让浏览器删除<code>token</code></p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">set-cookie</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">token=; domain=yuanjin.tech; path=/; max-age=-1</span></span></code></pre></div><p>浏览器按照要求修改了cookie后，会发现cookie已经过期，于是自然就会删除了。</p><blockquote><p>无论是修改还是删除，都要注意cookie的域和路径，因为完全可能存在域或路径不同，但key相同的cookie</p><p>因此无法仅通过key确定是哪一个cookie</p></blockquote><h2 id="客户端设置cookie" tabindex="-1">客户端设置cookie <a class="header-anchor" href="#客户端设置cookie" aria-label="Permalink to &quot;客户端设置cookie&quot;">​</a></h2><p>既然cookie是存放在浏览器端的，所以浏览器向JS公开了接口，让其可以设置cookie</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">cookie </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">键=值; path=?; domain=?; expire=?; max-age=?; secure</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>可以看出，在客户端设置cookie，和服务器设置cookie的格式一样，只是有下面的不同</p><ul><li>没有httponly。因为httponly本来就是为了限制在客户端访问的，既然你是在客户端配置，自然失去了限制的意义。</li><li>path的默认值。在服务器端设置cookie时，如果没有写path，使用的是请求的path。而在客户端设置cookie时，也许根本没有请求发生。因此，path在客户端设置时的默认值是当前网页的path</li><li>domain的默认值。和path同理，客户端设置时的默认值是当前网页的domain</li><li>其他：一样</li><li>删除cookie：和服务器也一样，修改cookie的过期时间即可</li></ul><h1 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h1><p>以上，就是cookie原理部分的内容。</p><p>如果把它用于登录场景，就是如下的流程：</p><p><strong>登录请求</strong></p><ol><li>浏览器发送请求到服务器，附带账号密码</li><li>服务器验证账号密码是否正确，如果不正确，响应错误，如果正确，在响应头中设置cookie，附带登录认证信息（至于登录认证信息是设么样的，如何设计，要考虑哪些问题，就是另一个话题了，可以百度 jwt）</li><li>客户端收到cookie，浏览器自动记录下来</li></ol><p><strong>后续请求</strong></p><ol><li>浏览器发送请求到服务器，希望添加一个管理员，并将cookie自动附带到请求中</li><li>服务器先获取cookie，验证cookie中的信息是否正确，如果不正确，不予以操作，如果正确，完成正常的业务流程</li></ol>`,72),n=[p];function c(i,t,r,d,k,y){return e(),s("div",null,n)}const u=o(l,[["render",c]]);export{g as __pageData,u as default};
