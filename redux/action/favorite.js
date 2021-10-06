import { API_HOST } from "./../../utils/API_HOST/index";
import { getData } from "./../../utils/storage/index";
import axios from "axios";
import { setLoading } from "./global";
import { getlistFavorite } from "./../../screens/Favorite";

export const postFavorite = (data, favoriteState) => (dispatch) => {
  getData("token").then((res) => {
    if (res) {
      console.log("token", res);
      axios
        .post(`${API_HOST.url}/pavorit/store`, data, {
          headers: { Authorization: `${res.value}` },
        })
        .then(function (response) {
          axios
            .get("http://rtmv-api.herokuapp.com/api/pavorit", {
              headers: { Authorization: `${res.value}` },
            })
            .then(function (response) {
              dispatch(setLoading(false));
              //
              dispatch(getFavorite());
              //
            })
            .catch(function (err) {
              console.log("errrorr", err);
            });
        })
        .catch(function (error) {});
    } else {
    }
  });
};
export const getFavorite = () => (dispatch) => {
  getData("token").then((res) => {
    if (res) {
      axios
        .get("http://rtmv-api.herokuapp.com/api/pavorit", {
          headers: { Authorization: `${res.value}` },
        })
        .then(function (response) {
          dispatch(setLoading(false));
          dispatch({ type: "SET_FAVORITE", value: response.data });
        })
        .catch(function (error) {
          dispatch(setLoading(false));
        });
    } else {
    }
  });
};
