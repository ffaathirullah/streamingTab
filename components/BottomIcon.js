import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { PijarTV, DRW_TV } from "../assets/icons/IconTV";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "./../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BottomIcon = ({ type, element, title, widthHome, heightHome }) => {
  const [namaChannel, setNamaChannel] = useState("");
  const [linkRtmp, setLinkRtmp] = useState("");
  const [idRtmp, setIdRtmp] = useState("");
  const navigation = useNavigation();
  const Icon = () => {
    if (title === "DRW TV") {
      useEffect(() => {
        setNamaChannel(element.name || element.chanel.name);
        setLinkRtmp(element.link || element.chanel.link);
        setIdRtmp(element.id || element.chanel.id);
        return () => {};
      }, []);
      return <DRW_TV width={widthHome} height={heightHome} />;
    }
    if (title === "Pijar TV") {
      useEffect(() => {
        setNamaChannel(element.name || element.chanel.name);
        setLinkRtmp(element.link || element.chanel.link);
        setIdRtmp(element.id || element.chanel.id);
        return () => {};
      }, []);
      return <PijarTV width={widthHome} height={heightHome} />;
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
          idRtmp: idRtmp,
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
