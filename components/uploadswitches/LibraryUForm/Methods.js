import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const Methods = () => {
    const [methods, setMethods] = useState(['']);

    const addMethod = () => {
        setMethods([...methods, '']);
    };

    const removeMethod = (index) => {
        const newMethods = [...methods];
        newMethods.splice(index, 1);
        setMethods(newMethods);
    };

    const handleChange = (index, value) => {
        const newMethods = [...methods];
        newMethods[index] = value;
        setMethods(newMethods);
    };

    return (
        <View style={styles.container}>
            {methods.map((method, index) => (
                <View key={index} style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => handleChange(index, value)}
                        value={method}
                        multiline={true}
                        placeholder={`Method ${index + 1}`}
                    />
                    {index > 0 && (
                        <TouchableOpacity onPress={() => removeMethod(index)} style={styles.removeButton}>
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    )}
                </View>
            ))}
            <TouchableOpacity onPress={addMethod}>
                <Text style={styles.addMoreText}>Add More</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderColor: COLORS.borderGrey,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginBottom: SIZES.small,
    },
    inputContainer: {
        flexDirection: 'row', // Place items horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space items evenly
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.borderGrey,
    },
    input: {
        flex: 1, // Take up remaining space
        paddingHorizontal: 10,
    },
    removeButton: {
        marginLeft: 10, // Add margin to separate from the input
    },
    removeText: {
        color: 'red',
    },
    addMoreText: {
        color: COLORS.gold,
        fontFamily: 'extrabold',
        alignSelf: 'center',
        marginVertical: 10,
    },
});

export default Methods;
