"use strict";

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

window.addEventListener("load", initApp);

function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
  //create a new element of li, span and button
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  // add text content to the elements
  listText.textContent = newToDo.value;
  listBtn.textContent = "Delete";

  //Makes span and button child elements of li
  listItem.appendChild(listText);
  listItem.appendChild(listBtn);

  //Resets the value of the input element
  newToDo.value = "";

  listBtn.addEventListener("click", removeToDo);

  //   const myHTML = `
  //   <li>
  //     <span> ${newToDo.value}</span>
  //     <button>Delete</button>
  //   </li>
  // `;

  //   listItem.insertAdjacentElement("beforeend", myHTML);
}

function removeToDo() {
  //List refers to the btn we clicked
  //Does parentNode.remove() remove the parent element ul?
  this.parentNode.remove();
}
