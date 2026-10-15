import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);

// center of the string 
const centerX = stage.width() / 2; 
const centerY = stage.height() / 2; 

// left bump of lemon
const leftBump = new Konva.Circle({
    x: centerX - 100,
    y: centerY,
    radius: 15, 
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
});

// right bump of lemon
const rightBump = new Konva.Circle({
    x: centerX + 100,
    y: centerY,
    radius: 15, 
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
});

// body of lemon




// create our shape (Red circle)
//const circle = new Konva.Circle({
//  x: stage.width() / 2,
//  y: stage.height() / 2,
//  radius: 70,
//  fill: 'red',
//  stroke: 'black',
//  strokeWidth: 4
//});

// add the bumps first and then the body on tope. 
layer.add(leftBump);
layer.add(rightBump); 
