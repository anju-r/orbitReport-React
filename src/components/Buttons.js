import styling from "./styling.css";
import satData from "./satData";
import App from "../App";
const Buttons = (props) => {
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  const displaySats = props.displaySats;
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => {
        return (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
          </button>
          );
          })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;