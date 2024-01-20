let canvas = document.querySelector('.canvas');
let clear = document.querySelector('#clear');
let rainbow = document.querySelector('.rainbow');
let black = document.querySelector('#black');
let num = 0;
/*
while (true){
    party = '#' + Math.floor(Math.random()*16777215).toString(16);
}
*/

 const numRows = 16;
 const numCols = 16;

 const gridWidth = (canvas.clientWidth) / numCols; // Subtracting 2 for borders
 const gridHeight = (canvas.clientHeight) / numRows; // Subtracting 2 for borders

 function clearBoard(event){
    event.style.cssText = 'background-color: blue; width: ${gridWidth}px; height: ${gridHeight}px; box-sizing: border-box;'
 }
 
let gridlst = [];

 // Loop to create grid elements and append them to the canvas
 for (let row = 0; row < numRows; row++) {
   for (let col = 0; col < numCols; col++) {
     let party = '#' + Math.floor(Math.random()*16777215).toString(16);

     let grid = document.createElement('div');
     gridlst += [grid];
     grid.style.cssText = `background-color: white; width: ${gridWidth}px; height: ${gridHeight}px; box-sizing: border-box;`;
     canvas.appendChild(grid)
     grid.addEventListener('mouseover', () => {
        grid.style.cssText = `background-color: black; width: ${gridWidth}px; height: ${gridHeight}px; box-sizing: border-box;`
     })
     clear.addEventListener('click', () =>
        grid.style.cssText = `background-color: white; width: ${gridWidth}px; height: ${gridHeight}px; box-sizing: border-box;`);

     rainbow.addEventListener('click', () => {
        grid.addEventListener('mouseover', () => {
            grid.style.cssText = `background-color: ${party}; width: ${gridWidth}px; height: ${gridHeight}px; box-sizing: border-box;`})
     })

     
     black.addEventListener('click', () => {
        grid.addEventListener('mouseover', () => {
            grid.style.cssText = `background-color: black; width: ${gridWidth}px; height: ${gridHeight}px; box-sizing: border-box;`})
     })
    }
}

/*
    clear.addEventListener('click', () => {
    grid.style.cssText = `background-color: blue; width: ${gridWidth}px; height: ${gridHeight}px; box-sizing: border-box;`;
    })
     })
     canvas.appendChild(grid);
   }
 }




 poop*/
