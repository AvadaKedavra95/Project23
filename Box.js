class Box{
    constructor(x,y,width,height){
        var options = {
           restitution : 0.8,
           isStatic : true,
           density : 1,
           friction : 2,
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display(){
        var pos=this.body.position;
        
        fill("white");
        stroke("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}