import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <KeyboardAvoidingView
      style={{ width: "100%", height: "100%" }}
      behavior="height"
    >
      <WebView source={{ uri: "http://192.168.25.51:3000/" }} />
    </KeyboardAvoidingView>
  );
};
export default App;
