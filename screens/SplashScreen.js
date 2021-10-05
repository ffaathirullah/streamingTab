import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Gap from "./../components/Gap";
import { getData } from "./../utils/storage/index";
import { Login_DRW } from "../assets/icons/IconTV";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      getData("token").then((res) => {
        if (res) {
          navigation.reset({ index: 0, routes: [{ name: "Home" }] });
        } else {
          navigation.replace("Login");
        }
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Login_DRW />
      <Gap height={38} />
      <Text style={styles.text}>DRW PLay</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 32, color: "#020202", fontFamily: "Poppins-Medium" },
});
