const API_URL =
  "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

export const fetchDataAction = async (dispatch) => {
  const data = await fetch(API_URL);
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (episode, state, dispatch) => {
  const episodeInFavorites = state.favorites.includes(episode);

  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };

  if (episodeInFavorites) {
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: state.favorites.filter((fav) => fav.id !== episode.id),
    };
  }

  return dispatch(dispatchObj);
};
