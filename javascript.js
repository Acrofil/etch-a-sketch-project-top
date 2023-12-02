const resetBtn = document.querySelector('.resetBtn');
const container = document.querySelector('.container');
container.style.cssText = "display: flex; flex-direction: column; width: 600px; height: 600px; margin: 0; padding: 0; box-sizing: border-box;"

const btn = document.querySelector('.btn');

// initial grid size
let gridSize = 16;
makeSketch(gridSize);

// Event listener for grid size selector
btn.addEventListener('click', () => {
    
    while (true) {

        gridSize = prompt('Enter grid size per side (max 100): ');

        if (gridSize <= 100) {
            break
        }
    }
    container.innerHTML = "";
    makeSketch(gridSize);
    
});

 // Rgb and single color btns and event listeners
 const rgbBtn = document.querySelector('.rgbBtn');
 const singleColor = document.querySelector('.singleColor');
 let rgbMode = false;

 rgbBtn.addEventListener('click', () => {

     rgbMode = true; 
 });

 singleColor.addEventListener('click', () => {

     rgbMode = false;
     selectedColor = "";
     rand = 0;
 });

 // Color pick
const colorSelect = document.querySelector('.colorSelect');
let selectedColor;

colorSelect.addEventListener('change', (colorInput) => {
    
    selectedColor = colorInput.target.value;
    rgbMode = false;
});


// reset button
resetBtn.addEventListener('click', () => {

    container.innerHTML = "";
    makeSketch(gridSize);
});

// Gradient change from light gray to black
let rand = 0;
                    
function getRandom() {

    rand += 0.09;
    return rand;
}

// Main function
function makeSketch(gridSize) {

    const body = document.querySelector('body');
    body.style.cssText = "display: flex; flex-direction: column;  justify-content: center; align-items: center; margin: 0; padding: 0;";

    // Drawing the grid on screen
    for (let i = 0; i < gridSize; i++) {

        // Subcontainers that hold boxes
        let subContainer = document.createElement('div');
        subContainer.classList.add('subContainer');

        subContainer.style.cssText = "display: flex; margin: 0; padding: 0;";

        for (let j = 0; j < gridSize; j++) {

            let box = document.createElement('div');
            let boxWidthAndHeight = (600 / gridSize) - 2;
            box.classList.add('box');
            box.style.cssText = `border: 1px solid black; width: ${boxWidthAndHeight}px; height: ${boxWidthAndHeight}px; margin: 0; padding: 0;`;

            subContainer.appendChild(box);

            box.addEventListener('mouseover', () => {

                if (rgbMode) {

                    let red = Math.floor(Math.random() * 255);
                    let green = Math.floor(Math.random() * 255);
                    let blue = Math.floor(Math.random() * 255);

                    box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";            

                } else if (selectedColor) {

                    box.style.backgroundColor = selectedColor;
                } else {

                    box.style.backgroundColor = 'rgba(0, 0, 0, ' + getRandom() + ')';
                }      
            });
        }

        // Append the subcontainer to the main container
        container.appendChild(subContainer);       
    }

};

const buttonsContainer = document.querySelector('.container2');
const colorPick = document.querySelector('.colorPick');

buttonsContainer.style.cssText = "display: flex; gap: 10px; margin-bottom: 10px;"
colorPick.style.cssText = 'margin-bottom: 10px;'
