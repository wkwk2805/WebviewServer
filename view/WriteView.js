import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";
import { IconButton, RadioButton, Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const setScope = [
  { key: "모두", value: "ALL" },
  { key: "친구만", value: "FRIEND" },
  { key: "그룹만", value: "GROUP" },
  { key: "나만", value: "ME" },
  { key: "친구+그룹만", value: "PLUS" },
];

const group = [
  { id: 1, name: "그룹1" },
  { id: 2, name: "그룹2" },
  { id: 3, name: "그룹3" },
  { id: 4, name: "그룹4" },
  { id: 5, name: "그룹5" },
  { id: 6, name: "그룹5" },
];

const WriteView = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const selectedAssetList = useSelector((s) => s.selectedAssetList);
  const [radioCheck, setRadioCheck] = useState("");
  const [checkedList, setCheckedList] = useState([]);
  return (
    <ScrollView style={{ marginTop: Constants.statusBarHeight }}>
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
              uri: selectedAssetList[0].uri,
            }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="stretch"
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
        <Text style={{ margin: 10 }}>공개범위설정</Text>
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
              <RadioButton
                value="first"
                status={radioCheck === e.value ? "checked" : "unchecked"}
                onPress={() => {
                  radioCheck === e.value
                    ? setRadioCheck("")
                    : setRadioCheck(e.value);
                  if (e.value !== "GROUP" && e.value !== "PLUS") {
                    setCheckedList([]);
                  }
                }}
              />
              <Text
                onPress={() => {
                  radioCheck === e.value
                    ? setRadioCheck("")
                    : setRadioCheck(e.value);
                  if (e.value !== "GROUP" && e.value !== "PLUS") {
                    setCheckedList([]);
                  }
                }}
              >
                {e.key}
              </Text>
            </View>
          ))}
        </View>
      </View>
      {(radioCheck === "GROUP" || radioCheck === "PLUS") && (
        <View style={{ margin: 10 }}>
          <Text style={{ margin: 10 }}>공개그룹선택</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              status={
                checkedList.length === group.length ? "checked" : "unchecked"
              }
              onPress={() => {
                !(checkedList.length === group.length)
                  ? setCheckedList(group.map((e) => e.id))
                  : setCheckedList([]);
              }}
            />
            <Text
              onPress={() => {
                !(checkedList.length === group.length)
                  ? setCheckedList(group.map((e) => e.id))
                  : setCheckedList([]);
              }}
            >
              전체
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {group.map((e, i) => (
              <View
                style={{ flexDirection: "row", alignItems: "center" }}
                key={i}
              >
                <Checkbox
                  status={checkedList.includes(e.id) ? "checked" : "unchecked"}
                  onPress={() => {
                    !checkedList.includes(e.id)
                      ? setCheckedList(checkedList.concat(e.id))
                      : setCheckedList(
                          checkedList.filter((item) => item !== e.id)
                        );
                  }}
                />
                <Text
                  onPress={() => {
                    !checkedList.includes(e.id)
                      ? setCheckedList(checkedList.concat(e.id))
                      : setCheckedList(
                          checkedList.filter((item) => item !== e.id)
                        );
                  }}
                >
                  {e.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default WriteView;
