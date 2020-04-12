import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { KeyboardAvoidingView, AsyncStorage, View, Alert } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { removeAllSelectedAsset } from "../modules/selectedAssetList";
import { showLoading, hideLoading } from "../modules/loading";
import Loading from "../components/GalleryComp/Loading";
import { setAlbumInfo } from "../modules/album";
import { ProgressBar, Colors } from "react-native-paper";

const Web = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const click = async (token) => {
    if (progress < 1 && progress > 0) {
      Alert.alert("파일을 올리는 중입니다.");
      return;
    }
    dispatch(showLoading());
    dispatch(removeAllSelectedAsset());
    dispatch(setAlbumInfo({}));
    await AsyncStorage.setItem("token", token);
    if (token) navigation.navigate("Gallery");
  };
  const progress = useSelector((s) => s.progress);
  useEffect(() => {
    if (progress < 1 && progress > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [progress]);
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
          source={{ uri: "http://192.168.25.7:3000" }}
          onMessage={(event) => click(event.nativeEvent.data)}
          style={{ marginTop: Constants.statusBarHeight }}
          renderLoading={() => {
            dispatch(showLoading());
          }}
          onLoad={() => dispatch(hideLoading())}
        />

        {visible && (
          <ProgressBar
            progress={progress}
            color={Colors.blue700}
            style={{ height: 10 }}
          />
        )}
      </KeyboardAvoidingView>
    </>
  );
};

export default Web;
