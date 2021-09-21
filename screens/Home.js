import React, { useRef } from "react";
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
} from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
import { Profiles, ProgressBar } from "../components";
import RenderHead from "./../components/RenderHead";
import Carousel from "./../components/Carousel";
import { DataCarousel } from "./../utils/Data";
import BottomIcon from "./../components/BottomIcon";

const Home = ({ navigation }) => {
  function renderContinueWatchingSection() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        {/* Header */}
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

          <TouchableOpacity onPress={() => navigation.navigate("Religi")}>
            <Image
              source={icons.right_arrow}
              style={{ width: 20, height: 20, tintColor: COLORS.primary }}
            />
          </TouchableOpacity>
        </View>

        {/* List */}

        <BottomIcon title="DRW TV" />
        <BottomIcon title="Pijar TV" />
        <BottomIcon title="DRW TV" />
        <BottomIcon title="DRW TV" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <RenderHead />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View>
          <Carousel data={DataCarousel} />
        </View>
        {renderContinueWatchingSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
