# 格式化银行卡号

```jsx
<input onChange={onChange} />;

const onChange = (e) => {
  e.target.value = e.target.value
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .replace(/\s*$/, ""); // 这里是空格，每四位空格
  e.target.value = e.target.value
    .replace(/-/g, "")
    .replace(/(\d{4})/g, "$1-")
    .replace(/-*$/, ""); // 这里是-，每四位-
};
```
