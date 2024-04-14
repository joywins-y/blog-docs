import{_ as a,o as p,c as t,V as e}from"./chunks/framework.bd00fe0c.js";const u=JSON.parse('{"title":"分层的意义","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/网络/01. 五层网络模型/课件.md","filePath":"面试复盘/网络/01. 五层网络模型/课件.md","lastUpdated":1712573589000}'),i={name:"面试复盘/网络/01. 五层网络模型/课件.md"},l=e('<h1 id="分层的意义" tabindex="-1">分层的意义 <a class="header-anchor" href="#分层的意义" aria-label="Permalink to &quot;分层的意义&quot;">​</a></h1><p>当遇到一个复杂问题的时候，可以使用分层的思想把问题简单化</p><p>比如，你有半杯82年的可乐，想分享给你的朋友王富贵，但你们已经10年没有联系了。要完成这件事，你可能要考虑：</p><ul><li><p>我用什么装可乐？</p><p>可能的方案：塑料瓶、玻璃瓶、煤气罐</p></li><li><p>怎么保证可乐始终处于低温？</p><p>可能的方案：保温杯、小冰箱、冰盒</p></li><li><p>如何保证可乐不被运输的人偷喝？</p><p>可能的方案：封条、在上面写「毒药」</p></li><li><p>如何获取王富贵的地址？</p><p>可能的方案：报案失踪、联系私人侦探、联系物流公司的朋友</p></li><li><p>如何运输？</p><p>可能的方案：自行车、汽车、火车、高铁、飞机、火箭</p></li></ul><p>这就形成了一个分层结构</p><img src="http://mdrs.yuanjin.tech/img/20210927145456.png" alt="image-20210927145456656" style="zoom:50%;"><p>从常理出发，我们可以得出以下结论：</p><ul><li>每层相对独立，只需解决自己的问题</li><li>每层无须考虑上层的交付，仅需把自己的结果交给下层即可</li><li>每层有多种方案可供选择，选择不同的方案不会对上下层造成影响</li><li>每一层会在上一层的基础上增加一些额外信息</li></ul><h1 id="五层网络模型" tabindex="-1">五层网络模型 <a class="header-anchor" href="#五层网络模型" aria-label="Permalink to &quot;五层网络模型&quot;">​</a></h1><p><img src="http://mdrs.yuanjin.tech/img/20211008163417.png" alt="image-20211008163417521"></p><h1 id="数据的封装和解封装" tabindex="-1">数据的封装和解封装 <a class="header-anchor" href="#数据的封装和解封装" aria-label="Permalink to &quot;数据的封装和解封装&quot;">​</a></h1><p><img src="http://mdrs.yuanjin.tech/img/20211008163458.png" alt="image-20211008163458168"></p><h1 id="四层、五层、七层" tabindex="-1">四层、五层、七层 <a class="header-anchor" href="#四层、五层、七层" aria-label="Permalink to &quot;四层、五层、七层&quot;">​</a></h1><p><img src="http://mdrs.yuanjin.tech/img/20211008164017.png" alt="image-20211008164017299"></p><h1 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h1><p>说说网络的五层模型（寺库）</p><blockquote><p>参考答案：</p><p>从上到下分别为：应用层、传输层、网络层、数据链路层、物理层。在发送消息时，消息从上到下进行打包，每一层会在上一层基础上加包，而接受消息时，从下到上进行解包，最终得到原始信息。</p><p>其中：</p><p>应用层主要面向互联网中的应用场景，比如网页、邮件、文件中心等等，它的代表协议有 http、smtp、pop3、ftp、DNS 等等</p><p>传输层主要面向传输过程，比如 TCP 协议是为了保证可靠的传输，而 UDP 协议则是一种无连接的广播，它们提供了不同的传输方式</p><p>网络层主要解决如何定位目标以及如何寻找最优路径的问题，比如 IP 等等</p><p>数据链路层的作用是将数据在一个子网（广播域）内有效传输，MAC地址、交换机都是属于该层的</p><p>物理层是要解决二进制数据到信号之间的互转问题，集线器、双绞线、同轴电缆等都是属于盖层的设备</p></blockquote>',17),r=[l];function o(n,s,h,c,d,m){return p(),t("div",null,r)}const g=a(i,[["render",o]]);export{u as __pageData,g as default};
