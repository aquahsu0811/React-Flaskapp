const initState = {
  images: []
};

const imgReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
        return {
            ...state,
            items: action.item
        }
    default:
      return state;
  }
};

export default imgReducer;