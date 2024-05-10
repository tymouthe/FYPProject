import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native"
import React from 'react'
import styles from './librarycardview.style'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { useNavigation } from "@react-navigation/native";

const LibraryCardView = () => {
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
                        <View style={styles.profileContainer}>
                            <Image
                                source={require('../../assets/images/profile.jpeg')}
                                style={styles.profile}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>
                                Pithonin Hengpan
                            </Text>
                            <Text style={styles.title} numberOfLines={1}>
                                FinalYear Project
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default LibraryCardView