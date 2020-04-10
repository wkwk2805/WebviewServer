import React, { useEffect } from "react";
import Constants from "expo-constants";
import { KeyboardAvoidingView, AsyncStorage, View } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { removeAllSelectedAsset } from "../modules/selectedAssetList";
import { showLoading, hideLoading } from "../modules/loading";
import Loading from "../components/GalleryComp/Loading";
import { setAlbumInfo } from "../modules/album";
import { ProgressBar, Colors } from "react-native-paper";
import { hideProgress } from "../modules/progress";

const Web = ({ navigation }) => {
  const dispatch = useDispatch();
  const click = async (token) => {
    dispatch(showLoading());
    dispatch(removeAllSelectedAsset());
    dispatch(setAlbumInfo({}));
    await AsyncStorage.setItem("token", token);
    if (token) navigation.navigate("Gallery");
  };
  const progress = useSelector((s) => s.progress);
  useEffect(() => {
    console.log(progress);
    dispatch(hideProgress());
  }, []);
  return (
    <>
      <Loading />
      <KeyboardAvoidingView
        style={{
          width: "100%",
          height: "100%",
        }}
        behavior="height"
      >
        <WebView
          source={{ uri: "http://172.30.1.52:3000" }}
          onMessage={(event) => click(event.nativeEvent.data)}
          style={{ marginTop: Constants.statusBarHeight }}
          renderLoading={() => {
            dispatch(showLoading());
          }}
          onLoad={() => dispatch(hideLoading())}
        />
        <ProgressBar
          progress={progress.percent}
          color={Colors.blue700}
          visible={progress.visible}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default Web;
