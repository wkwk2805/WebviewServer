import React from "react";
import { View, Text, Alert, AsyncStorage } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { showLoading } from "../../modules/loading";

const Menu = () => {
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
      baseURL: "http://192.168.0.14",
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
        name: e.filename,
      };
    });
    //작업을 더 열심히 해주어야겠다
    const formData = new FormData();
    /* formData.append("content", post.content);
    formData.append("groups", post.groups);
    formData.append("scope", post.scope); */
    formData.append("asset", files[0]);
    try {
      const { data } = await axios.put("/post", formData);
      console.log(data);
      if (data.success) {
        //navigation.navigate("Web");
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
