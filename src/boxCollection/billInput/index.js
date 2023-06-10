import "./style.scss";

function BillInput(props) {
  let bill = 0;
  function ChangeHandler(e) {
    props.setBill(Number(e.target.value));
  }

  return (
    <div className="billInput">
      <label className="billLabel">Bill</label>
      <input
        min={0}
        className="input"
        type="number"
        onChange={ChangeHandler}
        bill={bill}
      />
    </div>
  );
}

export default BillInput;
