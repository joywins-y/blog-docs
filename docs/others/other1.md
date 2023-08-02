# 解决手机端浏览器中视频自动播放和默认全屏问题

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
