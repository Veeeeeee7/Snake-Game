import { onSnake, expandSnake, snake1Body, snake2Body } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = [
    { x: 8, y: 5 },
    { x: 14, y: 5 },
];
const expansion_rate = 1;
var onFood = true;

export function update() {
    if (onSnake(snake1Body, food[0], onFood, false)) {
        expandSnake(1, expansion_rate);
        food[0] = getRandomFoodPosition();
        console.log("yes");
    } else if (onSnake(snake2Body, food[0], onFood, false)) {
        expandSnake(2, expansion_rate);
        food[0] = getRandomFoodPosition();
        console.log("yes");
    }
    if (onSnake(snake1Body, food[1], onFood, false)) {
        expandSnake(1, expansion_rate);
        food[1] = getRandomFoodPosition();
        console.log("yes");
    } else if (onSnake(snake2Body, food[1], onFood, false)) {
        expandSnake(2, expansion_rate);
        food[1] = getRandomFoodPosition();
        console.log("yes");
    }
}

export function exportFood() {
    return food;
}

export function draw(gameBoard) {
    const food1Element = document.createElement("div");
    food1Element.style.gridRowStart = food[0].y;
    food1Element.style.gridColumnStart = food[0].x;
    food1Element.classList.add("food");
    gameBoard.appendChild(food1Element);

    const food2Element = document.createElement("div");
    food2Element.style.gridRowStart = food[1].y;
    food2Element.style.gridColumnStart = food[1].x;
    food2Element.classList.add("food");
    gameBoard.appendChild(food2Element);
}

export function resetFood() {
    food = [
        { x: 8, y: 5 },
        { x: 14, y: 5 },
    ];
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition, false, false)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
