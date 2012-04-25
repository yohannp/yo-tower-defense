
function PhysicEngine(name)
{
	this.name = name;
	this.physic_objects = [];

	this.do_step = function()
	{
		for (var i in this.physic_objects)
		{
			var po = this.physic_objects[i];
			var x = po.location.x;
			var y = po.location.y;
			var direction = po.direction;
			var dx = direction.dx;
			var dy = direction.dy;

			x += dx;
			y += dy;

			po.location.x = x;
			po.location.y = y;
		}
	};
}