import {useState,useEffect} from "react"
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocalStorage = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocalStorage);
      }
    }
    getLocalTodos();
  },[])
  
  useEffect(() => {
    const filterHandler = e => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }
    filterHandler();

    const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos))
    }
    saveLocalTodos();
  },[todos,status])

  

  return (
    <div className="App">
      <header>
        <h1>Todo App List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos}
        setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos}/>
    </div>
  );
}

export default App;
