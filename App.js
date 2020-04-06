import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { WebView } from "react-native-webview";
import Add from "./Add";

const App = () => {
  return <Add />;
  /* const [showAddView, setShowAddView] = useState(false);
  const click = (x) => {
    setShowAddView(x);
  };
  return showAddView ? (
    <Add />
  ) : (
    <KeyboardAvoidingView
      style={{ width: "100%", height: "100%" }}
      behavior="height"
    >
      <WebView
        source={{ uri: "http://192.168.25.52:3000" }}
        style={{ marginTop: 24 }}
        onMessage={(event) => click(event.nativeEvent.data)}
      />
    </KeyboardAvoidingView>
  ); */
};
export default App;
