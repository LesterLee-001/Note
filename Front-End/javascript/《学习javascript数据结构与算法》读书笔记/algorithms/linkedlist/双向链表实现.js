function DoublyLinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
  var length = 0;
  var head = null;
  var tail = null; //链表最后一项
  // 向链表尾部添加新的项
  this.append = function(element) {
    var node = new Node(element),
      current;
    if (!head) {
      head = node;
      tail = node;
    } else {
      current = tail;
      node.prev = current;
      current.next = node;
      tail = node;
    }
    length++;
  };
  //在特定位置插入新的项
  this.insert = function(position, element) {
    //检查越界
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          head.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };
  //在特定位置移除项
  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;
      if (position === 0) {
        head = current.next;
        //如果只有一项，则更新tail
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  //返回元素第一次出现的索引，不存在返回-1
  this.indexOf = function(element) {
    var current = head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  this.isEmpty = function() {
    return length === 0;
  };
  this.size = function() {
    return length;
  };
  this.toString = function() {
    var current = head,
      string = '';
    while (current) {
      string += ',' + current.element;
      current = current.next;
    }
    return string.slice(1);
  };
  this.print = function() {
    console.log(this.toString());
  };
  this.getHead = function() {
    return head;
  }
  this.getTail = function(){
    return tail;
  }
}
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append('a');
doublyLinkedList.append(1);
doublyLinkedList.append(3);
doublyLinkedList.append('b');
doublyLinkedList.print();
console.log(doublyLinkedList.indexOf(1));
doublyLinkedList.insert(1, 'inserthere');
doublyLinkedList.remove('1');
doublyLinkedList.print();
doublyLinkedList.append(1);
doublyLinkedList.append(1);
doublyLinkedList.print();
doublyLinkedList.remove(1);
doublyLinkedList.print();
