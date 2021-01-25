class Umbrella {
    constructor(x,y,r){
        var options = {
        
            friction : 1.0,
            density : 0.04,
            restitution : 0.8,
            isStatic : true
        }
    this.body = Bodies.circle(x,y,r,options);
    this.x = x;
    this.y = y;  
    this.r = r;
    this.width = width;
    this.height = height;
    this.image = loadImage("images/walking_1.png","images/walking_2.png",
    "images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png",
    "images/walking_7.png","images/walking_8.png");

    World.add(world,this.body);
    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    
    strokeWeight(4);
    fill("black");
    ellipse(pos.x,pos.y,this.r,this.r);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y+175, 500,500);
    pop();
    }
}