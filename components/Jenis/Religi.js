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
import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
} from "../../constants";
import { Profiles, ProgressBar } from "../../components";
import BottomIcon from "./../BottomIcon";
import RenderHead from "./../RenderHead";
import HeadFav from "./../HeadFav";

const Religi = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ backgroundColor: "#fff", marginTop: 10 }}>
        <View style={styles.iconLayanan}>
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="Pijar TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
          <BottomIcon title="DRW TV" type="layanan" border />
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

export default Religi;
