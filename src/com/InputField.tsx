import React, { useRef, useState } from 'react';

interface Props {
  todo: string;
  setIsTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}

const InputField: React.FC<Props> = ({ todo, setIsTodo , handleAdd }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef< HTMLInputElement>(null);


  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <form className=" text-center" onSubmit={(e)=>
      {handleAdd(e);
        inputRef.current?.blur();
      }
      }>
        <input
        ref={inputRef}
          className={`py-2 px-4 focus:outline-none w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] transition-shadow duration-300 ${
            isFocused ? 'shadow-[0_0_50px_1000px_rgba(0,0,0,0.3)]' : 'shadow-none'
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="text"
          placeholder="Enter Your task"
          onChange={(e) => setIsTodo(e.target.value)}
        />
        <button
          className="text-white bg-yellow-500 py-2 px-4 transition-transform ease-in-out duration-300 transform hover:bg-yellow-400 font-medium active:scale-105"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
