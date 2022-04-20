/* ejercicio 1 */
let array = [1,2,3,4,5,6,7,8,9,10]

let esPar = function(array){
    let pares=[];
    for(let i= 0; i <= array.length; i++){
        if(array[i]%2 == 0 ){
            pares.push(array[i]) ; 
        }  
        
    }
    console.log(pares);
}
esPar(array);

/* ejercicio 2 */
let Palindrome = function(string){
    let stringReverse = string.split("").reverse().join("");
if (string === stringReverse) {
  return true;
} else {
  return false;
}
}
console.log(Palindrome("leche"));
console.log(Palindrome("oso"));

/* ejercicio 3 */

/* **  Attributes
 *  String: make *  String: model *  boolean: turnedOn *  int: engineDisplacement (cylinder volume)
 *  int: year
 */
/* **  Methods:
 *  boolean: isOn() *  void: turnOn() *  void: turnOff() *  String: toString() [returns year, make, model and the engine displacement (cc)] * String: getMarketingData() [returns make, model and year] */
/* 4) Create a Bicycle object with only the make [String] , model [String] and year [int] attributes and no methods. Instantiate it and print to the console its internal state calling the getMarketingData method from the Car object.
 */
function Car(make, model, turnedOn, year,  engineDisplacement, ){
    this.make = make;
    this.model = model;
    this.turnedOn = turnedOn;
    this.engineDisplacement  = engineDisplacement;
    this.year  = year;

    this.isOn = function(){
        if( this.turnedOn = true){
            return true
        }else {
            return false
        }
    };
    this.turnOn = function(){
        return this.turnedOn = true
    };
    this.turnOff = function(){
        return this.turnedOn = false
    };
    this.toString = function(){
        return [this.make, this.model, this.engineDisplacement, this.year ]  
    };
    this.getMarketingData = function(){
        return [this.make, this.model, this.year ] 
    };
}


/* ejercicio 4 */
let Bicycle  = new Car("Ford", "Falcon",  "", 1998);
console.log(Bicycle.getMarketingData());


