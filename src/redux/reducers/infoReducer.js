const infoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FARMS":
      return action.payload;
    case "SET_INFO":
      console.log(`returned user data from database: ${action.payload}`)
      return [...state, action.payload];
      default:
        return state;
  }
};


export default infoReducer;