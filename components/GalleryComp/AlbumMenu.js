import React, { useEffect, useState } from "react";
import { Picker, Alert } from "react-native";
import {
  requestPermissionsAsync,
  getAlbumsAsync,
  getAlbumAsync,
  getAssetsAsync,
  MediaType,
} from "expo-media-library";
import { useSelector, useDispatch } from "react-redux";
import { setAlbumInfo } from "../../modules/album";
import { removeAllSelectedAsset } from "../../modules/selectedAssetList";
import { showLoading } from "../../modules/loading";

const AlbumMenu = () => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const [albumList, setAlbumList] = useState([]);
  useEffect(() => {
    (async () => {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const albums = await getAlbumsAsync();
        setAlbumList(albums);
      }
    })();
  }, []);
  const _onValueChange = async (title) => {
    let albumInfo = await getAlbumAsync(title);
    if (!albumInfo) {
      albumInfo = {
        assetCount: 0,
        id: "0",
        title,
      };
    } else {
      const asset = await getAssetsAsync({
        album: albumInfo.id,
        mediaType: [MediaType.photo, MediaType.video],
      });
      const len = asset.assets
        .filter((e) => e.filename.indexOf("wmv") === -1)
        .filter((e) => e.duration <= 300).length;
      if (len === 0) {
        Alert.alert("이미지 또는 비디오가 존재하지 않습니다.");
        return;
      }
    }
    dispatch(showLoading());
    dispatch(removeAllSelectedAsset());
    dispatch(setAlbumInfo(albumInfo));
  };
  return (
    <Picker selectedValue={album.title} onValueChange={_onValueChange}>
      <Picker.Item label="갤러리" value="갤러리" />
      <Picker.Item label="사진" value="사진" />
      <Picker.Item label="동영상" value="동영상" />
      {albumList.map((e, i) => (
        <Picker.Item label={e.title} value={e.title} key={i} />
      ))}
    </Picker>
  );
};

export default AlbumMenu;
