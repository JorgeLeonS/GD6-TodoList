import React, { useState } from 'react';
import './App.css';

import Create from './components/todos/Create';
import TodoList from './components/todos/TodoList';


function App() {

  return (
    <div className="App">
      <h1>TodoList</h1>
      {/* <Create addTodo={addTodo}/>
      <Index todos={todos} markAsDone={markAsDone}/> */}
      <Create></Create>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
