import * as React from "react";
import {
  ImageProperties,
  ImageSourcePropType,
  ImageStyle,
  StyleProp
} from "react-native";

interface Props extends ImageProperties {
  componentRender?: (
    props: ImageProperties,
    children: React.ReactNode
  ) => React.ReactNode;
  placeholderSource?: ImageSourcePropType;
  loadingStyle?: { size: string; color: string };
  isShowActivity?: boolean;
  placeholderStyle?: StyleProp<ImageStyle>;
  customImagePlaceholderDefaultStyle?: StyleProp<ImageStyle>;
  borderRadius?: number;
}

interface State {
  isLoaded?: boolean;
  isError?: boolean;
}

export default class ImageLoad extends React.Component<Props, State> {}
