package demo.ext

/**
 * Created by sunyameng on 2014/5/7.
 */

//
//println "ipconfig -all".execute().text

//println "ipconfig -all".execute().getClass().name

def file="test.properties"
println new File(file).text

new File(file).eachLine {line->
    println line
}

new File(file).filterLine {it=~/name/}

new File(file).withWriter {f->
    f<<"charset=utf8"
}