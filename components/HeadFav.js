import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
import { Login_DRW } from "../assets/icons/IconTV";
const HeadFav = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
        backgroundColor: "#1f1f1f",
      }}
    >
      <Login_DRW width={100} height={60} />
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default HeadFav;

const styles = StyleSheet.create({});
