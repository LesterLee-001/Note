function Queue() {
  var items = [];
  this.enqueue = function(element) {
    items.push(element);
  };
  this.dequeue = function() {
    return items.shift();
  };
  this.front = function() {
    return items[0];
  };
  this.isEmpty = function() {
    return items.length == 0;
  };
  this.clear = function() {
    items = [];
  };
  this.size = function() {
    return items.length;
  };
  this.print = function() {
    console.log(items.toString());
  };
}


function Dictionary() {
  var items = {};
  this.set = function(key, value) {
    items[key] = value;
  };
  this.remove = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };
  this.has = function(key) {
    return key in items;
  };
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };
  this.clear = function() {
    items = {};
  };
  this.size = function() {
    return Object.keys(items).length;
  };
  this.keys = function() {
    var keys = [];
    for (var key in items) {
      if (this.has(key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  this.values = function() {
    var values = [];
    for (var key in items) {
      if (this.has(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };
}

function Graph() {
  //存储顶点
  var vertices = [];
  //存储邻接表
  var adjList = new Dictionary();
  this.addVertex = function(v) {
    vertices.push(v);
    adjList.set(v, []);
  };
  //无向图添加双边，有向图二选一
  this.addEdge = function(v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };
  //
  this.toString = function() {
    var s = '';
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + '->';
      var neighbors = adjList.get(vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + '';
      }
      s += '\n';
    }
    return s;
  };
  //添加辅助数组color，初始化都为白色
  var initializeColor = function() {
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };
  this.bfs = function(v, callback) {
    //初始化颜色数组
    var color = initializeColor();
    var queue = new Queue();
    //初始顶点入队列
    queue.enqueue(v);
    while(!queue.isEmpty()){
      //取出顶点
      var u = queue.dequeue();
      //获取该顶点的邻接顶点
      var neighbors = adjList.get(u);
      //该顶点已经被发现
      color[u] = 'grey';
      //遍历邻接顶点
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if(color[w] === 'white'){
          //如果顶点未被发现，入队列，然后置灰
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      //已探索的置黑
      color[u] = 'black';
      if(callback){
        callback(u);
      }
    }
  };
}

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
for(var i=0;i<myVertices.length;i++){
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

function printNode(value){
  console.log('Visited vertex:'+value);
}
graph.bfs(myVertices[1],printNode);
