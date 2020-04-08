import React from "react";

import GalleryView from "./GalleryView";
import CameraView from "./CameraView";
import VideoView from "./VideoView";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Add = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="갤러리"
        component={GalleryView}
        options={{
          tabBarLabel: "갤러리",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="album" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="카메라"
        component={CameraView}
        options={{
          tabBarLabel: "카메라",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="동영상"
        component={VideoView}
        options={{
          tabBarLabel: "동영상",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="camcorder"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Add;
