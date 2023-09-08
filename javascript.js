const container = document.querySelector('.container');

function chooseSize(squareSideLength) 
{        
    if(container.firstChild)
        container.removeChild(container.firstChild);
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for(let i = 0; i < squareSideLength; i++)
    {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < squareSideLength; j++)
        {
            const div = document.createElement('div');
            div.addEventListener('mouseover', hovered, {once: true})
            row.appendChild(div);
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);
}

function hovered(e) {
    this.classList.add('color');
}

chooseSize(16);

function promptInput() {
    let number = prompt('Input square grid size', 16);
    chooseSize(number);
}

document.querySelector('button').addEventListener('click', promptInput)