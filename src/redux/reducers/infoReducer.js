const infoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FARM_INFO":
      console.log('infoReducer action.payload:', action.payload)
      return action.payload;
    case "SET_THIS_FARM":
      return [action.payload];
      default:
        return state;
  }
};


export default infoReducer;