export default (state, action) => {
  switch (action.type) {
    case "UPDATE_API_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
