import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../constants";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  container: {
    width: 140,
    height: 180,
    marginHorizontal: 8,
    backgroundColor: COLORS.white,
    marginBottom: -10,
    marginTop: 50,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -50,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: 'cover',
    marginBottom: 50,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.small,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 10,
    maxWidth: "100%",
    overflow: "hidden",
    // Adding ellipsizeMode and numberOfLines for ellipsis functionality
    ellipsizeMode: "tail",
    numberOfLines: 1,
  },
  textContainer: {
    flex: 1,
  },
});

export default styles;
