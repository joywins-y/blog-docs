import{_ as e,o as s,c as n,C as t,a as o}from"./chunks/framework.bd00fe0c.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/网络/10. 跨域-JSONP/课件.md","filePath":"面试复盘/网络/10. 跨域-JSONP/课件.md","lastUpdated":1712573589000}'),a={name:"面试复盘/网络/10. 跨域-JSONP/课件.md"},c=t("p",null,"在CORS出现之前，人们想了一种奇妙的办法来实现跨域，这就是JSONP。",-1),r=t("p",null,"要实现JSONP，需要浏览器和服务器来一个天衣无缝的绝妙配合。",-1),_=t("p",null,[o("JSONP的做法是："),t("strong",null,"当需要跨域请求时，不使用AJAX，转而生成一个script元素去请求服务器，由于浏览器并不阻止script元素的请求，这样请求可以到达服务器。服务器拿到请求后，响应一段JS代码，这段代码实际上是一个函数调用，调用的是客户端预先生成好的函数，并把浏览器需要的数据作为参数传递到函数中，从而间接的把数据传递给客户端")],-1),l=t("p",null,[t("img",{src:"http://mdrs.yuanjin.tech/img/20210916151516.png",alt:"image-20210916151516184"})],-1),i=t("p",null,"JSONP有着明显的缺点，即其只能支持GET请求",-1),d=[c,r,_,l,i];function p(m,h,u,J,N,S){return s(),n("div",null,d)}const f=e(a,[["render",p]]);export{P as __pageData,f as default};
