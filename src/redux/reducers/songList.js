const INITIAL_STATE = [];

const songList = (state = INITIAL_STATE, action) => {
  //리듀서
  switch (action.type) {
    case "ADD_SONG":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default songList;
