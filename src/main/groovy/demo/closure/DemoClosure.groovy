package demo.closure

/**
 * Created by sunyameng on 2014/5/7.
 */

def picEven(n,block){
    n.times{
        block(it)
    }
}
picEven(10,{print "$it "})

println()
//if a closure is the last parameter there is an elegant syntax as follow
// or
picEven(10){
    print "$it "
}

println()

// somewhat like strategy pattern
def totalSelectValue(n,closure){
    def total=0
    for(i in 1..n){
        if(closure(i)){
            total+=i
        }
    }
    total
}
println totalSelectValue(10){it%2==0}
println totalSelectValue(10){it%2!=0}

//Passing Parameters to Closures
def tellFortune(closure){
    closure new Date("05/07/2014"),"Your day is filled with ceremony"
}
tellFortune(){date,fortune->
    println "Fortune for $date is '$fortune'"
}

//Using Closures for Resource Cleanup
new FileWriter('d:/test.txt').withWriter {writer->
    writer.write('a')
} // no need to close()


