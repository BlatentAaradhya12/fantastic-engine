class Boat {

  constructor(x, y, width, height, boatPos) {
    var options = {
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.boatPosition =  boatPos;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("brown");
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}  
