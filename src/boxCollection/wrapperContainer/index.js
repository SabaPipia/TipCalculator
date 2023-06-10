import "./style.scss";
import AmountField from "../amountField";
import BillInput from "../billInput";
import PeopleField from "../peopleInput";
import TipField from "../tipField";
import { useEffect, useState } from "react";

function WrapperContainer(props) {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setBill(0);
    setTip(0);
    setPeople(1);
  }, [reset]);

  return (
    <div className="wrapperContainer">
      <div className="inputSide">
        <BillInput setBill={setBill} reset={reset} />
        <TipField setTip={setTip} reset={reset} />
        <PeopleField setPeople={setPeople} people={people} reset={reset} />
      </div>
      <div className="billSide">
        <AmountField
          bill={bill}
          tip={tip}
          people={people}
          setReset={setReset}
        />
      </div>
    </div>
  );
}

export default WrapperContainer;
