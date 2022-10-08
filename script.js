
function createGrid(n) {
    normalMode();
    const grid = document.querySelector(".grid");
    grid.textContent = "";
    for(let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.addEventListener('mousemove', squareEventDraw);
            square.addEventListener('mousedown', squareEventStart);
            square.addEventListener('mouseup', squareEventStop);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}
function squareEventDraw(e) {
    if(click == true) {
        if(mode == "normal") {
            e.target.style.background = "black"; 
        }
        else if(mode == "eraser") {
            e.target.style.background = "white";
        }
        if(mode == "rainbow") {
            let a = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            let c = Math.round(Math.random() * 255);
            e.target.style.background = `rgb(${a}, ${b}, ${c})`;
        }
    }
}
function squareEventStart() {
    click = true;
}
function squareEventStop() {
    click = false;
}
function createNewGrid() {
    n = window.prompt("Please introduce the new grid dimension:\nEX: If you introduce \"16\" => the new grid will be 16x16\nThe grid dimensions must be between 1 and 48");
    n = +n;
    if( n == null || n <= 0 || n > 48 || isNaN(n) == true) {
        window.alert("The grid dimensions must be between 1 and 48");
    }
    else {
        const gridSize = document.querySelector(".size");
        gridSize.textContent = `Grid Size: ${n}x${n}`;
        createGrid(n);
    }
}
function clearGrid() {
    createGrid(n);
}

function eraserMode() {
    mode = "eraser";
    modeDiv.textContent = "Mode: Eraser";
}
function normalMode() {
    mode = "normal";
    modeDiv.textContent = "Mode: Normal";
}
function rainbowMode() {
    mode = "rainbow";
    modeDiv.textContent = "Mode: Rainbow";
}



let click = false;
let n = 16;
let mode = "normal";


const changeBtn = document.querySelector(".secondary button");
changeBtn.addEventListener('click', createNewGrid);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', clearGrid);

const modeDiv = document.querySelector(".mode");

const normalBtn = document.querySelector(".normal");
normalBtn.addEventListener('click', normalMode);

const eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener('click', eraserMode);

const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener('click', rainbowMode);
createGrid(n);