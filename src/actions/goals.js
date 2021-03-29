import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}

export function handleAddGoal(value, callback) {
    return (dispatch) => {
        API.saveGoal(value)
            .then((goal) => {
                dispatch(addGoal(goal));
                callback();
            })
            .catch(err => {
                alert('An error occured. Try Again');
            });
    }
}

export function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id));

        API.deleteTodo(goal.id).catch( err => {
            dispatch(addGoal(goal))

            alert('An error occured !! Try Again');
        });
    }
}