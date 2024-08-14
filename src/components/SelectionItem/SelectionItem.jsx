/* eslint-disable react/prop-types */
import './SelectionItem.css'
import { ThemeContext } from "../../App";
import { useContext } from "react";
function SelectionItem(props){
    const passed=useContext(ThemeContext)

    return( 
        <button id='Selectionitem' className={passed.theme+"button"}>
        <div className='Selectionlogo' style={{backgroundColor:props.SelectionColor}}>
            <img src={props.SelectionLogo} />
        </div>
        <span>{props.SelectionName}</span>
        </button>
    )
}
export default SelectionItem;