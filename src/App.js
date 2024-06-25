import React, { useState } from "react";
import "./App.css";
function App() {
  const [state, setState] = useState("");
  const [add, setAdd] = useState([]);
  const Adding = () => {
    setAdd([...add, state]);
  };
  const Delete = (ind) => {
    const deletedItem = add.filter((_, i) => i !== ind);
    setAdd(deletedItem);
  };

  return (
    <div className="App">
      <h1>Shoping List </h1>

      <div className="inputdiv">
        <div>
          <input
            className="box"
            type="text"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </div>

        <button className="button" onClick={Adding}>
          Add
        </button>
      </div>
      {add.map((item, ind) => {
        return (
          <div className="dlt" key={ind}>
            <h1>{item}</h1>
            <button className="button2" onClick={() => Delete(ind)}>remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
