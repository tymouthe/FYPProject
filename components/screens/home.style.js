import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/index';

const styles = StyleSheet.create({
    textStyle:{
        fontFamily: "bold",
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small,
        marginBottom: SIZES.small,
     
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // any other styling you have
    },
    location: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.white,
    },
    cartCount: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16, // Corrected typo
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
        zIndex: 999,
    },
    cartNumber: {
        fontFamily: "regular",
        fontWeight: "600",
        fontSize: 10,
        color: COLORS.lightWhite,
    },
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.white, // Change this line to your desired green
    },
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA", // Change this line to your desired green
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Center horizontally
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '85%', // Adjust width as needed
      },
      
    searchIcon: {
        marginLeft: 10, // Space from the left edge of the search container
        // Adjust the color and size if needed
    },
    searchInput: {
        flex: 1, // Take up remaining space
        
        paddingLeft: 20, // No left padding, adjust based on your design
        backgroundColor: '#FFF', // Background color
        color: '#424242',
        paddingRight: 10,
        height: 40, // Text color
        // Adjust the font size and other styles as necessary
    },
})

export default styles;
