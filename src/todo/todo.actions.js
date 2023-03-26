import axios from "axios";
import Types from "./todo.types";

export function getTodos() {
    return {
        type: Types.GET_TODOS,
        payload: axios({
            method: "get",
            url: "https://dummyjson.com/todos",
        }),
    };
}
