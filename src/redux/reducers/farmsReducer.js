const farmsReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_FARMS":
        return action.payload;
        default:
          return state;
    }
  };

  export default farmsReducer;