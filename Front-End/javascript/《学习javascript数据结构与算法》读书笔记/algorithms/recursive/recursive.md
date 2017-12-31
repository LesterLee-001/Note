# JavaScript 递归

###### 作者

noone

###### 日期

2017-11-21

###### 标签

javascript , 递归

--------------------------------------------------------------------------------

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->
<!-- code_chunk_output -->

* [递归的基本形式](#递归的基本形式)
	* [JavaScript调用栈大小的限制](#javascript调用栈大小的限制)
	* [斐波那契数列](#斐波那契数列)

<!-- /code_chunk_output -->



## 递归的基本形式
- 调用自身
- 边界条件
```javascript
//纯自身调用
var recursiveFunction = function(someParam){
  recursiveFunction(someParam);
};
```
```javascript
//间接调用自身
var recursiveFunction1 = function(someParam){
  recursiveFunction2(someParam);
};
var recursiveFunction2 = function(someParam){
  recursiveFunction1(someParam);
};
```
> 如果没有边界条件，浏览器会抛出栈溢出错误`stack overflow error`

### JavaScript调用栈大小的限制

```javascript
var i = 0;

function recursiveFn() {
  i++;
  recursiveFn();
}
try {
  recursiveFn();
} catch (ex) {
  console.log('i=' + i + 'error:' + ex);
}
```

> Chrome抛出错误`RangeError: Maximum call stack size exceeded`
> Firefox抛出错误`InternalError: too much recursion`

### 斐波那契数列
定义
- `1`和`2`的斐波那契数是`1`；
- `n(n>2)`的斐波那契数是`n-1`的斐波那契数加上`n-2`的斐波那契数
```javascript
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(6));
```
--------------------------------------------------------------------------------

[返回上级目录README.md](../README.md)
