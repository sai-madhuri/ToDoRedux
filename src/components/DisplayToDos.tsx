import * as React from "react"
import { connect } from 'react-redux'
import IToDoService, { ToDoService } from "../actions/ToDoActions";

class DisplayToDos extends React.Component<any, any> {

    // var todos: ToDoItem[] = GetAllToDos();
    // var listItems = todos.map((todo: { id: number, text: string }) =>
    //     (
    //         <div className="listItem" key={todo.id}>
    //             <li>
    //                 <p className='name'>{todo.text}</p>
    //             </li>
    //         </div>
    //     ))

    todoService : IToDoService = new ToDoService();

    constructor(props: any) {
        super(props);
        this.state = { todos: this.props.todos }
    }

    componentWillReceiveProps(newProps: any)
    {
        this.setState({todos : newProps.todos});
    }
    
    displayAllToDos(todos: any) {
        this.setState({ todos: todos });
    }

    displayActiveToDos(todos: any[]) {
        var activeTodos = todos.filter((todo: { completed: any; }) => !todo.completed);
        this.setState({ todos: activeTodos });
    }

    displayCompletedToDos(todos: any[]) {
        var completedTodos = todos.filter((todo: { completed: any; }) => todo.completed);
        this.setState({ todos : completedTodos });
    }

    toggleToDo(id : number)
    {
        this.todoService.ToggleState(id);
    }

    listItems: any = []
    render() {
        this.listItems = this.state.todos.map((todo: { id: number, text: string, completed: boolean }) =>
            (
                <div className="listItem" key={todo.id}>
                    <li className="toDoList">
                        <p className='itemValue'>{todo.text}</p>
                        <input type="button" className="toggleState" value={todo.completed === true ? 'Make it Active' : 'Make it completed'}
                            onClick={() => this.toggleToDo(todo.id)} />
                    </li>
                </div>
            )
        )
        return (
            <div>
                <ul>
                    {this.listItems}
                </ul>
                <div className="filter">
                    <input type="button" value="All" onClick={()=>this.displayAllToDos(this.props.todos)} />
                    <input type="button" value="Active" onClick={()=>this.displayActiveToDos(this.props.todos)} />
                    <input type="button" value="Completed" onClick={()=>this.displayCompletedToDos(this.props.todos)} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(DisplayToDos);
