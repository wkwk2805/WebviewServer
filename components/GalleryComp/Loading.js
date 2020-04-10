import React from "react";
import { Modal, StyleSheet, View, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading } from "../../modules/loading";

const Loading = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.loading);
  return (
    <View>
      <Modal
        visible={isLoading}
        onRequestClose={() => {
          dispatch(hideLoading());
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator color="#3f51b5" size="large" />
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
