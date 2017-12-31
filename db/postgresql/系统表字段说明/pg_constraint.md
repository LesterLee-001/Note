## pg_constraint

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_constraint

----
该系统表存储PostgreSQL中表对象的检查约束、主键、唯一约束和外键约束。

| 名字 | 类型 | 引用 | 描述 |
| ---- | ---- | ---- | ---- |
| conname	| name	| | 约束名字(不一定是唯一的)。|
| connamespace| oid| 	pg_namespace.oid	| 包含这个约束的名字空间(模式)的OID。|
| contype	| char	| | c = 检查约束， f = 外键约束， p = 主键约束， u = 唯一约束|
| condeferrable	| bool	| | 该约束是否可以推迟。|
| condeferred	| bool	| | 缺省时这个约束是否是推迟的？|
| conrelid	| oid	| pg_class.oid	| 该约束所在的表，如果不是表约束则为0。|
| contypid| 	oid	| pg_type.oid	| 该约束所在的域，如果不是域约束则为0。|
| confrelid	| oid| 	pg_class.oid	| 如果为外键，则指向参照的表，否则为0。|
| confupdtype	| char| | 	外键更新动作代码。|
| confdeltype	| char	| | 外键删除动作代码。|
| confmatchtype| 	char	| | 外键匹配类型。|
| conkey| 	int2[]| 	pg_attribute.attnum	| 如果是表约束，则是约束控制的字段列表。|
| confkey	| int2[]	| pg_attribute.attnum	| 如果是外键，则是参照字段的列表。|
| conbin	| text	| | 如果是检查约束，则表示表达式的内部形式。|
| consrc	| text	| | 如果是检查约束，则是表达式的人可读的形式。|
---
[返回上级目录README.md](../README.md)
