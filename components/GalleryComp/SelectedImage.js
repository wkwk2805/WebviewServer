import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Video } from "expo-av";
import {
  requestPermissionsAsync,
  getAssetsAsync,
  MediaType,
  SortBy,
} from "expo-media-library";
import { useSelector, useDispatch } from "react-redux";
import { setAssetInfo } from "../../modules/asset";

const SelectedImage = () => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const asset = useSelector((state) => state.asset);
  useEffect(() => {
    (async () => {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const option = {
          first: 1,
          sortBy: SortBy.modificationTime,
        };
        switch (album.title) {
          case "갤러리":
            option.mediaType = [MediaType.photo, MediaType.video];
            break;
          case "사진":
            option.mediaType = [MediaType.photo];
            break;
          case "비디오":
            option.mediaType = [MediaType.video];
            break;
          default:
            option.mediaType = [MediaType.photo, MediaType.video];
            option.album = album.id;
            break;
        }
        const assetsInfo = await getAssetsAsync(option);
        console.log(assetsInfo);
        dispatch(setAssetInfo(assetsInfo.assets[0]));
      }
    })();
  }, [album]);
  return (
    <>
      {asset.mediaType === "photo" ? (
        <Image
          source={{ uri: asset.uri }}
          style={{ width: "100%", height: "100%", backgroundColor: "black" }}
          resizeMode="contain"
        />
      ) : (
        <Video
          source={{ uri: asset.uri }}
          style={{ width: "100%", height: "100%", backgroundColor: "black" }}
          resizeMode="contain"
          shouldPlay
          isLooping
        />
      )}
    </>
  );
};

export default SelectedImage;
