# 解决手机端浏览器中视频自动播放和默认全屏问题

> 可参考网站：[网页背景 H5 视频自动播放---PC 端、移动端兼容问题完美解决方案（IOS、安卓、微信端）](https://cloud.tencent.com/developer/article/1695479)

```jsx
<video
  {/* 设置后，音频会初始化为静音，注意浏览器只有设置静音，才能自动播放 */}
  muted
  {/* 视频会马上自动开始播放，不会停下来等着数据载入结束 */}
  autoplay="autoplay"
  {/* 布尔属性；指定后，会在视频结尾的地方，自动返回视频开始的地方 */}
  loop="loop"
  {/* 一个布尔属性，标志视频将被“inline”播放，即在元素的播放区域内 */}
  x5-playsinline="true"
  playsinline="true"
  webkit-playsinline="true"
  {/* 一个布尔属性，用于禁用使用有线连接的设备(HDMI、DVI等)的远程播放功能 */}
  x-webkit-airplay="allow"
  {/* 这个视频优先加载 */}
  preload="auto"
  {/* 启用同层H5播放器，就是在视频全屏的时候，div可以呈现在视频层上，也是WeChat安卓版 特有的属性。同层播放别名也叫做沉浸式播放 */}
  x5-video-player-type="h5"
  {/* 全屏设置：它又两个属性值，ture和false，true支持全屏播放 */}
  x5-video-player-fullscreen="true"
>
  {/* <source> 标签为媒介元素（比如 <video> 和 <audio>）定义媒介资源。 */}
  <source src="indexMove.mp4" type="video/mp4">
</video>
```

## 问题一

**解决 ios 自动播放全屏问题**

```js
playsinline="true"
webkit-playsinline="true"
```

**解决安卓同层级播放**

```js
x5-video-player-type="h5"
x5-video-player-fullscreen="true"
```

```jsx
<video
  controls="controls"
  src=""
  id="ckplayer_a1"
  x5-video-player-type="h5"
  x5-video-player-fullscreen="true"
  preload="metadata"
  playsinline="true"
  webkit-playsinline="true"
  x-webkit-airplay="true"
  x5-video-orientation="portraint"
></video>
```

```jsx
<video
  className="page_video"
  width="100%"
  height="100%"
  controls
  x5-video-player-type="h5"
  x-webkit-airplay="true"
  x5-playsinline="true"
  playsInline
  src={url}
  controlsList="nodownload noremoteplayback noplaybackrate"
  disablePictureInPicture
  poster={poster}
  ref={pageVideoRef}
>
  {"Sorry, your browser doesn't support embedded videos."}
</video>
```

## 问题二

ios 微信下通过 WeixinJSBridgeReady 事件进行自动播放

```html
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  document.addEventListener(
    "WeixinJSBridgeReady",
    function () {
      var video = document.getElementById("ckplayer_a1");
      video.play();
    },
    false
  );
</script>
```

安卓可以尝试监听 touchstart 事件，用户触摸屏幕后自动播放

```html
<script>
  document.addEventListener(
    "touchstart",
    function () {
      var video = document.getElementById("ckplayer_a1");
      video.play();
    },
    false
  );
</script>
```
