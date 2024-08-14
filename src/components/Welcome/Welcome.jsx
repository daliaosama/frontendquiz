import './Welcome.css'
import { ThemeContext } from "../../App";
import { useContext } from "react";
function Welcome(){
    const passed=useContext(ThemeContext)
 console.log(passed)
    return(
        <div id="welcome" className={passed.theme +"div"}>
            <label id='wel'>Welcome to the <br/>
            <strong>Fontend Quiz!</strong></label>
            <label>Pick a subject to get started</label>
        </div>
    )
}
export default Welcome