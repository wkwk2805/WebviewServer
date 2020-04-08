import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";
import { Asset } from "expo-asset";
const WriteView = () => {
  const { width } = Dimensions.get("window");
  const selectedAssetList = useSelector((s) => s.selectedAssetList);
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
      <View style={{ margin: 10 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ width: 100, height: 100 }}>
            <Image
              source={{
                uri: `https://d33v4339jhl8k0.cloudfront.net/docs/assets/5c814e0d2c7d3a0cb9325d1f/images/5c8bc20d2c7d3a154460eb97/file-1CjQ85QAme.jpg`,
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={{ height: 300, width: width - 120 }}>
            <TextInput
              multiline
              numberOfLines={4}
              editable
              maxLength={40}
              style={{
                borderWidth: 1,
                minHeight: 100,
                width: "100%",
              }}
            />
          </View>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default WriteView;
