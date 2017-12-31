//堆栈对象
function Stack() {
  var items = [];
  //添加元素
  this.push = function(element) {
    items.push(element);
  };
  //删除元素
  this.pop = function() {
    return items.pop();
  };
  //最后一个元素
  this.top = function() {
    return items[items.length - 1];
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
    console.log(items.toString());
  };
}

function baseConverter(decNumber, base) {
  var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    //插入余数
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}
console.log(baseConverter(10086, 2));
