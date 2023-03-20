"use strict";

//Store the input element in the variable newTodo
const newToDo = document.querySelector("#input-new-to-do");

//Store the ul element as a variable list
const list = document.querySelector("#to-do-list");

window.addEventListener("load", initApp);

function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
  //create a new element of li, span and button
  // const listItem = document.createElement("li");
  // const listText = document.createElement("span");
  // const listBtn = document.createElement("button");

  // add text content to the elements
  // listText.textContent = newToDo.value;
  // listBtn.textContent = "Delete";

  //Makes span and button child elements of li
  // listItem.appendChild(listText);
  // listItem.appendChild(listBtn);

  //Resets the value of the input element

  // listBtn.addEventListener("click", removeToDo);

  if (newToDo.value) {
    const myHTML = /*html*/ `
  <li>
    <span> ${newToDo.value}</span>
    <button>Delete</button>
    <button class="edit-to-do">Edit</button>
  </li>
  `;
    list.insertAdjacentHTML("beforeend", myHTML);
    const edit = document.querySelector(".edit-to-do");
    edit.addEventListener("click", editToDo);
  } else {
    newToDo.style.border = "5px solid red";
  }

  newToDo.value = "";

  list
    .querySelector("li:last-child button")
    .addEventListener("click", removeToDo);
}

function removeToDo() {
  //List refers to the btn we clicked
  // parentNode.remove() remove the parent element ul?
  this.parentNode.remove();
}

function editToDo() {
  console.log(this);
  console.log(this.parentNode);
  console.log(this.parentNode.querySelector("span").textContent);

  const newHTML = /*html*/ `
   <input type="text" id="input-edit-to-do" placeholder="Edit chore" />
      <button id="btn-edit-item">Edit item</button>
      `;

  document.querySelector("#section").insertAdjacentHTML("beforeend", newHTML);
  document.querySelector("#btn-edit-item").addEventListener("click", applyEdit);
}

function applyEdit() {
  this.parentNode.querySelector("span").textContent;
}
