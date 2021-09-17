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

const Religi = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <RenderHead />
      <ScrollView style={{ backgroundColor: "#000" }}>
        <Text
          style={{
            flex: 1,
            marginTop: windowHeight * 0.0412,
            marginLeft: windowWidth * 0.0412,
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          Live Streaming
        </Text>
        <View style={styles.iconLayanan}>
          <BottomIcon title="DRW TV" type="layanan" />
          <BottomIcon title="DRW TV 2" type="layanan" />
          <BottomIcon title="Pijar TV" type="layanan" />
          <BottomIcon title="SCTV" type="layanan" />
          <BottomIcon title="ANTV" type="layanan" />
          <BottomIcon title="DRW TV" type="layanan" />
          <BottomIcon title="DRW TV" type="layanan" />
          <BottomIcon title="DRW TV" type="layanan" />
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
    marginTop: windowHeight * 0.0412,
    marginBottom: windowHeight * 0.0412,
    marginLeft: windowWidth * 0.0212,
  },
});

export default Religi;
