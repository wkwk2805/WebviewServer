import React, { useEffect, useState } from "react";
import { Image, View, Alert } from "react-native";
import { Video } from "expo-av";
import {
  requestPermissionsAsync,
  getAssetsAsync,
  MediaType,
  SortBy,
} from "expo-media-library";
import { useSelector, useDispatch } from "react-redux";
import { setAssetInfo } from "../../modules/asset";
import { setAssetList } from "../../modules/assetList";
import { IconButton } from "react-native-paper";
import { play, stop } from "../../modules/remocon";
import { useNavigation } from "@react-navigation/native";

const SelectedImage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const asset = useSelector((state) => state.asset);
  const remocon = useSelector((s) => s.remocon);
  useEffect(() => {
    (async () => {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        let option = {
          first: 400,
          sortBy: SortBy.modificationTime,
        };
        switch (album.title) {
          case "갤러리":
            option.mediaType = [MediaType.photo, MediaType.video];
            break;
          case "사진":
            option.mediaType = [MediaType.photo];
            break;
          case "동영상":
            option.mediaType = [MediaType.video];
            break;
          default:
            option.mediaType = [MediaType.photo, MediaType.video];
            option.album = album.id;
            break;
        }
        const assetList = await getAssetsAsync(option);
        dispatch(setAssetInfo(assetList.assets[0]));
        const result = assetList.assets
          .filter((e) => e.filename.indexOf("wmv") === -1)
          .filter((e) => e.duration <= 300);
        dispatch(setAssetList(result));
      } else {
        Alert.alert("접근권한이 허가 되지 않았습니다.");
        navigation.navigate("Web");
      }
    })();
  }, [album]);
  return (
    <View>
      {asset.mediaType === "photo" ? (
        <Image
          source={{ uri: asset.uri }}
          style={{ width: "100%", height: "100%", backgroundColor: "black" }}
          resizeMode="contain"
        />
      ) : (
        <>
          {!remocon ? (
            <IconButton
              size={30}
              color="green"
              icon="play-circle-outline"
              style={{ position: "absolute", zIndex: 1, bottom: 0, right: 0 }}
              onPress={() => dispatch(play())}
            />
          ) : (
            <IconButton
              size={30}
              color="red"
              icon="stop-circle-outline"
              style={{ position: "absolute", zIndex: 1, bottom: 0, right: 0 }}
              onPress={() => dispatch(stop())}
            />
          )}
          <Video
            source={{ uri: asset.uri }}
            style={{ width: "100%", height: "100%", backgroundColor: "black" }}
            resizeMode="contain"
            shouldPlay={remocon}
            isLooping={remocon}
          />
        </>
      )}
    </View>
  );
};

export default SelectedImage;
