import React from 'react';
import axios from 'axios';
import Todo from './Todo';

export default class TodoList extends React.Component {  
  state = {
    todos: [],
  }

  componentDidMount() {
    axios.get('http://localhost:8080/tasks/getTasks').then(res => {
      this.setState({todos: res.data});
    });
  }

  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.todos.map((element) => {
            return <Todo key={element.id} id={element.id} todo={element} />
          })}
        </tbody>
      </table>
    );
  }
}
