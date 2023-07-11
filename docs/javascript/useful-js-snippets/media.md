## Media 媒体

### Speech synthesis (语音合成，实验阶段)

使用 SpeechSynthesisUtterance.voice 和 indow.speechSynthesis.getVoices() 将消息转换为语音。使用 window.speechSynthesis.speak() 播放消息。了解有关 Web Speech API 的 SpeechSynthesisUtterance 接口的更多信息。

JavaScript 代码:

```jsx
const speak = (message) => {
  const msg = new SpeechSynthesisUtterance(message);
  msg.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(msg);
};
// speak('Hello, World') -> plays the message
```
