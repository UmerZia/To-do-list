const listOfTodo = [];

// Create Task
const createList = (name) => ({
  id: (listOfTodo[listOfTodo.length - 1]?.id + 1) ?? 1,
  task: name,
  status: false,
  isEditing: false,
  isCompleted: false,
});

// Add item to the list
const addListItem = (value) => {
  const listName = value;
  const list = createList(listName);
  listOfTodo.push(list);
  return listOfTodo;
};

const getData = () => listOfTodo;

module.exports = addListItem;
module.exports = getData;