const robot = require('robotjs');

function run(){
    // toggling 1 and -1 so it never reaches the edge of the screen
    let operator = 1;
    setInterval(()=>{
        console.log(`moving ${operator}px`);
        const mouse = robot.getMousePos();
        robot.moveMouse(mouse.x, mouse.y + (1 * operator));
        operator *= -1;
    },100000)
}
run();  