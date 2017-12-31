# Postgresql开发知识整理

#### 作者
noone

#### 日期
2017-08-21

#### 标签
   数据库 , 大数据 , SQL

---
- 表结构操作
  - [调整表字段的顺序](./表结构操作/调整表字段的顺序.md)
  - [修改表字段类型](./表结构操作/修改表字段类型.md)
  - [查询一个表的所有字段](./表结构操作/查询一个表的所有字段.md)
  - [copy表的时候如何添加主键](./表结构操作/copy表的时候如何添加主键.md)
- 数据分析
  - [简单的数据伴随概率](./数据分析/简单的数据伴随概率.md)
  - [按时间线分组数据](./数据分析/按时间线分组数据.md)
- 数据转换
  - [查询不同分组的极值记录](./数据转换/查询不同分组的极值记录.md)
  - [两数字相除保留任意位小数](./数据转换/两数字相除保留任意位小数.md)
  - [数据库切割和组合字段函数](./数据转换/数据库切割和组合字段函数.md)
  - [如何将查询的每行的多列结果，合并成每行单列数组结构](./数据转换/每行多列to每行单列.md)
  - [数组元素加单引号并用逗号拼接](./数据转换/数组元素加单引号并用逗号拼接.md)
- 系统表字段说明
  - [对象信息表 pg_class](./系统表字段说明/pg_class.md)
  - [字段信息表 pg_attribute](./系统表字段说明/pg_attribute.md)
  - [缺省值信息表 pg_attrdef](./系统表字段说明/pg_attrdef.md)
  - [角色信息表 pg_authid](./系统表字段说明/pg_authid.md)
  - [角色下成员信息表 pg_auth_members](./系统表字段说明/pg_auth_members.md)
  - [约束信息表 pg_constraint](./系统表字段说明/pg_constraint.md)
  - [表空间信息表 pg_tablespace](./系统表字段说明/pg_tablespace.md)
  - [名字信息表 pg_namespace](./系统表字段说明/pg_namespace.md)
  - [数据库信息表 pg_database](./系统表字段说明/pg_database.md)
  - [索引信息表 pg_index](./系统表字段说明/pg_index.md)
- 优化
  - [distinct xx和count(distinct xx)的变态递归优化方法 - 索引收敛(skip scan)扫描](./优化/递归扫描去重.md)
---
[返回上级目录README.md](../README.md)