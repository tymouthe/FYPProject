import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
const TabButton = (props) => {
    const focused = props.accessibilityState.selected;
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            {...props}
            style={styles.tabButton}
        >
            <Ionicons
                name={props.iconName}
                size={24}
                color={focused ? COLORS.gold : COLORS.gray2}
            />
        </TouchableOpacity>
    );
};

export default TabButton;

const styles = StyleSheet.create({
    tabButton: {
        width: SIZES.width / 5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});