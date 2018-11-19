
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
circle.draw();