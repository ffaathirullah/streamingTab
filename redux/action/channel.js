import { API_HOST } from "./../../utils/API_HOST/index";
import { getData } from "./../../utils/storage/index";
import axios from "axios";

export const getChannel = (setChannel) => (dispatch) => {
  getData("token").then((res) => {
    if (res) {
      axios
        .get(`${API_HOST.url}/chanel`, {
          headers: { Authorization: `${res.value}` },
        })
        .then(function (response) {
          const categories = response.data.data;
          setChannel(categories);
        })
        .catch(function (error) {});
    } else {
    }
  });
};
