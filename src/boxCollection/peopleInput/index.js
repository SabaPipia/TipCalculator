import "./style.scss";

function PeopleField(props) {
  const handleChange = (people) => {
    props.setPeople(people);
  };
  return (
    <div className="peopleField">
      <label className="peopleLabel">Number of People</label>
      <input
        min={1}
        value={props.people}
        className="input"
        type="number"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default PeopleField;
