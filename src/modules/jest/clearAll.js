let listOfTodo = [
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
    isCompleted: true,
  },
];

// Clear All
const clearAll = () => {
  listOfTodo = listOfTodo.filter((todo) => !todo.isCompleted);
  return listOfTodo;
};

// Getter
const getData = () => listOfTodo;

module.exports = clearAll;
module.exports = getData;
