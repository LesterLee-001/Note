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
  this.BFS = function(v) {
    //初始化颜色数组
    var color = initializeColor();
    var queue = new Queue();
    var d = [];
    var pred = [];
    //初始顶点入队列
    queue.enqueue(v);
    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }
    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = adjList.get(u);
      color[u] = 'grey';
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
    }
    return {
      distances: d,
      predecessors: pred
    };
  };
  this.shortestPath = function(v){

    var shortestPathA = graph.BFS(v);
    //构建从顶点A到其他顶点的最短路径；
    var fromVertex = v;
    //存储剩下的顶点
    var otherVertices = [];
    for(var i = 0 ;i<myVertices.length;i++){
      if(myVertices[i]!==v){
        otherVertices.push(myVertices[i]);
      }
    }
    for (var i = 0; i < otherVertices.length; i++) {
      //逐个取出顶点
      var toVertex = otherVertices[i];
      //利用堆栈，逆向思维，反向一层层往上回溯，找到目标节点的上一节点，知道节点到达开始节点
      var path = new Stack();
      for (var u = toVertex; u != fromVertex; u = shortestPathA.predecessors[u]) {
        path.push(u);
      }
      path.push(fromVertex);
      var s = path.pop();
      while (!path.isEmpty()) {
        s += '-' + path.pop();
      }
      console.log(s);
    }
  };
}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

function printNode(value) {
  console.log('Visited vertex:' + value);
}
var shortestPathA = graph.BFS(myVertices[1]);
console.log(shortestPathA);
graph.shortestPath(myVertices[1]);
