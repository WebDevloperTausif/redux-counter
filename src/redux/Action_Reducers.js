import * as Action_types from "./Action_types";

const initialstate = {
  counter: 0,
};
export const reducers = (state = initialstate, action) => {
  switch (action.type) {
    case Action_types.INCREMENET:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case Action_types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case Action_types.RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};
