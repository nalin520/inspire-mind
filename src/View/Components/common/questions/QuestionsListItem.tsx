import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useAppTheme} from '../../../../theme';

interface IQuestionsListItem {
  id: any;
  icon: any;
  name: string;
  selected?: boolean;
  onPress?: any;
}

export default function QuestionsListItem({
  id,
  icon,
  name,
  selected,
  onPress,
}: IQuestionsListItem) {
  const {colors} = useAppTheme();

  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      style={[
        styles.card,
        {backgroundColor: selected ? colors.primary : colors.card},
      ]}>
      <Image style={styles.icon} source={{uri: icon}} />
      <Text
        style={[
          styles.cardTitle,
          {color: selected ? colors.onPrimary : colors.onCard},
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

// define your styles
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 16,
    minHeight: 52,
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    marginLeft: 20,
    paddingRight: 10,
  },
});
