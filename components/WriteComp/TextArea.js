import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { setContent } from "../../modules/post";

const TextArea = () => {
  const dispatch = useDispatch();
  const { width } = Dimensions.get("window");
  const [isTagAndUser, setIsTagAndUser] = useState(false);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    dispatch(setContent(inputText));
  }, [inputText]);
  const [Tag, setTag] = useState([
    "#태그1",
    "#태그2",
    "#태그3",
    "#태그4",
    "#태그5",
  ]);
  const [User, setUser] = useState([
    "@친구1",
    "@친구2",
    "@친구3",
    "@친구4",
    "@친구5",
  ]);
  const findTagAndUser = (str) => {
    switch (str) {
      case "#":
        setIsTagAndUser("#");
        break;
      case "@":
        setIsTagAndUser("@");
        break;
      case " ":
        setIsTagAndUser(false);
        break;
      case "Enter":
        setIsTagAndUser(false);
        break;
      case "Backspace":
        let tag = inputText.substring(inputText.length - 1);
        if (tag === "@" || tag === "#" || inputText.length === 0)
          setIsTagAndUser(false);
        break;
    }
  };
  const selectText = (text, tag) => {
    let sharpNum = inputText.lastIndexOf(tag);
    let str = Object.assign(inputText, "");
    setInputText(str.replace(new RegExp(str.substring(sharpNum) + "$"), text));
    setIsTagAndUser(false);
  };
  const searchTagAndUser = (str) => {
    setInputText(str);
  };
  return (
    <>
      <View style={{ maxHeight: 300, width: width - 130, marginLeft: 10 }}>
        <TextInput
          multiline
          numberOfLines={4}
          maxLength={1000}
          value={inputText}
          style={{
            borderWidth: 1,
            minHeight: 100,
            width: "100%",
            paddingLeft: 10,
            paddingRight: 10,
          }}
          placeholder="게시글을 입력해주세요..."
          onKeyPress={({ nativeEvent }) => {
            findTagAndUser(nativeEvent.key);
          }}
          onChangeText={searchTagAndUser}
        />
        <View>
          {isTagAndUser === "#" && (
            <ScrollView
              style={{
                height: 100,
                position: "absolute",
                width: width - 130,
                backgroundColor: "#dcdcdc",
                zIndex: 1,
                borderWidth: 1,
                borderTop: 0,
              }}
            >
              {Tag.map((e, i) => (
                <TouchableOpacity onPress={() => selectText(e, "#")} key={i}>
                  <Text>{e}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
          {isTagAndUser === "@" && (
            <ScrollView
              style={{
                height: 100,
                position: "absolute",
                width: width - 130,
                backgroundColor: "#dcdcdc",
                zIndex: 1,
                borderWidth: 1,
                borderTop: 0,
              }}
            >
              {User.map((e, i) => (
                <TouchableOpacity onPress={() => selectText(e, "@")} key={i}>
                  <Text>{e}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </>
  );
};

export default TextArea;
