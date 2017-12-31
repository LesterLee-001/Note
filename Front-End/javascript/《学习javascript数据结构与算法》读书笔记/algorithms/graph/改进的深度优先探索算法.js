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
  var time = 0;
  this.DFS = function() {
    var color = initializeColor();
    var d = []; //发现时间
    var f = []; //完成探索时间
    var p = []; //前溯顶点
    time = 0;
    for (var i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
    };
  };
  var DFSVisit = function(u, color, d, f, p) {
    console.log('discovered' + u);
    color[u] = 'grey';
    d[u] = ++time;
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === 'white') {
        p[w] = u;
        DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = 'black';
    f[u] = ++time;
    console.log('explored' + u);
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
graph.DFS();
console.log('拓扑排序');
//拓扑排序
graph = new Graph();
myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
var result = graph.DFS();
