import{_ as i,o as t,c as a,V as o,C as n,a as e}from"./chunks/framework.b9a4e1e7.js";const C=JSON.parse('{"title":"纯 CSS 实现的三种通知栏滚动效果","description":"","frontmatter":{},"headers":[],"relativePath":"css/scrolling-effect.md","filePath":"css/scrolling-effect.md","lastUpdated":1686208751000}'),s={name:"css/scrolling-effect.md"},l=o('<h1 id="纯-css-实现的三种通知栏滚动效果" tabindex="-1">纯 CSS 实现的三种通知栏滚动效果 <a class="header-anchor" href="#纯-css-实现的三种通知栏滚动效果" aria-label="Permalink to &quot;纯 CSS 实现的三种通知栏滚动效果&quot;">​</a></h1><p><a href="http://www.10qianwan.com/articledetail/764762.html" target="_blank" rel="noreferrer">纯 CSS 实现的三种通知栏滚动效果</a></p><h2 id="第一种" tabindex="-1">第一种 <a class="header-anchor" href="#第一种" aria-label="Permalink to &quot;第一种&quot;">​</a></h2><blockquote><ol><li>视口容器高度需要固定，超出视口容器隐藏内容；</li><li>为了营造出无缝滚动回来，内容需要准备两份，彼此紧随；</li><li>通过移动内层 translatey 实现滚动效果；</li><li>在第一份内容完全滚出视口容器的一瞬间，立刻将内容位置进行复原；</li><li>通过 infinite 来循环此过程；</li></ol></blockquote>',4),r=n("iframe",{height:"400",width:"90%",frameborder:"0",allowfullscreen:"",srcdoc:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .notice {
        width: 300px;
        height: 300px;
        border-radius: 8px;
        border: 1px solid #eee;
        margin: 100px auto;
      }
      .notice__inner {
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size: 14px;
        color: #666;
      }
      .notice__box {
        animation: roll 10s linear infinite;
      }
      .notice__item {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 12px;
        white-space: nowrap;
      }
      @keyframes roll {
        0% {
          transform: translatey(0);
        }
        100% {
          transform: translatey(-300px);
        }
      }
    </style>
  </head>
  <body>
    <div class="notice">
      <div class="notice__inner">
        <div class="notice__box">
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">橙某人</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">小密圈圈</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">cooke_</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">爱音乐网站</span
            > 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">青年之声</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">仙人</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">三十万人编号</span
            > 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">maboroshii</span
            > 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">陈亚明</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">老娘终于发达了</span
            > 中奖
          </div>
        </div>
        <div class="notice__box">
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">橙某人</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">小密圈圈</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">cooke_</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">爱音乐网站</span
            > 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">青年之声</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">仙人</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">三十万人编号</span
            > 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">maboroshii</span
            > 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">陈亚明</span> 中奖
          </div>
          <div class="notice__item">
            恭喜会员用户 <span style="color: red">老娘终于发达了1</span
            > 中奖
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`},`
 `,-1),c=n("h2",{id:"第二种",tabindex:"-1"},[e("第二种 "),n("a",{class:"header-anchor",href:"#第二种","aria-label":'Permalink to "第二种"'},"​")],-1),d=n("blockquote",null,[n("ol",null,[n("li",null,"视口容器高度需要固定，超出视口容器隐藏内容；"),n("li",null,"为了营造出无缝滚动回来，内容需要准备两份，彼此紧随；"),n("li",null,"通过移动内层 translatey 实现滚动效果；"),n("li",null,"在第一份内容完全滚出视口容器的一瞬间，立刻将内容位置进行复原；"),n("li",null,"通过 infinite 来循环此过程；")])],-1),p=n("iframe",{height:"200",width:"90%",srcdoc:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .notice {
        width: 600px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #eee;
        margin: 100px auto;
        overflow: hidden;
      }
      .notice__inner {
        animation: roll 36s linear infinite;
        margin-top: 0;
      }
      .notice__item {
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        padding: 0 12px;
        white-space: nowrap;
        text-decoration: underline;
      }
      @keyframes roll {
        0% {
          margin-top: 0;
        }
        4% {
          margin-top: 0;
        }
        8% {
          margin-top: 0;
        }
        12% {
          margin-top: -40px;
        }
        16% {
          margin-top: -40px;
        }
        20% {
          margin-top: -80px;
        }
        24% {
          margin-top: -80px;
        }
        28% {
          margin-top: -120px;
        }
        32% {
          margin-top: -120px;
        }
        36% {
          margin-top: -160px;
        }
        40% {
          margin-top: -160px;
        }
        44% {
          margin-top: -200px;
        }
        48% {
          margin-top: -200px;
        }
        52% {
          margin-top: -240px;
        }
        56% {
          margin-top: -240px;
        }
        60% {
          margin-top: -200px;
        }
        64% {
          margin-top: -200px;
        }
        68% {
          margin-top: -160px;
        }
        72% {
          margin-top: -160px;
        }
        76% {
          margin-top: -120px;
        }
        80% {
          margin-top: -120px;
        }
        84% {
          margin-top: -80px;
        }
        88% {
          margin-top: -80px;
        }
        92% {
          margin-top: -40px;
        }
        96% {
          margin-top: -40px;
        }
        100% {
          margin-top: 0;
        }
      }
    </style>
  </head>
  <body>
    <div class="notice">
      <div class="notice__inner">
        <div class="notice__item">http升级https全过程，nginx配置平滑升级</div>
        <div class="notice__item">
          一台电脑存在多个版本的vuecli，方便快速初始化不同版本的vue项目
        </div>
        <div class="notice__item">前端模块化规范定义-不同规范下的导入导出</div>
        <div class="notice__item">快速、简洁讲明vue中v-for循环key的作用</div>
        <div class="notice__item">call与apply函数的分析及手写实现</div>
        <div class="notice__item">普通切图仔的一年 | 掘金年度征文</div>
        <div class="notice__item">
          前端需要了解的浏览器缓存（即http缓存）| 🏆 技术专题第八期征文
        </div>
      </div>
    </div>
  </body>
</html>
`,frameborder:"0",allowfullscreen:""},`
 `,-1),_=n("h2",{id:"第三种",tabindex:"-1"},[e("第三种 "),n("a",{class:"header-anchor",href:"#第三种","aria-label":'Permalink to "第三种"'},"​")],-1),m=n("blockquote",null,[n("ol",null,[n("li",null,"这种视口容器高度就不需要固定了，它并不依赖，超出视口容器隐藏内容；"),n("li",null,"利用 padding-right 来制造空白间隔，以百分比为单位；"),n("li",null,"内容需要准备两份，通过 animation-delay 来延时第二份内容的出现，这里也有另一个思路就是直接来移动内层容器的 translatex，与第一种是一样的道理；")])],-1),h=n("iframe",{height:"200",width:"90%",srcdoc:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .notice {
        width: 600px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #eee;
        margin: 100px auto;
        overflow: hidden;
      }
      .notice__inner {
        height: 100%;
        font-size: 14px;
        color: #333;
        line-height: 40px;
        white-space: nowrap;
        position: relative;
      }
      .notice__item {
        position: absolute;
        top: 0;
        left: 100%;
        height: 100%;
      }
      .notice__item-first {
        padding-right: 70%;
        animation: rollfirst 25s linear infinite;
      }
      .notice__item-second {
        padding-right: 53%;
        animation: rollsecond 25s linear 12s infinite;
      }
      @keyframes rollfirst {
        0% {
          transform: translatex(0);
        }
        100% {
          transform: translatex(-200%);
        }
      }
      @keyframes rollsecond {
        0% {
          transform: translatex(0);
        }
        100% {
          transform: translatex(-200%);
        }
      }
    </style>
  </head>
  <body>
    <div class="notice">
      <div class="notice__inner">
        <span class="notice__item notice__item-first"
          >vue是一个渐进式的 javascript 框架</span
        >
        <span class="notice__item notice__item-second"
          >vue是一个渐进式的 javascript 框架</span
        >
      </div>
    </div>
  </body>
</html>`,frameborder:"0",allowfullscreen:""},`
 `,-1),v=[l,r,c,d,p,_,m,h];function x(g,f,u,y,b,w){return t(),a("div",null,v)}const S=i(s,[["render",x]]);export{C as __pageData,S as default};
