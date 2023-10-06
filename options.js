//we mange the option selection
const activeCellElement = document.getElementById("active-cell");

//ActiveCell is define which cell is selected/ active.
// initially it'll null indicating that no ce;; is selected.
let activeCell = null;

const defaultOptionsState = {
    fontFamily: "",
    isBoldSelected: false,
    isItalicSelected: false,
    isUnderLineSelected: false,
    textAlign: 'left', // it can have 'left' | 'center' | 'right'
    textColor: '#000',
    backgroundColor: '#fff',
    fontSize: 14,

};

let activeOptionsState = {};

//bellow function will be triggered whenevr cell is focused.
function onCellFocus(e) {
    // whenever a cell is focused change the activeCell value to the id of cell.
    activeCell = e.target.id;
    activeCellElement.innerText = activeCell;
}

// function toggleButtonstyle(button, isSelected){
//     if(isSelected) {
//         button.classList.add("active-option")
//     } else if
// }