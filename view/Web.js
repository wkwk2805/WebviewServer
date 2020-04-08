import React, { useState } from "react";
import Constants from "expo-constants";
import { KeyboardAvoidingView } from "react-native";
import { WebView } from "react-native-webview";

const Web = ({ navigation }) => {
  const click = (x) => {
    if (x) navigation.navigate("Add");
  };
  return (
    <KeyboardAvoidingView
      style={{ width: "100%", height: "100%" }}
      behavior="height"
    >
      <WebView
        source={{ uri: "http://192.168.0.8:3000" }}
        style={{ marginTop: Constants.statusBarHeight }}
        onMessage={(event) => click(event.nativeEvent.data)}
      />
    </KeyboardAvoidingView>
  );
};

export default Web;
