import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import AlbumMenu from "../components/GalleryComp/AlbumMenu";
import SelectedImage from "../components/GalleryComp/SelectedImage";
import ImageList from "../components/GalleryComp/ImageList";
import Constants from "expo-constants";
import Loading from "../components/GalleryComp/Loading";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../modules/loading";
const GalleryView = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        zIndex: 0,
      }}
    >
      <Loading />
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
