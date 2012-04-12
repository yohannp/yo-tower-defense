
var map;

var start_position;
var end_position;

var BLOCK_SIZE=48;

var MAP_SIZE_X = 16;
var MAP_SIZE_Y = 10;

var map1 = 
{
	rendering:
	{
		nothing: function(ctx,x,y)
		{
			ctx.fillStyle = "rgba(230, 230, 230, 1)";
			ctx.fillRect(x,y,BLOCK_SIZE,BLOCK_SIZE);
		},
		wall: function(ctx,x,y)
		{
			ctx.fillStyle = "rgba(255, 200, 200, 1)";
			ctx.fillRect(x,y,BLOCK_SIZE,BLOCK_SIZE);
		},
		start: function(ctx,x,y)
		{
			ctx.fillStyle = "rgba(200, 255, 200, 1)";
			ctx.fillRect(x,y,BLOCK_SIZE,BLOCK_SIZE);
		},
		end: function(ctx,x,y)
		{
			ctx.fillStyle = "rgba(200, 200, 255, 1)";
			ctx.fillRect(x,y,BLOCK_SIZE,BLOCK_SIZE);
		},
	},

	mapping:
	{
		' ': 'nothing',
		'#': 'wall',
		'S': 'start',
		'E': 'end',
	},

	carto:
	[
	"################",
	"#S           # #",
	"###########    #",
	"#    #    #### #",
	"## #   #       #",
	"#  #### ########",
	"#            ###",
	"###########  ###",
	"#E             #",
	"################",
	],
};

function generateMap()
{
	var carto = map1.carto;
	var mapping = map1.mapping;
	map = [MAP_SIZE_X];
	for (var i=0;i<MAP_SIZE_X;i++)
	{
		map[i] = [MAP_SIZE_Y];
		for (var j=0;j<MAP_SIZE_Y;j++)
		{
			map[i][j] = false;
			if (j<carto.length)
			{
				var mapLine = carto[j];
				if (i<mapLine.length)
				{
					var mapItem = mapLine[i];
					var mapType = mapping[mapItem];
					map[i][j] = mapType;
					switch(mapType)
					{
						case 'start':
						start_position = {
							x: i,
							y: j,
						};
						break;
						case 'end':
						end_position = {
							x: i,
							y: j,
						};
						break;
					}
				}
			}
		}
	}
}