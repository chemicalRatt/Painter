const GRID_CONTAINER = document.getElementById("grid-container");
const BTN_SMALL = document.getElementById("small");
const BTN_MEDIUM = document.getElementById("medium");
const BTN_LARGE = document.getElementById("large");

function initializeGrid(size){
    const totalSize = (size*size);
    const containerSize = GRID_CONTAINER.clientWidth;

    GRID_CONTAINER.innerHTML = "";

    for (let i = 0; i < totalSize; i++){
        const div = document.createElement("div");
        div.style.flexBasis = containerSize/size + "px";
        div.addEventListener("mouseenter", function(){
            div.style.backgroundColor = "black";});
        GRID_CONTAINER.appendChild(div);
    }
}

initializeGrid(16); //default
BTN_SMALL.addEventListener("click",initializeGrid.bind(null,16),false);
BTN_MEDIUM.addEventListener("click",initializeGrid.bind(null,32),false);
BTN_LARGE.addEventListener("click",initializeGrid.bind(null,64),false);
