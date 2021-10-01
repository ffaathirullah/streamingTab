import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Gap from "./../components/Gap";
import axios from "axios";
import { showMessage } from "react-native-flash-message";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
  useEffect(() => {
    axios
      .get("http://rtmv-api.herokuapp.com/api/post")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        showToast("Gagal untuk login, Email atau Password salah");
      });
    //  https://rtmv-api.herokuapp.com/api/profile
    return () => {};
  }, []);
  const navigation = useNavigation();
  const showToast = (message) => {
    showMessage({
      message: message,
      type: "danger",
    });
  };
  const Logout = () => {
    axios
      .post("https://rtmv-api.herokuapp.com/api/logout")
      .then(function (response) {
        if (response.status === 200) {
          setLoggedIn(false);
          sessionStorage.setItem("loggedIn", false);
        }
        showToast("Berhasil untuk Logout");
        navigation.reset({ index: 0, routes: [{ name: "Login" }] });
      })
      .catch(function (error) {
        showToast("Gagal untuk logout");
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>Profile</Text>
        <View style={styles.settingContainer}>
          <TouchableOpacity onPress={() => Logout()}>
            <MaterialIcon size={24} name="logout" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 260,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/dummy_profile/profile_photo.jpg")}
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
          }}
        />

        <Gap height={7} />
        <Text style={{ color: "#767676", fontSize: 14 }}>User</Text>
        <Gap height={7} />
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Fachrul</Text>
        <Gap height={7} />
        <Text style={{ fontSize: 14 }}>ffaaathirullah@mail.com </Text>
        <Gap height={9} />
        <Text style={{ fontSize: 14 }}>082118647226 </Text>
        <Gap height={9} />
      </View>
      <Gap height={30} />
    </ScrollView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 110,
    width,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewContainer: { paddingHorizontal: 20 },
  settingContainer: {
    position: "absolute",
    top: 10,
    right: 5,
    height: 40,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  saldoContainer: {
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 0.2,
    borderColor: "#2D929A",
    borderRadius: 9,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
  },
  topUpContainer: {
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderColor: "#2D929A",
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderLeftWidth: 0.2,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
  },
});
