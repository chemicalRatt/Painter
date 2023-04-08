//create a 16x16 grid
const GRID_CONTAINER = document.getElementById("grid-container");

function initializeGrid(size){
    const totalSize = (size*size) + size;
    const mod = size + 1;

    for (let i = 1; i < totalSize; i++){
        const div = document.createElement("div");
        if(i % mod === 0){
            div.style.cssText = "border: 0; height: 0; width: 100%";
        } 
        else{
            div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        }

        GRID_CONTAINER.appendChild(div);
    }
}

initializeGrid(32);