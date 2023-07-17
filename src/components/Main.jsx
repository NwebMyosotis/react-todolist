import TodoList from "./TodoList";
import styles from "./Main.module.css";
import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

const Main = ({ del }) => {
  const todosContext = useContext(TodosContext);
  const { todos, filterd } = todosContext;
  const deleteInfo = (info) => {
    return del(info);
  };

  const AllFilterd = ({ items }) =>
    items.map((item) => (
      <TodoList key={item.id} todo={item} del={deleteInfo} />
    ));
  const ActiveFiltered = ({ items }) =>
    items
      .filter((item) => item.checked === false)
      .map((item) => <TodoList key={item.id} todo={item} del={deleteInfo} />);
  const CompletedFiltered = ({ items }) =>
    items
      .filter((item) => item.checked === true)
      .map((item) => <TodoList key={item.id} todo={item} del={deleteInfo} />);

  return (
    <div className="main">
      <ul className={styles.ul}>
        {filterd === "All" ? (
          <AllFilterd items={todos} />
        ) : filterd === "Active" ? (
          <ActiveFiltered items={todos} />
        ) : (
          <CompletedFiltered items={todos} />
        )}
      </ul>
    </div>
  );
};
export default Main;
