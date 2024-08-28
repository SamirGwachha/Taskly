import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';


interface Props{

    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <>
   <div className='container mx-auto flex  flex-wrap text-white'>
    
        {todos.map(todo=>(
          <SingleTodo todo={todo} key={todo.id} setTodos={setTodos} todos={todos}/>
        ))}

   </div>
    </>
  )
}

export default TodoList
