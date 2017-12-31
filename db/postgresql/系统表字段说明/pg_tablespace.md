## pg_tablespace

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_tablespace

----

该系统表存储表空间的信息。注意：表可以放在特定的表空间里，以帮助管理磁盘布局和解决IO瓶颈。

| 名字 | 类型 | 引用 | 描述 |
| ---- | ---- | ---- | ---- |
| spcname	| name	| | 表空间名称。|
| spcowner	| oid	| pg_authid.oid	| 表空间的所有者，通常是创建它的角色。|
| spclocation| 	text	| | 表空间的位置(目录路径)。|
| spcacl	| aclitem[]	| | 访问权限。|
---
[返回上级目录README.md](../README.md)
