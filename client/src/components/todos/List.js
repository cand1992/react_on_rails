import React from 'react';
import Todo from './Todo';

const List = ({ todos, deleteTodo, updateTodo }) => (
	<>
	{ todos.map( todo => 
		<Todo key={todo.id} {...todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
	)}
	</>
)

export default List;