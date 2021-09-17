import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const Inputs = (props) => {
  const [fokused, setFokused] = useState(false);

  onFocusChange = () => {
    fokused.setFokused(true);
  };

  return (
    <View
      style={[styles.container, { borderColor: fokused ? "#FF002E" : "#eee" }]}
    >
      <Input
        placeholder={props.name}
        onFocus={onFocusChange}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        secureTextEntry={props.pass}
        leftIcon={
          <Icon
            name={props.icon}
            size={22}
            color={fokused ? "#FF002E" : "grey"}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 50,
    borderRadius: 100,
    marginVertical: 10,
    borderWidth: 3.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  inputText: {
    color: "#FF002E",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Inputs;
