import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '../actions/todos'

class Todos extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        
        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''
        ));
    }

    removeItem = (item) => {
        this.props.dispatch(handleDeleteTodo(item));
    }

    toggleItem = (item) => {
        this.props.dispatch(handleToggleTodo(item));
    }

    render() {
        const { todos } = this.props;
        return (
            <div>
                <h1>Todos List</h1>
                <input 
                    type='text'
                    placeholder='Add todo'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Todo</button>
                
                <List items={todos} remove={this.removeItem} toggle={this.toggleItem} />
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos)