import React from 'react'
import useTodoStore from '../stores/useTodoStore'

const TodoList = () => {

  const { todos } = useTodoStore();

  return (
    <div>
        <ol>
            { todos &&
                todos.map((item) => 
                    <li key={item.id}>{item.todo} | {item.date}</li>
                )
            }
        </ol>
    </div>
  )
}

export default TodoList