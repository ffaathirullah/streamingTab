import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
const RenderHead = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
        backgroundColor: "#fff",
      }}
    >
      {/* Profile */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
        }}
        onPress={() => console.log("Profile")}
      >
        <Image
          source={require("../assets/icons/IconTV/icon_head.png")}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RenderHead;

const styles = StyleSheet.create({});
