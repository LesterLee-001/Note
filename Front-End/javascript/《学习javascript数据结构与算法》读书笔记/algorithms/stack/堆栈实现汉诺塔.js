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
function hanoi(dish,a,b,c){

    if(dish > 0 ){
      hanoi (dish-1,a,c,b);
      stack3.push(stack1.pop());
      hanoi (dish-1,b,a,c);
    }
}
var stack1=new Stack();
var stack2=new Stack();
var stack3=new Stack();
for(var i=1; i<5;i++){
  stack1.push(5-i);
}
hanoi(4, stack1, stack2,stack3);
