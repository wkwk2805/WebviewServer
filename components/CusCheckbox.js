import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

const CusCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{ position: "absolute", zIndex: 1 }}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
      />
    </View>
  );
};

export default CusCheckbox;

const styles = StyleSheet.create({});
