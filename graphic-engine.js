

function GraphicEngine(width, height){

	this.width = width;
	this.height = height;

	this.drawables = [];

	this.clear = function(ctx)
	{
		ctx.clearRect(0, 0, width,height);
	};

	this.draw = function(ctx)
	{
		this.clear(ctx);
		for (var i in this.drawables)
		{
			this.drawables[i].draw(ctx);
		}
	}

}