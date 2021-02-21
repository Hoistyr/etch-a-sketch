//Initial page creation
createGrid(4);
addColorChange();
createButton();

//Function that creates the reset button
function createButton () {
    let resetButtonHolder = document.createElement('div')
    resetButtonHolder.id = "resetButtonHolder";
    pageContent.insertBefore(resetButtonHolder, pageContent.childNodes[0]);
    
    let resetButton = document.createElement('button');
    resetButton.id = "resetButton";
    resetButton.textContent = "Reset";
    resetButton.onclick = newDrawing;
    resetButtonHolder.appendChild(resetButton);
}


//Function that allows the squares to change color
function addColorChange() {
document.querySelectorAll('.gridSquare').forEach(square => {
    square.addEventListener('mouseenter', function(event){
        event.target.style.backgroundColor = "white";
     });
 });
}

//Function that creates a new drawing board when the reset button is clicked
function newDrawing () {
    let newGridNumber = changeGridAmount();
    deleteOldGrid();
    createGrid(newGridNumber);
    addColorChange();
}

//Function that creates a prompt which asks the user to input a new number of columns
function changeGridAmount() {
    let gridNumber = prompt('Please enter the number of squares you would like:');
    if (gridNumber > 100) {
        gridNumber = prompt('The number must be 100 or less:');
    } else if (gridNumber < 1) {
        gridNumber = prompt('Please enter a valid number:');
    }
    return gridNumber;
}

//Creates a new grid using the dimension that the user inputs
function createGrid(newGridNumber) {
    console.log(newGridNumber);
    let gridContainer = document.createElement('div');
    gridContainer.id = "gridContainer";
    gridContainer.style.borderStyle = "solid";
    gridContainer.style.borderColor = "gray";
    gridContainer.style.borderWidth = "0.5px";
    pageContent.appendChild(gridContainer);
    
    for (i=0; i < (newGridNumber * newGridNumber); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.className = "gridSquare";
        gridSquare.style.backgroundColor = "black";
        gridContainer.style.gridTemplate = `repeat(${newGridNumber}, 1fr) / repeat(${newGridNumber}, 1fr)`;
        gridContainer.appendChild(gridSquare);
    }
}

//Removes the previous drawing
function deleteOldGrid() {
    let deleteMe = document.getElementById('gridContainer');
    deleteMe.remove();
}
