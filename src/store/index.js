import { createStore } from "redux";

const initialCounter = { counter: 0, isShowing: true };

const counterReducer = (state = initialCounter, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 ,isShowing:state.isShowing};
  }
  if (action.type === "INCREASE_BY_5") {
    return { counter: state.counter + action.value ,isShowing:state.isShowing};
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 ,isShowing:state.isShowing};
  }
  if (action.type === "TOGGLE") {
    return { counter: state.counter, isShowing: !state.isShowing };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
