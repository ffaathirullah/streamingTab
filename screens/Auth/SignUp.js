import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Input from "../../components/auth/Inputs";
import Submit from "../../components/auth/Submit";
import { Login_DRW } from "../../assets/icons/IconTV";
const SignUp = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Login_DRW width={windowWidth * 0.912} height={windowHeight * 0.242} />
        <Text style={styles.textTitle}>Let's Get Started</Text>
        <Text style={styles.textBody}>
          Create an account to get all features
        </Text>
        <Input name="Full Name" icon="user" />
        <Input name="Email" icon="envelope" />
        <Input name="Phone" icon="phone" />
        <Input name="Password" icon="lock" pass={true} />
        <Input name="Confirm Password" icon="lock" pass={true} />
        <Submit color="#0251ce" title="CREATE" />
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
