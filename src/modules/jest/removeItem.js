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
    isCompleted: false,
  },

];

// Delete Element
const deleteElement = (todoId) => {
  listOfTodo = listOfTodo.filter((todo) => todo.id !== todoId);
};

// Getter
const getData = () => listOfTodo;

module.exports = deleteElement;
module.exports = getData;