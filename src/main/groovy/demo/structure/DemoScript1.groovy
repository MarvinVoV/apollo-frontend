package demo.structure

/**
 * Created by sunyameng on 2014/5/6.
 */
//
for(i in 0..2){
    println 'hello'
}
//
for(ch in 'a'..'c'){
    println ch
}
//
0.upto(2){
    print "$it " //0 1 2
}
3.times{
    print "$it " //0 1 2
}
0.step(10,2){
    print "$it "  //0 2 4 6 8
}

String[] greetings=["hello","hi","nihao"]
for (String greet : greetings) {
    println greet
}

// if not specific type
for (greet in greetings) {
    println greet
}

