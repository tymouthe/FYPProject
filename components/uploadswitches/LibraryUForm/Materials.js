import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const Materials = () => {
    const [materials, setMaterials] = useState([{ material: '', amount: '', number: '' }]);

    const addMaterial = () => {
        setMaterials([...materials, { material: '', amount: '', number: '' }]);
    };

    const removeMaterial = (index) => {
        if (index > 0) {
            const newMaterials = [...materials];
            newMaterials.splice(index, 1);
            setMaterials(newMaterials);
        }
    };

    const handleChange = (index, key, value) => {
        const newMaterials = [...materials];
        newMaterials[index][key] = value;
        setMaterials(newMaterials);
    };

    return (
        <View style={styles.container}>
            {materials.map((item, index) => (
                <View key={index} style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, styles.materialInput]}
                        onChangeText={(value) => handleChange(index, 'material', value)}
                        value={item.material}
                        placeholder="Material"
                    />
                    <TextInput
                        style={[styles.input, styles.amountInput]}
                        onChangeText={(value) => handleChange(index, 'amount', value)}
                        value={item.amount}
                        placeholder="Amount"
                        keyboardType="numeric"
                    />
                    
                    {index > 0 && ( // Render remove button only if index is greater than 0
                        <TouchableOpacity onPress={() => removeMaterial(index)}>
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    )}
                </View>
            ))}
            <TouchableOpacity onPress={addMaterial}>
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
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.borderGrey,
    },
    input: {
        flex: 1,
        marginRight: 5,
    },
    materialInput: {
        marginRight: 5,
    },
    amountInput: {
        marginRight: 5,
    },
    numberInput: {
        width: 60,
    },
    removeText: {
        color: 'red',
        marginLeft: -50,
    },
    addMoreText: {
        color: COLORS.gold,
        fontFamily: 'extrabold',
        alignSelf: 'center',
        marginVertical: 10,
    },
});

export default Materials;
