package demo.annotation.singleton

/**
 * Created by sunyameng on 2014/5/7.
 */
@Singleton(lazy = false)
class TheUnique {
    def hello(){
        println "hello"
    }
    static void main(args){
        TheUnique.instance.hello()
    }
}
