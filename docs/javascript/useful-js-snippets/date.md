## Date 日期

### Get days difference between dates (获取两个日期之间相差的天数)

计算 Date 对象之间的差异(以天为单位)。

JavaScript 代码:

```jsx
const dayDiff1 = (date1, date2) => (date2 - date1) / (1000 * 3600 * 24);
// dayDiff1(new Date("2017-12-13"), new Date("2017-12-22")) -> 9
// dayDiff1(new Date("2019-12-13"), new Date("2017-12-22")) -> -721

const dayDiff2 = (date1, date2) =>
  Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
// or date1.getTime() - date2.getTime()

// dayDiff2(new Date("2017-12-13"), new Date("2017-12-22")); // 9
// dayDiff2(new Date("2019-12-13"), new Date("2017-12-22")); // 721
// dayDiff2("2019-12-13", "2017-12-22"); // NaN (or date1.getTime is not a function)
```

### Query whether a day is a working day (查询某天是否为工作日)

我们自己写日历组件时经常会用到，判断某个日期是否为工作日；周一至周五为工作日:

JavaScript 代码:

```jsx
const isWeekday = (date) => date.getDay() % 6 !== 0;

isWeekday(new Date(2022, 03, 11));
// true
```

### 判断日期是否为今天

```js
const isToday = (date) =>
  date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);
```

### 日期转换

当你需要将日期转换为为 YYYY-MM-DD 格式

```js
const formatYmd = (date) => date.toISOString().slice(0, 10);
// formatYmd(new Date());
```

### 秒数转换

当你需要将秒数转换为 hh:mm:ss 格式

```js
const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);
// formatSeconds(200) // 00:03:20
```

### 获取某年某月的第一天

当你需要获取某年某月的第一天

```js
const getFirstDate = (d = new Date()) =>
  new Date(d.getFullYear(), d.getMonth(), 1);
getFirstDate(new Date("2022-04")); // Fri Apr 01 2022 00:00:00 GMT+0800 (中国标准时间)
```

### 获取某年某月的最后一天

当你需要获取某年某月的最后一天

```js
const getLastDate = (d = new Date()) =>
  new Date(d.getFullYear(), d.getMonth() + 1, 0);
getLastDate(new Date("2023-03-04")); // Fri Mar 31 2023 00:00:00 GMT+0800 (中国标准时间)
```

### 获取某年月份天数

当你需要获取某年某个月份的总天数

```js
const getDaysNum = (year, month) => new Date(year, month, 0).getDate();
const day = getDaysNum(2024, 2); // 29
```
