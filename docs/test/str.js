// 反转字符串
const str = 'hello, world';
const resultStr = Array.from(str).reduce((pre, cur) => {
    return `${cur}${pre}`;
});
console.log(resultStr);
