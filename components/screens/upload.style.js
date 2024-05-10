import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/index';

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: COLORS.white, // Change this line to your desired green
    },
    secContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 18,
      backgroundColor: COLORS.white,
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: "#FAFAFA", 
    },
    safeText:{
        fontFamily:"extrabold",
        fontSize: 18,
        color:"rgb(66,66,66)",
        marginRight: 190,
    },
});

export default styles;