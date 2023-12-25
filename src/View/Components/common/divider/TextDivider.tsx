import React from 'react';
import {View, StyleSheet, Text, ViewProps} from 'react-native';
import {useAppTheme} from '../../../../theme';

interface ITextDivider extends ViewProps {
  text: React.ReactNode;
}

function TextDivider({text, style = {}, ...props}: ITextDivider) {
  const {colors} = useAppTheme();

  return (
    <View style={[styles.dividerContainer, style]} {...props}>
      <View style={styles.dividerLine} />
      <Text style={[styles.dividerText, {color: colors.onCard}]}>{text}</Text>
      <View style={styles.dividerLine} />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  dividerContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  dividerLine: {
    flex: 1,
    borderWidth: 0.5,
    height: 1,
    alignSelf: 'center',
    borderColor: '#575757',
  },
  dividerText: {
    fontSize: 13,
    paddingHorizontal: 8,
  },
});

export default TextDivider;
