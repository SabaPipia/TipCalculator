import "./style.scss";
import { useState } from "react";

function TipButton(props) {
  const [selected, setSelected] = useState(0);
  const handleClick = (tip) => {
    props.setTip(tip);
    setSelected(tip);
  };

  return (
    <div className="tipButton">
      {[5, 10, 15, 25, 50].map((tip) => {
        const isSelected = tip === selected;
        const ClassN = isSelected ? "tipBtn selected" : "tipBtn";
        return (
          <button key={tip} className={ClassN} onClick={() => handleClick(tip)}>
            {tip}%
          </button>
        );
      })}
      <input
        className="tipBtn"
        placeholder="Custom"
        onChange={(e) => {
          props.setTip(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default TipButton;
