import "./style.scss";
import TipButton from "../../components/Tipbutton/";

function TipField(props) {
  return (
    <div className="tipField">
      <label className="tipLabel">Select Tip %</label>
      <TipButton setTip={props.setTip} reset={props.reset} />
    </div>
  );
}

export default TipField;
