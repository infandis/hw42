import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  let textInput = React.createRef();
  

  const addTodo = () => {
    let todoValue = textInput.current.value;
    if (todoValue.trim() !== '') {
      const todo = {
        id: Date.now(),
        text: todoValue,
        completed: false
      }
      setTodos([...todos, todo]);
      textInput.current.value='';
    }
  };;

  const toggleTodo = (id) => {
    const updatedTodo = todos.map((todo) =>
    todo.id === id ? {...todo, completed: !todo.completed} : todo);
    setTodos(updatedTodo);
  };

  const uncompletedTodos = () => {
    return todos.filter((todo) => !todo.completed);
  };

  const completedTodos = () => {
    return todos.filter((todo) => todo.completed);
  };

  return (
    <>
    <h1>Todo list</h1>
    <hr />
    <div>
      <input type="text" ref={textInput}/>
      <button onClick={addTodo} style={{margin:'10px', padding: '10px'}}>Add ToDo</button>
    </div>
    <hr />
    <div>
      <ul>
        {uncompletedTodos().map((todo) => 
        <li key={todo.id} onClick={()=>toggleTodo(todo.id)} 
        style={{cursor:'pointer', textDecoration: todo.completed ? 'line-through' : 'none'}}>
          {todo.text}
        </li>)}
        {completedTodos().map((todo) => 
        <li key={todo.id} onClick={()=>toggleTodo(todo.id)} 
        style={{cursor:'pointer', textDecoration: todo.completed ? 'line-through' : 'none'}}>
          {todo.text}
        </li>)}
      </ul>
    </div>
    
    </>
  )


}


export default TodoList;