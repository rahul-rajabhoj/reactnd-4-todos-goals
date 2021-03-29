import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function handleAddTodo(value, callback) {
    return (dispatch) => {
        API.saveTodo(value)
            .then((todo) => {
                dispatch(addTodo(todo));
                callback();
            })
            .catch(err => {
                alert('An error occured. Try Again');
            });
    }
}

export function handleToggleTodo(todo) {
    return (dispatch) => {
        dispatch(toggleTodo(todo.id));
        
        API.saveTodoToggle(todo.id).catch( err => {
            dispatch(toggleTodo(todo.id))
            alert('An error occured !! Try Again');
        });
    }
}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id));

        API.deleteTodo(todo.id).catch( err => {
            dispatch(addTodo(todo))
            alert('An error occured !! Try Again');
        });
    }
}