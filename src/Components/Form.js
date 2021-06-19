import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Form = ({inputText,setInputText,todos,setTodos,setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 10000 }]);
    setInputText("");
  }

  const statusHandler = e => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText}/>
      <button className="todo-button" type="button" onClick={submitTodoHandler}>
        <FontAwesomeIcon icon={faPlus}/>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
