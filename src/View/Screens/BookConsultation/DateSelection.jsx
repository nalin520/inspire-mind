import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '../../Components/Button';
import CustomHeader from '../../Components/CustomHeader';
import ProfileHeader from '../../Components/ProfileHeader';
const data2 = [
  {label: 'Downloaded', value: '1'},
  {label: 'Remove', value: '2'},
];
const data1 = [
  {label: 'January', value: '1'},
  {label: 'February', value: '2'},
];
const DateSelect = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowContainer}>
          <Image
            style={styles.arrow}
            source={require('../../../Assets/Img/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.preferredPlanText}>Date Section</Text>
      </View> */}
      <ProfileHeader name={'Date Section'} />
      <View style={styles.horizontalLine} />
      <View style={styles.boxContainer}>
        <Text style={styles.time}>Select Time Zone</Text>
      </View>
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
      {/* <View style={styles.droplist}></View> */}
      <View style={styles.boxContainer}>
        <Dropdown
          style={[styles.dropdown, isFocus ? {borderColor: 'blue'} : {}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data1}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'September, 2023' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            setValue1(item.value);
            setIsFocus1(false);
          }}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.dateContainer}>
          <View style={styles.date}>
            <Text style={styles.oneDate}>01</Text>
            <Text style={styles.oneDate}>02</Text>
            <Text style={styles.oneDate}>03</Text>
            <Text
              style={[
                styles.oneDate,
                {backgroundColor: '#2A2EEC', color: 'white'},
              ]}>
              04
            </Text>
            <Text style={styles.oneDate}>05</Text>
            <Text style={styles.oneDate}>06</Text>
            <Text style={styles.oneDate}>07</Text>
            <Text style={styles.oneDate}>08</Text>
            <Text style={styles.oneDate}>09</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.oneDay}>Su</Text>
            <Text style={styles.oneDay}>Mo</Text>
            <Text style={styles.oneDay}>Tu</Text>
            <Text style={styles.oneDay}>We</Text>
            <Text style={styles.oneDay}>Th</Text>
            <Text style={styles.oneDay}>Fr</Text>
            <Text style={styles.oneDay}>Sa</Text>
            <Text style={styles.oneDay}>Su</Text>
            <Text style={styles.oneDay}>Mo</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.timebox}>
        <Text
          style={{
            marginTop: 30,
            marginBottom: 30,
            fontSize: 15,
            color: 'black',
          }}>
          Select Time Slot
        </Text>
        <View style={styles.timeSlot}>
          <TouchableOpacity style={[styles.timeslotBox]}>
            <Text>
              10:00 A.M {'\n'}to {'\n'}10:30 A.M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeslotBox, {backgroundColor: '#2A2EEC'}]}>
            <Text style={{color: '#fff'}}>
              10:00 A.M {'\n'}to {'\n'}10:30 A.M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeslotBox]}>
            <Text>
              10:00 A.M {'\n'}to {'\n'}10:30 A.M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeslotBox]}>
            <Text>
              10:00 A.M {'\n'}to {'\n'}10:30 A.M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeslotBox]}>
            <Text>
              10:00 A.M {'\n'}to {'\n'}10:30 A.M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timeslotBox]}>
            <Text>
              10:00 A.M {'\n'}to {'\n'}10:30 A.M
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* <TouchableOpacity
            style={[styles.button, {backgroundColor: '#2A2EEC'}]}>
            <Text
              style={[
                styles.buttonText,
                {
                  backgroundColor: '#2A2EEC',
                  fontWeight: '500',
                  fontSize: 15,
                },
              ]}>
              Next
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <Button btnText={'Next'} />

      <View style={{paddingBottom: '13%'}} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff',
    padding: 7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  arrowContainer: {
    padding: 5,
  },
  arrow: {
    height: 30,
    width: 30,
  },
  preferredPlanText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: 30,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E6EEF7',
  },
  boxContainer: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius: 19,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  time: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  droplist: {
    minWidth: 280, // Minimum width
    minHeight: 50,
    borderWidth: 2, // Border width
    borderColor: 'black', // Border color
    borderRadius: 10,
    alignItems: 'center',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  date: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  oneDate: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 17,
    minWidth: 40,
    borderRadius: 11,
    paddingVertical: 15,
    margin: 2,
    minHeight: 60,
    backgroundColor: '#EFF7FF',
    justifyContent: 'center',
  },
  day: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  oneDay: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '500',
    minWidth: 40,
    justifyContent: 'center',
    color: 'black',
    // fontSize: 10.16,
  },
  circularBorder: {
    width: 50,
    height: 50,
    borderTopRightRadius: 25, // Half of the width/height to create a circle
    backgroundColor: 'lightgray',
  },
  timebox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeSlot: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'space-between',
  },
  timeslotBox: {
    backgroundColor: '#EFF7FF',
    marginVertical: 10,
    height: 80,
    width: 80,
    fontSize: 12,
    justifyContent: 'center',
    borderRadius: 7,
    color: 'black',
    padding: 6,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 17,
    height: 40,
    width: 100,
    textAlign: 'center',
    borderRadius: 11,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '400',
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

export default DateSelect;
