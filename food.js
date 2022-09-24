import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = { x: 11, y: 5 };
const expansion_rate = 1;
var onFood = true;

export function update() {
    if (onSnake(food, onFood)) {
        expandSnake(expansion_rate);
        food = getRandomFoodPosition();
    }
}

export function exportFood() {
    return food;
}

export function draw(gameBoard) {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
