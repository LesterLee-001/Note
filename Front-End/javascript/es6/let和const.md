# let 和 const 命令

###### 作者
noone

###### 日期
2017-11-21

###### 标签
   ES6 , let , const , global

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->
<!-- code_chunk_output -->

* [let](#let)
	* [基本定义](#基本定义)
	* [for循环中，var全局与let本次循环](#for循环中var全局与let本次循环)
	* [for循环中，设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。](#for循环中设置循环变量的那部分是一个父作用域而循环体内部是一个单独的子作用域)
	* [不存在变量提升](#不存在变量提升)
	* [暂时性死区](#暂时性死区)
		* [typeof不再是一个百分之百安全的操作](#typeof不再是一个百分之百安全的操作)
	* [不允许重复声明](#不允许重复声明)
	* [ES6 的块级作用域](#es6-的块级作用域)
		* [外层作用域无法读取内层作用域的变量](#外层作用域无法读取内层作用域的变量)
		* [内层作用域可以定义外层作用域的同名变量](#内层作用域可以定义外层作用域的同名变量)
		* [ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用](#es6-规定块级作用域之中函数声明语句的行为类似于let在块级作用域之外不可引用)
		* [ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错](#es6-的块级作用域允许声明函数的规则只在使用大括号的情况下成立如果没有使用大括号就会报错)
* [do 表达式](#do-表达式)
* [const](#const)
	* [基本用法](#基本用法)
	* [本质](#本质)
* [ES6 6种声明对象的方法](#es6-6种声明对象的方法)
* [顶层对象的属性](#顶层对象的属性)
* [global 对象](#global-对象)

<!-- /code_chunk_output -->


## let
### 基本定义
ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的**代码块内**有效。
```javascript
{
  let a = 6;
  console.log(a);
}
console.log(a);
```
结果：
```javascript
6
[stdin]:7
console.log(a);
            ^

ReferenceError: a is not defined
    at [stdin]:7:13
    at ContextifyScript.Script.runInThisContext (vm.js:50:33)
    at Object.runInThisContext (vm.js:139:38)
    at Object.<anonymous> ([stdin]-wrapper:6:22)
    at Module._compile (module.js:624:30)
    at evalScript (bootstrap_node.js:461:27)
    at Socket.<anonymous> (bootstrap_node.js:233:15)
    at emitNone (events.js:110:20)
    at Socket.emit (events.js:207:7)
    at endReadableNT (_stream_readable.js:1059:12)
[Finished in 0.722s]
```
---
### for循环中，var全局与let本次循环
```javascript
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10。

```javascript
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```
上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

---

### for循环中，设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
```javascript
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```

### 不存在变量提升

`var`命令会发生`变量提升`现象，即变量可以在声明之前使用，值为undefined。
`let`命令所声明的变量一定要在声明后使用，否则报错。

### 暂时性死区
在代码块内，使用`let`命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
```javascript
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
`ES6` 明确规定，如果区块中存在`let`和`const`命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
#### typeof不再是一个百分之百安全的操作
### 不允许重复声明
### ES6 的块级作用域
```javascript
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
#### 外层作用域无法读取内层作用域的变量
```javascript
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};
```
#### 内层作用域可以定义外层作用域的同名变量
```javascript
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};
```
#### ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用
#### ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错

## do 表达式
本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值。

```javascript
{
  let t = f();
  t = t * t + 1;
}
```

上面代码中，块级作用域将两个语句封装在一起。但是，在块级作用域以外，没有办法得到t的值，因为块级作用域不返回值，除非t是全局变量。

现在有一个提案，使得块级作用域可以变为表达式，也就是说可以返回值，办法就是在块级作用域之前加上do，使它变为do表达式，然后就会返回内部最后执行的表达式的值。
```javascript
let x = do {
  let t = f();
  t * t + 1;
};
```
上面代码中，变量x会得到整个块级作用域的返回值（t * t + 1）。

## const
### 基本用法
`const`声明一个只读的常量。
- 一旦声明，常量的值就不能改变。
- `const`一旦声明变量，就必须立即初始化，不能留到以后赋值。
- 只在声明所在的块级作用域内有效
- 不提升，同样存在暂时性死区，只能在声明的位置后面使用
### 本质
并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。

对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，`const`只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
```javascript
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```
如果真的想将对象冻结，应该使用`Object.freeze`方法。
```javascript
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```
除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。
```javascript
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```
## ES6 6种声明对象的方法
- `var`(ES5)
- `function`(ES5)
- `let`
- `const`
- `import`
- `class`
## 顶层对象的属性
顶层对象，在浏览器环境指的是`window`对象，在 `Node` 指的是global对象。

## global 对象
ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。

- 浏览器里面，顶层对象是`window`，但 `Node` 和 `Web Worker` 没有`window`。
- 浏览器和 `Web Worker` 里面，`self`也指向顶层对象，但是 `Node` 没有`self`。
- `Node` 里面，顶层对象是`global`，但其他环境都不支持。

|            | 浏览器   | Web Worker | Node     |
| ---------- | -------- | ---------- | -------- |
| **window** | 顶层对象 | 没有       | 没有     |
| **self**   | 顶层对象 | 顶层对象   | 没有     |
| **global** | 没有     | 没有       | 顶层对象 |

同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用`this`变量，但是有局限性。

- 全局环境中，`this`会返回顶层对象。但是，`Node` 模块和 `ES6` 模块中，`this`返回的是当前模块。
- 函数里面的`this`，如果函数不是作为对象的方法运行，而是单纯作为函数运行，`this`会指向顶层对象。但是，严格模式下，这时`this`会返回`undefined`。
- 不管是严格模式，还是普通模式，`new Function('return this')()`，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全政策），那么`eval`、`new Function`这些方法都可能无法使用。

综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。
```javascript
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```
垫片库`system.global`模拟了这个提案，可以在所有环境拿到`global`。
```javascript
// CommonJS 的写法
require('system.global/shim')();

// ES6 模块的写法
import shim from 'system.global/shim'; shim();
```
上面代码可以保证各种环境里面，global对象都是存在的。
```javascript
// CommonJS 的写法
var global = require('system.global')();

// ES6 模块的写法
import getGlobal from 'system.global';
const global = getGlobal();
```
上面代码将顶层对象放入变量`global`。

---
[返回上级目录README.md](../README.md)
