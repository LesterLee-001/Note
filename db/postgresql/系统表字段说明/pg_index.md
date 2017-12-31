## pg_index

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_index

----

该系统表存储关于索引的一部分信息。其它的信息大多数存储在pg_class。

| 名字 | 类型 | 引用 | 描述 |
| ---- | ---- | ---- | ---- |
| indexrelid	| oid	| pg_class.oid	| 该索引在pg_class里的记录的OID。|
| indrelid	| oid	| pg_class.oid	| 索引所在表在pg_class里的记录的OID。|
| indnatts	| int2	| | 索引中的字段数量(拷贝的pg_class.relnatts)。|
| indisunique| 	bool| 	| 如果为真，该索引是唯一索引。|
| indisprimary	| bool	| | 如果为真，该索引为该表的主键。|
| indisclustered	| bool	| | 如果为真，那么该表在这个索引上建了簇。|
| indkey	| int2vector	| pg_attribute.attnum	| 该数组的元素数量为indnatts，数组元素值表示建立这个索引时所依赖的字段编号，如1 3，表示第一个字段和第三个字段构成这个索引的键值。如果为0，则表示是表达式索引，而不是基于简单字段的索引。|
| indclass	| oidvector| 	pg_opclass.oid	| 对于构成索引键值的每个字段，这个字段都包含一个指向所使用的操作符表的OID。|
| indexprs	| text	| | 表达式树用于那些非简单字段引用的索引属性。它是一个列表，在indkey里面的每个零条目一个元素。如果所有索引属性都是简单的引用，则为空。|
| indpred	| text	| | 部分索引断言的表达式树。如果不是部分索引， 则是空字串。|
---
[返回上级目录README.md](../README.md)
