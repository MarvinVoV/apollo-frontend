package demo.clazz

/**
 * Created by sunyameng on 2014/5/7.
 */
class Robot {
    def type,height,width
    //location is map type
    def access(Map location,weight,fragile){
        println "Received fragile? $fragile,weight:$weight,loc:$location"
    }
    static void main(args){
        def robot=new Robot(type:'arm',width: 20,height: 30)
        println "$robot.type,$robot.height,$robot.width"
        robot.access(x:30,y:20,z:10,50,true)
    }
}
