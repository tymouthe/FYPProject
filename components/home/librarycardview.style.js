import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../constants";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  container: {
    width: 200,
    height: 240,
    marginHorizontal: 8,
    backgroundColor: COLORS.white,
    marginBottom: -10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
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
    fontSize: 14,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },  
  name: {
    fontSize: SIZES.small,
  },
  profileContainer: {
    marginRight: 10,
    marginTop: 10,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
});

export default styles;
