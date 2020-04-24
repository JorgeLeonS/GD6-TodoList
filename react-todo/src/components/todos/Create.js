import React, { useState } from 'react';
import axios from 'axios';

//const description = useState('');

export default class Create extends React.Component {  

    state = {
      description: '',
    }

    handleTodoChange = (event) => {
        let val = event.target.value;
        // setTodo(val);
        this.setState({description: val});
    }
  
    handleSubmit=() => {
        const newTask = {
            description: this.state.description
        }

        axios.post('http://localhost:8080/tasks', newTask);
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Task:</label>
                <input type='text' name='description' onChange={this.handleTodoChange}></input>
                <button type='submit'>Create</button>
            </form>
        </div>
      );
    }
  }
  //DIV return en render()
        // <div>
        //     <label htmlFor="create-form"></label>
        //     <input 
        //         type="text" 
        //         value={todo}
        //         onChange={handleTodoChange}/>
        //     <input 
        //         type="button" 
        //         value="Create" 
        //         onClick={handleCreateClick}/>
        // </div>