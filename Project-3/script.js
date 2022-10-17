let numCols = 0;
let numRows = 1;
//let total = numCols * numRows;
let colorSelected = "";

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

function addR(){  //add row
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    document.getElementById("grid").appendChild(row);

    let col = document.createElement("div");
    col.setAttribute("class", "column");

    for(let i = 0; i < numCols; i++)
        col.appendChild(createNode());

    row.appendChild(col);
    numRows++;
}

function removeR(){ //remove row
    let rows;
    rows = document.getElementsByClassName("row");
    rows[0].remove();
    numRows--;
}

function removeC(){ //remove column
    let columns;
    columns = document.getElementsByClassName("column");
    for(let i = 0; i < numCols; i++)
        columns[i].removeChild(columns[i].childNodes[0]);
    numCols--;
    // let columns;
    // columns = document.getElementsByClassName("column");
    // columns[0].remove();
}

function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    //console.log(colorSelected)
}

function fillU(){ //fill uncolored
    let squares, i;
    squares = document.getElementsByClassName("node");
    let total = numCols * numRows;
    for(i = 0; i < total; i++){
        if(squares[i].style.backgroundColor == "white")
            squares[i].style.backgroundColor = colorSelected;
    }
}

function fillAll(){
    let squares, i; 
    squares = document.getElementsByClassName("node");
    let total = numCols * numRows;
    for( i = 0; i < total; i++)
        squares[i].style.backgroundColor = colorSelected;
}

function clearAll(){
    let squares, i, total;
    squares = document.getElementsByClassName("node");
    total = numCols * numRows;
    for(i = 0; i < total; i++)
        squares[i].style.backgroundColor = "white";
}

function changeSingleColor(){
    event.target.style.backgroundColor = colorSelected;
   // console.log("node was clicked")
}
