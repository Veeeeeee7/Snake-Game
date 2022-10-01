let inputDirection = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
];
let lastInputDirection = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
];
export var gameStart = false;

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            gameStart = true;
            if (lastInputDirection[0].y !== 0) break;
            inputDirection[0] = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            gameStart = true;
            if (lastInputDirection[0].y !== 0) break;
            inputDirection[0] = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            gameStart = true;
            if (lastInputDirection[0].x !== 0) break;
            inputDirection[0] = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            gameStart = true;
            if (lastInputDirection[0].x !== 0) break;
            inputDirection[0] = { x: 1, y: 0 };
            break;

        case "w":
            gameStart = true;
            if (lastInputDirection[1].y !== 0) break;
            inputDirection[1] = { x: 0, y: -1 };
            break;
        case "s":
            gameStart = true;
            if (lastInputDirection[1].y !== 0) break;
            inputDirection[1] = { x: 0, y: 1 };
            break;
        case "a":
            gameStart = true;
            if (lastInputDirection[1].x !== 0) break;
            inputDirection[1] = { x: -1, y: 0 };
            break;
        case "d":
            gameStart = true;
            if (lastInputDirection[1].x !== 0) break;
            inputDirection[1] = { x: 1, y: 0 };
            break;
    }
});

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

export function resetDirection() {
    gameStart = false;
    inputDirection = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
    ];
    lastInputDirection = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
    ];
}
