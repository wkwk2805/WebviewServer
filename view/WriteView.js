import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Constants from "expo-constants";
import TextArea from "../components/WriteComp/TextArea";
import GroupList from "../components/WriteComp/GroupList";
import FirstImage from "../components/WriteComp/FirstImage";
import Menu from "../components/WriteComp/Menu";
import PublicScope from "../components/WriteComp/PublicScope";
import { setGroups, setScope } from "../modules/post";
import { useDispatch } from "react-redux";

const WriteView = () => {
  const [radioCheck, setRadioCheck] = useState("ALL");
  const [checkedList, setCheckedList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setScope(radioCheck));
    dispatch(setGroups(checkedList));
  }, [radioCheck, checkedList]);
  return (
    <ScrollView style={{ marginTop: Constants.statusBarHeight }}>
      <Menu />
      <View style={{ margin: 10, flexDirection: "row", flexWrap: "wrap" }}>
        <FirstImage />
        <TextArea />
      </View>
      <PublicScope
        radioCheck={radioCheck}
        setRadioCheck={setRadioCheck}
        setCheckedList={setCheckedList}
      />
      {(radioCheck === "GROUP" || radioCheck === "PLUS") && (
        <GroupList checkedList={checkedList} setCheckedList={setCheckedList} />
      )}
    </ScrollView>
  );
};

export default WriteView;
