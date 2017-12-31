# Java基础

##### 作者
noone

##### 日期
2017-09-01

##### 标签
java  , java基础

----

<!-- toc orderedList:0 depthFrom:2 depthTo:4 -->

* [介绍](#介绍)
  * [1. 关键字(掌握)](#1-关键字掌握)
    * [特点：](#特点)
    * [注意事项：](#注意事项)
  * [2. 标识符(掌握)](#2-标识符掌握)
    * [注意事项：](#注意事项-1)
    * [常见的命名规则(见名知意)](#常见的命名规则见名知意)
  * [注释(掌握)](#注释掌握)
* [数据类型](#数据类型)
  * [常量(掌握)](#常量掌握)
  * [变量(掌握)](#变量掌握)
  * [8大数据类型(掌握)](#8大数据类型掌握)
  * [数据类型转换(掌握)](#数据类型转换掌握)
* [运算符](#运算符)
  * [算数运算符](#算数运算符)
  * [布尔运算符](#布尔运算符)
  * [关系运算符](#关系运算符)
  * [按位运算符](#按位运算符)
* [语句](#语句)
  * [if](#if)
  * [for](#for)
    * [计数器for](#计数器for)
    * [Java for each循环](#java-for-each循环)
  * [while](#while)
    * [Java while 循环](#java-while-循环)
    * [Java do while循环](#java-do-while循环)
  * [Java Break语句](#java-break语句)
  * [Java continue语句](#java-continue语句)

<!-- tocstop -->
## 介绍
### 1. 关键字(掌握)
> 被Java语言赋予特定含义的单词

```
abstract class    extends implements null      strictfp     true
assert   const    false   import     package   super        try
boolean  continue final   instanceof private   switch       void
break    default  finally int        protected synchronized volatile
byte     do       float   interface  public    this         while
case     double   for     long       return    throw
catch    else     goto    native     short     throws
char     enum     if      new        static    transient
```

####  特点：
> 全部小写。
####  注意事项：
  - goto和const作为保留字存在。
  - 类似于Notepad++这样的高级记事本会对关键字有特殊颜色标记

### 2. 标识符(掌握)
> 标识符是程序员用来命名变量，方法，类或标签的单词。关键字和保留字不能用作标识符。标识符必须以字母，美元符号（$）或下划线（_）开头;后续字符可以是字母，美元符号，下划线或数字。

> Java标识符区分大小写。例如， myValue 和 MyValue 是不同的标识符。
#### 注意事项：
- 不能以数字开头
- 不能是java中的关键字
- 区分大小写
#### 常见的命名规则(见名知意)
- 包 全部小写
  - 单级包：小写
    > liuyi,com

  - 多级包：小写，并用.隔开
    > cn.itcast,com.baidu

- 类或者接口
  - 一个单词：首字母大写
    > Student,Demo

  - 多个单词：每个单词首字母大写
    > HelloWorld,StudentName

- 方法或者变量
  - 一个单词：首字母小写
    > name,main

  - 多个单词：从第二个单词开始，每个单词首字母大写
    > studentAge,showAllNames()

- 常量
  > 全部大写
  - 一个单词：大写
    > PI

  - 多个单词：大写，并用_隔开
    > STUDENT_MAX_AGE

### 注释(掌握)
- 单行注释 //
- 多行注释 /**/
- 文档注释 /** */
---
## 数据类型
### 常量(掌握)
1. 在程序执行的过程中，其值不发生改变的量
2. 分类：
  - 字面值常量
  - 自定义常量(后面讲)
3. 字面值常量
  - 字符串常量 "hello"
  - 整数常量 12,23
  - 小数常量 12.345
  - 字符常量 'a','A','0'
  - 布尔常量 true,false
  - 空常量 null(后面讲)
4. 在Java中针对整数常量提供了四种表现形式
  - 二进制 由0，1组成。以0b开头。
  - 八进制 由0，1，...7组成。以0开头。
  - 十进制 由0，1，...9组成。整数默认是十进制。
  - 十六进制 由0，1，...9,a,b,c,d,e,f(大小写均可)组成。以0x开头。

5. 进制转换(了解)
  - 其他进制到十进制
    - 系数：就是每一个位上的数值
    - 基数：x进制的基数就是x
    - 权：对每一个位上的数据，从右，并且从0开始编号，对应的编号就是该数据的权。
    - 结果：系数*基数^权次幂之和。
  - 十进制到其他进制
    - 除基取余，直到商为0，余数反转。
  - 进制转换的快速转换法
    - 十进制和二进制间的转换
    - 二进制到八进制，十六进制的转换

### 变量(掌握)
- 在程序的执行过程中，其值在某个范围内可以发生改变的量
- 变量的定义格式：
  - 数据类型 变量名 = 初始化值;
  - 数据类型 变量名;
  - 变量名 = 初始化值;

### 8大数据类型(掌握)
- Java是一种强类型语言，针对每种数据都提供了对应的数据类型。
- 分类：
  - 基本数据类型：4类8种
  - 引用数据类型：类，接口，数组。
- 基本数据类型
  - 整数 占用字节数
    - byte 1
    - short 2
    - int 4
    - long 8
  - 浮点数
    - float 4
    - double 8
  - 字符
    - char 2
  - 布尔
    - boolean 1
> 注意：
> 整数默认是int类型，浮点数默认是double。
> 长整数要加L或者l。
> 单精度的浮点数要加F或者f。

### 数据类型转换(掌握)
> boolean类型不参与转换

- 默认转换
  - 从小到大
    > - byte,short,char -- int -- long -- float -- double
    > - byte,short,char之间不相互转换，直接转成int类型参与运算。

- 强制转换
  - 从大到小
  - 可能会有精度的损失，一般不建议这样使用。
  - 格式：
  `目标数据类型 变量名 = (目标数据类型) (被转换的数据);`
---
## 运算符
### 算数运算符
|运算符|	结果|
|---|---|
|+|	加法|
|-	|减法|
|*|	乘法|
|/|	除法|
|%|	余数|
|++|	自增|
|+=|	加法分配|
|-=|	减法分配|
|*=|	乘法分配|
|/=	|分配分配|
|%=|	模量分配|
|--	|自减|

### 布尔运算符
- `&`	   逻辑AND
- `|`	   逻辑或
- `^`	   逻辑异或(异或)
- `||`	 短路OR
- `&&`	 短路AND
- `!` 	 逻辑一元NOT
- `&=`	 AND分配
- `|=`	 OR分配
- `^=`	 XOR分配
- `==`	 等于
- `!=`	 不等于
- `？ :`	三元if-then-else

### 关系运算符
- `==`	等于
- `!=`	不等于
- `>`	大于
- `<`	小于
- `>=`	大于或等于
- `<=`	小于或等于

### 按位运算符


运算符	结果
- `~`	按位一元NOT
- `&`	按位AND
- `|`	按位或
- `^`	按位异或
- `>>`	向右移动
- `>>>`	右移零填充
- `<<`	向左移动
- `&=`	按位AND分配
- `|=`	按位OR分配
- `^=`	按位异OR分配
- `>>=`	右移赋值
- `>>>=`	右移零填充分配
- `<<=`	向左移位

## 语句
### if
```java
if(condition)
   statement;

if (condition)
   statement1;
else
   statement2;

if(condition)
  statement;
else if(condition)
  statement;
else if(condition)
  statement;
.
.
else
  statement;
```

### for
#### 计数器for
```java
for(initialization; condition; iteration)
    statement;
```
Java for循环语句有三个部分:
- 初始化将循环控制变量设置为初始值。
- condition 是测试循环控制变量的布尔表达式。 如果condition
为true，for循环继续迭代。 如果condition为false，循环终止。
- 迭代决定了每次循环迭代时循环控制变量的变化。
#### Java for each循环

for each循环对一个序列中的元素进行迭代，而不使用循环计数器。
```java
for (type variable_name:array){

}
```
> 类型必须与数组类型兼容。
```java
public class Main {
  public static void main(String args[]) {
    String[] arr = new String[]{"www.w3cschool.cn","a","b","c"};
    for(String s:arr){
      System.out.println(s);
    }
  }
}
```
### while
#### Java while 循环
```java
while(condition) {
   // body of loop
}
```
- 条件可以是任何布尔表达式。
- 只要条件条件为真，循环的主体将被执行。
- 如果只重复单个语句，花括号是不必要的。
#### Java do while循环

> 要执行while循环的主体至少一次，可以使用do-while循环。
```java
do {
   // body of loop
} while (condition);
```
### Java Break语句

> 当在循环中遇到 break 语句时，循环终止并进行程序控制在循环后的下一条语句中恢复。
```java
break;
```
> 当在一组嵌套循环中使用时， break 语句只会突破最内层循环。

### Java continue语句
> continue 语句强制循环的早期迭代。
> 在 while 和 do-while 循环中， continue 语句使控制转移到条件语句表达式控制循环。
> 在 for 循环中，控制首先进行迭代for语句的部分，然后到条件表达式。

```Java
continue;
```

----

[返回上级目录README.md](../README.md)
