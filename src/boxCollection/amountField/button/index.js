import "./style.scss";

function AmountButton(props) {
  return (
    <button className="amountButton" onClick={() => props.setReset(true)}>
      RESET
    </button>
  );
}

export default AmountButton;
