import React from "react";
import { View, Text } from "react-native";
import AlbumMenu from "../components/GalleryComp/AlbumMenu";
import SelectedImage from "../components/GalleryComp/SelectedImage";
import ImageList from "../components/GalleryComp/ImageList";

const GalleryView = () => {
  return (
    <View>
      <AlbumMenu />
      <SelectedImage />
      <ImageList />
    </View>
  );
};

export default GalleryView;
