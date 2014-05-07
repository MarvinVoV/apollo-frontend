package demo.base

/**
 * Created by sunyameng on 2014/5/7.
 */
//safe-navigator operator
def foo(str){
    //if(str!=null){str.reverse();}
    str?.reverse()
}
println foo('evil')
println foo()


