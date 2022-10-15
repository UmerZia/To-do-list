import './styles.css';

let listContainer = document.querySelector(".todoList");
let listOfTodo = ["microverse", "football", "Hockey"]

const render = () => {
    listOfTodo.forEach(todo => {
        const listElement = `<li class="todoList__item">${todo}</li>`
        listContainer.insertAdjacentHTML("beforeend", listElement);
    })
}

render()