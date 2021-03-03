 const Engine = Matter.Engine,
  const World = Matter.World,
 const Body = Matter.Body;
  const Bodies = Matter.Bodies;
 var count = 0;
var particles = [];
var plinkos = [];
var divisions = [];
var particle = 0;
var gameState = "start";
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    ground1 = new Ground(400,795,width,10);

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : ",20,30);
 text("500",105,520);
 text("500",20,520);
 text("500",260,520);
 text("500",185,520);
 text("100",335,520);
 text("100",420,520);
 text("100",495,520);
 text("200",580,520);
 text("200",665,520);
 text("200",745,520);
  Engine.update(engine);

console.log(frameCount);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%380===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     count = count+1;
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
   if(count>5){
     gameState = "end";
   }
   ground1.display();
  
}
function mousePressed(){
if(gameState!=="end"){
particle = new Particle(mouseX,10,10,10);
count = count+1;
}

}