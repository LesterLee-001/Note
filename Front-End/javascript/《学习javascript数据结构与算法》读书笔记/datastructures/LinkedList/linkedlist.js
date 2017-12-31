function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
  };
  var length = 0;
  var head = null;
  // 向链表尾部添加新的项
  this.append = function(element) {
    var node = new Node(element);
    //充当指针
    var current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      //找到最后一项，将其next赋为node
      current.next = node;
    }
    length++;
  };
  //在特定位置插入新的项
  this.insert = function(position, element) {
    //检查越界
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous, index = 0;
      if (position === 0) {
        node.next = current.element;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };
  //在特定位置移除项
  this.removeAt = function(position) {
    //检查越界值
    if (position > -1 && position < length) {
      var current = head,
        previous, index = 0;
      //移除第一项
      if (position === 0) {
        //head等于下一项
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来；跳过current，从而移除它
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
  //从链表中移除一项
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
  };
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
}
var linkedList = new LinkedList();
linkedList.append('a');
linkedList.append(1);
linkedList.append(3);
linkedList.append('b');
linkedList.print();
console.log(linkedList.indexOf(1));
linkedList.insert(1, 'inserthere');
linkedList.remove('1');
linkedList.print();
linkedList.append(1);
linkedList.append(1);
linkedList.print();
linkedList.remove(1);
linkedList.print();
