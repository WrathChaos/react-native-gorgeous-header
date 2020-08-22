import * as React from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./GorgeousHeader.style";

interface IProps {
  menuImageStyle: any;
  menuImageSource: any;
  menuImageOnPress: () => void;
  profileImageStyle: any;
  profileImageSource: any;
  profileImageOnPress: () => void;
  title: string;
  subtitle: string;
  searchImageSource: any;
  titleTextStyle: any;
  searchBarStyle: any;
  searchInputStyle: any;
  subtitleTextStyle: any;
}

interface IState {}

class GorgeousHeader extends React.Component<IProps, IState> {
  renderTopBar = () => {
    const {
      menuImageStyle,
      menuImageSource,
      menuImageOnPress,
      profileImageStyle,
      profileImageSource,
      profileImageOnPress,
    } = this.props;
    return (
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.floatLeft} onPress={menuImageOnPress}>
          <Image
            source={menuImageSource}
            style={menuImageStyle || styles.menuImageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.floatRight}
          onPress={profileImageOnPress}
        >
          <Image
            source={profileImageSource}
            style={profileImageStyle || styles.profileImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderContent = () => {
    const {
      title = "Order",
      subtitle = "Healthy food can keep you fit.",
      searchImageSource,
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
          <Image style={styles.searchImageStyle} source={searchImageSource} />
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
