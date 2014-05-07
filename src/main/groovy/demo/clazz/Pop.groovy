package demo.clazz

/**
 * Created by sunyameng on 2014/5/7.
 */
class Pop {
    def sing(){
        println "singing..."
    }
    def sing(int hours){
        println "singing for $hours"
    }
    def sing(int hours,String name){
        println "$name singing for $hours"
    }
    static void main(args){
        Pop pop=new Pop()
        pop.invokeMethod("sing",null)
        pop.invokeMethod("sing",3)
        pop.invokeMethod("sing",[3,'tom'] as Object[])
    }
}
