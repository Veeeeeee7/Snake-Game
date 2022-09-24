import { getInputDirection } from "./input.js";
import { exportFood as getFood } from "./food.js";
import { gameStart } from "./input.js";

export const snake_speed = 5;
var snakeBody = [
    { x: 11, y: 11 },
    { x: 11, y: 12 },
    { x: 11, y: 13 },
];
let newSegments = 0;
var onFood = false;
var scores = 0;
export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    const snakeElementHead = document.createElement("div");
    snakeElementHead.style.gridRowStart = snakeBody[0].y;
    snakeElementHead.style.gridColumnStart = snakeBody[0].x;
    snakeElementHead.classList.add("snake-head");
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

export function expandSnake(amount) {
    newSegments += amount;
    scores++;
}
export function score(){
    return scores;
}

export function onSnake(position, onFood) {
    if (gameStart == false) return false;
    if (onFood) {
        // console.log(equalPositions(snakeBody[0], getFood()));
        return equalPositions(snakeBody[0], getFood());
    } else {
        // console.log(equalPositions(snakeBody[0], snakeBody[1]));
        for (var i = 3; i < snakeBody.length; i++) {
            if (equalPositions(snakeBody[0], snakeBody[i]) == true) {
                return true;
            }
        }
    }
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], (onFood = false));
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
