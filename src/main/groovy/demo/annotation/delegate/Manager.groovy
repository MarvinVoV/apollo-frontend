package demo.annotation.delegate

/**
 * Created by sunyameng on 2014/5/7.
 */
class Manager {
    @Delegate
    Expert expert = new Expert()
    @Delegate
    Worker worker = new Worker()
    static void main(args){
        def bernie=new Manager()
        bernie.analyze()
        bernie.work()
        bernie.writeReport()
    }
}
