import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../constants";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  container: {
    width: (width - 32) / 2, // Adjusted width calculation for two products per row and margins
    height: 200,
    marginHorizontal: 8, // Updated margin to center the products
    backgroundColor: COLORS.white,
    marginBottom: -10, // Adjusted marginBottom
    marginTop: 50,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  detail: {
    padding: SIZES.small / 1.6,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    marginBottom: 10,
    textAlign: "left", // Added textAlign for proper alignment
  },
});

export default styles;
