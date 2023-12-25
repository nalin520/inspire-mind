import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import QuestionsListItem from '../../Components/common/questions/QuestionsListItem';
import {useAppTheme} from '../../../theme';

export interface IGoal {
  icon: string;
  _id: string;
  title: string;
  macroName: string;
}

interface IGoalQuestions {
  list: IGoal[];
  selectedGoal: IMap;
  setSelectedGoal: React.Dispatch<React.SetStateAction<IMap>>;
}

export default function GoalQuestions({
  list,
  selectedGoal,
  setSelectedGoal,
}: IGoalQuestions) {
  const {colors} = useAppTheme();

  const onPress = (id: string) => {
    setSelectedGoal(prev => ({...prev, [id]: !prev[id]}));
  };

  return (
    <View style={styles.listContainer}>
      <Text style={[styles.title, {color: colors.onBackground}]}>
        I'm here for...
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map(item => (
          <QuestionsListItem
            key={item._id}
            id={item._id}
            icon={item.icon}
            name={item.title}
            selected={selectedGoal[item._id]}
            onPress={onPress}
          />
        ))}
      </ScrollView>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    marginBottom: 28,
  },
});
