function Grid()
{
	this.draw = function(ctx)
	{
		ctx.strokeStyle = "rgba(255, 0, 0, 1)";
		for (var i=0;i<MAP_SIZE_X;i++)
		{
			for (var j=0;j<MAP_SIZE_Y;j++)
			{
				var item =	map[i][j];
				var render_function = map1.rendering[item];
				if (render_function) render_function(ctx,i*BLOCK_SIZE,j*BLOCK_SIZE);

				ctx.strokeRect(i*BLOCK_SIZE,j*BLOCK_SIZE,BLOCK_SIZE,BLOCK_SIZE);
			}
		}
	}
}