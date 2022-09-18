import React from "react";
import {
  incrementvalue,
  decrementtvalue,
  resetvalue,
} from "../redux/Action_creater";
import "./counter.css";
import { useDispatch, useSelector } from "react-redux";

const CounterSecond = () => {
  const Counter = useSelector((state) => state.ourState.counter);
  const dispatch = useDispatch();
  const incrementButtonHandler = () => {
    dispatch(incrementvalue());
  };
  const decrementButtonHandler = () => {
    dispatch(decrementtvalue());
  };
  const resetButtonHandler = () => {
    dispatch(resetvalue());
  };
  return (
    <div className="counter">
      <div className="counter-sec">
        <div className="counter-dis">
          <h1>{Counter}</h1>
        </div>
        <div className="button">
          <button onClick={decrementButtonHandler}>-</button>
          <button onClick={incrementButtonHandler}>+</button>
          <button onClick={resetButtonHandler}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default CounterSecond;
