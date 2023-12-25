//import libraries
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {wp} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {useAppTheme} from '../../theme';

const CustomHeader = () => {
  const {colors} = useAppTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={22} color={colors.onBackground} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: wp(4),
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default CustomHeader;
