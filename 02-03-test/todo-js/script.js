// initializing empty array
let todos = [];
let todosLS = JSON.parse(localStorage.getItem("todos")) || todos;

// display todos
const displayTodos = function (todos) {
  // access the ul element
  const todoListEl = document.getElementById("todo-list");

  // clear the current display
  todoListEl.innerHTML = "";

  // iterate through todos array and add an li element inside the ul element
  for (const { todo, id } of todos) {
    const html = `
      <li>
        <span>${todo}</span>
        <button onclick={deleteTodo(${id})}>delete</button>
      </li>
    `;
    todoListEl.insertAdjacentHTML("afterbegin", html);
  }

  // FIXME: The code for local storage is not working. When refreshing the page, the todos are showing up in the local storage but, they are not being displayed on the HTML page. If I am calling displayTodos() outside of this function in global scope, it is still not working as it should.
};

// delete todo
const deleteTodo = function (todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  displayTodos(todos);

  localStorage.setItem("todos", JSON.stringify(todos));
};

const handleSubmit = function (event) {
  event.preventDefault();

  // accessing todo input value
  const todoInput = document.getElementById("todo").value;

  // pushing todo value along with id in the todo array
  todos.push({ todo: todoInput, id: Date.now() });
  console.log(todos);

  // clearing input field
  document.getElementById("todo").value = "";

  // displaying todos
  displayTodos(todos);

  localStorage.setItem("todos", JSON.stringify(todos));
};
