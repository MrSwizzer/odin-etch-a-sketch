const container = document.querySelector("#container");

for (let index = 0; index < (16*16); index++) {
    const div = document.createElement("div");
    div.classList.add("grid_div");
    container.appendChild(div);
}

const gridDivs = document.querySelectorAll(".grid_div");

gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () =>{
        gridDiv.style.backgroundColor = "orange"
    })
})