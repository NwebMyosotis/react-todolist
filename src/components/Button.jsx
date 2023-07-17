import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import styles from "./Button.module.css";

const Button = ({ btn }) => {
  const todosContext = useContext(TodosContext);
  const { mode, filterd, setFilterd } = todosContext;
  const handleClick = () => {
    setFilterd(btn);
  };
  return (
    <button
      className={`${styles.button} ${
        filterd === btn
          ? mode
            ? styles.darkmodeUnderBar
            : styles.underBar
          : ""
      } ${mode ? styles.darkmodeBtn : ""}`}
      onClick={handleClick}
    >
      {btn}
    </button>
  );
};

export default Button;
