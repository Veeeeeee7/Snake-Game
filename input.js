let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
export var gameStart = false;

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            gameStart = true;
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            gameStart = true;
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            gameStart = true;
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            gameStart = true;
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
    }
});

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
