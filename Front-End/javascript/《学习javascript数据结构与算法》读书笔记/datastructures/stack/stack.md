# JavaScript 栈

##### 作者
noone

##### 日期
2017-10-11

##### 标签
   javascript , 栈

---

<!-- toc orderedList:0 depthFrom:2 depthTo:4 -->

* [特点](#特点)
* [实现](#实现)
* [十进制转为2进制](#十进制转为2进制)
* [十进制转任意进制](#十进制转任意进制)

<!-- tocstop -->
## 特点
> 后进先出LIFO
## 实现
```javascript
function Stack() {
  var items = [];
  this.push = function(element) {
    items.push(element);
  };
  this.pop = function() {
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size=function(){
    return items.length;
  };
  this.clear = function(){
    items=[];
  };
  this.print =function(){
    console.log(items.toString());
  };
}
//实例化
var stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.size());
stack.print();
```
## 十进制转为2进制
```javascript
function divideBy2(decNumber) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  while (!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(divideBy2(10));
```
## 十进制转任意进制
```javascript
function baseConverter(decNumber,base) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
    digits = '0123456789ABCDEF';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()){
    binaryString += digits[remStack.pop()];
  }
  return binaryString;
}

console.log(baseConverter(17,16));
```
---
[返回上级目录README.md](../README.md)
