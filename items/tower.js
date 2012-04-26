
function Tower(x,y)
{
	this.location = {
		x: x,
		y: y,
	};

	this.angle = 0;

	this.draw = function(ctx)
	{
		ctx.fillStyle = "rgba(0,255,0,1)";
		ctx.beginPath();
		ctx.arc(this.location.x, this.location.y, 10, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();


		ctx.save();
   		ctx.translate(this.location.x, this.location.y);
   		ctx.rotate(this.angle);
   		ctx.fillStyle = "rgba(255,0,0,1)";
   		ctx.fillRect(0,-3,15,6);
   		ctx.restore();
	}


	this.ai_step = function(environment_objects)
	{
		for (var i in environment_objects)
		{
			var obj = environment_objects[i];
			if (obj instanceof Monster)
			{
				//Check if monster is inside tower radius
				var threshold = 150;
				var d = compute_squared_distance(this.location, obj.location);
				if (threshold*threshold >= d)
				{
					this.angle = compute_angle(this.location, obj.location);
					return;
				}
			}
		}
	}
}