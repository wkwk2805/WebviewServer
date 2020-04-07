import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const NumberCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        zIndex: 1,
        left: 3,
        top: 3,
      }}
      onPress={() => setChecked(!checked)}
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
              99
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NumberCheckbox;
