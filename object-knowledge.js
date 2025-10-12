//JavaScript Object Knowledge//

//Object Constructor
function Person(name, age){
    this.name = name; //store the name 
    this.age = age; // store the age
    this.sayHello = function(){
        console.log("Hi, I am " + this.name + "and I am " + this.age + "years old")
    };
}

//new maks a new  person using the person recipe
const me = new Person("Helen", 34);
me.sayHello ();

//Prevent calling constructor with out "new"
// If someone forgets to use "new , this is fix automatically "
function Animal(type){
    if (!(this instanceof Animal)){
        return new Animal(type);
    }
    this.type = type;
}
    const cat = Animal("Cat");
    console.log(cat.type);

   // Prototype
   //prototypes help share the same method with many Object
   function Dog(name) {
    this.name = name
   }
// Add shared action
Dog.prototype.bark = function(){
    console.log(this.name +" says Woof!");
};
const dog1 = new Dog("Luna");
dog1.bark();// out put : Luna says woof!


//prototype Inheritance //
//one object type (Cat) inherits from anoter ()Animal

function Animal12(name){
    this.name;
}
Animal12.prototype.eat = function(){
    console.log(this.name + "is eating");
};
function Cat2(name){
    Animal12.call(this, name); // call parent constructor
}
// Cat2 inherits Anim12's actions
cat2.prototype = Object.create(Animal12.prototype);
cat2.prototype.constructor = Cat2;

const kitty = new Cat2("Mimi");
kitty.eat(); 
 //This Keyword  this means who is speaking in JavaScript//
 
    const user ={
        name:"Helen",
        greet: function(){
            console.log("Hello, I am " + this.name );
        }
    }
    user.greet(); // output:Hello , I Am Helen
//In normal function
  function showThis() { 
    console.log(this);
  }
showThis();



