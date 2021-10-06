import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { ProgressBar } from "../components";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch } from "react-redux";
import { postFavorite } from "./../redux/action/favorite";
import { getData } from "./../utils/storage/index";
import { useSelector } from "react-redux";

const MovieDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { name } = route.params;
  const { urlLink } = route.params;
  const { idRtmp } = route.params;
  const [selectedMovie, setSelectedMovie] = useState(null);
  const favoriteState = useSelector((state) => state.favoriteReducer);
  const onFavorite = () => {
    const data = {
      chanel_id: idRtmp,
    };
    dispatch(postFavorite(data, favoriteState));
  };
  function renderHeaderBar() {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: Platform.OS === "ios" ? 40 : 20,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {/* Back */}
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              borderRadius: 20,
              backgroundColor: COLORS.transparentBlack,
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.left_arrow}
              style={{ width: 20, height: 20, tintColor: COLORS.white }}
            />
          </TouchableOpacity>

          {/* Share */}
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              borderRadius: 20,
              backgroundColor: COLORS.transparentBlack,
            }}
            onPress={() => onFavorite()}
          >
            <Image
              source={icons.favorite}
              style={{ width: 20, height: 20, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  function renderHeaderSection() {
    return (
      <ImageBackground
        source={require("../assets/images/MovieDetail.png")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
        }}
      >
        <View style={{ flex: 1 }}>
          {renderHeaderBar()}

          <View style={{ flex: 1, justifyContent: "center" }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["transparent", "#000"]}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {/* Name */}
              <Text
                style={{
                  marginTop: SIZES.base,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}
              >
                {name}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    );
  }

  function renderMovieDetails() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          justifyContent: "space-around",
        }}
      >
        {/* Watch */}
        <TouchableOpacity
          style={{
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: Platform.OS === "ios" ? SIZES.padding * 2 : 0,
            borderRadius: 15,
            backgroundColor: COLORS.primary,
          }}
          onPress={() =>
            navigation.navigate("PlayScreen", {
              urlLink2: urlLink,
            })
          }
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
            {selectedMovie?.details?.progress == "0%"
              ? "WATCH NOW"
              : "CONTINUE WATCHING"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <ScrollView style={{ backgroundColor: COLORS.black }}>
        {/* Header */}
        {renderHeaderSection()}

        {/* Movie Details */}
        {renderMovieDetails()}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: 3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.gray1,
  },
});

export default MovieDetail;
