import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { MediaType } from "expo-media-library";
import { Video } from "expo-av";
const AddGallery = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    (async () => await perm())();
  }, []);
  const perm = async () => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (granted) {
      const result = await MediaLibrary.getAssetsAsync({
        mediaType: [MediaType.photo],
        first: 1,
      });
      setFiles(result.assets);
    }
  };

  return (
    <View style={{ marginTop: 24, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>a</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          {files.map((e, i) => {
            return (
              <View style={{ flex: 1 }} key={i}>
                <Image
                  source={{ uri: e.uri }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default AddGallery;

const styles = StyleSheet.create({});
