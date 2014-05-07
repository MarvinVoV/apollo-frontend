package demo.closure

/**
 * Created by sunyameng on 2014/5/7.
 */
//when anonymous inner class conflict with closure
class Calibrator {
    Calibrator(closure){
        closure()
    }
    static void main(args){
        def calibrator=new Calibrator({println"the closure provided"})
    }
}
