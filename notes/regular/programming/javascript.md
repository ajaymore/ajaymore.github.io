---
---
##Primitives:
- Number
- String
- Boolean
- Undefined - It's a special value assigned to variable when not initialized, no declared variables produce undefined
- Null - Null means nothing, it's different from undefined in the sense that it's defined and contains nothing

<pre>
typeof NaN
>>"number"

typeof Infinity
>>"number"

var movie = '101 dalmatians';
movie * 1
>>NaN

!undefined
!null
!false
!""
!0
!Nan
>>true

!"false"
!" "
!"0"
>>false

var uninit;
uninit === undefined
>>true

"a" + undefined
>> "aundefined"
1 + undefined
>> NaN
"a" + null
>> "anull"
1 + null
>> 1
</pre>

##Arrays
delete

<pre>
var s = "Hello"
s[1]
>> e
</pre>

##Loops, conditionals ...
- if-elseif-else
- while(){}
- do{}while()
- for(var i=0; i<n; i++){}
- for(var i in array){console.log(array[i])}

##Function
- function returns undefined if nothing is returned explicitly
- parseInt, parseFloat, isNaN, isFinite, encodeURI, decodeURI, eval
- variables inside function are initialized only when function is called

###Hoisting
> When javascript program execution enters the function all the function variables are elevated/hoisted/moved to the top of the function. This only declares the variables up top but keeps the initialization at the same place in the code.

###Immediate functions
<pre>(function(greet){console.log(greet);})('hello');</pre>

###private functions

<pre>
function outer(){
	function inner(){

	}
}
</pre>

##Closures
The function defined in the closure 'remembers' the environment in which it was created.
Below we are not required to create three different functions.  
A closure is a special kind of object that combines two things: a function, and the environment in which that function was created.

<pre>
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
</pre>

<pre>
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
</pre>

##Everything is object in java
Object, Array, Function, Boolean,
Number, String, Math, Date, RegExp, Error

##String
slice(), chartAt(), split(), toLowerCase(), toUpperCase(), indexOf()

##Math
Math.random(), PI, SQRT2, floor(), ceil(), round(), min(), max()

##Date
new Date(), Date.now(), Date.parse(), toString(), setMonth(), setDate()

##Array
length, slice, splice, indexOf, join, sort (splice mutates whereas slice just returns not touching the original array)

##Function, Object
hasOwnProperty(), propertyIsEnumerable(),  
Object.defineProperty(obj, "hideMe", { value: null, enumerable: false });

##Objects and Arrays
- array literal: []
- object literal: {}
- delete property using delete keyword delete x.key
- constructor function
- typeof, instanceof
<pre>
function Hero(name) {
  this.name = name;
  this.occupation = 'Ninja';
};

/*Using regular function*/
function athlete(name){
  return {
    name : name,
    printOut : function(){
      console.log('Hello ' + name);
    }
  };
}
var hero = new Hero('Ajay');
>> hero.constructor
var hero2 = hero.constructor('Ajay2');
>> hero2.instanceof Hero
var athlt = athlete('Ajay3');
>> athlt.printOut();
</pre>


- Object values are passed as reference, hence can be modified even when passed to functions or referred by another variable.
- Object has these built in properties: valueOf(), toString(), o.constructor

##Function Object
- call, apply are used to invoke functions and pass arguments. This allows objects to borrow methods from other objects and call them.
- Every function object has a call method which can be called by other external objects while passing their own properties to be used as this reference.
- In call first argument will be the referring object, other arguments would be the function arguments, if apply is used then function arguments should be an array

##Prototype
- Every **function** has a prototype and contains an object
- Objects are passed by reference and prototype object is shared by all the functions, hence any change at anytime will be reflected everywhere.
- Every object has a constructor. The prototype is an object, so it must have a constructor too which, in turn, has a prototype. You can go up the prototype chain and you will eventually end up with the
built-in Object()
- Below returns prototype
  - Object.getProtoTypeOf(obj)
  - obj.__PROTO__
-
<pre>
function Shape(){
  this.name = 'Shape';
  this.toString = function () {
    return this.name;
  };
}
function TwoDShape(){
  this.name = '2D shape';
}
function Triangle(side, height){
  this.name = 'Triangle';
  this.side = side;
  this.height = height;
  this.getArea = function () {
    return this.side * this.height / 2;
  };
}
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;
>var my = new Triangle(5, 10);
>my.getArea();
25
>my.toString();
"Triangle"

> my instanceof Shape;
true
> my instanceof TwoDShape;
true
> my instanceof Triangle;
true
> my instanceof Array;
false
>Shape.prototype.isPrototypeOf(my);
true
>TwoDShape.prototype.isPrototypeOf(my);
true
>Triangle.prototype.isPrototypeOf(my);
true
>String.prototype.isPrototypeOf(my);
false

/*Improved code*/
function Shape() {}
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function () {
  return this.name;
};
function TwoDShape() {}
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
  this.side = side;
  this.height = height;
}
// take care of inheritance
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
  return this.side * this.height / 2;
};
</pre>

###Object methods
- constructor
- isPrototypeOf

###Function methods
- constructor
- isPrototypeOf
- prototype

pos = myArray.map(function(e) { return e.hello; }).indexOf('stevie');