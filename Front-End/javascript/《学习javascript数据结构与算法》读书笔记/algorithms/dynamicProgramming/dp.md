# JavaScript 动态规划

###### 作者

noone

###### 日期

2017-11-21

###### 标签

javascript , 动态规划 , DP ,Dynamic Programming

--------------------------------------------------------------------------------

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->
<!-- code_chunk_output -->

* [概念](#概念)
* [著名问题](#著名问题)
* [最少硬币找零问题](#最少硬币找零问题)

<!-- /code_chunk_output -->
## 概念
动态规划是将复杂问题分解成更小子问题来解决的优化技术。
- 定义子问题；
- 实现要反复执行而解决子问题的部分
- 识别并求解出边界条件
## 著名问题
- **背包问题**：给出一组项目，各有值和容量，目标是找出总值最大的项目的集合。限制->总容量必须小于等于背包的容量
- **最长公共子序列**：找出一组序列的最长公共子序列，可由另一序列删除元素但不改变余下元素的顺序而得
- **矩阵链相乘**：给出一系列矩阵，目标是找到这些矩阵相乘的最高效方法（计算次数尽可能少）。相乘操作不会进行，解决方案就是找到这些矩阵各自相乘的顺序
- **硬币找零**：给出面额为d1...dn的一定数量的硬币和要找零的钱数，找出有多少种找零的方法
- **图的全源最短路径**：对所有顶点对（u，v），找出从u到v的最短路径
## 最少硬币找零问题
给出要找零的钱数，以及可用硬币的面额（d1...dn）及其数量，找到所需的最少硬币个数。
> 具体实现[点此查看](./最少硬币找零问题dp实现.js)
```
//输出结果
new Min 1 for 1
new Min 1,1 for 2
new Min 1,1,1 for 3
new Min 1,1,1,1 for 4
new Min 1,1,1,1,1 for 5
new Min 5 for 5
new Min 1,5 for 6
new Min 1,1,5 for 7
new Min 1,1,1,5 for 8
new Min 1,1,1,1,5 for 9
new Min 1,1,1,1,1,5 for 10
new Min 5,5 for 10
new Min 10 for 10
new Min 1,10 for 11
new Min 1,1,10 for 12
new Min 1,1,1,10 for 13
new Min 1,1,1,1,10 for 14
new Min 1,1,1,1,1,10 for 15
new Min 5,10 for 15
new Min 1,5,10 for 16
new Min 1,1,5,10 for 17
new Min 1,1,1,5,10 for 18
new Min 1,1,1,1,5,10 for 19
new Min 1,1,1,1,1,5,10 for 20
new Min 5,5,10 for 20
new Min 10,10 for 20
new Min 1,10,10 for 21
new Min 1,1,10,10 for 22
new Min 1,1,1,10,10 for 23
new Min 1,1,1,1,10,10 for 24
new Min 1,1,1,1,1,10,10 for 25
new Min 5,10,10 for 25
new Min 25 for 25
new Min 1,25 for 26
new Min 1,1,25 for 27
new Min 1,1,1,25 for 28
new Min 1,1,1,1,25 for 29
new Min 1,1,1,1,1,25 for 30
new Min 5,25 for 30
new Min 1,5,25 for 31
new Min 1,1,5,25 for 32
new Min 1,1,1,5,25 for 33
new Min 1,1,1,1,5,25 for 34
new Min 1,1,1,1,1,5,25 for 35
new Min 5,5,25 for 35
new Min 10,25 for 35
new Min 1,10,25 for 36
[ 1, 10, 25 ]
```
--------------------------------------------------------------------------------

[返回上级目录README.md](../README.md)
