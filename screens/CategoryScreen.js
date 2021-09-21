import React from "react";
import { View, Text } from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Religi from "./../components/Jenis/Religi";
import RenderHead from "./../components/RenderHead";

const Tab = createMaterialTopTabNavigator();

export default function CategoryScreen() {
  return (
    <>
      <RenderHead />
      <Tab.Navigator
        style={{ backgroundColor: "#000" }}
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: "#FF002E" },
          tabBarStyle: { backgroundColor: "#000" },
        }}
      >
        <Tab.Screen
          name="Religi"
          options={{ title: "Religi" }}
          component={Religi}
        />
      </Tab.Navigator>
    </>
  );
}
