
function compute_squared_distance(a,b)
{
	return (a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y);
}

function compute_angle(source, destination)
{
	var dx = destination.x - source.x;
	var dy = destination.y - source.y;

	var dt = Math.atan(dy/dx);

	if (dx<0) dt+=Math.PI;
	return dt;
}