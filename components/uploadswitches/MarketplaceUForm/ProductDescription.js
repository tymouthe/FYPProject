import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const ProductDescription = () => {
    const [text, setText] = useState('');

    const onChangeText = (value) => {
        setText(value);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Please enter your product description."
                multiline={true}
                textAlignVertical="top"
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
        minHeight: 150, // Adjusted minimum height
        padding: 10,
        marginBottom: SIZES.small,
    },
    input: {
        flex: 1,
    },
});

export default ProductDescription;
