'use strict';

// game
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
// for working images in canvas using Image class

// board
const ground = new Image();
ground.src = "board-2.png";
// food for snake
const foodImg = new Image();
foodImg.src = "baby.png";

// 32 is ceil size
let box = 32;
// user points
let score = 0;

let food = {
	x:Math.floor((Math.random() * 17 +1))*box,
	y:Math.floor((Math.random() * 15 +3))*box,
}

let snake = [];
snake[0] = {
	x:3*box,
	y:4*box
}


document.addEventListener("keydown", direction);
let dir;
function direction(event) {
	if (event.keyCode == 37 && dir !="right"){
		dir = "left";
	}
	else if(event.keyCode == 38 && dir !="down"){
		dir = "up"
	}else if(event.keyCode == 39 && dir !="left"){
		dir = "right"
	}else if(event.keyCode == 40 && dir !="up"){
		dir = "down"
	}
}


// function eatTail(head, arr){
// 	for (let i=0; i<arr.length; i++){
// 		if(head.x == arr[i].x && head.y == arr[i].y){
// 			clearInterval(game)
// 		}
// 	}
// }





function drawGame(){
	ctx.drawImage(ground, 0, 0);
	ctx.drawImage(foodImg, food.x, food.y)
	for (let i= 0; i<snake.length; i++){
		console.log("ashxatec cikly")
		console.log(snake.length)
			let col1=Math.floor(Math.random()*255);
			let col2=Math.floor(Math.random()*255);
			let col3=Math.floor(Math.random()*255);
			ctx.fillStyle = i == 0 ?  "red" : `rgb(${col1},${col2},${col3})`;
			//ctx.fillRect()
			ctx.drawImage(foodImg,snake[i].x, snake[i].y,box, box )

	}
	// score section desi
	ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText(score,box*2.5,box*1.7)

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

// if ate a the food
	if(snakeX == food.x && snakeY == food.y){
		score++;
		food =  {
			x:Math.floor((Math.random() * 17 +1))*box,
			y:Math.floor((Math.random() * 15 +3))*box,
		}
	} else {
		let k=snake.pop();
		console.log("k="+JSON.stringify(k))
	}	
// if pass the border
		if (snakeX < box || snakeX > box*17 || snakeY < 3*box || snakeY>box*17){
			score =0
		//clearInterval(game)
		
		// snakeX = 9*box
		// snakeY = 10*box
		
		//game = setInterval(drawGame,150)
	}
	
	 if (dir == "left") snakeX -=box;
	 if (dir == "right") snakeX +=box;
 	 if (dir == "up") snakeY -=box;
	 if (dir == "down") snakeY +=box;


	 let newHead = {
	 	x: snakeX,
	 	y: snakeY
	 };
	 
	  // seatTail(newHead, snake)
	
	snake.unshift(newHead)

}


let game = setInterval(drawGame,100)