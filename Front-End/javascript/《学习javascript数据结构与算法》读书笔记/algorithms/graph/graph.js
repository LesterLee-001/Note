function Dictionary(){
  var items = {};
  this.set = function(key,value){
    items[key]=value;
  };
  this.remove = function(key){
      if(this.has(key)){
        delete items[key];
        return true;
      }
      return false;
  };
  this.has =function(key){
    return key in items;
  };
  this.get = function(key){
    return this.has(key)?items[key]:undefined;
  };
  this.clear = function(){
    items= {};
  };
  this.size =function(){
    return Object.keys(items).length;
  };
  this.keys = function(){
    var keys=[];
    for(var key in items){
      if(this.has(key)){
        keys.push(key);
      }
    }
    return keys;
  };
  this.values = function(){
    var values=[];
    for(var key in items){
      if(this.has(key)){
        values.push(items[key]);
      }
    }
    return values;
  };
}
function Graph(){
  //存储顶点
  var vertices = [];
  //存储邻接表
  var adjList = new Dictionary();
  this.addVertex = function(v){
    vertices.push(v);
    adjList.set(v,[]);
  };
  //无向图添加双边，有向图二选一
  this.addEdge = function(v,w){
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };
  //
  this.toString = function(){
    var s = '';
    for(var i=0;i<vertices.length;i++){
      s+=vertices[i]+'->';
      var neighbors = adjList.get(vertices[i]);
      for(var j=0;j<neighbors.length;j++){
        s+=neighbors[j]+'';
      }
      s+='\n';
    }
    return s;
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

console.log(graph.toString());
