var bullet,wall,speed,weight,thickness,damage;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);

  weight=random(30,52);

  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;

  thickness = random(22,83);

  wall=createSprite(900,200,thickness,height/2);
  wall.shapeColor=80,80,80;

  damage= 0.5*(weight*speed*speed)/(thickness*thickness*thickness);

  // bullet.width=wall.width+1;
}

function draw() {
  background(255);
  
  fill(bullet.shapeColor);
  if(collided(bullet,wall)){
  if(damage>10){
    bullet.shapeColor="red";
    text("Bullet not effective :(",300,10);
    
  }
  if(damage<10){
    bullet.shapeColor="green";
    text("Bullet effective :)",300,10);
  }
  text("Damage: "+damage,20,10);
  bullet.velocityX=0;
  wall.velocityX=0;
}
  drawSprites();
}