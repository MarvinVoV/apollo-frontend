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

//multiple assignments
def splitName(String fullName){fullName.split(' ')}
def (firstName,lastName)=splitName('James Bond')
println "$lastName,$firstName $lastName"

def name1="thomson"
def name2="thompson"

println "$name1 and $name2"

(name1,name2)=[name2,name1]
println "$name1 and $name2"

//boolean
def list1=null
println list1?'list1 true':'list1 false'

def list2=[1,2,3]
println list2?'list2 true':'list2 false'

def list3=[]
println list3?'list3 true':'list3 false'   //false

//append
def list=["hello"]
list<<"world"
println list

//
def receiveVarArgs(int a, int... b) {
    println "you passed $a and $b"
}

receiveVarArgs(1,2,3,4,5)
// or
receiveVarArgs(1,[2,3,4,5] as int[])

// different syntax for creating primitive arrays

// java style  int arr[]=new arr[]{1,2,3}

//groovy style
int[] arr=[1,2,3]
//or
def arr1=[1,2,3] as int[]

//iterator map
def stocks=[apple:33,microsoft:43]
stocks.each {key,value->
    println "$key $value"
}





