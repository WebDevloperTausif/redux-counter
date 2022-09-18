import * as Action_types from "./Action_types";

export const incrementvalue = () => {
  return {
    type: Action_types.INCREMENET,
  };
};
export const decrementtvalue = () => {
  return {
    type: Action_types.DECREMENT,
  };
};
export const resetvalue = () => {
  return {
    type: Action_types.RESET,
  };
};
