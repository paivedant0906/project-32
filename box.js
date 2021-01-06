class Box {
    constructor(x,y,width,height) {
      var options = {
          friction:1.1,
          restitution:0.6,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.visibility=255;
      this.image=loadImage("red box.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body)
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop();
      }
      
    }
    score(){
      if(this.visibility<0 && this.visibility>-500){
        score++;
      }
    }
  }
