const infoReducer = (state = [], action) => {
  console.log('Hit', state)
   //called from componentDidMount on HomePage, gets everything in user_info database
  switch (action.type) {
    case "SET_FARMS":
      return action.payload;
      default:
        return state;
  }
  
  //   if (action.type === `SET_FARMS`) {
  //           return  action.payload;
  //   } else {
  //   return state;
  // }
}


export default infoReducer;