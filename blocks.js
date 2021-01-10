class block {
    constructor (x,y,width,height){
    var options={
        'isStatic': false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width,height, options);
          this.height=height;
          this.width=width;
          World.add(world, this.body);
        }
        display(){
          if(this.body.speed < 3){
            var pos =this.body.position;
            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            fill("blue");
            rect(0, 0,this.width,this.height);
            pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             rect(this.image,0,0,50,50);
             pop();
           }
          }
         
        }
      
    