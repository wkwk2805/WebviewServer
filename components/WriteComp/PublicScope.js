import React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";

const Scopes = [
  { key: "모두", value: "ALL" },
  { key: "친구만", value: "FRIEND" },
  { key: "그룹만", value: "GROUP" },
  { key: "나만", value: "ME" },
  { key: "친구+그룹만", value: "PLUS" },
];

const PublicScope = ({ radioCheck, setRadioCheck, setCheckedList }) => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ margin: 10 }}>공개범위설정</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Scopes.map((e, i) => (
          <View style={{ flexDirection: "row", alignItems: "center" }} key={i}>
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
  );
};

export default PublicScope;
