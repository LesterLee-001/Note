/*
  2017-10-10 noone
*/
//创建和初始化
var arr1 = new Array();
var arr2 = new Array(3);
var arr3 = new Array("1", "2");
var arr4 = [];
var arr5 = [1, 2, 3, 4];
//数组遍历
var week = ["a", "b", "c", "d", "e", "f"];
console.log("数组遍历：");
for (var i = 0; i < week.length; i++) {
  console.log(week[i]);
}
//数组删除和添加元素
var arra = [1, 2];
//添加
//1.直接在最后一位加
arra[arra.length] = 3;
//2.push
arra.push(4);
arra.push(5, 6, 7, 8, 9, 10);
//3.把数值插入到数组首位
arra.unshift(-1);
arra.unshift(-3, -2);
//删除元素
//1.最后元素删除
arra.pop();
//2.删除数组第一个元素
arra.shift();
arra.shift();
arra.shift();
console.log("数组增删：");
for (var i = 0; i < arra.length; i++) {
  console.log(arra[i]);
}
//删除从任意位置开始，任意长度的数组
arra.splice(5, 2);
//删除从任意位置开始，任意长度的数组，同时新增元素
arra.splice(5, 0, 1, 3, 6);
console.log("数组任意增删：");
for (var i = 0; i < arra.length; i++) {
  console.log(arra[i]);
}

/////////////////////////////////////////////
//二维数组
var arrs1 = [
  [1, 2, 3],
  [4, 5, 6]
];
for (var i = 0; i < arrs1.length; i++) {
  var arrtmp = arrs1[i];
  for (var j = 0; j < arrtmp.length; j++) {
    console.log(arrtmp[j]);
  }
}
console.log("=====================");
/////////////////////////////////////////////
//数组合并
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var a3 = [7, 8, 9];
var a4 = a3.concat();
for (var i = 0; i < a4.length; i++) {
  console.log(a4[i]);
}
