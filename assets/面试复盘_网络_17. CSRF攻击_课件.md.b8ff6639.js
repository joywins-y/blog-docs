import{_ as t,o as e,c as a,V as r}from"./chunks/framework.bd00fe0c.js";const m=JSON.parse('{"title":"CSRF攻击","description":"","frontmatter":{},"headers":[],"relativePath":"面试复盘/网络/17. CSRF攻击/课件.md","filePath":"面试复盘/网络/17. CSRF攻击/课件.md","lastUpdated":1712573589000}'),o={name:"面试复盘/网络/17. CSRF攻击/课件.md"},d=r('<h1 id="csrf攻击" tabindex="-1">CSRF攻击 <a class="header-anchor" href="#csrf攻击" aria-label="Permalink to &quot;CSRF攻击&quot;">​</a></h1><p>CSRF（Cross-site request forgery，跨站请求伪造）</p><p>它是指攻击者利用了用户的身份信息，执行了用户非本意的操作</p><p><img src="http://mdrs.yuanjin.tech/img/20211101145156.png" alt="image-20211101145156371"></p><h1 id="防御方式" tabindex="-1">防御方式 <a class="header-anchor" href="#防御方式" aria-label="Permalink to &quot;防御方式&quot;">​</a></h1><table><thead><tr><th>防御手段</th><th>防御力</th><th>问题</th></tr></thead><tbody><tr><td>不使用cookie</td><td>⭐️⭐️⭐️⭐️⭐️</td><td>兼容性略差<br>ssr会遇到困难，但可解决</td></tr><tr><td>使用sameSite</td><td>⭐️⭐️⭐️⭐️</td><td>兼容性差<br>容易挡住自己人</td></tr><tr><td>使用csrf token</td><td>⭐️⭐️⭐️⭐️⭐️</td><td>获取到token后未进行操作仍然会被攻击</td></tr><tr><td>使用referer防护</td><td>⭐️⭐️</td><td>过去很常用，现在已经发现漏洞</td></tr></tbody></table><h1 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h1><p>介绍 csrf 攻击</p><blockquote><p>CSRF 是跨站请求伪造，是一种挟制用户在当前已登录的Web应用上执行非本意的操作的攻击方法</p><p>它首先引导用户访问一个危险网站，当用户访问网站后，网站会发送请求到被攻击的站点，这次请求会携带用户的cookie发送，因此就利用了用户的身份信息完成攻击</p><p>防御 CSRF 攻击有多种手段：</p><ol><li>不使用cookie</li><li>为表单添加校验的 token 校验</li><li>cookie中使用sameSite字段</li><li>服务器检查 referer 字段</li></ol></blockquote>',9),i=[d];function s(c,l,n,h,_,p){return e(),a("div",null,i)}const S=t(o,[["render",s]]);export{m as __pageData,S as default};
