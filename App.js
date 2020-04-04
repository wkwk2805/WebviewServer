import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { WebView } from "react-native-webview";
import AddCamera from "./components/AddCamera";
import AddGallery from "./components/AddGallery";

const App = () => {
  return (
    <>
      {/* <KeyboardAvoidingView
      style={{ width: "100%", height: "100%" }}
      behavior="height"
    >
      <WebView
        source={{ uri: "http://192.168.0.8:3000" }}
        style={{ marginTop: 24 }}
      />
    </KeyboardAvoidingView> */}
      {/* <AddCamera /> */}
      <AddGallery />
    </>
  );
};
export default App;
