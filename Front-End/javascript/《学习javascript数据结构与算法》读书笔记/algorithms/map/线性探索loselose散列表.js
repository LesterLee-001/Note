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
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (table[index] !== undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };
  this.remove = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined;
        return true;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          table[index] = undefined;
          return true;
        }
      }
    }
    return false;
  };
  this.get = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          return table[index].value;
        }
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
hash.put('ap', 13);
hash.print();
console.log(hash.get('bo'));
console.log(hash.get('b'));
hash.remove('b');
hash.print();
