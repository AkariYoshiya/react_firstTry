import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        ></input>
      </label>
      {/* keyを重複させないために固有の番号を割り振るなどuuidと呼ばれるライブラリなどがある */}
      {todo.name}
    </div>
  );
};

export default Todo;
