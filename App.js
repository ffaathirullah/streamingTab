import React from "react";
import { MovieDetail } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import PlayScreen from "./screens/PlayScreen";
import Play from "./screens/Play";
import ProfileScreen from "./screens/ProfileScreen";
import CategoryScreen from "./screens/CategoryScreen";
import Login from "./screens/Auth/Login";
import SignUp from "./screens/Auth/SignUp";
import Religi from "./components/Jenis/Religi";
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Loading from "./components/Loading/index";
const Stack = createStackNavigator();

const MainApp = () => {
  const { isLoading } = useSelector((state) => state.globalReducer);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="PlayScreen" component={PlayScreen} />
        <Stack.Screen name="Religi" component={Religi} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Play" component={Play} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      </Stack.Navigator>
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
