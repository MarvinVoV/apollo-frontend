package demo.mixjava

/**
 * Created by sunyameng on 2014/5/7.
 */
class AGroovyClass {
    def useClosure(closure){
        println "Calling closure"
        closure()
    }
    def passToClosure(int value,closure){
        println "Simple passing $value to the given closure"
        closure(value)
    }
}
