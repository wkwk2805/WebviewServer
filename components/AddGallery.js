import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { MediaType } from "expo-media-library";
import { Video } from "expo-av";
const AddGallery = () => {
  const [files, setFiles] = useState([]);
  const [selectFile, setSelectFile] = useState({});
  useEffect(() => {
    (async () => await perm())();
  }, []);
  const perm = async () => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (granted) {
      const fileList = await MediaLibrary.getAssetsAsync({
        mediaType: [MediaType.photo, MediaType.video],
        sortBy: [MediaLibrary.SortBy.modificationTime],
        first: 150,
      });
      setFiles(fileList.assets);
      const checkFile = await MediaLibrary.getAssetsAsync({
        mediaType: [MediaType.photo, MediaType.video],
        first: 1,
      });
      setSelectFile(checkFile.assets[0]);
    }
  };

  return (
    <SafeAreaView style={{ marginTop: 24, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: selectFile.uri }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {files.map((e1, i) => {
            if (i % 3 === 0) {
              return (
                <View key={i} style={{ flex: 1, flexDirection: "row" }}>
                  {files.map((e2, j) => {
                    if (i === j || i + 1 === j || i + 2 === j) {
                      if (e2.mediaType === "video") {
                        return (
                          <Video
                            shouldPlay
                            volume={0}
                            isLooping
                            key={j}
                            source={{ uri: e2.uri }}
                            style={{ width: 100, height: 100, flex: 1 }}
                            resizeMode="stretch"
                          ></Video>
                        );
                      } else if (e2.mediaType === "photo") {
                        return (
                          <Image
                            key={j}
                            source={{ uri: e2.uri }}
                            style={{ flex: 1, width: 100, height: 100 }}
                            resizeMode="stretch"
                          />
                        );
                      }
                    }
                  })}
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddGallery;

const styles = StyleSheet.create({});
