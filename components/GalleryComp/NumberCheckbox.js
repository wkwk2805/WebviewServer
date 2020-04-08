import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedAsset,
  removeSelectedAsset,
} from "../../modules/selectedAssetList";
import { setAssetInfo } from "../../modules/asset";

const NumberCheckbox = ({ item }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const selectedAssetList = useSelector((s) => s.selectedAssetList);
  const selectCheckbox = (item) => {
    setChecked(!checked);
    !checked
      ? dispatch(addSelectedAsset(item))
      : dispatch(removeSelectedAsset(item));
    !checked && dispatch(setAssetInfo(item));
  };
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        zIndex: 1,
        left: 3,
        top: 3,
        width: !checked ? 100 : 25,
        height: !checked ? 100 : 25,
      }}
      onPress={() => selectCheckbox(item)}
    >
      <View
        style={{
          backgroundColor: checked ? "white" : null,
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 10,
          width: 25,
          height: 25,
        }}
      >
        <View>
          {/* 두자리수까지만 가능하도록 만들기 */}
          {checked && (
            <Text style={{ textAlign: "center", bottom: 3, color: "black" }}>
              {selectedAssetList.map(
                (e) => e.id === item.id && selectedAssetList.indexOf(e) + 1
              )}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NumberCheckbox;
