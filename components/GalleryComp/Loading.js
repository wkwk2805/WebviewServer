import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector((s) => s.loading);
  return (
    <View>
      <Modal
        transparent={true}
        visible={isLoading}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator color="white" size="large" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
});

export default Loading;
