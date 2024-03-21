import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";

const Home = () => {
  const navigation = useNavigation();
  const [showButtons, setShowButtons] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [checkInSuccess, setCheckInSuccess] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [qrCodeData, setQrCodeData] = useState(null); // Define qrCodeData state

  useEffect(() => {
    setShowButtons(true);
  }, []);

  const handleCreateAttendance = () => {
    setCameraVisible(true);
  };

  const navigateToRecords = () => {
    navigation.navigate("Records", { attendanceRecords, qrCodeData });
  };

  const handleBarCodeScanned = ({ data }) => {
    const isValidQRCode = data.startsWith("http://example.com/checkin");

    if (isValidQRCode) {
      setCheckInSuccess(true);
      setAttendanceRecords([...attendanceRecords, { name: "John Doe", status: "Checked In" }]);
      setQrCodeData(data); // Update qrCodeData with the scanned data
    }
    setCameraVisible(false);
  };

  return (
    <View style={styles.container}>
      {showButtons && (
        <>
          <TouchableOpacity onPress={handleCreateAttendance} style={styles.checkInOutButton}>
            <Text style={styles.buttonText}>Check-in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCreateAttendance} style={styles.checkInOutButton}>
            <Text style={styles.buttonText}>Check-out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToRecords} style={styles.checkInOutButton}>
            <Text style={styles.buttonText}>Records</Text>
          </TouchableOpacity>
        </>
      )}

      <Modal visible={cameraVisible} animationType="slide" transparent>
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.cameraPreview}
            type={Camera.Constants.Type.back}
            onBarCodeScanned={handleBarCodeScanned}
          />
        </View>
      </Modal>

      <Modal visible={checkInSuccess} animationType="slide" transparent>
        <View style={styles.successModal}>
          <Text style={styles.successText}>You have successfully checked-in!</Text>
          <Button title="OK" onPress={() => setCheckInSuccess(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcyan",
  },
  checkInOutButton: {
    marginVertical: 10,
    width: 250,
    height: 60,
    borderRadius: 28,
    backgroundColor: "#34d9c3",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraPreview: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  successModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  successText: {
    fontSize: 24,
    color: "#ffffff",
  },
});

export default Home;
