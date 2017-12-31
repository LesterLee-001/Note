## pg_class

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_class

----

该系统表记录了数据表、索引(仍然需要参阅pg_index)、序列、视图、复合类型和一些特殊关系类型的元数据。
> 不是所有字段对所有对象类型都有意义。


|      名字      |   类型    |       引用        |                                                                                    描述                                                                                    |
| -------------- | --------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| relname        | name      | 数据类型名字。    |                                                                                                                                                                            |
| relnamespace   | oid       | pg_namespace.oid  | 包含这个对象的名字空间(模式)的OI。                                                                                                                                         |
| reltype        | oid       | pg_type.oid       | 对应这个表的行类型的数据类型。                                                                                                                                             |
| relowner       | oid       | pg_authid.oid     | 对象的所有者。                                                                                                                                                             |
| relam          | oid       | pg_am.oid         | 对于索引对象，表示该索引的类型(B-tree，hash)。                                                                                                                             |
| relfilenode    | oid       |                   | 对象存储在磁盘上的文件名，如果没有则为0。                                                                                                                                  |
| reltablespace  | oid       | pg_tablespace.oid | 对象所在的表空间。如果为零，则表示使用该数据库的缺省表空间。(如果对象在磁盘上没有文件，这个字段就没有什么意义)                                                             |
| relpages       | int4      |                   | 该数据表或索引所占用的磁盘页面数量，查询规划器会借助该值选择最优路径。                                                                                                     |
| reltuples      | float4    |                   | 表中行的数量，该值只是被规划器使用的一个估计值。                                                                                                                           |
| reltoastrelid  | oid       | pg_class.oid      | 与此表关联的TOAST表的OID，如果没有为0。TOAST表在一个从属表里"离线"存储大字段。                                                                                             |
| reltoastidxid  | oid       | pg_class.oid      | 如果是TOAST表，该字段为它索引的OID，如果不是TOAST表则为0。                                                                                                                 |
| relhasindex    | bool      |                   | 如果这是一个数据表而且至少有(或者最近有过)一个索引，则为真。它是由CREATE INDEX设置的，但DROP INDEX不会立即将它清除。如果VACUUM发现一个表没有索引，那么它清理 relhasindex。 |
| relisshared    | bool      |                   | 如果该表在整个集群中由所有数据库共享，则为真。                                                                                                                             |
| relkind        | char      |                   | r = 普通表，i = 索引，S = 序列，v = 视图， c = 复合类型，s = 特殊，t = TOAST表                                                                                             |
| relnatts       | int2      |                   | 数据表中用户字段的数量(除了系统字段以外，如oid)。在pg_attribute里肯定有相同数目的数据行。见pg_attribute.attnum.                                                            |
| relchecks      | int2      |                   | 表中检查约束的数量，参阅pg_constraint表。                                                                                                                                  |
| reltriggers    | int2      |                   | 表中触发器的数量；参阅pg_trigger表。                                                                                                                                       |
| relhasoids     | bool      |                   | 如果我们为对象中的每行都生成一个OID，则为真。                                                                                                                              |
| relhaspkey     | bool      |                   | 如果该表存在主键，则为真。                                                                                                                                                 |
| relhasrules    | bool      |                   | 如表有规则就为真；参阅pg_rewrite表。                                                                                                                                       |
| relhassubclass | bool      |                   | 如果该表有子表，则为真。                                                                                                                                                   |
| relacl         | aclitem[] |                   | 访问权限。                                                                                                                                                                 |

---
[返回上级目录README.md](../README.md)
