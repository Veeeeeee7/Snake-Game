import { getInputDirection } from "./input.js";
import { exportFood as getFood } from "./food.js";

export const snake_speed = 10;
export var snake2Body = [
    { x: 14, y: 11 },
    { x: 14, y: 12 },
    { x: 14, y: 13 },
];
export var snake1Body = [
    { x: 8, y: 11 },
    { x: 8, y: 12 },
    { x: 8, y: 13 },
];
let newSegments = [0, 0];
var scores = [0, 0];
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
    const inputDirection = getInputDirection();

    addSegments(snake1Body, 1);
    for (let i = snake1Body.length - 2; i >= 0; i--) {
        snake1Body[i + 1] = { ...snake1Body[i] };
    }

    snake1Body[0].x += inputDirection[1].x;
    snake1Body[0].y += inputDirection[1].y;

    addSegments(snake2Body, 2);
    for (let i = snake2Body.length - 2; i >= 0; i--) {
        snake2Body[i + 1] = { ...snake2Body[i] };
    }

    snake2Body[0].x += inputDirection[0].x;
    snake2Body[0].y += inputDirection[0].y;
}

// export function drawSnakeWithTail(gameBoard) {
//     const snakeElementHead = document.createElement("img");
//     snakeElementHead.style.gridRowStart = snakeBody[0].y;
//     snakeElementHead.style.gridColumnStart = snakeBody[0].x;
//     snakeElementHead.classList.add("snake-head");
//     snakeElementHead.src = "snake-head.png";
//     gameBoard.appendChild(snakeElementHead);

//     for (var i = 1; i < snakeBody.length - 1; i++) {
//         const snakeElement = document.createElement("div");
//         snakeElement.style.gridRowStart = snakeBody[i].y;
//         snakeElement.style.gridColumnStart = snakeBody[i].x;
//         snakeElement.classList.add("snake");
//         gameBoard.appendChild(snakeElement);
//     }

//     const snakeElementTail = document.createElement("div");
//     snakeElementTail.style.gridRowStart = snakeBody[snakeBody.length - 1].y;
//     snakeElementTail.style.gridColumnStart = snakeBody[snakeBody.length - 1].x;
//     snakeElementTail.classList.add("snake-tail");
//     gameBoard.appendChild(snakeElementTail);
// }

export function drawRainbowSnake(gameBoard, first) {
    if (first == 1) {
        const snake1ElementHead = document.createElement("img");
        snake1ElementHead.style.gridRowStart = snake1Body[0].y;
        snake1ElementHead.style.gridColumnStart = snake1Body[0].x;
        snake1ElementHead.classList.add("snake-head");
        snake1ElementHead.src = "imgs/snake-head.png";
        gameBoard.appendChild(snake1ElementHead);

        for (var i = 1; i < snake1Body.length; i++) {
            const snake1Element = document.createElement("div");
            snake1Element.style.gridRowStart = snake1Body[i].y;
            snake1Element.style.gridColumnStart = snake1Body[i].x;
            snake1Element.style.backgroundColor =
                rainbowColors[(i % rainbowColors.length) - 1];
            snake1Element.classList.add("rainbow-snake");
            gameBoard.appendChild(snake1Element);
        }

        const snake2ElementHead = document.createElement("img");
        snake2ElementHead.style.gridRowStart = snake2Body[0].y;
        snake2ElementHead.style.gridColumnStart = snake2Body[0].x;
        snake2ElementHead.classList.add("snake-head");
        snake2ElementHead.src = "imgs/snake-head.png";
        gameBoard.appendChild(snake2ElementHead);

        for (var i = 1; i < snake2Body.length; i++) {
            const snake2Element = document.createElement("div");
            snake2Element.style.gridRowStart = snake2Body[i].y;
            snake2Element.style.gridColumnStart = snake2Body[i].x;
            snake2Element.style.backgroundColor =
                rainbowColors[((i + 4) % rainbowColors.length) - 1];
            snake2Element.classList.add("rainbow-snake");
            gameBoard.appendChild(snake2Element);
        }
    } else if (first == 2) {
        const snake2ElementHead = document.createElement("img");
        snake2ElementHead.style.gridRowStart = snake2Body[0].y;
        snake2ElementHead.style.gridColumnStart = snake2Body[0].x;
        snake2ElementHead.classList.add("snake-head");
        snake2ElementHead.src = "imgs/snake-head.png";
        gameBoard.appendChild(snake2ElementHead);

        for (var i = 1; i < snake2Body.length; i++) {
            const snake2Element = document.createElement("div");
            snake2Element.style.gridRowStart = snake2Body[i].y;
            snake2Element.style.gridColumnStart = snake2Body[i].x;
            snake2Element.style.backgroundColor =
                rainbowColors[((i + 4) % rainbowColors.length) - 1];
            snake2Element.classList.add("rainbow-snake");
            gameBoard.appendChild(snake2Element);
        }

        const snake1ElementHead = document.createElement("img");
        snake1ElementHead.style.gridRowStart = snake1Body[0].y;
        snake1ElementHead.style.gridColumnStart = snake1Body[0].x;
        snake1ElementHead.classList.add("snake-head");
        snake1ElementHead.src = "imgs/snake-head.png";
        gameBoard.appendChild(snake1ElementHead);

        for (var i = 1; i < snake1Body.length; i++) {
            const snake1Element = document.createElement("div");
            snake1Element.style.gridRowStart = snake1Body[i].y;
            snake1Element.style.gridColumnStart = snake1Body[i].x;
            snake1Element.style.backgroundColor =
                rainbowColors[(i % rainbowColors.length) - 1];
            snake1Element.classList.add("rainbow-snake");
            gameBoard.appendChild(snake1Element);
        }
    }
}

export function expandSnake(snakeNumber, amount) {
    newSegments[snakeNumber - 1] += amount;
    scores[snakeNumber - 1]++;
    // console.log(newSegments, scores);
}
export function score() {
    return scores;
}

export function onSnake(snakeBody, position, onFood, intersect) {
    // if (gameStart == false) return false;
    if (onFood) {
        // console.log(equalPositions(snakeBody[0], getFood()));

        if (equalPositions(snakeBody[0], position)) {
            // console.log(snakeBody[0], position);

            return true;
        }
        return false;
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

export function getSnakeHead(snakeBody) {
    return snakeBody[0];
}

export function snakeIntersection(snakeBody) {
    return onSnake(snakeBody, snakeBody[0], false, true);
}

export function snakeOnSnake(snake1Body, snake2Body) {
    return onSnake(snake2Body, snake1Body[0], false, false);
}

export function resetSnake() {
    snake2Body = [
        { x: 14, y: 11 },
        { x: 14, y: 12 },
        { x: 14, y: 13 },
    ];
    snake1Body = [
        { x: 8, y: 11 },
        { x: 8, y: 12 },
        { x: 8, y: 13 },
    ];
    scores = [0, 0];
}

function equalPositions(pos1, pos2) {
    return pos1.x == pos2.x && pos1.y == pos2.y;
}

function addSegments(snakeBody, snakeNumber) {
    for (let i = 0; i < newSegments[snakeNumber - 1]; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments[snakeNumber - 1] = 0;
}
