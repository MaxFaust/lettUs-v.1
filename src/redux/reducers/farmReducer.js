const infoReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_THIS_FARM":
        return [action.payload];
        default:
          return state;
    }
  };
  
  
  export default infoReducer;