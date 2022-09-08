const initialState = {
  favorites: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          list: [...state.favorites.list, action.payload]
        }
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          list: state.favorites.list.filter((el) => el._id !== action.payload)
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
