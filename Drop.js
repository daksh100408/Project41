class Drop{
constructor(width, height) {

var options={

    isStatic:true,
    restitution:0.4,
}

this.r = random(20, 380);


this.drop = Bodies.circle(this.r, -50, width, height);
this.width = width;
this.height = height;

}

display() {
var pos = this.drop.position;
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
pop();
  }
}