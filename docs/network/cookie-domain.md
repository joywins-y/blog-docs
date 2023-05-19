# Cookie 的 domain 属性

为了保证安全性，cookie 无法设置除当前域名或者其父域名之外的其他 domain。

在此，分为两种情况：

1. 一种是前端范围内的是指 cookie，如果网站的域名为，i.xiaohan.com,那么前端 cookie 的 domain 只能设置，i.xiaohan.com 和其父域名 xiaohan.com，如果设置成同级域名如 api.xiaohan.com 或者子域名 api.i.xiaohan.com 那么 cookie 设置将无效。
2. 同样在服务端上，如果制定你的 server 服务的域名为 server.xiaohan.com 那么在服务端生成的 cookie 的 domain 只能指定为 server.xiaohan.com 或者 xiaohan.com 其他 domain 都无法成功设置 cookie。

所以，如果你网页地址为 i.xiaohan.com 而你请求地址为 server.xiaohan.com， 那么在前端范围内，domain 设置规则如上面第一种情况，而在服务器端设置 cookie 则将符合上述第二种情况。

在 setcookie 中省略 domain 参数，那么 domain 默认为当前域名。
2.domain 参数可以设置父域名以及自身，但不能设置其它域名，包括子域名，否则 cookie 不起作用。
cookie 的作用域是 domain 本身以及 domain 下的所有子域名。例如设置 xiaohan.com 为 domain 的 cookie 时，只有该域名或者其子域名才能获取到这个 cookie
例如 server.xiaohan.com 发送请求的时候，服务器会自动带上 server.xiaohan.com 以及 xiaohan.com 域下的 cookie
前端设置可以直接通过 chrome 控制台输入 document.cookie = "example=2; expires=Mon, 11 Nov 2026 07:34:46 GMT; domain=test.com;path=/" 进行测试
