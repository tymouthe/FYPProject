import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const ContactName = () => {
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
                multiline={true}
                placeholder="Contact Name"
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

export default ContactName;