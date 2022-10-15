import './styles.css'
const listContainer = document.querySelector('.todoList')
const newList = document.getElementById("inputField")
const addBtn = document.getElementsByClassName("wrapper__addBtn")[0]
const LOCAL_STORAGE_LIST_KEY = 'task.listOfTodo'
let listOfTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
const listOfTrash = document.getElementsByClassName("trash")

//Reset Indexes
const resetIndex = () => {
  let index = 1;
  listOfTodo.forEach(item => {
    item.id = index;
    index += 1;
  })
}

//Save data to local storage
const save = () => {
  resetIndex()
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(listOfTodo))
}

//Delete Element
window.deleteElement = (todoId) => {
  listOfTodo = listOfTodo.filter(todo => todo.id !== todoId)
  saveAndRender()
}

//Render item on screen
const render = () => {
  clearList(listContainer)
  listOfTodo.forEach((todo) => {
    const listElement = `<li class="todoList__item" id="${todo.id}">${todo.task}
<div class="todoList__option">
            <i class="trash fas fa-trash" id="tr-${todo.id}" onclick="deleteElement(${todo.id})"></i>
            <i class="edit fas fa-edit"></i>
        </div>
</li>`
    listContainer.insertAdjacentHTML('beforeend', listElement)
  })
}

//Save date to local Storage
const saveAndRender = () => {
  save()
  render()
}

//Add item on pressing enter
newList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addListItem()
  }
})

//Add item on clicking Add button
addBtn.addEventListener("click", () => {
  addListItem()
})

//Add item to the list
const addListItem = () => {
  const listName = newList.value
  if (listName == null || listName === "") {return}
  const list = createList(listName)
  newList.value = null
  listOfTodo.push(list)
  saveAndRender()
}

//Refresh the list when new item added
const clearList = (list) => {
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
}

//Create Task
const createList = (name) => {
  return {id: (listOfTodo[listOfTodo.length-1]?.id+1)??1, task:name, status: "false"}
}

render()