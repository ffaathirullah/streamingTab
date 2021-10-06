const initStateFavorite = {
  channelFavorite: [],
};

export const favoriteReducer = (state = initStateFavorite, action) => {
  if (action.type === "SET_FAVORITE") {
    return {
      ...state,
      channelFavorite: action.value,
    };
  }
  return state;
};
