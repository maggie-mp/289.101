/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/
var puck = document.getElementById('puck')
var puck_x = 210;
var puck_y = 210;
var speed = 50;

function logcoordinates() {
    console.log('x=' + puck_x + 'y=' + puck_y);
}

function checkcollision() {
    if (puck_x >= 250 && puck_x <=350) {
        
        if(puck_y >= 150 && puck_y<= 250){
            console.log('collision!');   
        }
        
    }
    console.log ('check');
}



puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

document.getElementById('left').addEventListener('click', () => {
    
    puck_x -= speed;
    document.getElementById('puck').style.left = puck_x + 'px'  
    console.log('x=' + puck_x + 'y=' + puck_y);
    logcoordinates()
    checkcollision()
    });


document.getElementById('right').addEventListener('click', () => {
    
    puck_x += speed;
    document.getElementById('puck').style.left = puck_x + 'px'
    logcoordinates()
    checkcollision()
    });

document.getElementById('up').addEventListener('click', () => {
    
    puck_y -= speed;
    document.getElementById('puck').style.top = puck_y + 'px'
    logcoordinates()
    checkcollision()
    });

document.getElementById('down').addEventListener('click', () => {
    
    puck_y +=speed;
    document.getElementById('puck').style.top = puck_y + 'px'
    logcoordinates()
    checkcollision()
    });

