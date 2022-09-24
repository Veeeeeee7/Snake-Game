import {
    update as updateSnake,
    drawRainbowSnake,
    drawSnakeWithTail,
    snake_speed,
    snakeIntersection,
    getSnakeHead,
    resetSnake,
    score,
} from "./snake.js";

import { update as updateFood, draw as drawFood, resetFood } from "./food.js";

import { outsideGrid } from "./grid.js";

import { gameStart, resetDirection } from "./input.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
const restartBoard = document.getElementById("restart-board");
const restartButton = document.getElementById("restart-button");

function main(currentTime) {
    if (gameOver) {
        // if (confirm("You lost. Press ok to restart.")) {
        //     window.location = "/";
        // }
        restartBoard.classList.remove("back");
        restartBoard.classList.add("front");
        // console.log("game over");
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snake_speed) return;
    lastRenderTime = currentTime;

    if (gameStart) {
        // console.log("game started");
        draw();
        update();
    }
}

window.requestAnimationFrame(main);

restartButton.onclick = function restartGame() {
    resetSnake();
    resetFood();
    resetDirection();
    restartBoard.classList.remove("front");
    restartBoard.classList.add("back");
    gameOver = false;
    window.requestAnimationFrame(main);
};

function update() {
    updateSnake();
    updateFood();
    checkDeath();
    document.getElementById("scores").innerHTML = score();
}



function draw() {
    gameBoard.innerHTML = "";
    drawRainbowSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
