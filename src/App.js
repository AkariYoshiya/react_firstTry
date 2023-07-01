// コンポーネント（TodoList.js）をApp（根幹）にimport
import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

// 関数はAppコンポーネントの中に書くように
function App() {
  // 変数todos (=object)を管理監視するのがuseState()(=hooks)
  //　todosが更新(=タスクを追加)されるタイミングで画面が再レンダリングする=無駄な再レンダリングが防げる
  // useState([初期値を設定])。この初期値はtodosの中に最初に入る。
  const [todos, setTodos] = useState([]);

  // useRefというhooksを使えば簡単に文字列を取得できる
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加する
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    // タスク追加後input枠から入力した文字列を削除
    todoNameRef.current.value = null;
  };

  // どのタスク(=id)を対象にするのか
  const toggleTodo = (id) => {
    // 元のデータを変えたくないからspreadを使ってコピー
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    // returnの()内には必ずdiv(JSX fragment)を入れて要素を囲む
    <div>
      {/* コンポーネントの中にhtml要素を作成 */}
      <TodoList todos={todos} toggleTodo={toggleTodo}></TodoList>
      <input type="text" ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
