import React, { useEffect } from "react";
import { View, FlatList, Image, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { Video } from "expo-av";

const ImageList = () => {
  const { width } = Dimensions.get("window");
  const assetList = useSelector((state) => state.assetList);
  return (
    <FlatList
      data={assetList}
      renderItem={({ item }) => {
        return (
          <View style={{ width: width / 4, height: 100 }}>
            {item.mediaType === "photo" ? (
              <Image
                source={{ uri: item.uri }}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "black",
                }}
                resizeMode="contain"
              />
            ) : (
              <Video
                source={{ uri: item.uri }}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "black",
                }}
                resizeMode="contain"
              />
            )}
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
      numColumns={4}
    />
  );
};

export default ImageList;
