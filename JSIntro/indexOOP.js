
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
circProp['location'] = {x:1}; //equal to above but isn't as clean looking
//bracket notation can be used to implament properties with special characters

