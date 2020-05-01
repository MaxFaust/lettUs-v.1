const infoReducer = (state = [], action) => {
    console.log('Hit', state)
    if (action.type === `SET_FARMS`) {
            return  action.payload;
    } else {
    return state;
  }
}


export default infoReducer;