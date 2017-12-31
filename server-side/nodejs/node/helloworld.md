- 初始化
```
npm init
```
> 依次填写如下信息，会得到一个`package.json` 文件
```
Leslie:bnode noone$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (bnode)
version: (1.0.0)
description: hello world
entry point: (index.js)
test command:
git repository:
keywords:
author: noone
license: (ISC)
About to write to /Users/baweibin/Downloads/bproject/bnode/package.json:

{
  "name": "bnode",
  "version": "1.0.0",
  "description": "hello world",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "noone",
  "license": "ISC"
}


```
- 安装`express`
```
npm i express
```
> 得到`node_modules`文件夹

- 新建app.js
```
touch app.js
```
复制粘贴以下代码
```javaScript
// 这句的意思就是引入 `express` 模块，并将它赋予 `express` 这个变量等待使用。
var express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
var app = express();

// app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
// 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
// request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。
// res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容。这里我们调用了它的 #send 方法，向浏览器输出一个字符串。
app.get('/', function (req, res) {
  res.send('Hello World');
});

// 定义好我们 app 的行为之后，让它监听本地的 3000 端口。这里的第二个函数是个回调函数，会在 listen 动作成功后执行，我们这里执行了一个命令行输出操作，告诉我们监听动作已完成。
app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
```
