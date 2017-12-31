## pg_attrdef

### 作者
noone

### 日期
2017-07-24

### 标签
PostgreSQL , 系统表 , pg_attrdef

----

该系统表主要存储字段缺省值，字段中的主要信息存放在pg_attribute系统表中。注意：只有明确声明了缺省值的字段在该表中才会有记录。

| 名字 | 类型 | 引用 | 描述 |
| ---- | ---- | ---- | ---- |
| adrelid | oid | pg_class.oid | 这个字段所属的表 |
| adnum | int2 | pg_attribute.attnum	| 字段编号，其规则等同于pg_attribute.attnum |
| adbin | text |      | 字段缺省值的内部表现形式。 |
| adsrc | text |      | 缺省值的人可读的表现形式。 |
---
[返回上级目录README.md](../README.md)
