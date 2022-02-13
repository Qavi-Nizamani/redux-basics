import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
const isShowingCounter = useSelector(state => state.isShowing);
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const incrementByFiveHandler = () => {
    dispatch({ type: "INCREASE_BY_5", value: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowingCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} disabled={!isShowingCounter}>Increment</button>
        <button onClick={incrementByFiveHandler} disabled={!isShowingCounter}>Increment by 10</button>
        <button onClick={decrementHandler} disabled={!isShowingCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
