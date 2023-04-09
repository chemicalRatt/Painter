//create a 16x16 grid
const GRID_CONTAINER = document.getElementById("grid-container");

function initializeGrid(size){
    const totalSize = (size*size);
    const containerSize = GRID_CONTAINER.clientWidth;

    for (let i = 0; i < totalSize; i++){
        const div = document.createElement("div");
        div.style.flexBasis = containerSize/size + "px";
        GRID_CONTAINER.appendChild(div);
    }
}

initializeGrid(16);