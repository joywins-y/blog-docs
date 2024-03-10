import{_ as t,H as e,o as c,c as r,C as s,J as a,E as o,a as n,V as p}from"./chunks/framework.bd00fe0c.js";const k=JSON.parse('{"title":"2530. 执行 K 次操作后的最大分数","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/2530.maximal-score-after-applying-k-operations.md","filePath":"algorithm/2530.maximal-score-after-applying-k-operations.md","lastUpdated":1697611121000}'),y={name:"algorithm/2530.maximal-score-after-applying-k-operations.md"},F=p("",7),i=s("p",null,[s("strong",null,"示例 2：")],-1),D=s("em",null,[s("strong",null,"4")],-1),B=s("em",null,[s("strong",null,"2")],-1),A=s("em",null,[s("strong",null,"1")],-1),E=p("",7);function f(u,m,d,_,g,C){const l=e("font");return c(),r("div",null,[F,s("blockquote",null,[s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("输入")]),_:1})]),n("：nums = [10,10,10,10,10], k = 5")]),s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("输出")]),_:1})]),n("：50")]),s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("解释")]),_:1})]),n("：对数组中每个元素执行一次操作。最后分数是 10 + 10 + 10 + 10 + 10 = 50 。")])]),i,s("blockquote",null,[s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("输入")]),_:1})]),n("：nums = [1,10,3,3,3], k = 3")]),s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("输出")]),_:1})]),n("：17")]),s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("解释")]),_:1})]),n("：可以执行下述操作： 第 1 步操作：选中 i = 1 ，nums 变为 [1,"),D,n(",3,3,3] 。分数增加 10 。 第 2 步操作：选中 i = 1 ，nums 变为 [1,"),B,n(",3,3,3] 。分数增加 4 。 第 3 步操作：选中 i = 2 ，nums 变为 [1,1,"),A,n(",3,3] 。分数增加 3 。 最后分数是 10 + 4 + 3 = 17 。")])]),E])}const x=t(y,[["render",f]]);export{k as __pageData,x as default};
