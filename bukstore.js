//Delete a button
const list = document.querySelector("#book-list ul");
list.addEventListener("click" , function(e){

  if(e.target.className == "delete");
  const li = e.target.parentElement;
  li.parentElement.removeChild(li);

});

//Add book list
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e){
//prevents the default action
  e.preventDefault();
const value = addForm.querySelector('input[type="text"]').value;

//create elements
const li = document.createElement("li");
const bookName = document.createElement("span");
const deleteBtn = document.createElement("span");

//add content
deleteBtn.textContent="delete";
bookName.textContent = value

//add class
deleteBtn.classList.add("delete");
bookName.classList.add("name");

// append to DOM
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

});

//hide books
const checkBtn = document.querySelector("#hide");
checkBtn.addEventListener("change", function(e){

if(checkBtn.checked){
list.style.display = "none"

}else{
  list.style.display = "block";
}

});

//The search function

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup" , function(e){

const term = e.target.value.toLowerCase();
const  books = list.getElementsByTagName("li");
Array.from(books).forEach(function(book){

  const title = book.firstElementChild.textContent;
  if(title.toLowerCase().indexOf(term)!= -1){

    book.style.display = "block";
  }else{
    book.style.display = "none";
  }

})

})





