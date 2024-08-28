import React, { useState } from 'react';

import './App.css';
import InputField from './com/InputField';
import { Todo } from './model';
import TodoList from './com/TodoList';

const App: React.FC = () => {
  const [todo, setIsTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setIsTodo("");
    }
    console.log(todos);
  };

  return (
    <>
      <div className='bg-slate-900 h-screen w-screen'>
        <div className='container mx-auto'>
        <div className=' flex flex-col items-center py-4'>
          <span className="text-xl md:text-2xl uppercase tracking-wide md:tracking-wider text-white">Taskly</span>
          <div className='border-b-4 rounded-md border-white w-24 md:w-32 py-2 '></div>
        </div>
        <InputField todo={todo} setIsTodo={setIsTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>

    </>
  );
}

export default App;
