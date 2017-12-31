//ES6 中已经实现
function Set() {
  var items = {};
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };
  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };
  this.has = function(value) {
    //  return value in items;
    // 更好实现
    return items.hasOwnProperty(value);
  };
  this.clear = function() {
    this.items = {};
  };
  this.size = function() {
    //Object.keys(object) 返回一个包含给定对象所有属性的数组，对浏览器版本有要求
    return Object.keys(items).length;
    //通用方法
    //var count=0;
    // for(var prop in items){
    //   if(items.hasOwnProperty(prop)){
    //     ++count;
    //   }
    // }
    // return count;
  };
  this.values = function() {
    //版本限制
    return Object.keys(items);
    // 通用版本
    // var keys=[];
    // for(var key in items){
    //   keys.push(key);
    // }
    // return keys;
  };
  //并集
  this.union = function(otherSet) {
    var unionSet = new Set();
    var values = this.values;
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
  //交集
  this.intersection = function(otherSet) {
    var intersectionSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };
  //差集
  this.difference = function(otherSet) {
    var differenceSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };
  //是否是别人的子集；
  this.subset = function(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      var values = this.values();
      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}
var set = new Set();
set.add(1);
set.add("2a");
console.log(set.values());
console.log(set.has(1));
console.log(set.has('1'));
console.log(set.size());

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(4);
setB.add(2);
setB.add(3);

var intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

var differenceAB = setA.difference(setB);
console.log(differenceAB.values());
