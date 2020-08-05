import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";


function TodoList() {
  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  function removeTodo(id) {
    dispatch({type: "DELETE_TODO", id });
  }

  /** Add new todo object to list. */
  const addTodo = todo => {
    dispatch({type: "ADD_TODO", todo: { ...todo, id: uuid() }});
  };

  const todoComponents = todos.map(todo => (
    <Todo
      removeTodo={removeTodo}
      key={todo.id}
      id={todo.id}
      name={todo.name}
    />
  ));
  
  return (
    <div className="ShoppingList">
      <NewTodoForm addTodo={addTodo} />
      <ul>{todoComponents}</ul>
    </div>
  );
};
// end

export default TodoList;
