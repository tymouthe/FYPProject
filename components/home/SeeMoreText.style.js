import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "bold",
    fontSize: 14,
    color: COLORS.gold,
  },
  iconStyle: {
    marginRight: 5,
    color: COLORS.gold,
  },
});

export default styles;
