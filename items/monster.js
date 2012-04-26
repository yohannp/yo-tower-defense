
function Monster(x,y)
{
	this.location = {
		x: x,
		y: y,
	};

	this.angle = 0;

	this.speed = 1;

	this.destination = {
		x: 0,
		y: 0,
	};


	this.health = 100;

	this.draw = function(ctx)
	{
		ctx.fillStyle = "rgba(0,0,255,1)";
		ctx.beginPath();
		ctx.arc(this.location.x, this.location.y, 10, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();

		ctx.fillStyle = "rgba(0,255,0,1)";
		ctx.fillRect(this.location.x-20 + .5 - 1, this.location.y-20 + .5, 40, 4);
	
		ctx.strokeStyle = "black";
		ctx.strokeRect(this.location.x-20 + .5 - 1, this.location.y-20 + .5, 40, 4);


	}
}