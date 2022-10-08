function createGrid(n) {
    const grid = document.querySelector(".grid");
    grid.textContent = "";
    for(let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < n; j++) {
            const square = document.createElement("div");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}
function createNewGrid() {
    let n = window.prompt("Please introduce the new grid dimension:\nEX: If you introduce \"16\" => the new grid will be 16x16\nThe grid dimensions must be between 1 and 48");
    n = +n;
    if( n == null || n <= 0 || n > 48 || isNaN(n) == true) {
        window.alert("The grid dimensions must be between 1 and 48");
    }
    else {
        const gridSize = document.querySelector(".main h3");
        gridSize.textContent = `Grid Size: ${n}x${n}`;
        createGrid(n);
    }
}

createGrid(16);
const changeBtn = document.querySelector(".buttons button");
changeBtn.addEventListener('click', createNewGrid);