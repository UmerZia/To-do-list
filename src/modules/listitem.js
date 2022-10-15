const listElement = (todo) => `<li class="todoList__item" id="${todo.id}"><input class="checkbox" type="checkbox" id=cb-${todo.id} onChange="ToggleCompleted(${todo.id})"  ${todo.isCompleted ? 'checked' : ''}  />
<input class="todoList__item-name ${todo.isCompleted ? 'ibCompleted' : ''}" type="text" id="io-${todo.id}" value="${todo.task}" ${todo.isEditing ? '' : 'disabled'} 
onchange="updateElement(${todo.id})" />
<div class="todoList__option">
            <i class="check ${todo.isEditing ? '' : 'okhidden'} fas fa-check" onclick="finishEditingElement(${todo.id})" hidden></i>
            <i class="trash fas fa-trash" onclick="deleteElement(${todo.id})"></i>
            <i class="edit fas fa-edit" onclick="editElement(${todo.id})"></i>
        </div>
</li>`;
export default listElement;