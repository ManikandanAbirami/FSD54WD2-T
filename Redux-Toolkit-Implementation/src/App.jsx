import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask(''); //Clear input after adding
  }

  const completeTodo = (id) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    console.log("updateTodos: ", updateTodos)
    setTodos(updateTodos);
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Todo List</h1>
        <form onSubmit={addTodo}>
          <input type='text' value={task} onChange={(e) => { setTask(e.target.value) }} placeholder='Add a new task'></input>
          <button type='submit'>Add</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
              <button onClick={() => { completeTodo(todo.id) }}>Complete</button>
              <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
