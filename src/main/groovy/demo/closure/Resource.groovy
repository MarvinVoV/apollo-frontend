package demo.closure

/**
 * Created by sunyameng on 2014/5/7.
 */
class Resource {
    def open(){print "opened .."}
    def close(){print "closed"}
    def read(){print "read..."}
    def write(){print "write..."}

    def static use(closure){
        def r=new Resource();
        try{
            r.open()
            closure(r)
        }finally {
            r.close()
        }
    }
    static void main(args){
        use(){Resource res->
            res.read()
            res.write()
        }
    }
}
