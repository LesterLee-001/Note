## 如何将查询的每行的多列结果，合并成每行单列数组结构

### 目录
- [处理前的效果与预期效果](#div1)
- [解决方法](#div2)
- [进阶](#div3)

#### <div id="div1">处理前的效果与预期效果</div>

假设查询结果如下

|column1|column2|column3|
|---|---|---|
|你好|我好|大家好|
|你走|我走|各自走|

预期结果
|column|
|---|
|["你好","我好","大家好"]|
|["你走","我走","各自走"]|

#### <div id="div2">解决方法</div>
```
 select array[column1,column2,column3]
 from table_name
```
 > array中的元素应当有相同的数据类型
 ---
 [返回上级目录README.md](../README.md)
