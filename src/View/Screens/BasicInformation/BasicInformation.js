//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import CheckBox from '@react-native-community/checkbox';
import {Dropdown} from 'react-native-element-dropdown';

// create a component

const DATA = [
  {
    id: 0,
    name: 'Male',
  },
  {
    id: 1,
    name: 'Female',
  },
  {
    id: 2,
    name: 'Non-Binary',
  },
  {
    id: 3,
    name: 'I prefer not to say',
  },
  {
    id: 4,
    name: 'Other',
  },
];
const DATA2 = [
  {
    id: 0,
    name: 'Light',
  },
  {
    id: 1,
    name: 'Moderate',
  },
  {
    id: 2,
    name: 'Heavy',
  },
];
const DATA3 = [
  {
    id: 0,
    name: 'Inactive',
  },
  {
    id: 1,
    name: 'Moderate',
  },
  {
    id: 2,
    name: 'Very Active ',
  },
];
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const BasicInformation = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [id, setId] = useState();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const Check = newValue => {
    setToggleCheckBox(newValue);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <CustomHeader />
        <Text style={styles.loginText}>Basic{'\n'}Information</Text>
        <View
          style={{backgroundColor: '#EFF7FF', padding: 15, borderRadius: 12}}>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 15,
              marginBottom: 5,
              color: 'black',
            }}>
            You Gender?
          </Text>
          <Text style={{color: '#9C9C9C'}}>
            We need this information to provide you personalized experience”
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            {DATA.map((item, index) => (
              <TouchableOpacity
                // onPress={() => Check(item.id)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={{color: '#000000'}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#EFF7FF',
            padding: 15,
            borderRadius: 12,
            marginTop: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 15,
              marginBottom: 5,
              color: 'black',
            }}>
            When were you born?
          </Text>
          <Text style={{color: '#9C9C9C'}}>
            We need this information to provide you personalized experience”
          </Text>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Age' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#EFF7FF',
            padding: 15,
            borderRadius: 12,
            marginTop: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 15,
              marginBottom: 5,
              color: 'black',
            }}>
            My DAY/WORK activity level
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            {DATA2.map((item, index) => (
              <TouchableOpacity
                // onPress={() => Check(item.id)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={{color: '#000000'}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#EFF7FF',
            padding: 15,
            borderRadius: 12,
            marginTop: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 15,
              marginBottom: 5,
              color: 'black',
            }}>
            My leisure time activity level
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            {DATA3.map((item, index) => (
              <TouchableOpacity
                // onPress={() => Check(item.id)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={{color: '#000000'}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{paddingBottom: 50}} />
      </ScrollView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
  },
  loginText: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    marginBottom: 10,
    color: 'black',
  },
  dropdown: {
    height: 50,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
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
export default BasicInformation;
