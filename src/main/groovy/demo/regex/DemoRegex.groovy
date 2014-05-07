package demo.regex

/**
 * Created by sunyameng on 2014/5/7.
 */

def regex= ~"hello"
println regex.getClass().name
println regex

//= ~ partial match; == ~ exactly match
def pattern= ~"(G|g)roovy"
def text="Groovy is Hip"
if(text=~pattern){
    println("match")
}else{
    println "no match"
}

if(text==~pattern){
    println("match")
}else{
    println "no match"
}

//
def matcher='Groovy is groovy'=~/(G|g)roovy/
println "Size of matcher is ${matcher.size()}"
println "with elements ${matcher[0]} and ${matcher[1]}"

//

def str='Groovy is groovy,really groovy'
def result=(str=~/groovy/).replaceAll('hip')
println result