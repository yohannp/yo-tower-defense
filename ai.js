
function destination_is_reached(monster)
{
	return compute_squared_distance(monster.location, monster.destination)<6;
}


function find_route(initialRoute,x,y)
{
	initialRoute.push({x:x, y:y});

	var positionsToEvaluates = [
	{ x: x+1, y: y},
	{ x: x-1, y: y},
	{ x: x, y: y-1},
	{ x: x, y: y+1},
	];

	evaluatingLoop:

	var loop = null; 
	evaluatingLoop:
	for (var p in positionsToEvaluates)
	{
		var px = positionsToEvaluates[p].x;
		var py = positionsToEvaluates[p].y;
		if (px<0 || px>=MAP_SIZE_X) continue;
		if (py<0 || py>=MAP_SIZE_Y) continue;
		if (map[px][py] == 'end')
		{
			//FOUND!!
			initialRoute.push({x:px,y:py});
			return initialRoute;
		}
		if (map[px][py] != 'nothing') continue;
		for (var i=initialRoute.length-1;i>=0;i--)
		{
			var p = initialRoute[i];
			if (px==p.x && py==p.y) continue evaluatingLoop;
		}
		
		var result = find_route(initialRoute.slice(0),px,py);
		if (result)
		{
			if (loop==null)
			{
				loop = result;
			}else{
				if (result.length<loop.length) loop = result;
			}
		}
	}
	if (loop!=null) return loop;
	return false;
}

function compute_new_destination(monster)
{
	var x = Math.floor(monster.location.x / BLOCK_SIZE);
	var y = Math.floor(monster.location.y / BLOCK_SIZE);

	var routeFinded=false;
	var evaluationStack = Array();

	var route = find_route(evaluationStack,x,y);

	x = route[1].x;
	y = route[1].y;

	monster.destination.x = x*BLOCK_SIZE + BLOCK_SIZE/2;
	monster.destination.y = y*BLOCK_SIZE + BLOCK_SIZE/2;
}



function compute_direction(monster)
{
	monster.angle = compute_angle(monster.location, monster.destination);
}