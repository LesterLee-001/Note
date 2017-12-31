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
  //移除队列的第一项，并返回被移除的元素
  this.dequeue = function() {
    return items.shift();
  };
  //返回队列的第一个元素
  this.front = function() {
    return items[0];
  };
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
