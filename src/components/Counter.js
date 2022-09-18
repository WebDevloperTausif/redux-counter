import React from "react";
import {
  incrementvalue,
  decrementtvalue,
  resetvalue,
} from "../redux/Action_creater";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const Counter = useSelector((state) => state.ourState.counter);
  console.log("Counter", Counter);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <div className="counter-sec">
        <div className="counter-dis">
          <h1>{Counter}</h1>
        </div>
        <div className="button">
          <button onClick={() => dispatch(decrementtvalue())}>-</button>
          <button onClick={() => dispatch(incrementvalue())}>+</button>
          <button onClick={() => dispatch(resetvalue())}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
