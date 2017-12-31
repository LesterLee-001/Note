# JavaScript 数组

##### 作者
noone

##### 日期
2017-10-11

##### 标签
   javascript , 数组

---

<!-- toc orderedList:0 depthFrom:2 depthTo:4 -->

* [数组](#数组)
  * [创建和初始化](#创建和初始化)
  * [数组简单遍历](#数组简单遍历)
  * [添加和删除元素](#添加和删除元素)
    * [在末位添加：下标](#在末位添加下标)
    * [在末位添加：push()](#在末位添加push)
    * [在首位添加：unshift()](#在首位添加unshift)
    * [在末位删除：pop()](#在末位删除pop)
    * [在首位删除：shift()](#在首位删除shift)
    * [自由插入、删除：splice(param1,param2[,param3...])](#自由插入-删除spliceparam1param2param3)
* [二维和多维数组](#二维和多维数组)
* [数组方法](#数组方法)
  * [数组合并 concat()](#数组合并-concat)
  * [迭代器函数](#迭代器函数)
    * [every()](#every)
    * [some()](#some)
    * [forEach()](#foreach)
    * [map()](#map)
    * [filter()](#filter)
    * [reduce()](#reduce)

<!-- tocstop -->
## 数组
### 创建和初始化
```javascript
var arr1 = new Array();
var arr2 = new Array(3);
var arr3 = new Array("1","2");
var arr4 = [];
var arr5 = [1,2,3,4];
```
### 数组简单遍历
```javascript
var week = ["a","b","c","d","e","f"];
console.log("数组遍历：");
for (var i = 0; i < week.length; i++) {
  console.log(week[i]);
}
```
### 添加和删除元素
#### 在末位添加：下标
```javascript
var num = [0,1,2,3,4,5,6,7,8,9];
num[num.length]=10;
```
#### 在末位添加：push()
```javascript
num.push(11);
num.push(12,13);
```
#### 在首位添加：unshift()
```javascript
num.unshift(11);
num.unshift(12,13);
```
#### 在末位删除：pop()
```javascript
num.pop();
```
#### 在首位删除：shift()
```javascript
num.shift();
```
#### 自由插入、删除：splice(param1,param2[,param3...])
> splice()方法接收参数如下
> param1:想要插入或删除元素索引值
> param2:删除元素个数，为0时不删除，可以用于插入
> param3~paramn:要添加入数组的值
```javascript
num.splice(5,2);//删除下标为5和6的元素
num.splice(5,0,1,2,3);//在下标5处插入元素1，2，3
num.splice(5,1,1,2,3);//删除下标5的元素，同时插入元素1，2，3
```
## 二维和多维数组
> javascript只支持一维数组，不支持矩阵，却可以用数组嵌套实现矩阵或任一多维数组
```javascript
var arrs1 = [[1,2,3],[4,5,6]];
```
## 数组方法
|方法名 |   描述 |
|---|---|
|concat|连接2个或更多数组，并返回结果|
|every|对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回true|
|filter|对数组中的每一项运行给定函数，返回该函数会返回 true的项组成的数组|
|forEach|对数组中的每一项运行给定函数。这个方法没有返回值|
|join|将所有的数组元素连接成一个字符串|
|indexOf|返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1|
|lastIndexOf|返回在数组中搜索到的与给定参数相等的元素的索引里最大的值|
|map|对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组|
|reverse|颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在的第一个|
|slice|传入索引值，将数组里对应索引范围内的元素作为新数组返回|
|some|对数组中的每一项运行给定函数，如果任一项返回 true，则返回true|
|sort|按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数|
|toString|将数组作为字符串返回|
|valueOf|和 toString类似，将数组作为字符串返回|
### 数组合并 concat()
- 语法
```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
```
> 此方法不会更改现有数组，而是返回一个新数组。
- 示例
```javascript
var zero = 0;
var pn = [1, 2, 3];
var nn = [-3, -2, -1];
var fullnum = nn.concat(zero, pn);

结果:
fullmum = [-3, -2, -1, 0, 1, 2, 3];
```
### 迭代器函数
#### every()
- 语法
```javascript
arr.every(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
```
> every() 对数组中的每个元素进行迭代，直到返回false；
- 示例
```javascript
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
```
#### some()
- 语法
```javascript
arr.some(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
```
> some() 对数组中的每个元素进行迭代，直到返回true；
- 示例
```javascript
var print_arry = function(x) {
  console.log(x);
  return true;
}
var isEven = function(x) {
  console.log(x);
  return (x % 2 == 0) ? true : false;
};
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//执行，直至false
console.log("every():");
num.every(isEven);
//执行，直至true
console.log("some():");
num.some(isEven);
```

#### forEach()
- 语法
```javascript
array.forEach(callback(currentValue, index, array){
    //do something
}, this)

array.forEach(callback[, thisArg])
```

- 示例
```javascript
num.forEach(function(x) {
  console.log(x % 2 == 0);
});
```
#### map()
- 语法
```javascript
let array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
```
> map()创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
- 示例
```javascript
var myMap = num.map(isEven);

结果：
myMap = [false,true,false,true,false,true,false,true,false,true]
```
#### filter()
- 语法
```javascript
var new_array = arr.filter(callback[, thisArg])
```
- 参数
  - `callback` 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。返回true表示保留该元素（通过测试），false则不保留。
  - `thisArg` 可选。如果为 filter 提供一个 thisArg 参数，则它会被作为 callback 被调用时的 this 值。否则，callback 的 this 值在非严格模式下将是全局对象，严格模式下为 undefined
> 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
> filter()会遍历数组，结果返回新数组由使函数返回true的**元素**决定
> 注意：是**元素**，而不是函数返回值；
- 示例
```javascript
var myFilter = num.filter(isEven);

结果：
myFilter = [ 2, 4, 6, 8, 10];
```
#### reduce()
- 语法
```javascript
arr.reduce(callback[, initialValue])
```
> 对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。

- 参数
  - `callback` 执行数组中每个值的函数，包含四个参数：
    - `accumulator` 累加器累加回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（如下所示）。
    - `currentValue` 数组中正在处理的元素。
    - `currentIndex` 数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为0，否则为索引为1。
    - `array` 调用reduce的数组

  - `initialValue` [可选] 用作第一个调用 callback的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。

```javascript
var myReduce = num.reduce(function(previous, current, index) {
  return previous + current;
});
console.log(myReduce);

结果：
55
```
---
[返回上级目录README.md](../README.md)
