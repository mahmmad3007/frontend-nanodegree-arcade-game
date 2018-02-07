var score = 0;

// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png'; 
    this.x=x;
    this.y=y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < 505 ){
        this.x = this.x + (150*dt);
    }
    else
    {
       this.x = 0;
       // console.log("this.x="+this.x);
    }

    

    //the player clashes with enemy
    //if(this.x < player.x +  )
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
var Player = function(){

    this.sprite ='images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

//update class to update player postion.

// This class requires an update(), r
Player.prototype.update = function(){ 

   if (this.y == -20 ) {
   
    this.x = 200;
    this.y=400;
    score = score + 1;

    //get out of the game

    if (score == 5) {

        player.score=5;
        player.x = 200;
        player.y=400;
        document.getElementById('won').innerHTML ="You won";
        ctx.clearRect(0,0,canvas.width,canvas.height);
        


    };

   // var formattedScore = HTMLscore.replace("%data%", score);
   // $("#score").append(formattedScore);

   document.getElementById('score').innerHTML =score;

   }
    
};
//render()
Player.prototype.render=function(){

    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
};

//function checkCollisions(){
Player.prototype.checkCollisions=function(){

    allEnemies.forEach(function(enemy){
    if (this.y==enemy.y){
    var distance = Math.abs(this.x - enemy.x);
        if(distance <= 40){
            console.log("distance= "+distance);
        this.score=0;
        this.x = 200;
        this.y=400;

        }
    };
  });      
};

// a handleInput() method.
Player.prototype.handleInput=function(direction){

    switch(direction){
        case 'left':
        this.x = this.x - 20;
        break;

        case 'right':
        this.x = this.x + 20;
        break;

        case 'up':
        this.y = this.y - 20;
        break;

        case 'down':
        this.y = this.y + 20;
        break;

        default:
        this.x=200;
        this.y=400;
    }



};

// Now instantiate your objects.

var enemy1 = new Enemy(0,60);
var enemy2 = new Enemy(150, 120);
var enemy3 = new Enemy(200, 220);
// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1,enemy2,enemy3];

// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
