
// takes two arguments: initialstate and action object
export function userReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload; //payload is the user object from the backend i.e all the user data

    default:
      return state;
  }
}
