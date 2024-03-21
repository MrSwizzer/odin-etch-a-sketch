const container = document.querySelector("#container");

function createDivs(squareSize, squaresPerSide, parentNode) {
    for (let index = 0; index < squaresPerSide * squaresPerSide; index++) {
        const div = document.createElement("div");
        div.classList.add("grid_div");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        parentNode.appendChild(div);
    }
}

function changeDivColor(randomColor) {
    const gridDivs = document.querySelectorAll(".grid_div");

    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseover", () => {
            color = getRandomColor();
            gridDiv.style.backgroundColor = `${color}`;
        });
    });
}

function removePreviousGrid(parentNode) {
    while (container.firstChild) {
        parentNode.removeChild(container.firstChild);
    }
}

function getUserInput() {
    let userInput = parseInt(prompt("Enter the number of Squares per Side"));
    if (userInput > 100) userInput = 100;
    return userInput;
}

function getRandomColor() {
    const letter = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.querySelector("#userpopup");
button.addEventListener("click", () => {
    const squaresPerSide = getUserInput();
    const squareSize = 960 / squaresPerSide;
    removePreviousGrid(container);
    createDivs(squareSize, squaresPerSide, container);
    changeDivColor();
    
});