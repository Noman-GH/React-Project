import Types from "./user.types";

const initialState = {
    userList: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_USERS_FULFILLED: {
            return { ...state, userList: action.payload.data };
        }
    }
    return state;
}
