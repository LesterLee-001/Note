# Copy无主键表时如何添加主键

#### 作者
noone

#### 日期
2017-08-22

#### 标签
PostgreSQL , COPY , 主键

---
# 目录

<!-- toc orderedList:0 depthFrom:2 depthTo:3 -->

* [应用场景](#应用场景)
* [实现](#实现)
  * [COPY命令基础](#copy命令基础)
  * [具体实现](#具体实现)

<!-- tocstop -->
## 应用场景
- 原表t1
> 原表不含主键，且存储在csv文件中，用`|`分割

| c1  | c2  |
| --- | --- |
| a   | 1   |
| b    | 2    |


- 目标表t2
> 主键自增

| id  | c1  | c2  |
| --- | --- | --- |
| 1   | a   | 1   |
| 2    |b     |2     |


## 实现
### COPY命令基础
> 详情请参阅[COPY命令官方文档](https://www.postgresql.org/docs/9.4/static/sql-copy.html)

### 具体实现
1. 新建表t2
```sql
create table t2(
  "id" int8 default nextval('t2_seq'::regclass) not null,
  "c1" text,
  "c2" text
)
```

2.copy
> 由于新建表时指定了主键的默认值，在copy时，需全字段指明，且字段顺序与数量与原表相同

```sql
copy t1(c1,c2) from '/home/bak/t1.csv' delimiter '|'
```

----
[返回上级目录README.md](../README.md)
