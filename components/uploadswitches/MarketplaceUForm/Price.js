import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform, Text } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { Picker } from '@react-native-picker/picker';

const Price = () => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('KHR'); // Default currency is Reil

    const onAmountChange = (value) => {
        // Check if the input value is a number or an empty string
        // If it's a number or an empty string, update the state
        if (/^\d*$/.test(value) || value === '') {
            setAmount(value);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onAmountChange}
                        value={amount}
                        keyboardType="numeric"
                        placeholder="Price"
                    />
                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={currency} 
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
                    >
                        <Picker.Item label="៛" value="KHR" />
                        <Picker.Item label="$" value="USD" />
                    </Picker>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.small,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    inputBox: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: COLORS.borderGrey,
        borderRadius: 10,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    pickerContainer: {
        width: 100,
        borderWidth: 1,
        borderColor: COLORS.borderGrey,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        height: 50,
        width: 100,
    },
});

export default Price;
