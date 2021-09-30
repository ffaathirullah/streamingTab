import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Input,
} from "react-native";
import Inputs from "../../components/auth/Inputs";
import Submit from "../../components/auth/Submit";
import Account from "../../components/auth/Account";
import { useNavigation } from "@react-navigation/native";
import { Login_DRW } from "../../assets/icons/IconTV";
import axios from "axios";
import { showMessage } from "react-native-flash-message";

const Login = (props, onpress) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const onLogin = () => {
    const article = {
      email: email,
      password: password,
    };
    axios
      .post("http://rtmv.herokuapp.com//api/login", article)
      .then(function (response) {
        showToast("Berhasil untuk login");
        navigation.replace("Home");
      })
      .catch(function (error) {
        showToast("Gagal untuk login, Email atau Password salah");
      });
  };

  const showToast = (message, type) => {
    showMessage({
      message: message,
      type: type === "success" ? "success" : "danger",
    });
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Login_DRW width={windowWidth * 0.912} height={windowHeight * 0.242} />
        <Text style={styles.textTitle}>Welcome back</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <View style={{ marginTop: windowHeight * 0.0312 }} />
        <Inputs
          name="Email"
          icon="user"
          onChangeText={(value) => setEmail(value)}
        />
        <Inputs
          name="Password"
          icon="lock"
          pass={true}
          onChangeText={(value) => setPassword(value)}
        />
        <View style={{ width: "90%" }}>
          <Text
            style={
              ([styles.textBody], { alignSelf: "flex-end", color: "#fff" })
            }
          >
            Forgot Password?
          </Text>
        </View>
        <Submit title="LOG IN" color="#fff" onPress={() => onLogin()} />
        <Text style={styles.textBody}>Or connect using</Text>
        <View style={{ flexDirection: "row" }}>
          <Account color="#1D3CB9" icon="facebook" title="Facebook" />
          <Account color="#C51E1E" icon="google" title="Google" />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.textBody}>Don't Have an account </Text>
          <Text
            style={[styles.textBody, { color: "#1D3CB9" }]}
            onPress={() => props.navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#1F1F1F",
    marginTop: 10,
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: "Foundation",
    fontSize: 40,
    marginVertical: 10,
    color: "#1F1F1F",
  },
  textBody: {
    fontFamily: "Foundation",
    fontSize: 16,
    color: "#1F1F1F",
  },
});

export default Login;
