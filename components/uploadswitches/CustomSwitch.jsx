import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/index';

export default function CustomSwitch ({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) 

{
    const [getSelectionMode, setSelectMode] = useState(selectionMode);
    
    const updateSwitchData = (value) => {
        setSelectMode(value);
        onSelectSwitch(value);
    }

    return (
        <View style={{
            height:44,
            width: '100',
            backgroundColor: '#F2F2F2' ,
            borderColor: '#F2F2F2',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(1)}
            style={{
                flex: 1,
                backgroundColor: getSelectionMode == 1 ? '#E1AD01' : '#F2F2F2',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
            }}>
                <Text style={{
                    color: getSelectionMode == 1 ? '#F2F2F2' : '#424242',
                    fontSize: 14,
                    fontFamily: 'extrabold'
                }}> {option1} </Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(2)}
            style={{
                flex: 1,
                backgroundColor: getSelectionMode == 2 ? '#E1AD01' : '#F2F2F2',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
            }}>
                <Text style={{
                    color: getSelectionMode == 2 ? '#F2F2F2' : '#424242',
                    fontSize: 14,
                    fontFamily: 'extrabold'
                }}> {option2} </Text>
            </TouchableOpacity>
        </View>
    )
}