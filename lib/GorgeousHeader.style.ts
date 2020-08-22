import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  floatLeft: ViewStyle;
  floatRight: ViewStyle;
  titleTextStyle: TextStyle;
  searchBarStyle: ViewStyle;
  primaryImageStyle: ImageStyle;
  topBarContainer: ViewStyle;
  searchInputStyle: ViewStyle;
  contentContainer: ViewStyle;
  searchImageStyle: ImageStyle;
  subtitleTextStyle: TextStyle;
  secondaryImageStyle: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    margin: 32,
  },
  topBarContainer: {
    flexDirection: "row",
  },
  floatLeft: {
    marginRight: "auto",
  },
  floatRight: {
    marginLeft: "auto",
  },
  primaryImageStyle: {
    width: 20,
    height: 20,
  },
  secondaryImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    marginTop: 24,
  },
  titleTextStyle: {
    fontSize: 46,
    color: "#2c2305",
    fontWeight: "bold",
  },
  subtitleTextStyle: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: "400",
    color: "#999893",
  },
  searchBarStyle: {
    padding: 16,
    marginTop: 32,
    borderRadius: 24,
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
  },
  searchImageStyle: {
    width: 20,
    height: 20,
  },
  searchInputStyle: {
    marginLeft: 12,
    fontWeight: "500",
  },
});
