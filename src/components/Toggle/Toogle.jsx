import "./Toggle.css";
import { ThemeContext } from "../../App";
import { useContext ,useState} from "react";
import sundark from '../../assets/images/icon-sun-dark.svg'
import sunlight from '../../assets/images/icon-sun-light.svg'
import moondark from '../../assets/images/icon-moon-dark.svg'
import moonlight from '../../assets/images/icon-moon-light.svg'
function Toggle() {
  const [imageSrc, setImageSrc] = useState(sundark);
  const [imageSrc2, setImageSrc2] = useState(moondark);
  const theme = useContext(ThemeContext);
  function onHandleChange(event) {
    let newValue;
    if (event.target.checked == false) {
      newValue = "light";
    } else {
      newValue = "dark";
    }
    theme.setTheme(newValue);
  }
  function change(){
    if (imageSrc==sundark && imageSrc2==moondark) {
      setImageSrc(sunlight)
      setImageSrc2(moonlight)
    }
    else{
      setImageSrc(sundark)
      setImageSrc2(moondark)
    }
  }
  return (
    <div id="top">
    <img src= {imageSrc}/>
      <label className="switch">
        <input type="checkbox" onChange={onHandleChange}  onClick={change}></input>
        <span className="slider round"></span>
      </label>
      <img src={imageSrc2} />
    </div>
  );
}
export default Toggle;
