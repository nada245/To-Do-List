
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()
  const handelAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text }
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  const handelDone = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed
    setTodos(newTodo)
  }
  const handelDelete=(index)=>{
    const newTodo = [...todos];
    newTodo.splice(index,1)
    setTodos(newTodo)
  }
  return (
    <div className="App">
      <h1>to do list</h1>
      <div className='container'>
        <ul>
          {todos.map(({ text,completed }, index) => {
            return (
          <div className='item'>
                <li  className={completed?"done":""}
              key={index} onClick={() => handelDone(index)}>{text}</li>
              <span onClick={()=>handelDelete(index)} className='trash'>❌</span>
          </div>
            )
          })}
        </ul>
      </div>
      <input ref={inputRef} placeholder='enter your ite' />
      <button onClick={handelAddTodo}>add</button>
    </div>
  );
}

export default App;
