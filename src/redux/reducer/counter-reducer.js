import { type } from "@testing-library/user-event/dist/type";

const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "counter/increment":
            return {...state, count: state.count + 1};
        case "counter/decrement":
            return {...state, count: state.count - 1};
        case "counter/addValue":
            return {...state, count: state.count + action.payload};
        case "counter/decrementValue":
            return {...state, count: state.count - action.payload};
        default: 
            return state;
    }
}

