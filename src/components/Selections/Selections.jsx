import "./Selections.css";
import SelectionItem from "../SelectionItem/SelectionItem";
import htmllogo from "../../assets/images/icon-html.svg";
import csslogo from "../../assets/images/icon-css.svg";
import jslogo from "../../assets/images/icon-js.svg";
import Acessabilitylogo from "../../assets/images/icon-accessibility.svg";

function Selections() {
  const arrayofObjects = [
    {
        SelectionName: "HTML",
        SelectionLogo: htmllogo,
        SelectionColor: "#fef1eb",
        uniqueID:1
      },
      {
        SelectionName: "CSS",
        SelectionLogo: csslogo,
        SelectionColor: "#e1fcf5",
        uniqueID:2
      },
      {
        SelectionName: "Javascript",
        SelectionLogo: jslogo,
        SelectionColor: "#e8f1ff",
        uniqueID:3
      },
      {
        SelectionName: "Accessability",
        SelectionLogo: Acessabilitylogo,
        SelectionColor: "#ede2ff",
        uniqueID:4
      },
  ];
 
  
  return (
    <div id="Selectionwraper" >
        {arrayofObjects.length > 0 ? ( 
            arrayofObjects.map((item) => {
                return (
                  
                  <SelectionItem
                     key={item.uniqueID}
                    SelectionName={item.SelectionName}
                    SelectionLogo={item.SelectionLogo}
                    SelectionColor={item.SelectionColor}
                  ></SelectionItem>
                );
              })

        ):(<h1>this array is empty</h1>)
    
    }
    </div>
  );
}
export default Selections;
