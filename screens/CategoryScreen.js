import React from "react";
import { View, Text } from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Religi from "./../components/Jenis/Religi";
import RenderHead from "./../components/RenderHead";
import News from "./../components/Jenis/News";
import Sport from "./../components/Jenis/Sport";
import HeadFav from "./../components/HeadFav";

const Tab = createMaterialTopTabNavigator();

export default function CategoryScreen() {
  return (
    <>
      <RenderHead />
      <HeadFav title="Live Streaming List" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: "#FAA21A" },
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen
          name="Religi"
          options={{ title: "Religi" }}
          component={Religi}
        />
        <Tab.Screen name="News" options={{ title: "News" }} component={News} />
        <Tab.Screen
          name="Sport"
          options={{ title: "Sport" }}
          component={Sport}
        />
      </Tab.Navigator>
    </>
  );
}
