class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position

        translate(pos.x,pos.y)
        fill("green")
        rect(0,0,this.width,this.height)
    }
}