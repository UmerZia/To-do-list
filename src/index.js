import './styles.css';
const listContainer = document.querySelector('.todoList');
const newList = document.getElementById("inputField");
const listOfTodo = [];

const render = () => {
  clearList(listContainer)
  listOfTodo.forEach((todo) => {
    const listElement = `<li class="todoList__item">${todo.task}</li>`;
    listContainer.insertAdjacentHTML('beforeend', listElement);
  });
};

newList.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const listName = newList.value;
    if (listName == null || listName === "") {return}
    const list = createList(listName);
    newList.value = null
    listOfTodo.push(list)
    render()
  }
})

const clearList = (list) => {
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
}

const createList = (name) => {
  return {id: Date.now().toString(), task:name, status: "false"}
}


render();