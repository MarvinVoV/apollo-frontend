package demo.collection

/**
 * Created by sunyameng on 2014/5/7.
 */
def list=[1,3,4,1,8,9,2,6]
println list.getClass().name

println list[-1] //6

println list[2..5] //refers to part of the the original,no a copy

list.each {print it+' '}

def doubled=[]
list.each{
    doubled<<it*2
}
println doubled

//return collection
println list.collect{it*2}

//find
println list.find{it==10}
println list.find(){it>4}
println list.findAll{it==2}
println list.join(' ')
//list[0]=['a','n']
//println list  // [[a, n], 3, 4, 1, 8, 9, 2, 6]
//println list.flatten()  //[a, n, 3, 4, 1, 8, 9, 2, 6]

//
def lst=['product','In']
//* specific on each element
println lst*.size()

//map

def langs=['C':'Stroustrup','Java':'Gosling','Lisp':'McCarthy']
println langs['C']
println langs.C

//iterator
langs.each{entry->
    println "Language $entry.key was authored by $entry.value"
}
langs.each{language,author->
    println"Language $language was authored by $author"
}
println langs.collect {language,author->
    language.replaceAll('a','p')
}

//other
lst=[1,2]
lst.with{
    add(3)
    add(4)
    println size()
    println contains(2)
}

lst.with{
    println "this is ${this},"
    println "owner is ${owner},"
    println "delegate is ${delegate}."
}


//
thread=Thread.start{
    println "Threadstarted"
    startTime=System.nanoTime()
    new Object().sleep(2000)
    endTime=System.nanoTime()
    println "Thread done in ${(endTime-startTime)/10**9} seconds"
}
new Object().sleep(100)
println "Let's interrupt that thread"
thread.interrupt()
thread.join()

