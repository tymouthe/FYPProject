import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.medium,
        marginHorizontal: 10,
        borderBottomColor: 'black',
        marginBottom: -30,
    },
    header:{
        flexDirection:"row",
        justifyContent: "space-between"
    },
    headerTitle:{
        fontFamily:"extrabold",
        fontSize: 18,
        color:"rgb(66,66,66)",
        maxWidth: '80%', // Adjust as needed
        overflow: 'hidden',
        // Add ellipsizeMode to truncate text with ellipsis
        ellipsizeMode: 'tail'
    }
})

export default styles;
