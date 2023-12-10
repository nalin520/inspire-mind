import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ColorName} from '../../Controller/Color/ColorName';
import React from 'react';
import {
  THEMES,
  useThemeController,
} from '../../Controller/ThemeController/useThemeController';
import {useColorController} from '../../Controller/Color/useColorController';

export const Test = () => {
  const theme = useThemeController();
  const {getColor} = useColorController();
  return (
    <View>
      <Text style={[style.text, {color: getColor(ColorName.primary_001)}]}>
        My name is anirban
      </Text>
      <Pressable
        onPress={() => {
          theme.changeCurrentTheme(THEMES.dark);
        }}>
        <Text>Press Me </Text>
      </Pressable>
    </View>
  );
};
const style = StyleSheet.create({
  text: {},
});
