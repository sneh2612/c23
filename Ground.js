class Ground{

constructor(x,y,width,height){

  var proper={

isStatic:true
    

  }
  this.width=width;
  this.height=height;
  this.body=Bodies.rectangle(x,y,width,height,proper);
 World.add(world,this.body);



}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
    
  }


}