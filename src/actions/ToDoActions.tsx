import { ToDoItem } from "../ToDo";

let currentId = 1

// export const AddToDo = (text: string) => (dispatch) => {
//     var id = currentId++;
//     var completed: boolean = false;
//     var todo: ToDoItem = new ToDoItem(id, text, completed);
//     dispatch(addToDo(todo));
// }

// export const ToggleState = (id: number) => (dispatch) => {
//    dispatch(toggleState(id));
// }

interface IToDoService {

    AddToDo(text: string);

    ToggleState(id: number);

}

export class ToDoService implements IToDoService {

        AddToDo = (text: string) => (dispatch: (arg0: { type: string; todo: ToDoItem; }) => void) => {
        var id = currentId++;
        var completed: boolean = false;
        var todo: ToDoItem = new ToDoItem(id, text, completed);
        dispatch(addToDo(todo));
    }

    ToggleState = (id : number) => (dispatch: (arg0: { type: string; id: number; }) => void)=>{
        dispatch(toggleState(id));
    }
}

const addToDo = (todo: ToDoItem) => ({
    type: 'ADD_TODO',
    todo
})

const toggleState = (id: number) => ({
    type: 'TOGGLE_STATE',
    id
})

export default IToDoService;