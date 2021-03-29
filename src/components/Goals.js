import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
    addItem = (e) => {
        e.preventDefault();

        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = ''
        ));
    }

    removeItem = (item) => {
        this.props.dispatch(handleDeleteGoal(item));
    }

    render() {
        const { goals } = this.props;
        return (
            <div>
                <h1>Goals</h1>
                <input 
                    type='text'
                    placeholder='Add goal'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Goal</button>
                
                <List items={goals} remove={this.removeItem} />
            </div>
        )
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goals)