import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Pijar } from "../assets/images/IconTV";
import {
  DRW_TV,
  Pijar_TV,
  SCTV,
  ANTV,
  DRW_PLay1,
  DRW_Play2,
} from "../assets/icons/IconTV";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "./../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BottomIcon = ({ title, title2, type }) => {
  const navigation = useNavigation();
  const Icon = () => {
    if (title === "DRW TV") {
      return (
        <DRW_PLay1 width={windowWidth * 0.2422} height={windowHeight * 0.132} />
      );
    }
    if (title === "DRW TV 2") {
      return (
        <DRW_Play2 width={windowWidth * 0.2422} height={windowHeight * 0.132} />
      );
    }
    if (title === "Pijar TV") {
      return (
        <Pijar_TV width={windowWidth * 0.2422} height={windowHeight * 0.132} />
      );
    }
    if (title === "SCTV") {
      return (
        <SCTV width={windowWidth * 0.2422} height={windowHeight * 0.132} />
      );
    }
    if (title === "ANTV") {
      return (
        <ANTV width={windowWidth * 0.2422} height={windowHeight * 0.132} />
      );
    }
    if (title === "DRW PLay") {
      return <DRW_PLay1 />;
    }
    if (title === "Pengurusan") {
      return <Pijar />;
    }
    return <Pijar />;
  };
  return (
    <TouchableOpacity
      style={styles.container(type)}
      onPress={() => navigation.navigate("MovieDetail")}
    >
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={{ color: COLORS.white, textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (type) => ({}),
  text: (type) => ({}),
  button: (type) => ({}),
});
export default BottomIcon;
