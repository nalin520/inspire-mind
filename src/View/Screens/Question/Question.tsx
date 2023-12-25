//import libraries
import React, {useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useAppTheme} from '../../../theme';
import SliderProgressBar from '../../Components/common/SliderProgressBar';
import axios from 'axios';
import GoalQuestions, {IGoal} from './GoalQuestions';
import SpecializationQuestions from './SpecializationQuestions';
import CircleButton from '../../Components/common/button/CircleButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {mapToArray} from '../../../libs/formatter';
import MoodQuestions from './MoodQuestions';

enum SCREEN {
  GOAL,
  SPECIALIZATION,
  MODE,
}

// create a component
const Question = ({navigation}: any) => {
  const {colors} = useAppTheme();
  const [goals, setGoals] = useState<IGoal[]>([]);
  const [specialization, setSpecialization] = useState<IGoal[]>([]);
  const [activeScreen, setActiveScreen] = useState<SCREEN>(SCREEN.GOAL);
  const [selectedGoal, setSelectedGoal] = useState<IMap>({});
  const [selectedSpecialization, setSelectedSpecialization] = useState<IMap>(
    {},
  );
  const [mood, setMood] = useState<number>(0);

  const progress = useMemo(() => {
    if (activeScreen === SCREEN.GOAL) {
      return 0;
    }
    if (activeScreen === SCREEN.SPECIALIZATION) {
      return 50;
    }
    return 100;
  }, [activeScreen]);

  useEffect(() => {
    async function getList() {
      const list = await axios.get(
        '/public/general-configuration/specialization',
        {
          params: {
            sectionName: 'GOAL_TYPE',
          },
        },
      );
      if (list.status === 200) {
        setGoals(list.data);
      }
    }
    async function getSpecializationList() {
      const list = await axios.get(
        '/public/general-configuration/specialization',
        {
          params: {
            sectionName: 'SPECIALIZATION',
          },
        },
      );
      if (list.status === 200) {
        setSpecialization(list.data);
      }
    }

    getList();
    getSpecializationList();
  }, []);

  const updateProfile = async (data: any) => {
    await axios.post('/customer/info', data);
  };

  const handlePrev = () => {
    switch (activeScreen) {
      case SCREEN.SPECIALIZATION:
        setActiveScreen(SCREEN.GOAL);
        return;
      case SCREEN.MODE:
        setActiveScreen(SCREEN.SPECIALIZATION);
        return;
    }
  };

  const handleNext = () => {
    switch (activeScreen) {
      case SCREEN.GOAL:
        const goalsList = mapToArray(selectedGoal);
        if (!goalsList.length) {
          return;
        }
        updateProfile({overallGoal: goalsList});
        setActiveScreen(SCREEN.SPECIALIZATION);
        return;
      case SCREEN.SPECIALIZATION:
        const specializationList = mapToArray(selectedSpecialization);
        if (!specializationList.length) {
          return;
        }
        updateProfile({specialization: specializationList});
        setActiveScreen(SCREEN.MODE);
        return;
      case SCREEN.MODE:
        updateProfile({currentMode: mood});
        navigation.navigate('basicInformation');
        return;
    }
  };

  return (
    <View style={[styles.root, {backgroundColor: colors.background}]}>
      <SliderProgressBar progress={progress} />

      {activeScreen === SCREEN.GOAL && (
        <GoalQuestions
          list={goals}
          selectedGoal={selectedGoal}
          setSelectedGoal={setSelectedGoal}
        />
      )}
      {activeScreen === SCREEN.SPECIALIZATION && (
        <SpecializationQuestions
          list={specialization}
          selectedSpecialization={selectedSpecialization}
          setSelectedSpecialization={setSelectedSpecialization}
        />
      )}

      {activeScreen === SCREEN.MODE && (
        <MoodQuestions mood={mood} setMood={setMood} />
      )}

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.prevBtn, {backgroundColor: colors.muted}]}
          activeOpacity={0.6}
          onPress={handlePrev}>
          <AntDesign color="#fff" name="arrowleft" size={20} />
        </TouchableOpacity>

        <CircleButton percentage={progress} size={72} onPress={handleNext} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prevBtn: {
    borderRadius: 100,
    padding: 16,
  },
});

//make this component available to the app
export default Question;
