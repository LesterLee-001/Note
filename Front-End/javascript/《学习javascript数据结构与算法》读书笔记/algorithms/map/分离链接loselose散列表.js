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

//lose lose函数：将每个键值中的每个字母的ASCII值相加
function HashTable() {
  var table = [];
  //实现散列函数
  var loseloseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      //key.charCodeAt 等到每个字母的ASCII值
      hash += key.charCodeAt(i);
    }
    //37可以是任意数，求余数
    return hash % 37;
  };
  //存储key与value
  var ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
    //重写只是为了方便输出结果
    this.toString = function() {
      return '[' + this.key + '-' + this.value + ']';
    };
  };
  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    if (table[position] == undefined) {
      //第一次插入初始化 linkedList实例
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };
  this.remove = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] != undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      //只有一个元素时
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  };
  this.get = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      //遍历链表来寻找键/值
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      //检查只有一个元素的情况
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };
  this.print = function() {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ':' + table[i]);
      }
    }
  };
}
var hash = new HashTable();
hash.put('a', 1);
hash.put('b', 2);
hash.put('bo', 3);
hash.print();

console.log(hash.get('b'));
console.log(hash.get('bo'));

console.log(hash.remove('jj'));
hash.print();
console.log(hash.remove('b'));
hash.print();
