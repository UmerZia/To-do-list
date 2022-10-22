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

// Mark Completed/UnCompleted
const ToggleCompleted = (todoId, Completed) => {
  listOfTodo.find((todo) => todo.id === todoId).isCompleted = Completed;
  return listOfTodo;
};

// Getter
const getData = () => listOfTodo;

module.exports = ToggleCompleted;
module.exports = getData;
