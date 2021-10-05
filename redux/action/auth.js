import axios from "axios";
import { setLoading } from "./global";
import { API_HOST } from "./../../utils/API_HOST/index";
import { useNavigation } from "@react-navigation/native";
import { storeData } from "./../../utils/storage/index";
import { showMessage } from "./../../utils/showMessage/index";

export const loginAction = (dataLogin, navigation) => (dispatch) => {
  axios
    .post(`${API_HOST.url}/login`, dataLogin)
    .then(function (response) {
      const token = `${response.data.data.token_type} ${response.data.data.access_token}`;
      storeData("userProfile", response.data.data.user);
      storeData("token", {
        value: token,
      });
      dispatch(setLoading(false));
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    })
    .catch(function (error) {
      showMessage(
        "Gagal untuk signup email telah digunakan / Data tidak boleh kosong"
      );
      dispatch(setLoading(false));
    });
};

export const signUpAction = (dataSignUp, navigation) => (dispatch) => {
  axios
    .post(`${API_HOST.url}/register`, dataSignUp)
    .then(function (response) {
      const token = `${response.data.data.token_type} ${response.data.data.access_token}`;
      storeData("userProfile", response.data.data.user);
      storeData("token", {
        value: token,
      });
      dispatch(setLoading(false));
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    })
    .catch(function (error) {
      showMessage("Email Telah digunakan / Form tidak boleh kosong");
      dispatch(setLoading(false));
    });
};
