import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { PijarTV, DRW_TV } from "../assets/icons/IconTV";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "./../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BottomIcon = ({ title, title2, type }) => {
  const [nama, setNama] = useState("");
  const [urlRttmp, setUrlRttmp] = useState("");
  const navigation = useNavigation();
  const Icon = () => {
    if (title === "DRW TV") {
      setNama("DRW TV");
      setUrlRttmp("https://h1.intechmedia.net/intech/ch87.m3u8");
      return (
        <DRW_TV width={windowWidth * 0.24} height={windowHeight * 0.141} />
      );
    }
    if (title === "Pijar TV") {
      setNama("Pijar TV");
      setUrlRttmp(
        "rtmp://live.restream.io/pull/play_2827105_47e19a258a68eda90504"
      );
      return (
        <PijarTV width={windowWidth * 0.24} height={windowHeight * 0.141} />
      );
    }
    return <Border />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("MovieDetail", {
          name: nama,
          urlLink: urlRttmp,
        })
      }
    >
      <View style={styles.button(type)}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "thistle",
  },
  text: (type) => ({}),
  button: (type) => ({}),
});
export default BottomIcon;
