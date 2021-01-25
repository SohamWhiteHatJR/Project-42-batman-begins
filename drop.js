class Drop {
    constructor(x,y,r){
        var options = {
        
            friction : 0.1,
            density : 0.04,
            restitution : 0.8
        }
    this.body = Bodies.circle(x,y,r,options);
    this.x = x;
    this.y = y;  
    this.r = r;
    World.add(world,this.body);
    }

    dropUpdate(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    
    //strokeWeight(4);
    fill("blue");
    ellipse(pos.x,pos.y,this.r,this.r);
    pop();
    }
}