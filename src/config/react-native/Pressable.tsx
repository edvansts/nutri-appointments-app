import React, { FunctionComponent } from "react";

import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface PressableProps extends RNPressableProps {
  style?: StyleProp<ViewStyle>; // override to standard ViewStyle
  pressStyle?: ViewStyle; // optional style object for when pressed
}

type MergePressableStylesFn = (
  style?: StyleProp<ViewStyle>,
  pressStyle?: ViewStyle
) => RNPressableProps["style"];

const mergePressableStyles: MergePressableStylesFn = (style, pressStyle) => {
  if (!pressStyle) {
    return style;
  }

  if (!style) {
    return ({ pressed }) => (pressed ? pressStyle : undefined);
  }

  return ({ pressed }) => (pressed ? [style, pressStyle] : style);
};

export const Pressable: FunctionComponent<PressableProps> = ({
  style,
  pressStyle,
  ...props
}) => (
  <RNPressable style={mergePressableStyles(style, pressStyle)} {...props} />
);
