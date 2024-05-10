import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./SeeMoreText.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SeeMoreText = () => {
  const navigation = useNavigation(); // Initialize navigation hook
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("library")}>
          <Text style={styles.headerTitle}>
            See more on Library {'\u00A0'}
            <Ionicons name="chevron-forward-outline" size={10} style={styles.iconStyle} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SeeMoreText;