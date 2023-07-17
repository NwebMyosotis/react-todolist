import { useContext, useEffect, useState } from "react";
import styles from "./TodoList.module.css";
import { TodosContext } from "../contexts/TodosContext";
import { BsFillTrash3Fill } from "react-icons/bs";

const TodoList = ({ todo, del, forUpdate }) => {
  const { mode, todos, setTodos } = useContext(TodosContext);
  const [isChecked, setIsChecked] = useState(todo.checked);
  const handleClick = () => {
    return del(todo.id);
  };
  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
    const index = todos.findIndex((item) => item.id === todo.id);
    let thisTodo = todos;
    thisTodo[index].checked = event.target.checked;
    setTodos([...thisTodo]);
  };

  // useEffect(() => {
  //   const thisIndex = todos.findIndex((item) => item.id === id);
  //   setTodos((prev) => {
  //     prev[thisIndex].checked = isChecked;
  //     return prev;
  //   });
  // }, [isChecked]);

  return (
    <div className={`${styles.todoBox} ${mode ? styles.darkmodeTodoBox : ""}`}>
      <input
        id={todo.id}
        type="checkBox"
        className={styles.isDone}
        onChange={handleChecked}
        checked={isChecked}
      />
      <label
        htmlFor={todo.id}
        className={todo.checked ? styles.checkedLabel : styles.uncheckedLabel}
      >
        {todo.text}
      </label>
      <button className={styles.button} onClick={handleClick}>
        <BsFillTrash3Fill />
      </button>
    </div>
  );
};

export default TodoList;
