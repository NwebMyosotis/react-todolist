import { useEffect, useState } from "react";
import "./App.css";
import { TodosContext } from "./contexts/TodosContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const initialItems = [
  { id: 1, text: "테스트", type: false, checked: false },
  { id: 2, text: "test", type: false, checked: false },
];

if (localStorage.length === 0) {
  window.localStorage.setItem("todos", JSON.stringify(initialItems));
  window.localStorage.setItem("mode", false);
}

const getTodos = JSON.parse(window.localStorage.getItem("todos"));
const getMode = JSON.parse(window.localStorage.getItem("mode"));

function App() {
  const [todos, setTodos] = useState(getTodos);
  const [filterd, setFilterd] = useState("All");
  const [mode, setMode] = useState(getMode);

  const localTodos = JSON.stringify(todos);
  useEffect(() => window.localStorage.setItem("todos", localTodos), [todos]);
  const localMode = JSON.stringify(mode);
  useEffect(() => window.localStorage.setItem("mode", localMode, [mode]));

  const todoAdd = (arr) => {
    setTodos((prev) => {
      return [...prev, arr];
    });
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((item) => item.id !== id);
    setTodos(delTodo);
  };

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, filterd, setFilterd, mode, setMode }}
    >
      <div className={`background ${mode ? "darkmode" : ""}`}>
        <div className={`todoArea ${mode ? "todosAreaDark" : ""}`}>
          <Header />
          <Main del={handleDelete} />
          <Footer addTodos={todoAdd} />
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
