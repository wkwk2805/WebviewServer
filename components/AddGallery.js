import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

const AddGallery = () => {
  const perm = async () => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (granted) {
      const result = await MediaLibrary.getAssetsAsync({
        mediaType: [MediaLibrary.MediaType.video],
      });
      console.log(result);
    }
  };

  return (
    <View style={{ marginTop: 24 }}>
      <TouchableOpacity onPress={perm}>
        <Text>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddGallery;

const styles = StyleSheet.create({});
