const Engine = Matter.Engine ;
 const World = Matter.World ;
  const Bodies = Matter.Bodies ; 
  var engine , world ,ground ,helecopter;
 
 
   function setup() {
     createCanvas(400,400);
      engine = Engine.create();
      world = engine.world ;
      Box1=new Box(200,60,20,20)
      var options={isStatic: true} 
helicopter=Bodies.rectangle(200,50,100,30,options);
var options={isStatic: true} 
ground=Bodies.rectangle(200,400,400,10,options)
World.add(world,ground);
World.add(world,helicopter);
    } 
      function draw() {
        background(0);
        Engine.update(engine)
        rectMode(CENTER)
       Box1.display()
     
        push()
       fill("red")
       rect(helicopter.position.x,helicopter.position.y,100,30)
       pop()
fill("red")
       rect(ground.position.x,ground.position.y,400,10)    
}
