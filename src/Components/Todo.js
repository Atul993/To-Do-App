import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck,faTrashAlt } from "@fortawesome/free-solid-svg-icons"


const Todo = ({ todo, todos, setTodos }) => {
  
  const deleteHandler = e => (
    setTodos(todos.filter( item => item.id !== todo.id ))
  );

  const checkHandler = (e) => {
    setTodos(todos.map( item => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    }))
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ===true ? "completed" :""}`}>{ todo.text }</li>
      <button onClick={checkHandler} className="complete-btn"><FontAwesomeIcon icon={ faCheck }/></button>
      <button onClick={deleteHandler} className="trash-btn"><FontAwesomeIcon icon={ faTrashAlt }/></button>
    </div>
  )
}

export default Todo
