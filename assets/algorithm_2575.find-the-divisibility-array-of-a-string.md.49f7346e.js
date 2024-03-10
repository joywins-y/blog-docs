import{_ as p,H as e,o as c,c as r,C as s,J as o,E as a,a as l,V as t}from"./chunks/framework.bd00fe0c.js";const y="/blog-docs/assets/2575.8393597c.png",h=JSON.parse('{"title":"2575. 找出字符串的可整除数组","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/2575.find-the-divisibility-array-of-a-string.md","filePath":"algorithm/2575.find-the-divisibility-array-of-a-string.md","lastUpdated":1709959207000}'),i={name:"algorithm/2575.find-the-divisibility-array-of-a-string.md"},F=t('<h1 id="_2575-找出字符串的可整除数组" tabindex="-1">2575. 找出字符串的可整除数组 <a class="header-anchor" href="#_2575-找出字符串的可整除数组" aria-label="Permalink to &quot;2575. 找出字符串的可整除数组&quot;">​</a></h1><blockquote><p>难度：<span style="color:#ffb800;font-weight:500;">中等</span></p><p>地址：<a href="https://leetcode.cn/problems/find-the-divisibility-array-of-a-string/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/find-the-divisibility-array-of-a-string/</a></p></blockquote><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>word</code>，长度为 <code>n</code>，由从 <code>0</code> 到 <code>9</code> 的数字组成。另给你一个正整数 <code>m</code>。</p><p><code>word</code> 的 <strong>可整除数组</strong> <code>div</code> 是一个长度为 <code>n</code> 的整数数组，并满足：</p><p>如果 <code>word[0,...,i]</code> 所表示的 <strong>数值</strong> 能被 <code>m</code> 整除，<code>div[i] = 1</code> 否则，<code>div[i] = 0</code> 返回 <code>word</code> 的可整除数组。</p><p><strong>示例 1：</strong></p>',6),D=s("p",null,[s("strong",null,"示例 2：")],-1),d=t('<p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>word.length == n</code></li><li><code>word</code> 由数字 <code>0</code> 到 <code>9</code> 组成</li><li><code>1 &lt;= m &lt;= 10^9</code></li></ul><p><strong>题解：</strong></p><p><strong>方法一：模运算</strong></p><p><img src="'+y+`" alt="alt text"></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">string</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">word</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">m</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number[]</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> divisibilityArray </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">word</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">m</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">w</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">word</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">w</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charCodeAt</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charCodeAt</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">))) </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div>`,6);function f(_,B,A,u,E,g){const n=e("font");return c(),r("div",null,[F,s("blockquote",null,[s("p",null,[s("strong",null,[o(n,{color:"#000"},{default:a(()=>[l("输入")]),_:1})]),l('：word = "998244353", m = 3')]),s("p",null,[s("strong",null,[o(n,{color:"#000"},{default:a(()=>[l("输出")]),_:1})]),l("：[1,1,0,0,0,1,1,0,0]")]),s("p",null,[s("strong",null,[o(n,{color:"#000"},{default:a(()=>[l("解释")]),_:1})]),l('：仅有 4 个前缀可以被 3 整除："9"、"99"、"998244" 和 "9982443" 。')])]),D,s("blockquote",null,[s("p",null,[s("strong",null,[o(n,{color:"#000"},{default:a(()=>[l("输入")]),_:1})]),l('：word = "1010", m = 10')]),s("p",null,[s("strong",null,[o(n,{color:"#000"},{default:a(()=>[l("输出")]),_:1})]),l("：[0,1,0,1]")]),s("p",null,[s("strong",null,[o(n,{color:"#000"},{default:a(()=>[l("解释")]),_:1})]),l('：仅有 2 个前缀可以被 10 整除："10" 和 "1010" 。')])]),d])}const m=p(i,[["render",f]]);export{h as __pageData,m as default};
