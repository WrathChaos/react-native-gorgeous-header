import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
  ImageSourcePropType,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./GorgeousHeader.style";

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IProps {
  title: string;
  subtitle: string;
  menuImageSource: ImageSourcePropType;
  profileImageSource: ImageSourcePropType;
  searchImageSource: ImageSourcePropType;
  style?: CustomViewStyleProp;
  contentContainerStyle?: CustomViewStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  searchBarStyle?: CustomViewStyleProp;
  searchInputStyle?: CustomTextStyleProp;
  subtitleTextStyle?: CustomTextStyleProp;
  menuImageStyle?: CustomImageStyleProp;
  profileImageStyle?: CustomImageStyleProp;
  onMenuImagePress: () => void;
  onProfileImagePress: () => void;
}

interface IState {}

class GorgeousHeader extends React.Component<IProps, IState> {
  renderTopBar = () => {
    const {
      menuImageStyle,
      menuImageSource,
      onMenuImagePress,
      profileImageStyle,
      profileImageSource,
      onProfileImagePress,
    } = this.props;
    return (
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.floatLeft} onPress={onMenuImagePress}>
          <Image
            source={menuImageSource}
            style={menuImageStyle || styles.menuImageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.floatRight}
          onPress={onProfileImagePress}
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
      contentContainerStyle,
    } = this.props;
    return (
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
        <Text style={[styles.subtitleTextStyle, subtitleTextStyle]}>
          {subtitle}
        </Text>
        <View style={[styles.searchBarStyle, searchBarStyle]}>
          <Image style={styles.searchImageStyle} source={searchImageSource} />
          <TextInput
            style={[styles.searchInputStyle, searchInputStyle]}
            placeholder="Search something"
            {...this.props}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderTopBar()}
        {this.renderContent()}
      </View>
    );
  }
}

export default GorgeousHeader;
