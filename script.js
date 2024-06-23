const grid = document.querySelector("#grid-hold");

let numGrids = 16;
let eachGrid = grid.clientWidth / numGrids;
console.log(eachGrid);

for (let i = 1; i <= numGrids; ++i) {
    for (let j = 1; j <= numGrids; ++j) {
        let gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        gridCell.style.width = `${eachGrid}px`;
        gridCell.style.height = `${eachGrid}px`;
        grid.appendChild(gridCell);
    }
}

