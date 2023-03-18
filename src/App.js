import React from "react";
import { Routes, Route } from "react-router-dom";

import Counters from "./Counter/counters.component";
import Login from "./login/login.component";
import AddNewTodo from "./todo/addnewtodo.component";
import TodoTable from "./todo/todo-table.component";
import Todos from "./todo/todos.component";
import Users from "./user/users.component";
import Youtube from "./youtube/youtube.components";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/counters" element={<Counters />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/addnewtodo" element={<AddNewTodo />} />
                <Route path="/youtube" element={<Youtube />} />
                <Route path="/users" element={<Users />} />
                <Route path="/todo-table" element={<TodoTable />} />
            </Routes>
        </>
    );
}

export default App;
