var canvas;
var ctx;

var WIDTH=1024;
var HEIGHT=768;


var monsters;




function init()
{
	canvas = document.getElementById('yo-tower-defense');
	ctx = canvas.getContext('2d');
	monsters = [];
	generateMap();
	generateMonsters();
	return setInterval(main_loop, 10);
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function monster(x,y)
{
	this.location = {
		x: x,
		y: y,
	};

	this.direction = {
		dx: 1,
		dy: 0,
	};
	this.destination = {
		x: 0,
		y: 0,
	}
}

function convertMapPosition(i,j)
{
	return {
		x: i*BLOCK_SIZE + BLOCK_SIZE/2,
		y: j*BLOCK_SIZE + BLOCK_SIZE/2,
	};
}

function generateMonsters()
{
	var monsterCount = 1;
	for (var i=0;i<monsterCount;i++)
	{
		var start_pos = convertMapPosition(start_position.x, start_position.y);
		var m = new monster(BLOCK_SIZE*i/2+start_pos.x, start_pos.y);
		compute_new_destination(m);
		compute_direction(m);
		m.step = 0;
		monsters.push(m);
	}
}


function main_loop()
{
	ai_step();
	for (var i=0; i<4; i++)	physic_step();
	draw();
}

function draw()
{
	clear();
	drawGrid();
	drawMonsters();
}

function drawGrid()
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

function drawMonster(ctx,x,y,color)
{
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}

function drawMonsters()
{
	for (var i in monsters)
	{
		var x = monsters[i].location.x;
		var y = monsters[i].location.y;
		drawMonster(ctx, x, y, "rgba(0,0,255,1)");
	}
}


function physic_step()
{
	for (var i in monsters)
	{
		var x = monsters[i].location.x;
		var y = monsters[i].location.y;
		var direction = monsters[i].direction;
		var dx = direction.dx;
		var dy = direction.dy;

		x += dx;
		y += dy;

		monsters[i].location.x = x;
		monsters[i].location.y = y;
	}
}

init();