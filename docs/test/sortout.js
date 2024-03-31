const dataList = [
    {
        name: 'aa',
        country: 'China',
    },
    {
        name: 'bb',
        country: 'China',
    },
    {
        name: 'cc',
        country: 'USA',
    },
    {
        name: 'dd',
        country: 'EN',
    },
];
// 归类
const resultObj = dataList.reduce((acc, cur) => {
    const { country } = cur;
    if (!acc[country]) {
        acc[country] = [];
    }
    acc[country].push(cur);
    return acc;
}, {});

console.log(resultObj);
