import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { MediaType, SortBy } from "expo-media-library";
import { Video } from "expo-av";
import CusCheckbox from "./CusCheckbox";

const AddGallery = () => {
  const [files, setFiles] = useState([]);
  const [selectFile, setSelectFile] = useState({});
  useEffect(() => {
    (async () => await perm())();
  }, []);
  const perm = async () => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (granted) {
      // list 화면
      const fileList = await MediaLibrary.getAssetsAsync({
        mediaType: [MediaType.video, MediaType.photo],
        sortBy: [SortBy.modificationTime],
        first: 60,
      });
      // 선택된 화면
      setFiles(fileList.assets);
      const checkFile = await MediaLibrary.getAssetsAsync({
        mediaType: [MediaType.video, MediaType.photo],
        sortBy: [SortBy.modificationTime],
        first: 1,
      });
      setSelectFile(checkFile.assets[0]);
    }
  };
  const secondToMinutesAndSeconds = (second) => {
    var minutes = Math.floor((second * 1000) / 60000);
    var seconds = (((second * 1000) % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <SafeAreaView style={{ marginTop: 24, flex: 1 }}>
      <View style={{ flex: 1 }}>
        {selectFile.mediaType === "photo" ? (
          <Image
            source={{ uri: selectFile.uri }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        ) : (
          <Video
            source={{ uri: selectFile.uri }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
            shouldPlay
            isLooping
            positionMillis={selectFile.duration}
          />
        )}
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {files.map((e1, i) => {
            if (i % 4 === 0) {
              return (
                <View key={i} style={{ flex: 1, flexDirection: "row" }}>
                  {files.map((e2, j) => {
                    if (i === j || i + 1 === j || i + 2 === j || i + 3 === j) {
                      if (e2.mediaType === "video") {
                        return (
                          <View
                            key={j}
                            style={{
                              flex: 1,
                              width: "100%",
                              height: 100,
                            }}
                          >
                            <CusCheckbox />
                            <View
                              style={{
                                opacity: selectFile.uri === e2.uri ? 0.4 : 1,
                              }}
                            >
                              <TouchableOpacity
                                onPress={() => setSelectFile(e2)}
                              >
                                <Video
                                  source={{ uri: e2.uri }}
                                  style={{
                                    width: "100%",
                                    height: "100%",
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
                                  {secondToMinutesAndSeconds(e2.duration)}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        );
                      } else if (e2.mediaType === "photo") {
                        return (
                          <View
                            key={j}
                            style={{
                              flex: 1,
                              width: "100%",
                              height: 100,
                            }}
                          >
                            <CusCheckbox />
                            <View
                              style={{
                                opacity: selectFile.uri === e2.uri ? 0.4 : 1,
                              }}
                            >
                              <TouchableOpacity
                                onPress={() => setSelectFile(e2)}
                              >
                                <Image
                                  source={{ uri: e2.uri }}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                  }}
                                  resizeMode="stretch"
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
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
