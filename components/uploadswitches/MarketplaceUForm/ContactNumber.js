import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const ContactNumber = () => {
    const [number, setNumber] = useState('');

    const onChangeNumber = (value) => {
        setNumber(value);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone Number"
                keyboardType="phone-pad"
            />
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
        paddingVertical: 10,
        marginBottom: SIZES.small,
    },
    input: {
        paddingHorizontal: 10,
    },
});

export default ContactNumber;
