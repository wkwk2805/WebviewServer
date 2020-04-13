import React, { useEffect } from "react";
import { View, Text, Alert, AsyncStorage } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { showLoading, hideLoading } from "../../modules/loading";
import { host } from "../../host";
import { setProgress } from "../../modules/progress";

const Menu = () => {
  useEffect(() => {
    dispatch(hideLoading());
  }, []);
  const dispatch = useDispatch();
  const post = useSelector((s) => s.post);
  const selectedAssetList = useSelector((s) => s.selectedAssetList);
  const navigation = useNavigation();
  const _submit = async () => {
    if (!isValidation()) {
      return;
    }
    dispatch(showLoading());
    const token = await AsyncStorage.getItem("token");
    const axios = Axios.create({
      baseURL: host() + ":3001",
      headers: {
        token: token,
      },
    });
    const files = selectedAssetList.map((e) => {
      const preType = e.mediaType === "photo" ? "image" : "video";
      const arr = e.filename.split(".");
      const subType = arr[arr.length - 1];
      return {
        uri: e.uri,
        type: `${preType}/${subType === "jpg" ? "jpeg" : subType}`,
        name: Date.now() + "_" + e.filename,
      };
    });
    // formData로 데이터 넣어주기
    const formData = new FormData();
    formData.append("content", post.content);
    formData.append("scope", post.scope);
    for (let group of post.groups) {
      formData.append("groups", group);
    }
    for (let file of files) {
      formData.append("assets", file);
    }
    try {
      const { data } = await axios.put("/post", formData, {
        onUploadProgress: (progress) => {
          const { loaded, total } = progress;
          dispatch(setProgress(loaded / total));
          navigation.navigate("Web");
          dispatch(hideLoading());
        },
      });
      if (data.success) {
        Alert.alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const isValidation = () => {
    let space = post.content.trim();
    if (space === "") {
      Alert.alert("게시글을 입력해주세요...");
      return false;
    } else if (post.scope === "") {
      Alert.alert("공개범위설정을 해주세요...");
      return false;
    } else if (post.scope === "GROUP" || post.scope === "PLUS") {
      if (post.groups.length === 0) {
        Alert.alert("공개그룹을 선택해주세요...");
        return false;
      }
    }
    return true;
  };
  return (
    <View
      style={{
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconButton
        icon="arrow-left"
        size={25}
        onPress={() => navigation.goBack()}
      />
      <Text>게시글 입력</Text>
      <View style={{ position: "absolute", right: 0 }}>
        <IconButton icon="check" size={25} onPress={_submit} color="green" />
      </View>
    </View>
  );
};

export default Menu;
