import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { WebView } from "react-native-webview";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { createStore } from "redux";
import GalleryView from "./view/GalleryView";
import Loading from "./components/GalleryComp/Loading";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <GalleryView />
    </Provider>
  );
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
