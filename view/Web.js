import React from "react";
import Constants from "expo-constants";
import { KeyboardAvoidingView, AsyncStorage } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch } from "react-redux";
import { removeAllSelectedAsset } from "../modules/selectedAssetList";

const Web = ({ navigation }) => {
  const dispatch = useDispatch();
  const click = async (token) => {
    dispatch(removeAllSelectedAsset());
    await AsyncStorage.setItem("token", token);
    if (token) navigation.navigate("Add");
  };
  return (
    <KeyboardAvoidingView
      style={{ width: "100%", height: "100%" }}
      behavior="height"
    >
      <WebView
        source={{ uri: "http://192.168.0.14:3000" }}
        style={{ marginTop: Constants.statusBarHeight }}
        onMessage={(event) => click(event.nativeEvent.data)}
      />
    </KeyboardAvoidingView>
  );
};

export default Web;
