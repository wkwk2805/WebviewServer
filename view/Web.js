import React, { useEffect, useState, useRef } from "react";
import Constants from "expo-constants";
import {
  KeyboardAvoidingView,
  AsyncStorage,
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { removeAllSelectedAsset } from "../modules/selectedAssetList";
import { showLoading, hideLoading } from "../modules/loading";
import Loading from "../components/GalleryComp/Loading";
import { setAlbumInfo } from "../modules/album";
import { ProgressBar, Colors } from "react-native-paper";
import { host } from "../host";

const Web = ({ navigation }) => {
  const webviewRef = useRef();
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
      webviewRef.current.reload();
    });
  };

  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const dispatch = useDispatch();
  const onMessageData = async ({ nativeEvent }) => {
    const data = JSON.parse(nativeEvent.data);
    switch (data.branch) {
      case "Add":
        await click(data.token);
        break;
      case "Refresh":
        setRefresh(data.refresh);
        break;

      default:
        break;
    }
  };
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
      webviewRef.current.reload();
    }
  }, [progress]);
  return (
    <>
      <Loading />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            enabled={refresh}
          />
        }
        bounces={refresh}
      >
        <KeyboardAvoidingView
          style={{
            width: "100%",
            height: "100%",
          }}
          behavior="height"
        >
          <WebView
            source={{ uri: `${host()}:3000` }}
            onMessage={onMessageData}
            style={{ marginTop: Constants.statusBarHeight }}
            renderLoading={() => {
              dispatch(showLoading());
            }}
            onLoad={() => dispatch(hideLoading())}
            ref={webviewRef}
          />
          {visible && (
            <ProgressBar
              progress={progress}
              color={Colors.blue700}
              style={{ height: 10 }}
            />
          )}
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Web;
