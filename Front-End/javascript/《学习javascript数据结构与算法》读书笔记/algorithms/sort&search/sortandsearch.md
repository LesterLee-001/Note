# JavaScript 排序与搜索

###### 作者

noone

###### 日期

2017-11-20

###### 标签

javascript , 排序 , 搜索

--------------------------------------------------------------------------------


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->
<!-- code_chunk_output -->

* [完整实现](#完整实现)
* [待排序和搜索的数据结构](#待排序和搜索的数据结构)
* [排序算法](#排序算法)
	* [冒泡排序](#冒泡排序)
	* [选择排序](#选择排序)
	* [插入排序](#插入排序)
	* [归并排序](#归并排序)
	* [快速排序](#快速排序)
* [搜索算法](#搜索算法)
	* [顺序搜索](#顺序搜索)
	* [二分搜索](#二分搜索)

<!-- /code_chunk_output -->

## 完整实现

[点此查看](./sortandsearch.js)

---

## 待排序和搜索的数据结构

```javascript
function ArrayList(){
  var array = [];
  this.insert = function(item){
    array.push(item);
  };
  this.toString = function(){
    return array.join();
  };
}
```

---

## 排序算法

### 冒泡排序

比较任何相邻的两项，如果第一个比第二个大，则交换他们。

> 复杂度 O(n^2)

```javascript
//冒泡排序
this.bubbleSort = function() {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
};
//交换元素
var swap = function(index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
}
```

### 选择排序

是一种原址比较，找到最小值放在第一位，找到第二小放第二位，以此类推

> 复杂度 O(n^2)

```javascript
//选择排序
this.selectionSort = function() {
  var length = array.length;
  var indexMin;
  for (var i = 0; i < length; i++) {
    indexMin = i;
    for (var j = i; j < length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(i, indexMin);
    }
  }
};
```

### 插入排序

每次排序一个元素，假定第一项已经排序，第二项应在1前还是1后，以此类推；
> 选择小型排序时，性能比冒泡和选择排序好

```javascript
//插入排序
this.insertionSort = function() {
  var length = array.length;
  var j;
  var temp;
  for (var i = 0; i < length; i++) {
    j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
};
```

### 归并排序

将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并到较大数组，直至只有一个大数组；

> 复杂度O(nlog(n))

```javascript
//归并排序
this.mergeSort = function() {
  array = mergeSortRec(array);
};
var mergeSortRec = function(array) {
  var length = array.length;
  if (length === 1) {
    return array;
  }
  var mid = Math.floor(length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right));
};
var merge = function(left, right) {
  var result = [];
  var il = 0;
  var ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
};
```
### 快速排序

将原始数组分为较小的数组
- 从数组中选择中间的一项作为主元
- 创建两个指针，左边一个指向数组第一个项，右边一个指向数组最后一个项。
  - 移动左指针直到找到一个比主元大的元素；
  - 移动右指针直到找到一个比主元小的元素；
  - 交换他们；
  - 重复这个过程，直到左指针超越右指针，这个过程使得比主元小的元素都在主元之前，大的在后；
- 对划分后的小组元，重复之前的步骤直至完全排序

> 复杂度O(nlog(n))，性能通常比同复杂度的算法要好；
```javascript
//快速排序
this.quickSort = function() {
  quick(array, 0, array.length - 1);
};
var quick = function(array, left, right) {

  var index;
  if (array.length > 1) {
    //初次调用针对整个数组得到index
    index = partition(array, left, right);

    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
};
//快速排序划分过程
var partition = function(array, left, right) {
  //选择中间项作为主元
  var pivot = array[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;
  //指针没有相互交错
  while (i <= j) {
    //移动左指针，直到找到一个比主元大的元素
    while (array[i] < pivot) {
      i++;
    }
    //移动右指针，直到找到一个比主元小的元素
    while (array[j] > pivot) {
      j--;
    }
    //说明左项比右项大
    if (i <= j) {
      swapQuickSort(array, i, j);
      i++;
      j--;
    }
  }
  //成功返回左指针的索引，用于下次换组
  return i;
};
//根据给定索引交换元素
var swapQuickSort = function(array, index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
};
```
---

## 搜索算法

### 顺序搜索
将每一个数据结构中的元素和我们要查找的元素进行比较。
> 最低效

```javascript
//顺序搜索
this.sequentialSearch = function(item) {
  for (var i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return i;
    }
  }
  return -1;
};
```

### 二分搜索
要求被搜索的数据结构已经排序。
1. 选择数组的中间值；
2. 如果选中的值时待搜索值，结束；
3. 如果待搜索值比选择的值要小，则返回步骤1并在选中值的左边子数组中寻找；
4. 如果待搜索值比选择的值要大，则返回步骤1并在选中值的右边子数组中寻找；

```javascript
//二分查找
this.binarySearch = function(item) {
  //先快速排序
  this.quickSort();
  var low = 0;
  var hight = array.length - 1;
  //中间值索引
  var mid;
  //中间值元素
  var element;
  //直到遍历完所有数组下标
  while (low <= hight) {
    mid = Math.floor((low + hight) / 2);
    element = array[mid];
    if (elemnet < item) {
      //在中间值右边子数组
      low = mid + 1;
    } else if (element > item) {
      //在中间值左边子数组
      hight = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
```

--------------------------------------------------------------------------------

[返回上级目录README.md](../README.md)
