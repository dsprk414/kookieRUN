
  var monkey , monkey_running;
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var monkeyImage
  var score=0;
  var gameState="play"
  var backImage;
   
  
  function preload(){
  
    monkey_running=loadImage("cooky1.png","cooky2.jpg")
    monkeyImage=loadImage("monkeyImage.png")
    jump=loadImage("cookyjump.png")
    bananaImage=loadImage("purplehrt.jpg")
    obstacleImage=loadImage("unnamed.jpg")
    rstImage=loadImage("rset.png")
  }


  function setup() {
    createCanvas(600,400)
    
    reset=createSprite(300,190)
    reset.addImage("reset",rstImage)
    reset.scale=0.2
    
    
    
    
    monkey=createSprite(60,320,20,20)
     
       monkey.addImage("monkey",monkey_running)
      
   
     
     inground=createSprite(0,360,600,20)
     inground.velocityX=-4
     inground.x=inground.width/2
     inground.shapeColor="purple"
     
    obstaclesGroup=new Group();
    bananaGroup=new Group();
   
    
   
  
  }


  function draw() {
   background(300)
  
   
    if(gameState==="play"){
      
      inground.velocityX=0;
      if(keyDown("space")&&monkey.y >=290){
      monkey.velocityY=-13.5;}
      
      if(monkey.y <=280){
        monkey.addImage("monkey",jump)
        monkey.scale=0.09
      }
       
      if(monkey.y>280){
        monkey.addImage("monkey",monkey_running)
        monkey.scale=0.09
      }
      
      
      reset.visible=false
      
      if(monkey.isTouching(bananaGroup)){
      score=score+1
      bananaGroup.destroyEach();
    }
       
      bananas();


obstacles();
 
      if(obstaclesGroup.isTouching(monkey)){
  gameState="end"   } 

      
      
      
      
    }
    
   else if(gameState==="end"){
      
    inground.velocityX = 0;
  monkey.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  bananaGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  bananaGroup.setLifetimeEach(-1);
  monkey.addImage("monkey",monkeyImage)
    monkey.scale=0.5
      reset.visible=true
      if(mousePressedOver(reset)){
        resets();
      }
    }
   
    
    
    
   
  
 monkey.velocityY=monkey.velocityY +0.7
     monkey.collide(inground)
      
    if(inground.x<300){
      inground.x=inground.width/2
    }
    
     
    
    
    
    
    
    
    



   

 





   
    
    drawSprites();
   fill("purple")
 textSize(20);
   text("Score:"+score,500,50)


     
   
  }


  function bananas(){
    if(frameCount%140===0){
    banana=createSprite(600,120,40,10)
      banana.y=Math.round(random(120,190))
      banana.addImage("banana",bananaImage)
      banana.scale=0.09
      banana.velocityX=-4
      bananaGroup.add(banana);
      banana.lifetime=430;
      banana.depth=reset.depth
      reset.depth=reset.depth+1
    }
  }

  function obstacles(){
    if(frameCount%100===0){
      obstacle=createSprite(600,310,20,10)
      obstacle.addImage(obstacleImage)
      obstacle.velocityX=-5
      obstacle.scale=0.5
      obstacle.lifetime=430;
      obstaclesGroup.add(obstacle);
    }
  }


   


 function resets(){
   gameState="play"
   score=0
   obstaclesGroup.destroyEach();
   bananaGroup.destroyEach();

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 }














  


