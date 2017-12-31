//ES6中包含的Map
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
var dictionary= new Dictionary();
dictionary.set("a",1);
dictionary.set("b",2);
dictionary.set("c",3);

console.log(dictionary.keys());
console.log(dictionary.values());
