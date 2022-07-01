const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
const slider = document.querySelector("#myRange");
const gridToggler = document.querySelector(".toggle_grid");
const gridSize = 50;

function drawGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box", "box_border");
    container.appendChild(box);
  }
}

window.addEventListener("load", () => {
  container.style.cssText = `display: grid;grid-template-columns: repeat(${gridSize}, 1fr);grid-template-rows: repeat(${gridSize}, 1fr);`;
  drawGrid(gridSize);
});

