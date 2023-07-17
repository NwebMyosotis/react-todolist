import { useContext, useState } from "react";
import "./Footer.css";
import { TodosContext } from "../contexts/TodosContext";

const Footer = ({ addTodos }) => {
  const [inputText, setInputText] = useState("");
  const { mode } = useContext(TodosContext);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodos({
      id: event.timeStamp,
      text: inputText,
      type: false,
      checked: false,
    });
    setInputText("");
  };
  return (
    <div className={`footer ${mode ? "darkmodeFooter" : ""}`}>
      <form onSubmit={handleSubmit}>
        <input
          className="addInput"
          type="text"
          value={inputText}
          onChange={handleChange}
        />
        <button className={`addBtn ${mode ? "darkmodeAddBtn" : ""}`}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Footer;
