import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../common/table.component";

function Users() {
    const [users, setUsers] = useState([]);

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

    return (
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
            items={users}
        />
    );
}

export default Users;

/*
1. Table, List => 80%
2. Form => 15%
3. Route => 1%
4. Complex things => 4%
*/
