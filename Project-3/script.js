let numCols = 0;
let numRows = 1;

function createNode(){ // Creates a square
    let node = document.createElement("div")
    node.setAttribute("id", "node");
    node.setAttribute("class", "node");
    node.style.backgroundColor = "white"
    node.setAttribute('onclick','changeSingleColor();');
    return node;
}

function addC(){ //add column
    let col = document.getElementsByClassName("column");
    for(let i = 0; i < col.length; i++)
        col[i].appendChild(createNode());
    numCols++;
}