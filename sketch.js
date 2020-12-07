const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var maxDrops = 100;
var drops = [];
var thunderbolt1;

function preload()
{
    thunderbolt1 = loadImage("1.png");
    thunderbolt2 = loadImage("2.png");
    thunderbolt3 = loadImage("3.png");
    thunderbolt4 = loadImage("4.png");
}

function setup()
{
    createCanvas(500, 600);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200, 400);

    for(i = 0; i < maxDrops; i++)
    {
        drops.push(new Drops(random(10,370), random(0,400)));
    }
}

function draw()
{
    background(0);

    Engine.update(engine);

    umbrella.display();

    for(i = 0; i < maxDrops; i++)
    {
        drops[i].display();
        drops[i].reposition();
    }
    
    number = Math.round(random(1,4));
    if(frameCount % 80 === 0)
    {
        var thunder = createSprite(random(10,370), random(10,50), 10, 10);
        switch(number) 
        {
            case 1 : thunder.addImage(thunderbolt1);
            break;
            case 2 : thunder.addImage(thunderbolt2);
            break;
            case 3 : thunder.addImage(thunderbolt3);
            break;
            case 4 : thunder.addImage(thunderbolt4);
            break;     
        }
        thunder.scale = random(0.3, 0.5);
        thunder.lifetime = 20;
    }
    
    drawSprites();
}   

