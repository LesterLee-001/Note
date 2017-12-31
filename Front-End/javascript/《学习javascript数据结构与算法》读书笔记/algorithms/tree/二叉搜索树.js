//BST 二叉搜索树
function BinarySearchTree() {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  //定义根节点
  var root = null;
  this.insert = function(key) {
    var newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      this.insertNode(root, newNode);
    }
  };
  //辅助函数
  this.insertNode = function(node, newNode) {
    //如果新节点的key小于对比节点，，插入左子节点
    if (newNode.key < node.key) {
      //对比节点左子节点为空，直接插
      if (node.left === null) {
        node.left = newNode;
      } else {
        //对比节点左子节点与新节点比较插入；
        this.insertNode(node.left, newNode);
      }
    } else {
      //如果新节点的key大于等于对比节点，插入右子节点
      //对比节点右子节点为空，直接插
      if (node.right === null) {
        node.right = newNode;
      } else {
        //对比节点右子节点与新节点比较插入；
        this.insertNode(node.right, newNode);
      }
    }
  };

  //在BST中查找一个键，如果存在返回true，反之false；
  this.search = function(key) {
    return searchNode(root, key);
  };
  var searchNode = function(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };
  //通过中序遍历方式遍历所有节点(从最小到最大顺序访问所有节点)
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };
  //回调函数用来定义对遍历到的每个节点进行的操作
  var inOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };
  //通过先序遍历方式遍历所有节点（以优先于后代节点的顺序访问每一个节点）
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  };
  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };
  //通过后序遍历方式遍历所有节点（先访问后代节点，再访问节点本身）
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };
  var postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };
  this.min = function() {
    return minNode(root);
  };
  var minNode = function(node) {
    if (node) {
      //如果node存在且左子节点有值
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };
  this.max = function() {
    return maxNode(root);
  };
  var maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };
  this.remove = function(key) {
    root = removeNode(root, key);
  };
  var removeNode = function(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else { //等于node.key
      //第一种情况---一个叶节点
      if (node.left === null && node.right === null) {
        //返回null，讲对应的父节点的指针赋为null
        node = null;
        return node;
      }
      //第二种情况，只有一个子节点的节点
      if (node.left === null) {
        // 直接跳过当前节点，返回右子节点给父指针
        node = node.right;
        return node;
      } else if (node.right === null) {
        // 直接跳过当前节点，返回左子节点给父指针
        node = node.left;
        return node;
      }
      //第三种情况，有两个节点
      //1.找到右边的最小节点
      var aux = findMinNode(node.right);
      //2.更新节点值
      node.key = aux.key;
      //3.移除右子树最小节点
      node.right = removeNode(node.right, aux.key);
      return node;
    }

  };
  //找到最小节点
  var findMinNode = function(node){
    if (node) {
      //如果node存在且左子节点有值
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  };

}

function printNode(value) {
  console.log(value);
}
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.inOrderTraverse(printNode);
console.log('------------');
tree.preOrderTraverse(printNode);

console.log('------------');
tree.postOrderTraverse(printNode);
console.log('min is ' + tree.min());

console.log('max is ' + tree.max());
console.log(tree.search(1));
tree.remove(15);
console.log('------------');
tree.postOrderTraverse(printNode);
