class Spider{
    constructor(x,y){
        var options = {
            isStatic: false
        }
        this.image = loadImage("images/spider.png");
        this.spider = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(World,this.spider);
    }

    display(){
        var pos = this.spider.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y + 70,300,300);
    }
}