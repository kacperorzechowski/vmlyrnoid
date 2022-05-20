import $ from "jquery";
import {blocksInRow, rows} from "./config";

const formId = "config-form";

function initForm() {
  const form = document.getElementById(formId);
  form.addEventListener("submit", handleSubmit);

  for (let i = 0; i < rows; i++) {
    form.appendChild(createRow(i));
  }

  form.appendChild(createSubmitButton());
}

function createSubmitButton() {
  const button = document.createElement("button");
  const text = document.createTextNode("Submit")
  button.type = "submit";
  button.appendChild(text);

  return button;
}

function handleSubmit(e) {
  e.preventDefault();
  const colors = initColorsArray();

  const data = $(`#${formId}`).serializeArray();

  data.forEach(item => {
    const indexes = item.name.split("-").map(i => parseInt(i));
    colors[indexes[0]][indexes[1]] = item.value;
  })

  console.log(JSON.stringify(colors))
}

function initColorsArray() {
  const colors = [];

  for (let i = 0; i < rows; i++) {
    colors[i] = [];
  }

  return colors;
}

function createRow(i) {
  let div = document.createElement("div");
  div.classList.add("row")

  for (let j = 0; j < blocksInRow; j++) {
    div.appendChild(createInput(i, j))
  }

  return div;
}

function createInput(i, j) {
  let div = document.createElement("div");
  let input = document.createElement("input");
  div.classList.add("input-color");
  input.type = "color";
  input.value = "#babac7"
  input.name = `${i}-${j}`;
  input.addEventListener("click", () => {
    input.value = "#00aaf8";
  })

  div.appendChild(input);

  return div;
}

initForm();
