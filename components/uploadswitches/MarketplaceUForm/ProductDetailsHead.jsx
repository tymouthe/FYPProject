import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants';

const ProductDetailsHead = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Product Details</Text>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        borderBottomColor: 'black',
        marginBottom: SIZES.medium,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontFamily: 'extrabold',
        fontSize: 18,
        color: 'rgb(66,66,66)',
        maxWidth: '80%',
        overflow: 'hidden',
        ellipsizeMode: 'tail',
    },
})

export default ProductDetailsHead;
