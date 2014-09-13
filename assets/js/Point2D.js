function Point2D(x,y)
{
	this.x = x;
	this.y = y;
}//eoc

Point2D.prototype.pointAtDistInPointAxis = function(d,p)
{
	var d2p = this.distanceToXY(p.x,p.y);
	
	var da = d/d2p;
	
	var dx = da*(p.x-this.x);
	var dy = da*(p.y-this.y);
	
	return new Point2D(this.x+dx, this.y+dy);
};//eof

Point2D.prototype.distanceToXY = function(x,y)
{
	return Math.sqrt(Math.pow(this.x-x, 2) + Math.pow(this.y-y, 2));
};//eof