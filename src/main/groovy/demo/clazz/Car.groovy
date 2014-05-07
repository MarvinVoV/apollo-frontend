package demo.clazz

/**
 * Created by sunyameng on 2014/5/7.
 */
class Car {
    def miles=0
    final year
    private weight=0
    Car(year){
        this.year=year
    }
    def getWeight(){
        println "getWeight called"
        weight
    }
    private void setWeight(weight){
        throw new IllegalAccessException("you're not allowed to change weight")
    }
    def show(scale){
        if(scale>0){
            weight+=scale
        }
    }
    static void main(args){
        Car car=new Car(2008);
        println "year: $car.year"
        println "Miles: $car.miles"
        car.miles=25
        println "Miles: $car.miles"
        try{
            car.weight=2000
        }catch (ex){
            println ex.message
        }
    }
}
