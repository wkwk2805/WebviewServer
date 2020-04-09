import React from "react";
import { View, Image } from "react-native";
import { useSelector } from "react-redux";

const FirstImage = () => {
  const selectedAssetList = useSelector((s) => s.selectedAssetList);

  return (
    <View style={{ width: 100, height: 100 }}>
      <Image
        source={{
          uri: selectedAssetList[0].uri,
        }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="stretch"
      />
    </View>
  );
};

export default FirstImage;
