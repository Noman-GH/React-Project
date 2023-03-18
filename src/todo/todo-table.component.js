import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../common/table.component";

function TodoTable() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function getTodos() {
            try {
                const res = await axios.get("https://dummyjson.com/todos");
                setTodos(res.data.todos);
            } catch (err) {
                console.log(err);
            }
        }
        getTodos();
    }, []);

    return (
        <Table
            columns={[
                { name: "Id", path: "id" },
                { name: "Todos", path: "todo" },
                {
                    name: "Completed",
                    getContent: (todo, id) => {
                        return (
                            <td key={`col-${id}`}>
                                {todo.completed ? "Completed" : "Pending"}
                            </td>
                        );
                    },
                },
                { name: "UserId", path: "userId" },
            ]}
            items={todos}
        />
    );
}

export default TodoTable;

/*
1. Table, List => 80%
2. Form => 15%
3. Route => 1%
4. Complex things => 4%
*/
