import _, { xor } from 'lodash'
import './styles.css'
const listContainer = document.querySelector('.todoList')
const newList = document.getElementById("inputField")
const addBtn = document.getElementsByClassName("wrapper__addBtn")[0]
const LOCAL_STORAGE_LIST_KEY = 'task.listOfTodo'
let listOfTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
const listOfTodoListItem = document.querySelectorAll("todoList__item-name")
const BtnClear = document.getElementById("BtnClear")
import listElement from "./modules/listitem"
BtnClear.addEventListener("click", e=>{
  listOfTodo=listOfTodo.filter(todo=> !todo.isCompleted);
  
  saveAndRender();
})
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

//Edit Element
window.editElement = (todoId) => {
  resetEditing();
  listOfTodo.find(todo => todo.id === todoId).isEditing=true
  saveAndRender()
}

//OnChange
window.updateElement = (todoId) => {
  const task = document.getElementById(`io-${todoId}`).value
  listOfTodo.find(todo => todo.id === todoId).task = task;
}

//Enter value on enter key
listOfTodoListItem.forEach((list,index) => {
  list.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      console.log(event)
    }
  })
})
window.finishEditingElement= ()=>
{
  resetEditing();
  saveAndRender();
}
//Reset Editing
const resetEditing=()=>{
  listOfTodo.forEach(todo => {
    todo.isEditing = false
  })
}
//Mark Completed/UnCompleted
window.ToggleCompleted =(todoId)=> {
  const Completed=document.getElementById(`cb-${todoId}`).checked;
  listOfTodo.find(todo => todo.id === todoId).isCompleted = Completed;
  saveAndRender();
}
//Render item on screen
const render = () => {
  clearList(listContainer)
  listOfTodo.forEach((todo) => {
    listContainer.insertAdjacentHTML('beforeend', listElement(todo))
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
  return {id: (listOfTodo[listOfTodo.length-1]?.id+1)??1, task:name, status: false, isEditing: false, isCompleted:false}
}

render()