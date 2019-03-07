//To delete item
const list = document.querySelector("#book-list ul");
list.addEventListener("click" , function(e){

  if(e.target.className == "delete");
  const li = e.target.parentElement;
  li.parentElement.removeChild(li);

});

//To add form
const addForm = document.forms["add-book"];
addForm.addEventListener("submit" , function(e){

  //To prevent the default form action
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);


// To create DOM elements

const li = document.createElement("li");
const bookName = document.createElement("span");
const deleteBtn = document.createElement("span");

//Append to the DOM
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

//To add  content to the DOM

bookName.textContent = value;
deleteBtn.textContent = "delete";

//To add class to DOM
bookName.classList.add("name");
deleteBtn.classList.add("delete");

});