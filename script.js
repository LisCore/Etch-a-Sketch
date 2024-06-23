const grid = document.querySelector("#grid-hold");

let numGrids = 16;
let eachGrid = grid.clientWidth / numGrids;
console.log(eachGrid);
let gridCell;
createGrid(numGrids, eachGrid);

function createGrid(numGrids, eachGrid) {
    for (let i = 1; i <= numGrids; ++i) {
        for (let j = 1; j <= numGrids; ++j) {
            gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.style.width = `${eachGrid}px`;
            gridCell.style.height = `${eachGrid}px`;
            grid.appendChild(gridCell);
        }
    }
}

const etch = document.querySelector("#grid");
grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains('grid-cell')) {
        let currentOpacity = parseFloat(event.target.style.opacity) || 0;
        currentOpacity += 0.1;
        if (currentOpacity > 1) currentOpacity = 1;
        event.target.style.opacity = currentOpacity;
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        randomColor = "#" + randomColor.padStart(6, '0');
        event.target.style.backgroundColor = randomColor;
    }
});

let input = document.querySelector("#text");
const btn = document.querySelector("#transform");
btn.addEventListener("click", () => {
    numGrids = prompt("Enter in grid size:");
    if (numGrids > 100 || numGrids <= 0) {
        alert("Enter valid size from 1-100!");
        removeGrid();
        numGrids = 16;
        eachGrid = grid.clientWidth / numGrids;
        createGrid(numGrids, eachGrid);
    }
    removeGrid();
    eachGrid = grid.clientWidth / numGrids;
    createGrid(numGrids, eachGrid);
})
function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}