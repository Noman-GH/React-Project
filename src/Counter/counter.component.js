import React from "react";
import Button from "../common/button.component";

function Counter(props) {
  return (
    <div className="d-flex">
      <Button
        event={() => props.onReset(props.index)}
        className="btn btn-success mx-3"
        text="Reset"
      />
      <Button
        event={() => props.onDecrement(props.index)}
        className="btn btn-warning mx-3"
        text="Dec (-)"
        disabled={props.number === 0}
      />
      <h2 className="my-2">{props.number}</h2>
      <Button
        event={() => props.onIncrement(props.index)}
        className="btn btn-info mx-3"
        text="Inc (+)"
      />
      <Button
        event={() => props.onDelete(props.index)}
        className="btn btn-danger mx-3"
        text="Delete"
      />
    </div>
  );
}

export default Counter;
