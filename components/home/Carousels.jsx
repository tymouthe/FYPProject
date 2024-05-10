import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from "../../constants"

const Carousels = () => {
    const slides = [
        { uri: "https://modelkh.com/public/img/home/S-1.jpeg" },
        { uri: "https://modelkh.com/public/img/home/S-2.jpeg" },
        { uri: "https://modelkh.com/public/img/home/g4.1.jpeg" },
    ]

    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides} // changed 'image' to 'images'
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
                autoplay
                circleLoop
            />
        </View>
    )
}

export default Carousels
const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }
})