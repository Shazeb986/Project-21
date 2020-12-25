var car, wall,speed,weight;
function setup() {  
  createCanvas(1600,400);
  speed=random(55,90); 
  weight=random(400,1500);
  wall=createSprite(1000, 200, 20, 300);
  car=createSprite(200,200,20,20);
  car.velocityX=speed;

}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width/2)){
   //  var deformation=0.5*speed*speed*weight/22500;
   var deformation=190;
    car.velocityX=0;
    if(deformation<100){
   car.shapeColor="green";   
    } else if(deformation>100 && deformation<180){
    car.shapeColor="yellow";
    }
    else{
     car.shapeColor="red";
    }
    
  }
  drawSprites();
}