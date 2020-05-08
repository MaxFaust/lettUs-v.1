const infoReducer = (state = [], action) => {
  console.log('infoReducer has:', action.payload)
  switch (action.type) {
    case "SET_FARMS":
      return action.payload;
    case "SET_INFO":
      return action.payload;
      default:
        return state;
  }
};


export default infoReducer;