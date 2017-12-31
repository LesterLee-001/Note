
## pg_attribute

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_attribute

----

该系统表存储所有表(包括系统表，如pg_class)的字段信息。数据库中的每个表的每个字段在pg_attribute表中都有一行记录。

|     名字      | 类型 |     引用     |                                                                         描述                                                                         |
| ------------- | ---- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| attrelid      | oid  | pg_class.oid | 此字段所属的表。                                                                                                                                     |
| attname       | name |              | 字段名。                                                                                                                                             |
| atttypid      | oid  | pg_type.oid  | 字段的数据类型。                                                                                                                                     |
| attstattarget | int4 |              | attstattarget控制ANALYZE为这个字段设置的统计细节的级别。零值表示不收集统计信息，负数表示使用系统缺省的统计对象。正数值的确切信息是和数据类型相关的。 |
| attlen        | int2 |              | 该字段所属类型的长度。(pg_type.typlen的拷贝)                                                                                                         |
| attnum        | int2 |              | 字段的编号，普通字段是从1开始计数的。系统字段，如oid，是任意的负数。                                                                                 |
| attndims      | int4 |              | 如果该字段是数组，该值表示数组的维数，否则是0。                                                                                                      |
| attcacheoff   | int4 |              | 在磁盘上总是-1，但是如果装载入内存中的行描述器中， 它可能会被更新为缓冲在行中字段的偏移量。                                                          |
| atttypmod     | int4 |              | 表示数据表在创建时提供的类型相关的数据(比如，varchar字段的最大长度)。其值对那些不需要atttypmod的类型而言通常为-1。                                   |
| attbyval      | bool |              | pg_type.typbyval字段值的拷贝。                                                                                                                       |
| attstorage    | char |              | pg_type.typstorage字段值的拷贝。                                                                                                                     |
| attalign      | char |              | pg_type.typalign字段值的拷贝。                                                                                                                       |
| attnotnull    | bool |              | 如果该字段带有非空约束，则为真，否则为假。                                                                                                           |
| atthasdef     | bool |              | 该字段是否存在缺省值，此时它对应pg_attrdef表里实际定义此值的记录。                                                                                   |
| attisdropped  | bool |              | 该字段是否已经被删除。如果被删除，该字段在物理上仍然存在表中，但会被分析器忽略，因此不能再通过SQL访问。                                              |
| attislocal    | bool |              | 该字段是否局部定义在对象中的。                                                                                                                       |
| attinhcount | int4 |              | 该字段所拥有的直接祖先的个数。如果一个字段的祖先个数非零，那么它就不能被删除或重命名。 |
---
[返回上级目录README.md](../README.md)
