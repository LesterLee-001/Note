function Queue(){
  var items= [];
  this.enqueue = function(element){
    items.push(element);
  };
  this.dequeue = function(){
    return items.shift();
  };
  //第一个元素
  this.front = function() {
    return items[0];
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
  this.print = function(){
    console.log(items.toString());
  };
}

function hotPotato(nameList,num){
  var queue = new Queue();
  for(var i = 0 ;i<nameList.length;i++){
    queue.enqueue(nameList[i]);
  }
  var eliminated = '';
  while(queue.size()>1){
    for(var i=0 ; i<num ;i++){
      //讲队列开头移除的值出入到队列尾部
      queue.enqueue(queue.dequeue());
    }
    //队列开头的人被淘汰
    eliminated = queue.dequeue();
    console.log(eliminated+'在击鼓传花中被淘汰。');
  }
  return queue.dequeue();
}
var names = ['A','B','C','D','E','F','G'];
var winner = hotPotato(names,8);
console.log('胜利者'+winner);
