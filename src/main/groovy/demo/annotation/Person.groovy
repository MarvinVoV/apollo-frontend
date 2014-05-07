package demo.annotation

import groovy.transform.Canonical

/**
 * Created by sunyameng on 2014/5/7.
 */
/**
 * general toString method
 */

@Canonical(excludes = "firstName")
class Person {
    String firstName
    String lastName
    int age
    static void main(args){
        def sara=new Person(firstName: 'sara',lastName: 'jack',age: 20)
        println sara // demo.annotation.Person(jack, 20)
    }
}
