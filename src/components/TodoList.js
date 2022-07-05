import React from 'react'
//importing components
import Todo from './Todo'

const TodoList = ({todos,setTodos, filteredTodos}) => {
    console.log(filteredTodos);
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
        {filteredTodos.map((todo) => (
            <Todo key={todo.id} text={todo.text} id={todo.id}
            todos={todos} setTodos={setTodos}
            todo={todo}/>
        ))}
        </ul>
        
    </div>
  )
}

export default TodoList