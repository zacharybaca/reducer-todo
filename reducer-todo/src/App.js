import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/todoReducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList state={state}  />
    </div>
  );
}

export default App;
