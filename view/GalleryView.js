import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AlbumMenu from "../components/GalleryComp/AlbumMenu";
import SelectedImage from "../components/GalleryComp/SelectedImage";
import ImageList from "../components/GalleryComp/ImageList";
import Constants from "expo-constants";

const GalleryView = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
      }}
    >
      <AlbumMenu />
      <View style={{ flex: 1 }}>
        <SelectedImage />
      </View>
      <View style={{ flex: 1 }}>
        <ImageList />
      </View>
    </SafeAreaView>
  );
};

export default GalleryView;
