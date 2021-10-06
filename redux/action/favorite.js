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
              axios
                .get("http://rtmv-api.herokuapp.com/api/pavorit", {
                  headers: { Authorization: `${res.value}` },
                })
                .then(function (response) {
                  dispatch({ type: "SET_FAVORITE", value: response.data });
                })
                .catch(function (error) {
                  console.log("errrorr", error);
                  dispatch(setLoading(false));
                });
              //
            })
            .catch(function (error) {
              console.log("errrorr", error);
            });
        })
        .catch(function (error) {});
    } else {
    }
  });
};
