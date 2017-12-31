function Stack() {
  var items = [];
  this.push = function(element) {
    items.push(element);
  };
  this.pop = function() {
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
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
    console.log(items.toString());
  };
}

//十进制转2进制
function divideBy2(decNumber) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  while (!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(divideBy2(10));

//十进制转多进制
function baseConverter(decNumber,base) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
    digits = '0123456789ABCDEF';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()){
    binaryString += digits[remStack.pop()];
  }
  return binaryString;
}

console.log(baseConverter(17,16));
