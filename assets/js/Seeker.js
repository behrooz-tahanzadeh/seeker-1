function Seeker(x,y)
{
	this.pos = new Point2D(x,y);
	
	Seeker.List.push(this);
}//eoc

Seeker.Aim = new Point2D(0,0);
Seeker.List = [];
Seeker.Ctx = null;

Seeker.DrawAll = function()
{
	for (var i=0; i<Seeker.List.length; i++)
		Seeker.List[i].draw();
};

Seeker.Init = function()
{
	for(var i=0; i<(1000/20); ++i)
		for(var j=0; j<(600/20); ++j)
			new Seeker((i*20)+10, (j*20)+10);
};

Seeker.prototype.draw = function()
{
	if(!Seeker.Aim || !Seeker.Ctx) return;
	
	var ap = this.pos.pointAtDistInPointAxis(20, Seeker.Aim);
	
	Seeker.Ctx.moveTo(this.pos.x, this.pos.y);
	Seeker.Ctx.lineTo(ap.x,ap.y);
};