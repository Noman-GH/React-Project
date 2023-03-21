import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import Pagination from "../common/pagination.component";
import TableLimit from "../common/table-limit.component";
import Table from "../common/table.component";

function TodoTable() {
    const [todos, setTodos] = useState([]);
    const [sortColumn, setSortColumn] = useState("Id");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const columns = [
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
    ];

    function onHandleSort(column, order) {
        setSortColumn(column);
        setSortOrder(order);
    }

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

    function sortTodos() {
        const column = columns.find((column) => column.name === sortColumn);
        const sortedTodos = _.orderBy(todos, column.path, sortOrder);
        return sortedTodos;
    }

    function paginateTodos() {
        const sortedTodos = sortTodos();
        const offset = (currentPage - 1) * limit;
        const paginatedTodos = _.drop(sortedTodos, offset).slice(0, limit);
        return paginatedTodos;
    }

    return (
        <div className="container">
            <TableLimit
                onChange={(limit) => setLimit(limit)}
                options={[
                    { name: "Five", value: 5 },
                    { name: "Ten", value: 10 },
                    { name: "Fifteen", value: 15 },
                ]}
            />
            <Table
                columns={columns}
                items={paginateTodos()}
                sortColumn={sortColumn}
                sortOrder={sortOrder}
                onHandleSort={onHandleSort}
            />
            <Pagination
                items={todos}
                limit={limit}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default TodoTable;

/*
1. Table, List => 80%
2. Form => 15%
3. Route => 1%
4. Complex things => 4%
*/
