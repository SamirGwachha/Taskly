import React, { useRef, useState } from 'react'
import { Todo } from '../model'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  };
  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) =>
        todo.id !== id)
    )
  };
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleEdit = (e:React.FormEvent , id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(
      todo.id===id?{...todo,todo:editTodo}:todo
    )
  )
);
setEdit(false);
  }
  return (
    <div>
      <form className='' onSubmit={(e)=>handleEdit(e,todo.id)}>
        {
          edit ? (
              todo.isDone ? (<div className=' flex justify-between w-[350px] mt-6 mx-6 bg-red-800 py-3 px-5 rounded-lg overflow-auto duration-300 ease-in-out transition-all shadow-gray-600 shadow-md'>
                <div>
                <s className='text-xl'>{todo.todo}</s>
                </div>
                <div className='flex justify-evenly'>
                  <span><MdDeleteOutline size={25} onClick={() => handleDelete(todo.id)} /></span>
                </div>
              </div>) :
                (
                  <div className='flex justify-between w-[350px] mt-6 mx-6 shadow-gray-500 shadow-md bg-green-800 py-3 px-5 rounded-lg '>
                    <div>
                     <input className=' text-xl text-black' value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} />
                    </div>
                    <div className='flex justify-evenly'>
                      <span><CiEdit size={25} /></span>
                      <span><MdDeleteOutline size={25} onClick={() => handleDelete(todo.id)} /></span>
                      <span><IoCheckmarkOutline size={25} onClick={() => handleDone(todo.id)} /></span>
                    </div>
                  </div>
                )
    
          ) :
            (
                todo.isDone ? (<div className='flex justify-between w-[350px] mt-6 mx-6 bg-red-800 py-3 px-5 rounded-lg overflow-auto duration-300 ease-in-out transition-all shadow-gray-600 shadow-md'>
                  <div>
                    <s className='text-xl'>{todo.todo}</s>
                  </div>
                  <div className='flex justify-evenly'>
                   
                    <span><MdDeleteOutline size={25} onClick={() => handleDelete(todo.id)} /></span>
                  </div>
                </div>) :
                  (
                    <div className='flex justify-between w-[350px] mt-6 mx-6 shadow-gray-500 shadow-md bg-green-800 py-3 px-5 rounded-lg '>
                      <div>
                        <span className='text-xl'>{todo.todo}</span>
                        
                      </div>
                      <div className='flex justify-evenly'>
                      <span><CiEdit size={25} onClick={() => {
                      if (!edit) {
                        setEdit(!edit);
                      }
                    }
                    } /></span>
                        <span><MdDeleteOutline size={25} onClick={() => handleDelete(todo.id)} /></span>
                        <span><IoCheckmarkOutline size={25} onClick={() => handleDone(todo.id)} /></span>
                      </div>
                    </div>
                  )
      
            )
        }
        

      </form>

    </div>
  )
}

export default SingleTodo
