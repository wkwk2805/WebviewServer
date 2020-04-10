import React, { useEffect, useState } from "react";
import { Picker, Alert, View, Text } from "react-native";
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
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import { stop } from "../../modules/remocon";

const AlbumMenu = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const [albumList, setAlbumList] = useState([]);
  const selectedAssetList = useSelector((s) => s.selectedAssetList);
  useEffect(() => {
    (async () => {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const albums = await getAlbumsAsync();
        setAlbumList(albums);
      } else {
        Alert.alert("접근권한이 허가 되지 않았습니다.");
        navigation.navigate("Web");
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
    dispatch(stop());
  };
  return (
    <View>
      <View style={{ position: "absolute" }}>
        <IconButton
          size={25}
          icon="close"
          onPress={() => {
            navigation.navigate("Web");
            dispatch(removeAllSelectedAsset());
            dispatch(stop());
          }}
        />
      </View>
      <View style={{ width: "50%", marginLeft: 50 }}>
        <Picker selectedValue={album.title} onValueChange={_onValueChange}>
          <Picker.Item label="갤러리" value="갤러리" />
          <Picker.Item label="사진" value="사진" />
          <Picker.Item label="동영상" value="동영상" />
          {albumList.map((e, i) => (
            <Picker.Item label={e.title} value={e.title} key={i} />
          ))}
        </Picker>
      </View>
      {selectedAssetList.length > 0 && (
        <View style={{ position: "absolute", right: 10, top: 7 }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(showLoading());
              navigation.navigate("Write");
              dispatch(stop());
            }}
          >
            <MaterialCommunityIcons
              name="check"
              style={{ fontSize: 30, color: "green" }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AlbumMenu;
