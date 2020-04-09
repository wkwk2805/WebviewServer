import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera, requestPermissionsAsync, Constants } from "expo-camera";
import { IconButton } from "react-native-paper";

const CameraView = () => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { granted } = await requestPermissionsAsync();
      setHasPermission(granted);
    })();
  }, []);
  const snap = async (x) => {
    console.log(x);
    if (x) {
      let photo = await x.takePictureAsync();
      console.log(photo);
    }
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 4 }}
        type={type}
        ref={(x) => snap(x)}
        onCameraReady={true}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
              right: 0,
              position: "absolute",
            }}
          >
            <IconButton
              icon="rotate-3d"
              color="#f66"
              size={30}
              onPress={() => {
                setType(
                  type === Constants.Type.back
                    ? Constants.Type.front
                    : Constants.Type.back
                );
              }}
              style={{ marginBottom: 10 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <IconButton
          icon="radiobox-marked"
          color="#f66"
          size={50}
          onPress={snap}
        />
      </View>
    </View>
  );
};

export default CameraView;
