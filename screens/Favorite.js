import React, { useState, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { getFavorite } from "./../redux/action/favorite";
import { getData } from "./../utils/storage/index";
import axios from "axios";
import { API_HOST } from "./../utils/API_HOST/index";
import { setLoading } from "./../redux/action/global";
import { useSelector } from "react-redux";

const Favorite = ({ navigation }) => {
  const dispatch = useDispatch();
  const favoriteState = useSelector((state) => state.favoriteReducer);
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getFavorite());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <RenderHead />
      <HeadFav title="Live Streaming List" />
      <ScrollView style={{ backgroundColor: "#fff", marginTop: 10 }}>
        <View style={styles.iconLayanan}>
          {favoriteState.channelFavorite.map((element) => {
            return (
              <BottomIcon
                key={element.id}
                title={element.chanel.name}
                element={element}
                widthHome={windowWidth * 0.24}
                heightHome={windowHeight * 0.141}
              />
            );
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

export default Favorite;
