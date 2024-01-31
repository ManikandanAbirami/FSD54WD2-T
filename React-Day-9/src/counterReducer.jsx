export function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "incrementBy2":
      return { count: state.count + 2 };
    case "decrement":
      return { count: state.count - 1 };
    case "decrementBy2":
      return { count: state.count - 2 };
    default:
      throw new Error();
  }
}
