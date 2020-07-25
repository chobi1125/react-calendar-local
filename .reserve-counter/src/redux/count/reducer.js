// import { INCREMENT, DECREMENT } from "./constants";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = payload => ({
  type: INCREMENT,
  payload
});

export const decrement = payload => ({
  type: DECREMENT,
  payload
});

const initState = 0;

export const count = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};