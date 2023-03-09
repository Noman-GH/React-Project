import React, { useState, useEffect } from "react";
import Alltodos from "./alltodos.component";
import Button from "../common/button.component";
import Header from "../common/header.component";
import axios from "axios";
import { Link } from "react-router-dom";

function Todos() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const res = await axios.get("https://dummyjson.com/todos");
        setTodoList(res.data.todos);
      } catch (err) {
        alert("Error Happened");
      }
    }
    getTodos();
  }, []);

  return (
    <div className="container ">
      <div className="card">
        <Header headerText={"Todo Application"} />
        <div className="card-body">
          <Link to="/addnewtodo">
            <Button className="btn btn-secondary mx-3" text="Add Todo" />
          </Link>
          <br></br>
          <h5 className="text-center">All Todos</h5>
          {todoList.map((number, index) => {
            return (
              <React.Fragment key={index}>
                <Alltodos todos={number.todo} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todos;
