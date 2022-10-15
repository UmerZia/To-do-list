import './styles.css';

const listContainer = document.querySelector('.todoList');
const listOfTodo = [
  {
    id: 1,
    status: 'true',
    task: 'sar dubana',
  },
  {
    id: 2,
    status: 'true',
    task: 'sar dubana',
  },
  {
    id: 3,
    status: 'true',
    task: 'sar dubana',
  },
];

const render = () => {
  listOfTodo.forEach((todo) => {
    const listElement = `<li class="todoList__item">${todo.task}</li>`;
    listContainer.insertAdjacentHTML('beforeend', listElement);
  });
};

render();