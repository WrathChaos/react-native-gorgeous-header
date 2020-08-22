import * as React from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./GorgeousHeader.style";

interface IProps {
  primaryImageStyle: any;
  primaryImageSource: any;
  primaryImageOnPress: () => void;
  secondaryImageStyle: any;
  secondaryImageSource: any;
  secondaryImageOnPress: () => void;
  title: string;
  subtitle: string;
  searchIcon: any;
  titleTextStyle: any;
  searchBarStyle: any;
  searchInputStyle: any;
  subtitleTextStyle: any;
}

interface IState {}

class GorgeousHeader extends React.Component<IProps, IState> {
  renderTopBar = () => {
    const {
      primaryImageStyle,
      primaryImageSource,
      primaryImageOnPress,
      secondaryImageStyle,
      secondaryImageSource,
      secondaryImageOnPress,
    } = this.props;
    return (
      <View style={styles.topBarContainer}>
        <TouchableOpacity
          style={styles.floatLeft}
          onPress={primaryImageOnPress}
        >
          <Image
            source={primaryImageSource}
            style={primaryImageStyle || styles.primaryImageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.floatRight}
          onPress={secondaryImageOnPress}
        >
          <Image
            source={secondaryImageSource}
            style={secondaryImageStyle || styles.secondaryImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderContent = () => {
    const {
      title = "Order",
      subtitle = "Healthy food can keep you fit.",
      searchIcon,
      titleTextStyle,
      searchBarStyle,
      searchInputStyle,
      subtitleTextStyle,
    } = this.props;
    return (
      <View style={styles.contentContainer}>
        <Text style={titleTextStyle || styles.titleTextStyle}>{title}</Text>
        <Text style={subtitleTextStyle || styles.subtitleTextStyle}>
          {subtitle}
        </Text>
        <View style={searchBarStyle || styles.searchBarStyle}>
          <Image style={styles.searchImageStyle} source={searchIcon} />
          <TextInput
            style={searchInputStyle || styles.searchInputStyle}
            placeholder="Search something"
            {...this.props}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderTopBar()}
        {this.renderContent()}
      </View>
    );
  }
}

export default GorgeousHeader;
