var canvas;
var ctx;

var WIDTH=1024;
var HEIGHT=768;


var monsters;
var towers;

var physic_engine;
var graphic_engine;


function init()
{
	canvas = document.getElementById('yo-tower-defense');
	ctx = canvas.getContext('2d');
	physic_engine = new PhysicEngine();
	graphic_engine = new GraphicEngine(WIDTH, HEIGHT);
	graphic_engine.drawables.push(new Grid());
	monsters = [];
	towers = [];
	generateMap();
	generateMonsters();

	var poss = [
			{x:7, y:5},
			{x:1, y:5},	
		];
	for (var p in poss)
	{
		var pos = convertMapPosition(poss[p].x,poss[p].y);
		var tower = new Tower(pos.x, pos.y);
		towers.push(tower);
		graphic_engine.drawables.push(tower);
	}
	return setInterval(main_loop, 10);
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
		var m = new Monster(BLOCK_SIZE*i/2+start_pos.x, start_pos.y);
		compute_new_destination(m);
		compute_direction(m);
		m.step = 0;
		monsters.push(m);
		physic_engine.physic_objects.push(m);
		graphic_engine.drawables.push(m);
	}
}

function main_loop()
{
	var ai_objects = [].concat(towers,monsters);
	for (var i in ai_objects) ai_objects[i].ai_step(ai_objects);
		
	for (var i=0; i<4; i++)	physic_engine.do_step();
	graphic_engine.draw(ctx);
}

init();