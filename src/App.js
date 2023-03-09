import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Counters from "./Counter/counters.component";
import Login from "./login/login.component";
import AddNewTodo from "./todo/addnewtodo.component";
import Todos from "./todo/todos.component";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counters" element={<Counters />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/addnewtodo" element={<AddNewTodo />} />
        </Routes>
      </>
    );
  }
}

export default App;
