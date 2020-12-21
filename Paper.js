class paper{
  constructor(){
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.bodies = circle(100,100,10,options);
  }
  display(){
    rectMode = (CENTER);
    shapeColor = color(255);
  }
}