import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Video } from "expo-av";
import NumberCheckbox from "./NumberCheckbox";
import { setAssetInfo } from "../../modules/asset";
import { hideLoading } from "../../modules/loading";

const ImageList = () => {
  const dispatch = useDispatch();
  const { width } = Dimensions.get("window");
  const assetList = useSelector((state) => state.assetList);
  const asset = useSelector((s) => s.asset);
  useEffect(() => {
    dispatch(hideLoading());
  }, [assetList]);
  const changeMinAndSec = (sec) => {
    var minutes = Math.floor(sec / 60);
    var seconds = (((sec * 1000) % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <FlatList
      data={assetList}
      renderItem={({ item }) => {
        return (
          <View style={{ width: width / 4, height: 100 }}>
            <NumberCheckbox item={item} />
            <TouchableOpacity onPress={() => dispatch(setAssetInfo(item))}>
              <Image
                source={{ uri: item.uri }}
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: asset.id === item.id ? 0.3 : 1,
                }}
                resizeMode="stretch"
              />
              <Text
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  color: "white",
                }}
              >
                {item.duration > 0 && changeMinAndSec(item.duration)}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
      numColumns={4}
    />
  );
};

export default ImageList;
