import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import Pagination from "../common/pagination.component";
import TableLimit from "../common/table-limit.component";
import Table from "../common/table.component";

function Users() {
    const [users, setUsers] = useState([]);
    const [sortColumn, setSortColumn] = useState();
    const [limit, setLimit] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function getUsers() {
            try {
                const res = await axios.get("https://dummyjson.com/users");
                setUsers(res.data.users);
            } catch (err) {
                console.log(err);
            }
        }
        getUsers();
    }, []);

    function paginateUsers() {
        const offset = (currentPage - 1) * limit;
        const paginatedUsers = _.drop(users, offset).slice(0, limit);
        return paginatedUsers;
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
                columns={[
                    { name: "Id", path: "id" },
                    { name: "First Name", path: "firstName" },
                    { name: "Last Name", path: "lastName" },
                    { name: "Email", path: "email" },
                    { name: "Gender", path: "gender" },
                    { name: "Age", path: "age" },
                    {
                        name: "Hair Color",
                        getContent: (user, id) => {
                            return <td key={`col-${id}`}>{user.hair.color}</td>;
                        },
                    },
                    {
                        name: "Company City",
                        getContent: (user, id) => {
                            return (
                                <td key={`col-${id}`}>
                                    {user.company.address.city}
                                </td>
                            );
                        },
                    },
                ]}
                items={paginateUsers()}
                sortColumn={sortColumn}
            />
            <Pagination
                items={users}
                limit={limit}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Users;

/*
1. Table, List => 80%
2. Form => 15%
3. Route => 1%
4. Complex things => 4%
*/
{
    /* <i class="bi bi-arrow-down"></i>
<i class="bi bi-arrow-up"></i> */
}
