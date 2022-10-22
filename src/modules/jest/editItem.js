const listOfTodo = [
  {
    id: 1,
    task: 'Complete week 3',
    status: false,
    isEditing: false,
    isCompleted: false,
  },
  {
    id: 2,
    task: 'Complete week 4',
    status: false,
    isEditing: false,
    isCompleted: false,
  },
  {
    id: 3,
    task: 'Complete week 5',
    status: false,
    isEditing: false,
    isCompleted: false,
  },
];

// Edit Element
const editElement = (todoId, value) => {
  listOfTodo.find((todo) => todo.id === todoId).task = value;
  return listOfTodo;
};

// Getter
const getData = () => listOfTodo;

module.exports = editElement;
module.exports = getData;