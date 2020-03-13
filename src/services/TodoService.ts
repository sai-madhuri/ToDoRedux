import {ToDoItem} from "../ToDo";

var todos : ToDoItem[] = [];

var todo : ToDoItem = new ToDoItem(1, "Complete Learning Redux", false);

todos.push(todo);

export const GetAllToDos = ()=>
{
    return todos;
}

export const AddTodo = (id : number, text : string , completed : boolean) => {
    var todo : ToDoItem = new ToDoItem(id,text,completed);
    todos.push(todo);
}

export const ToggleToDo = (todo : ToDoItem) => {
    var index : number = todos.findIndex(obj=> obj.id==todo.id);
    todos[index].completed = !todos[index].completed;
}