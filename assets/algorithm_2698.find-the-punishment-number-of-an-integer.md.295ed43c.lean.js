import{_ as t,H as e,o as c,c as r,C as s,J as a,E as o,a as n,V as p}from"./chunks/framework.bd00fe0c.js";const y="/blog-docs/assets/idea.06026e4f.png",C=JSON.parse('{"title":"2698. 求一个整数的惩罚数","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/2698.find-the-punishment-number-of-an-integer.md","filePath":"algorithm/2698.find-the-punishment-number-of-an-integer.md","lastUpdated":1698303255000}'),F={name:"algorithm/2698.find-the-punishment-number-of-an-integer.md"},D=p("",6),i=s("p",null,[s("strong",null,"示例 2：")],-1),B=p("",5);function f(A,E,u,d,_,g){const l=e("font");return c(),r("div",null,[D,s("blockquote",null,[s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("输入")]),_:1})]),n("：n = 10")]),s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("输出")]),_:1})]),n("：182")]),s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("解释")]),_:1})]),n("：总共有 3 个整数 i 满足要求： - 1 ，因为 1 * 1 = 1 - 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。 - 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。 因此，10 的惩罚数为 1 + 81 + 100 = 182")])]),i,s("blockquote",null,[s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("输入")]),_:1})]),n("：n = 37")]),s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("输出")]),_:1})]),n("：1478")]),s("p",null,[s("strong",null,[a(l,{color:"#000"},{default:o(()=>[n("解释")]),_:1})]),n("：总共有 4 个整数 i 满足要求： - 1 ，因为 1 * 1 = 1 - 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。 - 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。 - 36 ，因为 36 * 36 = 1296 ，且 1296 可以分割成 1 + 29 + 6 。 因此，37 的惩罚数为 1 + 81 + 100 + 1296 = 1478")])]),B])}const h=t(F,[["render",f]]);export{C as __pageData,h as default};