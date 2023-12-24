import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import ConsultationCard from '../../Components/ConsultationCard';
import {Color} from '../../../styles/globalStyle';
import {Dropdown} from 'react-native-element-dropdown';
const data2 = [
  {label: 'Downloaded', value: '1'},
  {label: 'Remove', value: '2'},
];
const data = [
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

// create a component
const RecentActivity = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus ? {borderColor: 'blue'} : {}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Download' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <View style={styles.list}>
        {data.map(item => (
          <ConsultationCard
            key={item.id}
            rating="4.5"
            tags={item.tags}
            title={item.name}
            bookmarkBackgroundColor="rgba(42, 46, 236, 1)"
            bookmarkColor={'rgba(42, 46, 236, 1)'}
            bookmarkIconColor={Color.colorWhite}
            videoText="50 MIN"
            playBtnColor="rgba(0, 0, 0, 1)"
          />
        ))}
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  list: {
    gap: 10,
    paddingVertical: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 20,
    marginBottom: 15,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

//make this component available to the app
export default RecentActivity;
