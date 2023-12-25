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

interface ISpecializationQuestions {
  list: IGoal[];
  selectedSpecialization: IMap;
  setSelectedSpecialization: React.Dispatch<React.SetStateAction<IMap>>;
}

function SpecializationQuestions({
  list,
  selectedSpecialization,
  setSelectedSpecialization,
}: ISpecializationQuestions) {
  const {colors} = useAppTheme();

  const onPress = (id: string) => {
    setSelectedSpecialization(prev => ({...prev, [id]: !prev[id]}));
  };

  return (
    <View style={styles.listContainer}>
      <Text style={[styles.title, {color: colors.onBackground}]}>
        You Are Here For...
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map(item => (
          <QuestionsListItem
            key={item._id}
            id={item._id}
            icon={item.icon}
            name={item.title}
            selected={selectedSpecialization[item._id]}
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

export default SpecializationQuestions;
