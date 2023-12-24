//import liraries
import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ConsultationCard from '../../Components/ConsultationCard';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FontFamily} from '../../../styles/globalStyle';
const data = [
  {
    id: 0,
    name: 'Sort',
  },
  {
    id: 1,
    name: 'Length',
  },
  {
    id: 2,
    name: 'Filter',
  },
  {
    id: 3,
    name: 'Bookmark',
  },
];
const data2 = [
  {
    id: 0,
    name: 'Morning Routines',
    image: require('../../../Assets/Img/Sun.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 1,
    name: 'Stress',
    image: require('../../../Assets/Img/moon.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 2,
    name: 'Sleep',
    image: require('../../../Assets/Img/sleep.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 3,
    name: 'Anxiety',
    image: require('../../../Assets/Img/head.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 4,
    name: 'Parenting',
    image: require('../../../Assets/Img/group.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 5,
    name: 'Religion',
    image: require('../../../Assets/Img/hand.png'),
    tags: ['Yoga', 'Meditation'],
  },
];
const Sort = [
  {
    id: 0,
    name: 'Most Played',
  },
  {
    id: 1,
    name: 'Highest Rated',
  },
  {
    id: 2,
    name: 'Newest',
  },
  {
    id: 3,
    name: 'Shortest',
  },
  {
    id: 4,
    name: 'Longest',
  },
];
const Length = [
  {
    id: 0,
    name: 'All length',
  },
  {
    id: 1,
    name: 'Upto 5 Min',
  },
  {
    id: 2,
    name: '05 - 10 Min',
  },
  {
    id: 3,
    name: '10-15 Min',
  },
  {
    id: 4,
    name: '15-20 Min',
  },
  {
    id: 5,
    name: '20-30 Min',
  },
  {
    id: 6,
    name: '30 Min +',
  },
];
const Filter = [
  {
    id: 0,
    name: 'Audio',
  },
  {
    id: 1,
    name: 'Female voice only',
  },
  {
    id: 2,
    name: 'Male voice only',
  },
  {
    id: 3,
    name: 'With background music',
  },
  {
    id: 4,
    name: '15-20 Min',
  },
  {
    id: 5,
    name: '20-30 Min',
  },
  {
    id: 5,
    name: '30 Min +',
  },
];
// create a component
const Video = ({navigation}) => {
  const [bottom, setBottom] = useState();
  const refRBSheet = useRef();

  const handleFilter = id => {
    setBottom(id);
    refRBSheet.current.open();
  };
  return (
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.btnContainer}>
        {data.map(item => (
          <TouchableOpacity
            style={styles.btnView}
            key={item.id.toString()}
            onPress={() => handleFilter(item.id)}>
            <Text style={styles.btnText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.list}>
        {data2.map(item => (
          <ConsultationCard
            key={item.id}
            rating="4.5"
            tags={item.tags}
            title={item.name}
            // value={'true'}
            bookmarkColor={'black'}
            videoText={'50 MIN'}
            onPress={() => navigation?.navigate('details')}
            playBtnColor={'black'}
          />
        ))}
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            backgroundColor: '#E6E6E6',
            borderTopRightRadius: 27,
            borderTopLeftRadius: 27,

            paddingHorizontal: 19,
          },
        }}>
        {bottom == 0 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {Sort.map(item => (
              <TouchableOpacity
                key={item.id.toString()}
                style={{
                  borderRadius: 8,
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderColor: '#D2D2D2',
                }}>
                <Text
                  style={{
                    fontFamily: FontFamily.interSemiBold,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        {bottom == 1 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {Length.map(item => (
              <TouchableOpacity
                key={item.id.toString()}
                style={{
                  borderRadius: 8,
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderColor: '#D2D2D2',
                }}>
                <Text
                  style={{
                    fontFamily: FontFamily.interSemiBold,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        {bottom == 2 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {Filter.map(item => (
              <TouchableOpacity
                key={item.id.toString()}
                style={{
                  borderRadius: 8,
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderColor: '#D2D2D2',
                }}>
                <Text
                  style={{
                    fontFamily: FontFamily.interSemiBold,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </RBSheet>
      <View style={{paddingBottom: 30}} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  btnView: {
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 7,
    marginRight: 15,
  },

  btnContainer: {},
  btnText: {
    fontFamily: 'Inter-Light',
    color: 'black',
    fontSize: 14,
  },
  list: {
    gap: 12,
    paddingVertical: 16,
  },
});

//make this component available to the app
export default Video;
