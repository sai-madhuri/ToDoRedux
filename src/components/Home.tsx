import * as  React from "react";
import { connect } from 'react-redux'
import { ToDoItem } from "../ToDo";
import '../css/toDo.css';
import DisplayToDos from "./DisplayToDos";
import IToDoService, { ToDoService } from '../actions/ToDoActions';

class Home extends React.Component<any, any>{

    todoService = new ToDoService;
    constructor(props) {
        super(props);
        this.state = { allTodos: false, activeTodos: false, completedTodos: false }
    }

    addItem(input: any) {
        if (!input.value.trim()) {
            return
        }
        this.todoService.AddToDo(input.value);
        input.value = '';
    }

    // displayAllToDos() {
    //     this.setState({ allTodos: true, activeTodos: false, completedTodos: false });
    //    // return <DisplayToDos todos={this.props.todos} />
    // }

    // displayActiveToDos() {
    //     this.setState({ activeTodos: true, allTodos: false, completedTodos: false });
    //    // return <DisplayToDos todos={this.props.todos.filter(todo => !todo.completed)} />
    // }

    // displayCompletedToDos() {
    //     this.setState({ activeTodos: false, allTodos: false, completedTodos: true });
    //     // return <DisplayToDos todos={this.props.todos.filter(todo => todo.completed)} />
    // }

    render() {

        var input: any = "";
        return (
            <div>
                <input ref={node => input = node} type="text" className="addItemField" />
                <input type="button" className="addItemButton" value="Add Item" onClick={() => this.addItem(input)} />
                {this.props.todos.length > 0 ? <DisplayToDos /> : ''}
                {/* <div className="filter">
                    <input type="button" value="All" onClick={this.displayAllToDos} />
                    <input type="button" value="Active" onClick={this.displayActiveToDos} />
                    <input type="button" value="Completed" onClick={this.displayCompletedToDos} />
                </div>
                {this.state.allTodos ? <DisplayToDos todos={this.props.todos} /> : ''}
                {this.state.activeTodos ? <DisplayToDos todos={this.props.todos.filter(todo => !todo.completed)} /> : ''}
                {this.state.completedTodos ? <DisplayToDos todos={this.props.todos.filter(todo => todo.completed)} /> : ''} */}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(Home);
