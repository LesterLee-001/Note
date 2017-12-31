function ArrayList() {
  var array = [];
  this.insert = function(item) {
    array.push(item);
  };
  this.toString = function() {
    return array.join();
  };
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

  //搜索算法
  //顺序搜索
  this.sequentialSearch = function(item) {
    for (var i = 0; i < array.length; i++) {
      if (item === array[i]) {
        return i;
      }
    }
    return -1;
  };
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
}

function createNonSortedArray(size) {
  var array = new ArrayList();
  for (var i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}
var array = createNonSortedArray(8);
console.log(array.toString());

array.mergeSort();
console.log(array.toString());
array = new ArrayList();
array.insert(3);
array.insert(5);
array.insert(1);
array.insert(6);
array.insert(4);
array.insert(7);
array.insert(2);
console.log('快速排序');
console.log(array.toString());
array.quickSort();
console.log(array.toString());
