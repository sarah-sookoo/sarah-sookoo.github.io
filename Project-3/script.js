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