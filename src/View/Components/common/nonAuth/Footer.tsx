import React from 'react';
import {View, Text, StyleSheet, ViewProps} from 'react-native';
import {useAppTheme} from '../../../../theme';

interface IFooter extends ViewProps {}

export default function Footer({style = {}, ...props}: IFooter) {
  const {colors} = useAppTheme();

  return (
    <View style={[styles.root, style]} {...props}>
      <Text style={[styles.title, {color: colors.muted}]}>HELP</Text>
      <View style={[styles.dot, {borderColor: colors.muted}]} />
      <Text style={[styles.title, {color: colors.muted}]}>TERMS</Text>
      <View style={[styles.dot, {borderColor: colors.muted}]} />
      <Text style={[styles.title, {color: colors.muted}]}>POLICY</Text>
      <View style={[styles.dot, {borderColor: colors.muted}]} />
      <Text style={[styles.title, {color: colors.muted}]}>SUPPORT</Text>
    </View>
  );
}
// define your styles
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 25,
    marginBottom: 20,
  },
  title: {
    fontSize: 13,
  },
  dot: {
    borderWidth: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    borderColor: '#9C9C9C',
    marginLeft: 4,
  },
});
