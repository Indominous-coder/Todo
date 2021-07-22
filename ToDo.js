//selecting element
document.querySelector(".a").addEventListener("click", function () {
  document.querySelector(".todo-cont").style.display = "none";
  document.querySelector(".todo").style.opacity = "1";
  var head2 = document.querySelector(".head-para").style.opacity="1";

});
document.addEventListener("DOMContentLoaded", getTodos);
var addbtn = document.querySelector(".btn-plus");
var todo_cont = document.querySelector(".storage");
var input = document.querySelector(".todo-input");

addbtn.addEventListener("click", function () {
  if(input.value==null) {
    todo_cont.removeChild(paragraph);
  } else {
    var paragraph = document.createElement("div");
  var list = document.createElement("ul");
  list.classList.add("ul");
  list.innerHTML = "<i class='fas fa-trash'></i>";
  paragraph.addEventListener("mouseenter", function () {
    list.style.opacity = "1";
  });
  paragraph.addEventListener("mouseleave", function () {
    list.style.opacity = "0";
  });
  paragraph.innerText = input.value;
  paragraph.classList.add("para-styling1");
  paragraph.addEventListener("click", function () {
    paragraph.classList.toggle("toggle");
  });
  saveLocalTodos(input.value);
  input.value = "";
  todo_cont.appendChild(paragraph);
  paragraph.appendChild(list);

  list.addEventListener("click", function () {
    removeTodos(paragraph);
    todo_cont.removeChild(paragraph);
  });
  }
  
});

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    var paragraph = document.createElement("div");
    var list = document.createElement("ul");
    list.classList.add("ul");
    list.innerHTML =
      "<a href='#' class='trash-cont'><i class='fas fa-trash'></i></a>";
    paragraph.addEventListener("mouseenter", function () {
      list.style.opacity = "1";
    });
    paragraph.addEventListener("mouseleave", function () {
      list.style.opacity = "0";
    });
    paragraph.innerText = todo;
    paragraph.classList.add("para-styling1");
    todo_cont.appendChild(paragraph);
    paragraph.appendChild(list);
    paragraph.addEventListener("click", function () {
      paragraph.classList.toggle("toggle");
    });
    list.addEventListener("click", function () {
      removeTodos(paragraph);
      todo_cont.removeChild(paragraph);
    });
  });
}
