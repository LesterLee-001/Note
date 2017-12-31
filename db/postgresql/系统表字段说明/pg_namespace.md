## pg_namespace

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_namespace

----

该系统表存储名字空间(模式)。

| 名字 | 类型 | 引用 | 描述 |
| ---- | ---- | ---- | ---- |
| nspname| 	name	| 名字空间(模式)的名称。|
| nspowner	| oid	| pg_authid.oid| 	名字空间(模式)的所有者|
| nspacl	| aclitem[]	| | 访问权限。|
---
[返回上级目录README.md](../README.md)
