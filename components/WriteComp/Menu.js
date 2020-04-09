import React from "react";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
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
        <IconButton
          icon="check"
          size={25}
          onPress={() => console.log("Pressed")}
          color="green"
        />
      </View>
    </View>
  );
};

export default Menu;
