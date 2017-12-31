# JavaScript 队列

##### 作者
noone

##### 日期
2017-10-11

##### 标签
   javascript , 队列

---

<!-- toc orderedList:0 depthFrom:2 depthTo:4 -->

* [特点](#特点)
* [实现](#实现)
* [优先队列](#优先队列)
* [循环队列](#循环队列)

<!-- tocstop -->
## 特点
> 先进先出FIFO
## 实现
```javascript
function Queue() {
  var items = [];
  //向队列尾部添加一个（或多个）新的项
  this.enqueue = function(element) {
    items.push(element);
  };
  //移除队列的第一项，并返回被移除的元素
  this.dequeue = function() {
    return items.shift();
  };
  //返回队列的第一个元素
  this.front = function() {
    return items[0];
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
var queue = new Queue();
queue.enqueue("John");
queue.enqueue("Jack");
```
## 优先队列
如：机场登机，头等舱优先
实现思路：
1. 设置优先级，在正确的位置添加元素；
```javascript
//最小优先队列
function PriorityQueue(){
    var items = [];
    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element,priority){
        var queueElement = new QueueElement(element,priority);
        if (this.isEmpty()){
          items.push(queueElement);
        }else{
          var added = false;
          for(var i=0;i < items.length;i++){
            if(queueElement.priority<items[i].priority){
              items.splice(i,0,queueElement);
              added=true;
              break;
            }
          }
          if(!added){
            items.push(queueElement);
          }
        }
    }
    //移除队列的第一项，并返回被移除的元素
    this.dequeue = function() {
      return items.shift();
    };
    //返回队列的第一个元素
    this.front = function() {
      return items[0];
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
    this.print = function() {
      for (var i = 0; i < items.length; i++) {
        console.log(items[i].element);
      }
    };
  }
  var priorityQueue = new PriorityQueue();
  priorityQueue.enqueue("JJ", 2);
  priorityQueue.enqueue("YY", 1);
  priorityQueue.enqueue("XX", 1);
  priorityQueue.enqueue("OO", 2);
  priorityQueue.print();
```
2. 用入列操作，然后按照优先级移除它们；

## 循环队列
如：击鼓传花
```javascript

```
---
[返回上级目录README.md](../README.md)
