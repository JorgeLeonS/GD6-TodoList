import React from 'react';
import axios from 'axios';

export default class Todo extends React.Component {  
    
    handleMarkAsDone = (event, index) => {
        axios.post(`http://localhost:8080/tasks/${index}/done`);
    }
  
    handleDelete = (event, index) => {
        axios.delete(`http://localhost:8080/tasks/${index}/delete`);
    }
  
    render() {
      return (
        <tr key={this.props.id} style={{backgroundColor: this.props.todo.status === 'pending' ? 'white' : 'grey'}}>
          <td>#{(this.props.id + 1)}</td>
          <td>{this.props.todo.description}</td>
          <td>
            {this.props.todo.status === 'pending' && (
              <input type="button" value="terminado?" onClick={(event) => this.handleMarkAsDone(event, this.props.id)}/>
            )}
            <input type="button" value="eliminar" onClick={(event) => this.handleDelete(event, this.props.id)}/>
          </td>
        </tr>
      );
    }
}