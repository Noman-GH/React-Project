import React from "react";
import Button from "../common/button.component";
import { Link } from "react-router-dom";

function Alltodos(props) {
  const handleClick = () => {};

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>
          <input className="form-check-input mx-2" type="checkbox" />
          <strong>{props.todos}</strong>
        </span>
        <span>
          <div class="btn-group">
            <Link to="/addnewtodo">
              <Button
                className="btn btn-info"
                onClick={handleClick}
                text="Edit"
              />
            </Link>
            <Button className="btn btn-danger" text="Delete" />
          </div>
        </span>
      </li>
    </ul>
  );
}

export default Alltodos;

// onClick={() => this.handleSort(column)}
