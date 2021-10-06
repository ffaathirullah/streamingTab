import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
import { Profiles, ProgressBar } from "../components";
import RenderHead from "./../components/RenderHead";
import Carousel from "./../components/Carousel";
import { DataCarousel } from "./../utils/Data";
import BottomIcon from "./../components/BottomIcon";
import { getFavoriteAction } from "./../redux/action/auth";
import { getData } from "./../utils/storage/index";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getChannel } from "./../redux/action/channel";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    dispatch(getChannel(setChannel));
  }, []);
  function renderContinueWatchingSection() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1, color: COLORS.black, ...FONTS.h2 }}>
            Live Streaming
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("CategoryScreen")}
          >
            <Image
              source={icons.right_arrow}
              style={{ width: 20, height: 20, tintColor: COLORS.primary }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            margin: 10,
            marginTop: 20,
          }}
        >
          {channel.map((element) => {
            if (element.id === 4 || element.id === 5) {
              return (
                <View key={element.id} style={{ marginLeft: 10 }}>
                  <BottomIcon
                    widthHome={200}
                    heightHome={200}
                    title={element.name}
                    key={element.id}
                    element={element}
                  />
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <RenderHead />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={{ backgroundColor: "#F6F6F6" }}>
          <View style={{ margin: 10 }}>
            <Carousel data={DataCarousel} />
          </View>
        </View>
        {renderContinueWatchingSection()}
      </ScrollView>
    </SafeAreaView>
  );
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Home;
