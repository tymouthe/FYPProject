import {View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import React from 'react';
import { COLORS } from "../../constants"
import { Ionicons } from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native";

const SubHeader = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
            <TouchableOpacity
                onPress={()=>navigation.navigate("upload")}
                style={styles.uploadButton}
                accessibilityLabel="Navigate to Upload"
            >
                <Text style={styles.buttonText}> Have a Recipe of your own to share?</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            onPress={() => navigation.navigate("search")}
            style={styles.searchButton}
            accessibilityLabel="Navigate to Search"
        >
            <Ionicons name="search-sharp" size={24} color={COLORS.gray} />
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 18,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      marginTop: 20,
    },
    inputBox: {
      borderWidth: 1,
      borderColor: COLORS.borderGrey,
      backgroundColor: COLORS.white,
      borderRadius: 15,
      paddingHorizontal: 20,
      width: '90%',
      paddingVertical: 8,

    },
    inputStyle: {
      fontSize: 14,
      color: COLORS.gray,
    },
    uploadButton: {
        // Add any specific styles for the upload button
    },
    searchButton: {
        // Add any specific styles for the search button
    },
    buttonText: {
        color: COLORS.gray,
    },
});

export default SubHeader;
