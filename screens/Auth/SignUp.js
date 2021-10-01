import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/auth/Inputs";
import Submit from "../../components/auth/Submit";
import { Login_DRW } from "../../assets/icons/IconTV";
import axios from "axios";
import { showMessage } from "./../../utils/showMessage/index";
import useForm from "./../../utils/useForm/index";

const SignUp = (props) => {
  const [phone, setPhone] = useState();
  const [form, setForm] = useForm({
    nama: "",
    email: "",
    password: "",
    phone: "",
  });
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const onRegister = () => {
    const article = {
      name: form.nama,
      email: form.email,
      password: form.password,
      phone: form.phone,
    };
    axios
      .post("http://rtmv-api.herokuapp.com/api/register", article)
      .then(function (response) {
        showMessage("Berhasil untuk register");
        navigation.navigate("Login");
      })
      .catch(function (error) {
        showMessage("Gagal untuk signup email telah digunakan");
      });
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Login_DRW width={windowWidth * 0.912} height={windowHeight * 0.242} />
        <Text style={styles.textTitle}>Let's Get Started</Text>
        <Text style={styles.textBody}>
          Create an account to get all features
        </Text>
        <Input
          name="Full Name"
          icon="user"
          value={form.nama}
          onChangeText={(value) => setForm("nama", value)}
        />
        <Input
          name="Email"
          icon="envelope"
          value={form.email}
          onChangeText={(value) => setForm("email", value)}
        />
        <Input
          name="Phone"
          icon="phone"
          value={form.phone}
          onChangeText={(value) => setForm("phone", value)}
        />
        <Input
          name="Password"
          icon="lock"
          pass={true}
          value={form.password}
          onChangeText={(value) => setForm("password", value)}
        />
        <Submit color="#0251ce" title="CREATE" onPress={() => onRegister()} />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textBody}>Aiready have an account </Text>
          <Text
            style={[styles.textBody, { color: "#4096FE", marginBottom: 10 }]}
            onPress={() => props.navigation.navigate("Login")}
          >
            Login here
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

export default SignUp;
