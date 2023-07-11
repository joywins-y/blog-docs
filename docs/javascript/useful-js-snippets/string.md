## String 字符串

### Anagrams of string (with duplicates) (字符串的排列组合，带有重复项)

使用递归。对于给定字符串中的每个字母，为其余字母创建所有部分字母。使用 Array.map() 将字母与每个部分字母组合在一起，然后使用 Array.reduce() 将所有字母组合到一个数组中。基本情况是字符串 length 等于 2 或 1 。

JavaScript 代码:

```jsx
const anagrams = str => { if (str.length < = 2) return str.length === 2 ? [str, str[1] + str[0]] : [str]; return str.split('').reduce((acc, letter, i) => acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []); };
// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']
```

### Capitalize first letter of every word (大写每个单词的首字母)

使用 replace() 来匹配每个单词的第一个字符，并使用 toUpperCase() 来将其大写。

JavaScript 代码:

```jsx
const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
// capitalizeEveryWord('hello world!') -> 'Hello World!'
```

### Capitalize first letter (首字母大写)

使用解构和 toUpperCase() 大写第一个字母，...rest 第一个字母后获得字符数组，然后 Array.join('')再次使它成为一个字符串。省略 lowerRest 参数以保持字符串的剩余部分不变，或者将其设置为 true 这会将字符串的剩余部分转换为小写。

JavaScript 代码:

```jsx
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));
// capitalize('myName') -> 'MyName'
// capitalize('myName', true) -> 'Myname'
```

### Check for palindrome (检查回文)

使用 toLowerCase() 转换字符串，并使用 replace() 从中删除非字母数字字符。然后，在将其转换为 tolowerCase() 之后，将 split('') 为单独的字符，reverse() ，join('')并与原始非反转字符串进行比较。

JavaScript 代码:

```jsx
const palindrome = (str) => {
  const s = str.toLowerCase().replace(/[\W_]/g, "");
  return s === s.split("").reverse().join("");
};
// palindrome('taco cat') -> true
```

### Reverse a string (反转一个字符串)

使用数组解构和 Array.reverse() 来反转字符串中字符的顺序。使用 join('')合并字符串。JavaScript 代码:

```jsx
const reverseString = (str) => [...str].reverse().join("");
// reverseString('foobar') -> 'raboof'
```

or

```js
const reverse = (str) => str.split("").reverse().join("");
reverse("this is reverse");
// esrever si siht
```

### Sort characters in string (alphabetical) (按字母顺序排列字符串)

使用 split('') 分割字符串，通过 localeCompare() 排序字符串 Array.sort() ，使用 join('') 进行重组。

JavaScript 代码:

```jsx
const sortCharactersInString = (str) =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
// sortCharactersInString('cabbage') -> 'aabbceg'
```

### Truncate a String (截断一个字符串)

确定字符串的 length 是否大于 num。返回截断所需长度的字符串，用 ... 附加到结尾或原始字符串。

JavaScript 代码:

```jsx
const truncate = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str;
// truncate('boomerang', 7) -> 'boom...'
```
