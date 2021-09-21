import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
import { Profiles, ProgressBar } from "../components";
import BottomIcon from "./../components/BottomIcon";
import RenderHead from "./../components/RenderHead";
import HeadFav from "./../components/HeadFav";

const Favorite = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <RenderHead />
      <HeadFav title="Live Streaming Favorite" />
      <ScrollView style={{ backgroundColor: "#fff", marginTop: 10 }}>
        <View style={styles.iconLayanan}>
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV 2" type="layanan" />
          <BottomIcon title="Pijar TV" type="layanan" />
          <BottomIcon title="SCTV" type="layanan" />
          <BottomIcon title="ANTV" type="layanan" />
          <BottomIcon title="DRW TV" type="layanan" />
          <BottomIcon title="DRW TV" type="layanan" />
          <BottomIcon title="DRW TV" type="layanan" />
          <BottomIcon title="DRW TV" type="layanan" />
          <BottomIcon title="DRW TV" type="layanan" />
        </View>
      </ScrollView>
      <View style={{ marginTop: windowHeight * 0.162 }}></View>
    </SafeAreaView>
  );
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  iconLayanan: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginLeft: windowWidth * 0.0112,
  },
});

export default Favorite;
