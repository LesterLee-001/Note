//every
var print_arry = function(x) {
  console.log(x);
  return true;
}
var isEven = function(x) {
  console.log(x);
  return (x % 2 == 0) ? true : false;
};
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//执行，直至false
console.log("===every():");
num.every(isEven);
//执行，直至true
console.log("===some():");
num.some(isEven);
//concat
console.log("===concat():");
var zero = 0;
var pn = [1, 2, 3];
var nn = [-3, -2, -1];
var fullnum = nn.concat(zero, pn);
fullnum.every(print_arry);
//forEach

console.log("===forEach():");
num.forEach(function(x) {
  console.log(x % 2 == 0);
});
//map
console.log("===map():");
var myMap = num.map(isEven);
myMap.every(print_arry);
//filter
var myFilter = num.filter(isEven);
console.log("===filter():");
myFilter.every(print_arry);
//reduce
var myReduce = num.reduce(function(previous, current, index) {
  return previous + current;
});
console.log("===reduce");
console.log(myReduce);
