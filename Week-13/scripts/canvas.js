var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2, square3;
var direction;
var questions;
var squareArray = [];
var foodArray = [];
var lives = 3;
var score = 0;

$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    window.alert("Use your 'wasd' keys to move. Make it through the maze without hitting any of the black lines. The yellow circles are food!! They will increase your score by 1 each time. Hit the red box and you lose completely. Get to the gold square with a score of 3 or more and you win!!");
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,50,50,"#00FF00");
    square2 = new Square(680,450,30,30,"rgb(255, 0, 0)");
    square3 = new Square(50,530,20,20,"rgb(212, 175, 55)");
    //circle1 = new Circle()

    $.getJSON("data/food.json", function(data){
      for(var i = 0; i < data.food.length; i++)
      {
          foodArray.push(new Food(data.food[i].x,data.food[i].y, data.food[i].h, data.food[i].w, data.food[i].color));
      }
      drawFood();
    });

    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });



}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }

    var win = hasCollided(square1, square3);
    var test = hasCollided(square1,square2);
    var test2 = false;

    //check if square has collided with food
    var test3 = false;
    for(var i = 0; i < foodArray.length; i++)
    {
      test3 = hasCollided(square1, foodArray[i]);
      if(test3 == true)
      {
        foodArray.splice(i,1);
        score++;
        break;
      }
    }

    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }

        //console.log(test2);
    }

    if(test)
    {
      lives = 0;
      gameOver();
    }

    if(win && score >= 3)
    {
      wonGame();
    }

    if(win && score < 3)
    {
      window.alert("you need more food to win! Go get some and come back!");
    }

    if(test2)
    {
        lives--;
        livesEnd();
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }

    }
    drawSquare();
    drawFood();

}

function livesEnd(){
  if (lives < 0)
  {
    lives = 0;
    gameOver();
  }
}

function gameOver(){
  window.alert("GAMEOVER! RESTART");
  lives = 3;
  score = 0;
//  square1 = new Square(100,100,50,50,"#00FF00");
  setup();
}

function wonGame(){
  window.alert("CONGRATS! YOU WON!! Click to restart :)");
  lives = 3;
  score = 0;
  //square1 = new Square(100,100,50,50,"#00FF00");
  setup();
}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{

    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    ctx.fillStyle = square3.mainColor;
    ctx.fillRect(square3.x, square3.y, square3.width, square3.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 85);

}

function drawFood()
{
  ctx.clearRect(0,0,800,600);
  for(var i = 0; i < foodArray.length; i++)
  {
    ctx.fillStyle = foodArray[i].mainColor;
    ctx.fillRect(foodArray[i].x, foodArray[i].y, foodArray[i].width, foodArray[i].height);
  }
  drawSquare();
    //document.write("array length is: " + foodArray.length);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
