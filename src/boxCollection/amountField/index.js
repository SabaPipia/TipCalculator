import "./style.scss";
import AmountButton from "./button";

function AmountField(props) {
  const tipAmount = Math.floor((props.bill * (props.tip / 100)) / props.people);
  const total = Math.ceil((props.bill + props.tip) / props.people);
  return (
    <div className="amountField">
      <div className="amountFieldContent">
        <div className="tipPerson">
          <div className="content">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="amount">${tipAmount ? tipAmount : "0.00"}</div>
        </div>
        <div className="totalPerson">
          <div className="content">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="amount">${total ? total : "0.00"}</div>
        </div>
      </div>
      <AmountButton setReset={props.setReset} />
    </div>
  );
}

export default AmountField;
