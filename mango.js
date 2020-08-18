class Mango
{

    constructor(x, y, radius)
    {

        var option=
        {

            isStatic: true,
            restitution: 0,
            friction: 1

        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.mango = Bodies.circle(this.x, this.y, this.radius/2, option);

        this.image = loadImage("mango.png");
      
        World.add(world, this.mango);

    }
    display()
    {

      fill("white");
      var posit = this.mango.position;
      push();
      translate(posit.x, posit.y);
      imageMode(RADIUS);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();

    }

}