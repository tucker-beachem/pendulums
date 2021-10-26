const canvasWidth = window.innerWidth - 30;
const canvasHeight = window.innerHeight - 30;
let pendulums = [];
let scl = 25;
let cols; 
let rows; 



function setup() {
 createCanvas(canvasWidth,canvasHeight);
 background (10);

 let cols = floor(width/scl);
 let rows = floor(height/scl);
 console.log(cols, rows);

 pendulums = make2d(cols, rows);
 console.log(pendulums);


//  for (let i = 0; i < Array.length; i++) {
//      array[i] = new Array(rows);
//  }
 for (let i = 0; i < cols; i++) {
     for (let j = 0; j < rows; j++) {
     pendulums[i][j] = new Pendulum (i, j, 20);
    }
//  for( let i = 0; i < cols; i++) {
//      for(let j = 0; j < rows; j++) {

//         const xAngle = map(0, 0, width, -TWO_PI, TWO_PI);
//         const yAngle = map (0, 0, height, -TWO_PI, TWO_PI);

}
}
function draw() {
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            pendulums[i][j].update();
            pendulums[i][j].render();
        }
        }
    }

    function make2d(cols, rows) {
        let array = new Array(cols);
        for (let i = 0; i < array.length; i++) {
            array[i] = new Array(rows);
        }
        return array
    
    }