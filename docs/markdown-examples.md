# Markdown 扩展示例

本页面演示了 VitePress 提供的一些内置 markdown 扩展

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Audio

**Input**

```md
<audio preload="none" controls loop style="width: 100%;">
  <source src="">
  <!-- 如果浏览器不支持，则会呈现下面内容 -->
  <p>你的浏览器不支持HTML5音频，你可以<a href="">下载</a>这个音频文件</p>
</audio>
```

**Output**

<audio preload="none" controls loop style="width: 100%;">
  <source src="./browser/mp3/00开篇词-参透了浏览器的工作原理，你就能解决80%的前端难题.mp3" type="audio/mpeg">
  <!-- 如果浏览器不支持，则会呈现下面内容 -->
  <p>你的浏览器不支持HTML5音频，你可以<a href="./browser/mp3/00开篇词-参透了浏览器的工作原理，你就能解决80%的前端难题.mp3">下载</a>这个音频文件</p>
</audio>

## Video

**Input**

```md
<video id="video" controls preload="none" poster="" width="100%">
    <source id="mp4" src="https://player.vimeo.com/progressive_redirect/playback/841374954/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=0f1da42c87a5ecd1f15ec24cac5d938d62bc64b308608ad37d784b4eb75fe9cc" type="video/mp4">
</video>
```

**Output**

<video id="video" controls preload="none" poster="" width="100%">
    <source id="mp4" src="https://player.vimeo.com/progressive_redirect/playback/841374954/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=0f1da42c87a5ecd1f15ec24cac5d938d62bc64b308608ad37d784b4eb75fe9cc" type="video/mp4">
</video>

## More and More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
