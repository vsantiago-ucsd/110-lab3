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
//const centerX = stage.width() / 2; 
//const centerY = stage.height() / 2; 

const lemon = new Konva.Group({
    x: stage.width() / 2,
    y: stage.height() /2,
    draggable: true,
});

// left bump of lemon
const leftBump = new Konva.Circle({
    x: - 100,
    y: 0,
    radius: 15, 
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
});

// right bump of lemon
const rightBump = new Konva.Circle({
    x: 100,
    y: 0,
    radius: 15, 
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
});

// body of lemon
const body = new Konva.Ellipse({
    x: 0,
    y: 0, 
    radiusX: 100, 
    radiusY: 75,
    fill:'yellow',
    stroke: 'black',
    strokeWidth: 4,
});



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
lemon.add(leftBump);
lemon.add(rightBump); 
lemon.add(body); 
layer.add(lemon); 

// pointer cursor on hover 
lemon.on('mouseover', () => {
    stage.container().style.cursor = 'pointer'; 
}); 

// back to default cursor when mouse leaves
lemon.on('mouseout', () => {
    stage.container().style.cursor = 'default';
});

// draggable is set above with draggable: true

// grow when you press down
lemon.on('mousedown', () => {
    lemon.to({
        scaleX: 1.5,
        scaleY: 1.5,
        duration: 0.5,
    });
});

// shrink back when you let go
lemon.on('mouseup', () => {
    lemon.to({
        scaleX: 1,
        scaleY: 1,
        duration: 0.5,
    });
});