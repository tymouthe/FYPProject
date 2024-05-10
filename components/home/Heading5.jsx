import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './heading5.style';

const Heading5 = () => {
  return (
    <View style={styles.container} >
    <View style={styles.header}>
        <Text style = {styles.headerTitle}>
            Recent
        </Text>
    </View>
</View>

  )
}

export default Heading5;
