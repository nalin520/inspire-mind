import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppTheme} from '../../../theme';
import MoodSlider from '../../Components/common/MoodSlider';

interface IGoalQuestions {
  mood: number;
  setMood: React.Dispatch<React.SetStateAction<number>>;
}

export default function MoodQuestions({mood, setMood}: IGoalQuestions) {
  const {colors} = useAppTheme();

  return (
    <View style={styles.root}>
      <Text style={[styles.title, {color: colors.onBackground}]}>
        How's Are You &nbsp;
        <Text style={{color: colors.primary}}>Mood..?</Text>
      </Text>
      <MoodSlider value={mood} setValue={setMood} />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 14,
    textAlign: 'center',
  },
});
