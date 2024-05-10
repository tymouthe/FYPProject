import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS, SIZES } from '../../../constants';

const Location = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    {selectedValue === null && <Picker.Item label="Please select your location" value="" />}
                    <Picker.Item label="Phnom Penh" value="Phnom Penh" />
                    <Picker.Item label="Preah Sihanouk" value="Preah Sihanouk" />
                    <Picker.Item label="Kampong Cham" value="Kampong Cham" />
                    <Picker.Item label="Siem Reap" value="Siem Reap" />
                    <Picker.Item label="Battambang" value="Battambang" />
                    <Picker.Item label="Kandal" value="Kandal" />
                    <Picker.Item label="Banteay Meanchey" value="Banteay Meanchey" />
                    <Picker.Item label="Kampong Chhnang" value="Kampong Chhnang" />
                    <Picker.Item label="Kampong Speu" value="Kampong Speu" />
                    <Picker.Item label="Kampong Thom" value="Kampong Thom" />
                    <Picker.Item label="Kampot" value="Kampot" />
                    <Picker.Item label="Kep" value="Kep" />
                    <Picker.Item label="Koh Kong" value="Koh Kong" />
                    <Picker.Item label="Kratie" value="Kratie" />
                    <Picker.Item label="Mondulkiri" value="Mondulkiri" />
                    <Picker.Item label="Oddar Meanchey" value="Oddar Meanchey" />
                    <Picker.Item label="Pailin" value="Pailin" />
                    <Picker.Item label="Preah Vihear" value="Preah Vihear" />
                    <Picker.Item label="Prey Veng" value="Prey Veng" />
                    <Picker.Item label="Pursat" value="Pursat" />
                    <Picker.Item label="Ratanakiri" value="Ratanakiri" />
                    <Picker.Item label="Steung treng" value="Steung treng" />
                    <Picker.Item label="Svay Rieng" value="Svay Rieng" />
                    <Picker.Item label="Takeo" value="Takeo" />
                    <Picker.Item label="Tboung Khmum" value="Tboung Khmum" />
                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SIZES.small,
    },
    pickerContainer: {
        width: 340,
        borderWidth: 1,
        borderColor: COLORS.borderGrey,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // To hide the overflow of the picker
    },
    picker: {
        width: '100%',
        height: '100%',
    },
});

export default Location;