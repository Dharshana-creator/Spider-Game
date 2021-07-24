class Player2{
    constructor(x,y){
        var options = {
            isStatic: false
        }
        this.image = loadImage("images/hunterGirl.png");
        this.player2 = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(World,this.player2);

    }
    display(){
        var pos = this.player2.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y + 70,300,300);
    }
}