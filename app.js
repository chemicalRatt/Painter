const GRID_CONTAINER = document.getElementById("grid-container");
const BTN_SMALL = document.getElementById("small");
const BTN_MEDIUM = document.getElementById("medium");
const BTN_LARGE = document.getElementById("large");

let mouseDown = false;
function initializeGrid(size){
    const totalSize = (size*size);
    const containerSize = GRID_CONTAINER.clientWidth;

    GRID_CONTAINER.innerHTML = "";

    for (let i = 0; i < totalSize; i++){
        const div = document.createElement("div");
        div.style.flexBasis = containerSize/size + "px";
        div.addEventListener("mousedown", function(){mouseDown = true;},false);
        div.addEventListener("mouseup", function(){mouseDown = false;},false);
        div.addEventListener("mouseenter", drawColor,false);
        GRID_CONTAINER.appendChild(div);
    }
}

function drawColor(e){
    if(mouseDown){
        e.target.style.backgroundColor = "black";
    }

}

initializeGrid(16); //default
BTN_SMALL.addEventListener("click",initializeGrid.bind(null,16),false);
BTN_MEDIUM.addEventListener("click",initializeGrid.bind(null,32),false);
BTN_LARGE.addEventListener("click",initializeGrid.bind(null,64),false);


// Prevents dragging from interfering with functionality.
document.addEventListener("dragstart",function(event) {
    event.preventDefault();
},false);
