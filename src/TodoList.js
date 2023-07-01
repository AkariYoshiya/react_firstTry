import React from "react";
import Todo from "./Todo";

// コンポーネント
const TodoList = ({ todos, toggleTodo }) => {
  // (引数の名前はなんでもいい)
  // ここのtodosはApp.jsで定義したpropsの名前
  //⭐️{} = JSX記法 JSのように書くことができる
  //todosには初期値としてTodo1とTodo2という文字列が２つ入ってる
  // Todo = コンポーネント
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
  //todoは2つあるからunique keyを指定しないとerror出る
};

// どのfileでも使えるようにexport
export default TodoList;
