import "./Main.css";
import Welcome from "../../components/Welcome/Welcome";
import Selections from "../../components/Selections/Selections";
import Toggle from "../../components/Toggle/Toogle";
import { ThemeContext } from "../../App";
import { useContext } from "react";
function Main() {
  const passed = useContext(ThemeContext);
  return (
    <main className={passed.theme + "main"}>
      <div id="maindiv">
        <Toggle></Toggle>
        <div id="contents">
          <Welcome></Welcome>
          <Selections></Selections>
        </div>
      </div>
    </main>
  );
}
export default Main;
