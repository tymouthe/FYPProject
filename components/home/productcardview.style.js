import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../constants";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  container: {
    width: (width - 32) / 2,
    height: 200,
    marginHorizontal: 8,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.white,
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
    // Add ellipsizeMode and numberOfLines for ellipsis functionality
    maxWidth: "100%",
    overflow: "hidden",
    ellipsizeMode: "tail",
    numberOfLines: 1,
  },
  description: {
    color: COLORS.gray2,
    fontSize: SIZES.small,
  },
  price: {
    fontSize: SIZES.medium / 1.3,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default styles;
