import React from "react";
import { View, Text, Alert } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Menu = () => {
  const post = useSelector((s) => s.post);
  const navigation = useNavigation();
  const _submit = async () => {
    if (!isValidation()) {
      return;
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
