import React, { Component } from 'react';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // make an api call to the rails side to get all the todos
  }

  addTodo = () => {
    // make an api call to add a todo into the rails side
    // add the todo into the state
  }

  updateTodo = () => {
    //make an api call to update a todo in the rails side
    // update todo in the state
  }

  deleteTodo = () => {
    // make an api call to delete a todo in the rails side
    // delete todo from state
  }

  render() {
    return(
      <>

      </>
    )
  }
}

export default App;
