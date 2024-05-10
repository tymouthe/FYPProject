import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './heading4.style';

const Heading4 = () => {
  return (
    <View style={styles.container} >
    <View style={styles.header}>
        <Text style = {styles.headerTitle}>
            Popular Recipes This Week
        </Text>
    </View>
</View>

  )
}

export default Heading4;
