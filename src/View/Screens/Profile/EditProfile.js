//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import ProfileHeader from '../../Components/ProfileHeader';
import CustomInput from '../../Components/CustomInput';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '../../Components/Button';
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
// create a component
const EditProfile = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <ProfileHeader name={'Edit Profile'} />
      <ScrollView style={styles.container}>
        <View>
          <View
            style={{
              backgroundColor: '#EFF7FF',
              height: 100,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              alignSelf: 'center',
            }}>
            <Image
              style={{
                height: 80,
                width: 80,
                fontFamily: 'Inter-Bold',
                color: 'black',
              }}
              source={require('../../../Assets/Img/person.png')}
            />
            <Image
              style={{
                height: 20,
                width: 20,
                position: 'absolute',
                top: 10,
                right: 2,
              }}
              source={require('../../../Assets/Img/edit.png')}
            />
          </View>
        </View>

        <CustomInput placeholder={'John Due'} />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Dropdown
            style={[
              styles.dropdown,
              isFocus ? {borderColor: 'blue'} : {width: '30%'},
            ]}
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
          <Dropdown
            style={[
              styles.dropdown,
              isFocus ? {borderColor: 'blue'} : {width: '65%'},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Gender' : '...'}
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
          placeholder={!isFocus ? 'Select Language' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <CustomInput placeholder={'John Due'} />
        <CustomInput placeholder={'John Due'} />
        <Button btnText={'SUBMIT'} />
        <View style={{paddingBottom: 30}} />
      </ScrollView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
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
export default EditProfile;
