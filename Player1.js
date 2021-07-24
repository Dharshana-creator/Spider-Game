class Player{
    constructor(x,y){
        var options = {
            isStatic: false
        }
        this.image = loadImage("images/hunterBoy.png");
        this.player1 = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(World,this.player1);

    }
    display(){
        var pos = this.player1.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y + 70,300,300);
    }
}