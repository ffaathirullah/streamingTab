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

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [channel, setChannel] = useState([]);

  //drw
  const [drw_id, drw_setID] = useState(1);
  const [drw_nama, drw_setNama] = useState("");
  const [drw_Link, drw_setLink] = useState("");
  const [drw_Photo, drw_setPhoto] = useState("");

  //pijar
  const [pijar_id, pijar_setID] = useState(1);
  const [pijar_nama, pijar_setNama] = useState("");
  const [pijar_Link, pijar_setLink] = useState("");
  const [pijar_Photo, pijar_setPhoto] = useState("");

  useEffect(() => {
    getData("token").then((res) => {
      if (res) {
        axios
          .get("http://rtmv-api.herokuapp.com/api/chanel", {
            headers: { Authorization: `${res.value}` },
          })
          .then(function (response) {
            const categories = response.data.data;
            setChannel(categories);
            drw_setID(response.data.data[1].id);
            drw_setNama(response.data.data[1].name);
            drw_setLink(response.data.data[1].link);
            drw_setPhoto(response.data.data[1].photo);
          })
          .catch(function (error) {});
      } else {
      }
    });
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

        <View style={{ margin: 20 }}>
          {channel.map((element) => {
            return <BottomIcon title={element.name} element={element} />;
          })}
        </View>
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
