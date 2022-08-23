import React, { useEffect, useState, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputeRef = useRef(null);

  useEffect(() =>{
    inputeRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
   };

  const handleSubmit = e => {
    e.preventDefault();

  this.props.onSubmit({
    id: Math.floor(Math.random() *10000),
    text: input 
    });

    setInput('');
  };
  
  return (
    <form onSubmit={handleSubmit} className= 'to-do form'>
      {props.edit ? (
      <>
          <input 
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text' 
            ref={inputRef}
            className='todo-input edit'
        />
          <button onClick={handSubmit} className='todo-button edit'>
            Update 
          </button>
       </>
      ) : (
       <>
           <input
             placeholder='Add a todo'
             value={input}
             onChange={hadleChange}
             name='text'
             className='todo-input'
             ref={inputtRef}
           />
           <button onClick={handleSubmit} className= 'todo-button'>
              Add todo 
           </button>
        </>
      )}    
    </form >

  );
}

export default TodoForm