import Button from "./Button";
import "./header.css";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { TodosContext } from "../contexts/TodosContext";
import { useContext } from "react";

const Header = () => {
  const { mode, setMode } = useContext(TodosContext);
  const handleClick = () => {
    setMode((prev) => (prev === true ? false : true));
  };
  return (
    <div className={`header ${mode ? "darkmodeHeader" : ""}`}>
      <div>
        <button className="modeBtn" onClick={handleClick}>
          {mode ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </div>
      <div>
        <Button btn="All" />
        <Button btn="Active" />
        <Button btn="Completed" />
      </div>
    </div>
  );
};

export default Header;
