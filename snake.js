import { getInputDirection } from "./input.js";
import { exportFood as getFood } from "./food.js";

export const snake_speed = 10;
var snakeBody = [
    { x: 11, y: 11 },
    { x: 11, y: 12 },
    { x: 11, y: 13 },
];
let newSegments = 0;
var onFood = false;
var scores = 0;
var rainbowColors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#7FFF00",
    "#00FF00",
    "#00FF7F",
    "#00FFFF",
    "#007FFF",
    "#0000FF",
    "#7F00FF",
    "#FF00FF",
    "",
];

export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function drawSnakeWithTail(gameBoard) {
    const snakeElementHead = document.createElement("img");
    snakeElementHead.style.gridRowStart = snakeBody[0].y;
    snakeElementHead.style.gridColumnStart = snakeBody[0].x;
    snakeElementHead.classList.add("snake-head");
    snakeElementHead.src = "snake-head.png";
    gameBoard.appendChild(snakeElementHead);

    for (var i = 1; i < snakeBody.length - 1; i++) {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = snakeBody[i].y;
        snakeElement.style.gridColumnStart = snakeBody[i].x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    }

    const snakeElementTail = document.createElement("div");
    snakeElementTail.style.gridRowStart = snakeBody[snakeBody.length - 1].y;
    snakeElementTail.style.gridColumnStart = snakeBody[snakeBody.length - 1].x;
    snakeElementTail.classList.add("snake-tail");
    gameBoard.appendChild(snakeElementTail);
}

export function drawRainbowSnake(gameBoard) {
    const snakeElementHead = document.createElement("img");
    snakeElementHead.style.gridRowStart = snakeBody[0].y;
    snakeElementHead.style.gridColumnStart = snakeBody[0].x;
    snakeElementHead.classList.add("snake-head");
    snakeElementHead.src = "imgs/snake-head.png";
    gameBoard.appendChild(snakeElementHead);

    for (var i = 1; i < snakeBody.length; i++) {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = snakeBody[i].y;
        snakeElement.style.gridColumnStart = snakeBody[i].x;
        snakeElement.style.backgroundColor =
            rainbowColors[(i % rainbowColors.length) - 1];
        snakeElement.classList.add("rainbow-snake");
        gameBoard.appendChild(snakeElement);
    }
}

export function expandSnake(amount) {
    newSegments += amount;
    scores++;
}
export function score(){
    return scores;
}

export function onSnake(position, onFood, intersect) {
    // if (gameStart == false) return false;
    if (onFood) {
        // console.log(equalPositions(snakeBody[0], getFood()));
        return equalPositions(snakeBody[0], getFood());
    } else if (intersect) {
        // console.log(equalPositions(snakeBody[0], snakeBody[1]));
        for (var i = 3; i < snakeBody.length; i++) {
            if (equalPositions(snakeBody[0], snakeBody[i])) {
                return true;
            }
        }
    } else {
        for (var i = 0; i < snakeBody.length; i++) {
            if (equalPositions(position, snakeBody[i])) {
                return true;
            }
        }
    }
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], false, true);
}

export function resetSnake() {
    snakeBody = [
        { x: 11, y: 11 },
        { x: 11, y: 12 },
        { x: 11, y: 13 },
    ];
    scores = 0;
}

function equalPositions(pos1, pos2) {
    return pos1.x == pos2.x && pos1.y == pos2.y;
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;
}
