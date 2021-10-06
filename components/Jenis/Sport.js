import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { getChannel } from "./../../redux/action/channel";

const Sport = ({ navigation }) => {
  const dispatch = useDispatch();
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    dispatch(getChannel(setChannel));
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ backgroundColor: "#fff", marginTop: 10 }}>
        <View style={styles.iconLayanan}>
          {channel.map((element) => {
            if (element.id === 5) {
              return (
                <BottomIcon
                  title={element.name}
                  key={element.id}
                  element={element}
                />
              );
            }
          })}
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

export default Sport;
