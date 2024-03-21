import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Records = ({ route }) => {
  const { attendanceRecords } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Records:</Text>
      {attendanceRecords.map((record, index) => (
        <View key={index} style={styles.recordContainer}>
          <Text style={styles.recordText}>{record.name} - {record.status}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "lightcyan",
    paddingTop: 20, // Add padding to bring content up
  },
  title: {
    fontSize: 24, // Increase font size
    marginBottom: 10,
  },
  recordContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  recordText: {
    fontSize: 18, // Increase font size
    marginRight: 10,
  },
});

export default Records;
