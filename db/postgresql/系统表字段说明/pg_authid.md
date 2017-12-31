## pg_authid

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_authid

----

该系统表存储有关数据库认证的角色信息，在PostgreSQL中角色可以表现为用户和组两种形式。对于用户而言只是设置了rolcanlogin标志的角色。由于该表包含口令数据，所以它不是公共可读的。PostgreSQL中提供了另外一个建立在该表之上的系统视图pg_roles，该视图将口令字段填成空白。

|     名字      |    类型     | 引用 |                                    描述                                    |
| ------------- | ----------- | ---- | -------------------------------------------------------------------------- |
| rolname       | name        |      | 角色名称。                                                                 |
| rolsuper      | bool        |      | 角色是否拥有超级用户权限。                                                 |
| rolcreaterole | bool        |      | 角色是否可以创建其它角色。                                                 |
| rolcreatedb   | bool        |      | 角色是否可以创建数据库。                                                   |
| rolcatupdate  | bool        |      | 角色是否可以直接更新系统表(如果该设置为假，即使超级用户也不能更新系统表)。 |
| rolcanlogin   | bool        |      | 角色是否可以登录，换句话说，这个角色是否可以给予会话认证标识符。           |
| rolpassword   | text        |      | 口令(可能是加密的)；如果没有则为NULL。                                     |
| rolvaliduntil | timestamptz |      | 口令失效时间(只用于口令认证)；如果没有失效期，则为NULL。                   |
| rolconfig     | text[]      |      | 运行时配置变量的会话缺省。                                                 |
---
[返回上级目录README.md](../README.md)
