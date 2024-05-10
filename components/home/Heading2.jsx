import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './heading2.style';

const Heading2 = () => {
  return (
    <View style={styles.container} >
    <View style={styles.header}>
        <Text style = {styles.headerTitle}>
            Recommended For You
        </Text>
    </View>
</View>

  )
}

export default Heading2;
