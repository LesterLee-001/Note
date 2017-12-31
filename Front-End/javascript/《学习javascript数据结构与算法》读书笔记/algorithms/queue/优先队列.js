//最小优先队列
function PriorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        //如果属性值比队列中的小，插入元素，其他元素后移
        //如果用大于号，则为最大值优先队列
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        items.push(queueElement);
      }
    }

  };
  //删除元素
  this.dequeue = function() {
    return items.shift();
  };
  //第一个元素
  this.front = function() {
    return items[0];
  };
  //是否为空
  this.isEmpty = function() {
    return items.length == 0;
  };
  this.size = function() {
    return items.length;
  };
  this.clear = function() {
    items = [];
  };
  this.print = function() {
        for (var item in items) {
            console.log(items[item].element+":"+items[item].priority);
        }
    };
}
var queue = new PriorityQueue();
queue.enqueue(123,2);
queue.enqueue(234,3);
queue.enqueue(345,2);
queue.enqueue(321,1);
queue.enqueue(432,4);
queue.enqueue(543,1);
queue.print();

//结果

// 321:1
// 543:1
// 123:2
// 345:2
// 234:3
// 432:4
