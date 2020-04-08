import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";
import { IconButton, RadioButton, Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const setScope = ["모두", "친구만", "그룹만", "나만", "친구+그룹만"];

const WriteView = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const selectedAssetList = useSelector((s) => s.selectedAssetList);
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
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
          <IconButton
            icon="check"
            size={25}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <View style={{ width: 100, height: 100 }}>
          <Image
            source={{
              uri: `https://d33v4339jhl8k0.cloudfront.net/docs/assets/5c814e0d2c7d3a0cb9325d1f/images/5c8bc20d2c7d3a154460eb97/file-1CjQ85QAme.jpg`,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ maxHeight: 300, width: width - 130, marginLeft: 10 }}>
          <TextInput
            multiline
            numberOfLines={4}
            maxLength={40}
            style={{
              borderWidth: 1,
              minHeight: 100,
              width: "100%",
            }}
            placeholder="게시글을 입력해주세요..."
          />
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <Text>공개범위설정</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {setScope.map((e, i) => (
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              key={i}
            >
              <RadioButton value="first" status="checked" />
              <Text>{e}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <Text>그룹선택</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox onPress={() => console.log("Press")} />
            <Text>그룹1</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox onPress={() => console.log("Press")} />
            <Text>그룹1</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox onPress={() => console.log("Press")} />
            <Text>그룹1</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox onPress={() => console.log("Press")} />
            <Text>그룹1</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox onPress={() => console.log("Press")} status="checked" />
            <Text>그룹1</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WriteView;
