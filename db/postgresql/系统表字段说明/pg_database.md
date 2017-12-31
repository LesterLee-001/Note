## pg_database

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_database

----

该系统表存储数据库的信息。和大多数系统表不同的是，在一个集群里该表是所有数据库共享的，即每个集群只有一份pg_database拷贝，而不是每个数据库一份。

| 名字 | 类型 | 引用 | 描述 |
| ---- | ---- | ---- | ---- |
| datname	| name	| | 数据库名称。|
| datdba| 	oid| 	pg_authid.oid	| 数据库所有者，通常为创建该数据库的角色。|
| encoding	| int4	| | 数据库的字符编码方式。|
| datistemplate	| bool	| | 如果为真，此数据库可以用于CREATE DATABASE TEMPLATE子句，把新数据库创建为此数据库的克隆。|
| datallowconn	| bool	| | 如果为假，则没有人可以联接到这个数据库。|
| datlastsysoid	| oid	| | 数据库里最后一个系统OID，此值对pg_dump特别有用。|
| datvacuumxid	| xid	| | |
| datfrozenxid	| xid	| | |
| dattablespace |  	text| 	pg_tablespace.oid| 	该数据库的缺省表空间。在这个数据库里，所有pg_class.reltablespace为零的表都将保存在这个表空间里，特别要指出的是，所有非共享的系统表也都存放在这里。|
| datconfig	| text[]	| | 运行时配置变量的会话缺省值。|
| datacl	| aclitem[]	| | 访问权限。|
---
[返回上级目录README.md](../README.md)
