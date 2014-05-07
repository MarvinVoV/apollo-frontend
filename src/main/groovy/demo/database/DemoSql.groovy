package demo.database

import groovy.sql.Sql

import java.sql.ResultSetMetaData

/**
 * Created by sunyameng on 2014/5/7.
 */

def sql=Sql.newInstance('jdbc:mysql://localhost:3306/test',
        "root","root",'com.mysql.jdbc.Driver')
println sql.connection.catalog

sql.eachRow('select * from users'){
    printf "%-10s%s\n",it.name,it.age
}
println()
processMeta={ResultSetMetaData metaData->
    metaData.columnCount.times{i->
        printf "%-10s",metaData.getColumnLabel(i+1)
    }
    println()
}
sql.eachRow('select * from users',processMeta){
    printf "%-10s%s\n",it.name,it.age
}

rows=sql.rows("select * from users")
println rows.size()
println()

dataSet=sql.dataSet("users")
dataSet.add(name:'tt',age:30)
println sql.rows("select * from users").size()
// or
sql.executeInsert("insert into users values ('aa',30)")

//get unique result
println sql.firstRow("select * from users where name='aa'")



