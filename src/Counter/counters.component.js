import React, { useState } from "react";

import Counter from "./counter.component";
import Button from "../common/button.component";
import Header from "../common/header.component";

function Counters() {
  const [counters, setCounters] = useState({
    numbers: [0],
  });

  function increment(index) {
    const numbers = [...counters.numbers];
    numbers[index]++;
    setCounters({ numbers });
  }

  function decrement(index) {
    const numbers = [...counters.numbers];
    numbers[index]--;
    setCounters({ numbers });
  }

  function reset(index) {
    const numbers = [...counters.numbers];
    numbers[index] = 0;
    setCounters({ numbers });
  }

  function addCounter() {
    setCounters({ numbers: [...counters.numbers, 0] });
  }

  function Delete(index) {
    const numbers = [...counters.numbers];
    numbers.splice(index, 1);
    setCounters({ numbers });
  }

  return (
    <div className="card container col-md-6 offset-md-3">
      <Header headerText={"Multiple Counter App"} />
      <div className="card-body">
        <Button
          event={addCounter}
          className="btn btn-secondary mx-3"
          text="Add Counter"
        />
        <hr></hr>
        {counters.numbers.map((number, index) => {
          return (
            <React.Fragment key={index}>
              <Counter
                index={index}
                onIncrement={increment}
                onDecrement={decrement}
                onDelete={Delete}
                onReset={reset}
                number={counters.numbers[index]}
              />
              <br></br>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Counters;
