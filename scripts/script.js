const btnMinus = document.querySelector(".btn-minus");
const quantity = document.querySelector(".quantity");
const btnPlus = document.querySelector(".btn-plus");
const typeColor = document.getElementById("type-color");
const colorGray = document.querySelector(".color-gray");
const colorPink = document.querySelector(".color-pink");
const colorLinghtGray = document.querySelector(".color-light-gray");
const notebook = document.querySelector(".selected-not");

let quantidade = 0;

function handleClickPlus() {
  if (quantidade >= 10) return;
  quantidade++;
  showQuantity();
}

function handleClickMinus() {
  if (quantidade <= 0) return;
  quantidade--;
  showQuantity();
}

function showQuantity() {
  quantity.innerText = quantidade;
}

function handleClickGray() {
  typeColor.innerText = "Space Gray";
  notebook.src = "./assets/main-images/notebook-gray.png";
}

function handleClickPink() {
  typeColor.innerText = "Pink";
  notebook.src = "./assets/main-images/notebook-pink.png";
}

function handleClickLightGray() {
  typeColor.innerText = "Silver";
  notebook.src = "./assets/main-images/notebook-silver.png";
}

btnPlus.addEventListener("click", handleClickPlus);
btnMinus.addEventListener("click", handleClickMinus);
colorGray.addEventListener("click", handleClickGray);
colorPink.addEventListener("click", handleClickPink);
colorLinghtGray.addEventListener("click", handleClickLightGray);

function main() {
  showQuantity();
  handleClickGray();
}

main();
