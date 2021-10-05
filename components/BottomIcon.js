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

const BottomIcon = ({ type, element }) => {
  const [namaChannel, setNamaChannel] = useState("");
  const [linkRtmp, setLinkRtmp] = useState("");
  const navigation = useNavigation();
  const Icon = () => {
    if (element.id === 4) {
      setNamaChannel(element.name);
      setLinkRtmp(element.link);
      // https://h1.intechmedia.net/intech/ch87.m3u8
      return (
        <DRW_TV width={windowWidth * 0.24} height={windowHeight * 0.141} />
      );
    }
    if (element.id === 5) {
      setNamaChannel(element.name);
      setLinkRtmp(element.link);
      // rtmp://live.restream.io/pull/play_2827105_47e19a258a68eda90504
      return (
        <PijarTV width={windowWidth * 0.24} height={windowHeight * 0.141} />
      );
    }
    return null;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("MovieDetail", {
          name: namaChannel,
          urlLink: linkRtmp,
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
