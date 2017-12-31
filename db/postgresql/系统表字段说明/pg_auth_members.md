## pg_auth_members

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_auth_members

----

该系统表存储角色之间的成员关系。

| 名字 | 类型 | 引用 | 描述 |
| ---- | ---- | ---- | ---- |
| roleid	| oid| 	pg_authid.oid	| 组角色的ID。|
| member	| oid| 	pg_authid.oid	| 属于组角色roleid的成员角色的ID。|
| grantor	| oid| 	pg_authid.oid	| 赋予此成员关系的角色的ID。|
| admin_option	| bool	| | 如果具有把其它成员角色加入组角色的权限，则为真。|
---
[返回上级目录README.md](../README.md)
