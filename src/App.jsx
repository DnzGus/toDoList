import { useState } from "react"
import Todo from "./components/toDo"
import Forms from "./components/forms"
import "./App.css"


function App() {
  const [todos, setTodos] = useState([
    
  ]);

  const idCounter = [];

  const randomNumberGen = () => {
    return Math.floor(Math.random()*10);
  }
  let idGen = randomNumberGen();

  const randomizerCheck = () =>{
    for(let i = 0; i < todos.length; i++){
      idCounter.push(todos[i].id)
    }
      while (idCounter.includes(idGen)){
        idGen = randomNumberGen();
      }
    idCounter.push(idGen)
  }

  const addToDo = (name,category) => {
    if(todos.length < 10){
      randomizerCheck()
      const newToDos = [...todos, {
        name,
        id: idGen,
        category,
        checked: false
      }]
      setTodos(newToDos)
    }
    else{
      alert("Max limit achieved!")
    }
  };

  const removeToDo = (removeId) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id === removeId ? null : todo
    );
    setTodos(filteredTodos)
  }

  const completed = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
    todo.id === id ? (todo.checked = !todo.checked) : todo
    );
    setTodos(newTodos);
  }


  return (
    <div className="app">
      <h1>Tasks</h1>
      <div className="formArea">
        <Forms newTodo={addToDo} />
      </div> 
      <div className="todoArea">
        {todos.map((todo) =>(
          <Todo todo={todo} key={todo.id} removeToDo={removeToDo} completeToDo={completed}/>
        ))}
      </div>
    </div>
  )
}

export default App
