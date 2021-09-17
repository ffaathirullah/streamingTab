import Reactfrom "react";
import {
  Text,
  TextInput,
  View,
  Button,
  StatusBar,
  Dimensions,
} from "react-native";
import { NodePlayerView } from "react-native-nodemediaclient";
import ActionButton from "react-native-action-button";

const PlayScreen2 = ({ navigation, vb }) => {
  useEffect(() => {
    return () => {
      vb.stop();
    };
  }, []);
  const win = Dimensions.get("window");
  return (
    <View style={{ flex: 1 }}>
      <NodePlayerView
        style={{
          flex: 1,
          backgroundColor: "#000",
        }}
        ref={(vp) => {
          vb = vp;
        }}
        inputUrl={"https://h1.intechmedia.net/intech/ch87.m3u8"}
        scaleMode={"ScaleAspectFit"}
        bufferTime={300}
        maxBufferTime={1000}
        autoplay={true}
      />
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        offsetY={32}
        offsetX={16}
        size={32}
        hideShadow={true}
        buttonText="x"
        verticalOrientation="down"
        onPress={() => {
          vb.stop();
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default PlayScreen2;
