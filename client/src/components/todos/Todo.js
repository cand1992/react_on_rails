import React, { Component } from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
	state = { editing: false }

	toggler = () => this.setState({ editing: !this.state.editing })

	render() {
		const { id, title, complete, deleteTodo, updateTodo } = this.props
		const { editing } = this.state
		return(
			<>
			<h2>{title}</h2>
			<p>
				complete: {complete ? 'Yes': 'No' }
			</p>
			<button onClick={() => deleteTodo(id)}>Delete</button>
			{
				editing ? <TodoForm {...this.props} toggler={this.toggler} /> : <button onClick={() => this.toggler()}>Edit</button>
			}
			</>
		)
	}
}

export default Todo;