
//Factory function
function createCircle(radius){
    return {            //circle object
        radius,               //properties
        draw: function(){       //mehod
            console.log('draw');
        }
    };
}

const circle = createCircle(1);


//constructor func
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);

//functions and objcects
//note functoins are objects

function Circle2(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const Circle3 = new Function('radius',`
this.radius = radius;
this.draw = function(){
    console.log('draw');
    }
`);

const phoCircle = new Circle3(1);

Circle.call({}, 1); //this expression is equal to line 46
Circle.apply({}, [1]); //this allow syou to send arrays as a parameter
const circle2 = new Circle(2);

//the take away from this demonstration is objects = functions 


// Adding/Removing Properties

function CircleProps(radius){ //you are able to add properties on the fly
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circProp = new CircleProps(10);

circProp.location = {x: 1};

const propertyName = 'center-location';
circProp[propertyName] = {x: 1};

circProp['location'] = {x:1}; //equal to above but isn't as clean looking
//bracket notation can be used to implament properties with special characters

delete circProp.location;

//Enumerating Properties

for (let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle)             //in operator allows us to find out if a property is in an object
    console.log('Circle has a radius');


function Circle4(radius){
    this.radius = radius;
    this.defaultLocation = {x:0, y:0};
    this.computeOptimumLocation = function(factor){
        //// ... do some magic
    }

    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    };
}

const circle4 = new Circle4(10);
circle4.computeOptimumLocation();
circle4.draw();

//abstraction mean we should hide details and complexity and just show the essentials



//private properties

function Circle5(radius){

    let colour = 'red'; //this is a local variable to the function, this way we can hid members from the outside

    this.radius = radius;
    let defaultLocation = {x:0, y:0};  //now defaultLocation is internal
    let computeOptimumLocation = function(factor){ //this function is now internal
        //// ... do some magic
    }

    this.draw = function(){
        computeOptimumLocation(0.1);
        console.log('draw');
    };
}

const circle5 = new Circle4(10);
circle5.computeOptimumLocation();
circle5.draw();