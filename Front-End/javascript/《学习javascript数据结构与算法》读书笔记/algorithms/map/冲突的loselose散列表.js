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
  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    console.log(position + '-' + key);
    table[position] = value;
  };
  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined;
  };
  this.get = function(key) {
    return table[loseloseHashCode(key)];
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
