import axios from "axios";
import Types from "./user.types";

export function getUsers() {
    return {
        type: Types.GET_USERS,
        payload: axios({
            method: "get",
            url: "https://dummyjson.com/users",
        }),
    };
}
