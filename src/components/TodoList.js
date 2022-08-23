import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

const addTodo = todo => {
  if(!todo.text || /^\s*$/.test(todo.text)) {
    return;
  }
  
  const newTodos =[todo, ...todos];

  setTodos(newTodos);
  console.log(todo, ...todos);
};
  const completeTodo = id => {
    let updateTodos = todos.map(todo =>{
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo 
    })
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>What the plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;