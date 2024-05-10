import { View, StyleSheet, Text, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../../constants';
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { firebase } from '../../../firebaseConfig';

const UploadPhoto = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log('Image picking result:', result);
        if (!result.cancelled && result.assets.length > 0 && result.assets[0].uri) {
            setImage(result.assets[0].uri);
        } else {
            console.log('Image picking cancelled or URI is undefined');
        }
    };

    const uploadMedia = async () => {
        try {
            setUploading(true);
            if (!image) {
                console.log('No image selected');
                return;
            }
            const { uri } = await FileSystem.getInfoAsync(image);
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = () => {
                    resolve(xhr.response);
                };
                xhr.onerror = (e) => {
                    reject(new TypeError('Network request failed'));
                };
                xhr.responseType = 'blob';
                xhr.open('GET', uri, true);
                xhr.send(null);
            });
            const filename = image.substring(image.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(filename);
            await ref.put(blob);
            setUploading(false);
            Alert.alert('Photo Uploaded !!!');
            setImage(null);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const deleteImage = () => {
        setImage(null);
    };

    return (
        <View>
            <TouchableOpacity style={styles.inputBox} onPress={pickImage}>
                <View style={styles.uploadButton}>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    {!image && <Ionicons name="image" size={16} color={COLORS.gray} />}
                    <Text style={styles.buttonText}> {image ? "Change Photo" : "Upload Photo"} </Text>
                </View>
            </TouchableOpacity>

            {image && (
                <TouchableOpacity style={styles.deleteButton} onPress={deleteImage}>
                    <Ionicons name="close-circle" size={20} color={COLORS.red} />
                </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.uploadTab} onPress={uploadMedia}>
                <Text style={styles.uploadText}> Upload </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 1,
        marginHorizontal: 10,
        alignItems: 'center',
        borderColor: COLORS.borderGrey,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: 50,
        marginBottom: SIZES.small,
    },
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: -10,
        right: 0,
        padding: 20,
    },
    uploadTab: {
        borderWidth: 1,
        marginHorizontal: 100,
        alignItems: 'center',
        borderColor: '#E1AD01',
        backgroundColor: '#E1AD01',
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: SIZES.small,
    },
    buttonText: {
        fontSize: 14,
        color: COLORS.gray,
        marginLeft: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    uploadText: {
        fontSize: 14,
        fontFamily: 'extrabold',
        color: COLORS.white,
    },
});

export default UploadPhoto;
