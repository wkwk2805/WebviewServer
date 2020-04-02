import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <KeyboardAvoidingView
      style={{ width: "100%", height: "100%" }}
      behavior="height"
    >
      <WebView
        source={{ uri: "http://192.168.0.8:3000" }}
        style={{ marginTop: 24 }}
      />
    </KeyboardAvoidingView>
  );
};
export default App;
