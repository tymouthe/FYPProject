import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native"
import React from 'react'
import styles from './librarycardrowview.style'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { useNavigation } from "@react-navigation/native";

const LibraryCardRowView = () => {
const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
            <View style={styles.main}>
                <View style = {styles.container}>
                    <View style={styles.imageContainer}>
                        <Image 
                        source = {{uri:"https://i.pinimg.com/736x/b6/3c/76/b63c76cdb85dccc9abaa3b94cc218e24.jpg"}}
                        style={styles.image}/>
                    </View>

                    <View style={styles.detail}>
                            <Text style={styles.title}>
                                FinalYear Project
                            </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default LibraryCardRowView