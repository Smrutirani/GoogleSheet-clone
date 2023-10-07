//we mange the option selection
const activeCellElement = document.getElementById("active-cell");
const textAlignElements = document.getElementsByClassName("text-align");

//ActiveCell is define which cell is selected/ active.
// initially it'll null indicating that no ce;; is selected.
let activeCell = null;

let activeOptionsState;

function highlightOptionButtonsOnFocus() {

}
//bellow function will be triggered whenevr cell is focused.
function onCellFocus(e) {
    // whenever a cell is focused change the activeCell value to the id of cell.
   if(activeCell.id === e.target.id){
    // if previously selected cell is equal to the currently selected cell.
    return;
   }
    activeCell = e.target;
    activeCellElement.innerText = e.target.id;
    //intialise the state of this cell
    const computedStyle = getComputedStyle(activeCell);

    activeOptionsState = {
        fontFamily: computedStyle.fontFamily,
        isBoldSelected: computedStyle.fontWeight === "600",
        isItalicSelected: computedStyle.fontStyle === "italic",
        isUnderLineSelected: computedStyle.textDecoration === "underline",
        textAlign: computedStyle.textAlign, // it can have 'left' | 'center' | 'right'
        textColor: computedStyle.color,
        backgroundColor: computedStyle.backgroundColor,
        fontSize: computedStyle.fontSize,
   
    };

    highlightOptionButtonsOnFocus();
}

function onClickBold(boldButton) {
    //this function will be triggered when user clicks on the bold button
    /**
     * 1. toggle 'active-option' class for the button
     * 
     **/
    boldButton.classList.toggle("active-option");  // if class is their is remove it , if its not their it's add it.
    if (activeCell) {
        if (activeOptionsState.isBoldSelected === false) {
            //make the text to bold
            activeCell.style.fontWeight = "600";
        } else {
            // make the text to normal
            activeCell.style.fontWeight = "400";
        }
        activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected;
    }
}

function onClickItalic(italicButton) {
    italicButton.classList.toggle("active-option");
    if (activeCell) {
        if (activeOptionsState.isItalicSelected) {
            // if the text is alredy italic
            activeCell.style.fontStyle = "normal";
        } else {
            activeCell.style.fontStyle = "italic";
        }
        activeOptionsState.isItalicSelected  = !activeOptionsState.isItalicSelected;
    }
}

function onClickUnderline(underlinedButton) {
    underlinedButton.classList.toggle("active-option");
    if(activeCell){
        if(activeOptionsState.isUnderLineSelected){
            // if the text is underlined => none
            activeCell.style.textDecoration = "none";
        }else {
            activeCell.style.textDecoration = "underline";
        }
        activeOptionsState.isUnderLineSelected = !activeOptionsState.isUnderLineSelected;
    }
}

function highlightTextAlignButtons(textAlignValue) {
    // textAlignValue === 'left' => we have to high light the left button
    // textAlignValue === 'right' => we have to high light the left button
    // textAlignValue === 'center' => we have to high light the left button
    // const textAlignElements = document.getElementsByClassName("text-align");
     for(let i =0; i<textAlignElements.length; i++) {
        if(textAlignElements[i].getAttribute("data-value") === textAlignValue) {
            textAlignElements[i].classList.add("active-option");
        }else {
            textAlignElements[i].classList.remove("active-option");
        }
     }
}

function onclickTextAlign (textAlignButton) {
    let selectedValue = textAlignButton.getAttribute("data-value");
    highlightTextAlignButtons(selectedValue);

    if(activeCell){
        activeCell.style.textAlign = selectedValue;
        activeOptionsState.textAlign = selectedValue;
    }
    //change the text alignment
}

function onChangetextColor(textColorInput) {
    let selectedColor = textColorInput.value;
    if(activeCell) {
        activeCell.style.color = selectedColor;
        activeOptionsState.color = selectedColor;
    }
}

function onChangeBackgroundColor(textColorInput) {
    let selectedColor = textColorInput.value;
    if(activeCell) {
        activeCell.style.backgroundColor = selectedColor;
        activeOptionsStat.backgroundColor = selectedColor;
    }
}