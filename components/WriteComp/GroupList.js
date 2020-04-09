import React from "react";
import { View, Text } from "react-native";
import { Checkbox } from "react-native-paper";

const GroupList = ({ checkedList, setCheckedList }) => {
  const group = [
    { id: 1, name: "그룹1" },
    { id: 2, name: "그룹2" },
    { id: 3, name: "그룹3" },
    { id: 4, name: "그룹4" },
    { id: 5, name: "그룹5" },
    { id: 6, name: "그룹5" },
  ];
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ margin: 10 }}>공개그룹선택</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Checkbox
          status={checkedList.length === group.length ? "checked" : "unchecked"}
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
          <View style={{ flexDirection: "row", alignItems: "center" }} key={i}>
            <Checkbox
              status={checkedList.includes(e.id) ? "checked" : "unchecked"}
              onPress={() => {
                !checkedList.includes(e.id)
                  ? setCheckedList(checkedList.concat(e.id))
                  : setCheckedList(checkedList.filter((item) => item !== e.id));
              }}
            />
            <Text
              onPress={() => {
                !checkedList.includes(e.id)
                  ? setCheckedList(checkedList.concat(e.id))
                  : setCheckedList(checkedList.filter((item) => item !== e.id));
              }}
            >
              {e.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GroupList;
