const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
const slider = document.querySelector("#myRange");
const gridToggler = document.querySelector(".toggle_grid");
const gridSizeLabel = document.querySelector(".slidecontainer > label");
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

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256 + 1)}, ${Math.floor(
    Math.random() * 256 + 1
  )}, ${Math.floor(Math.random() * 256 + 1)})`;
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = getRandomColor();
  }
});

slider.addEventListener("change", (e) => {
  container.innerHTML = "";
  const newGridSize = e.currentTarget.value;
  gridSizeLabel.innerText = `Grid Size: ${newGridSize}x${newGridSize}`;
  container.style.cssText = `display: grid;grid-template-columns: repeat(${newGridSize}, 1fr);grid-template-rows: repeat(${newGridSize}, 1fr);`;
  drawGrid(newGridSize);
});
