import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Name from './Name'

function TodoList() {

  const [todos, setTodos] = useState([]);


  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = id => {
    console.log(todos);
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  }


  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Plan for today</h1>
      <Name />
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}
      />
    </>
  )
}
export default TodoList
