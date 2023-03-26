import Types from "./todo.types";

const initialState = {
    todoList: [],
};

export default function reducer(state = initialState, action) {
    console.log(action.payload);
    switch (
        action.type //GET_TODOS_FULFILLED
    ) {
        case Types.GET_TODOS_FULFILLED: {
            return { ...state, todoList: action.payload.data.todos };
        }
    }
    return state;
}
