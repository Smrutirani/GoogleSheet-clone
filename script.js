const header = document.getElementById("header");
const body = document.getElementById("body");

for(let i = 65; i<= 90; i++){
    let char = String.fromCharCode(i); // String.fromCharCode(i) is call the Alphabet

    const bold = document.createElement("b");
    bold.innerText = char;

    header.appendChild(bold);
}

function createAndAppendRow(rowNumber) {
    const row = document.createElement("div");
    row.className = "row"; // <div class="row"></div>
// Inside each row we should create 27 cells for S.no
for(let i = 64; i<= 90; i++){
    if(i === 64){
        //This cell represents the S.No
        const b = document.createElement("b");
        b.innerText = rowNumber;
        row.appendChild(b);
    }else{
        // This represents the empty cell
        const cell = document.createElement("div");
        cell.id = `${String.fromCharCode(i)}${rowNumber}`; //dynamic and unique id. colrow => ex:- A1, B7
        cell.contentEditable = "true"; // it represend the cell id name will be true
        cell.addEventListener("focus", onCellFocus);
        row.appendChild(cell);
    }
 }
  body.appendChild(row);
}

// create 100 rows call the 'createAndAppendRow' function for 100 times
for(let i = 1; i <=100; i++){
    createAndAppendRow(i);
}

// function onCellFocus(e) {
//     // whenever a cell is focused change the activeCell value to the id of cell.
//     activeCell = e.target.id;
//     activeCellElement.innerText = activeCell;
// }