// import liraries
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import ProfileHeader from '../../Components/ProfileHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';

// create a component
const IntervalBellList = () => {
  const items = [
    {subItems: ['Img', 'Basu - Bell', '00:35']},
    {subItems: ['Img', 'Basu - Bell', '00:35']},
  ];
  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet.current.open(); // Open the RBSheet when the component mounts
  }, []);
  const handleFilter = id => {
    //     setBottom(id);
    refRBSheet.current.open();
  };

  return (
    <>
      <ProfileHeader name={'Interval Bell'} />
      <ScrollView style={styles.container}>
        {items.map((item, index) => (
          <View style={styles.box} key={index}>
            <View style={styles.imgName}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Inter',
                  marginHorizontal: 5,
                }}>
                {item.subItems[0]}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Inter',
                }}>
                {item.subItems[1]}
              </Text>
            </View>
            <View style={styles.imgTime}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Inter',
                }}>
                {item.subItems[2]}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{}}>
            <View
              style={{
                borderTopWidth: 4,
                borderRightWidth: 4,
                borderRadius: 83,
                borderColor: 'rgba(42, 46, 236, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(42, 46, 236, 1)',
                  height: 83,
                  width: 83,
                  borderRadius: 83,
                  margin: 10,
                }}>
                <AntDesign
                  name="check"
                  size={35}
                  color={'rgba(255, 255, 255, 1)'}
                />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  fontSize: 16,
                  color: 'black',
                }}>
                PROFILE SAVED
              </Text>
            </View>
          </View>
          <View style={{paddingBottom: '13%'}} />
        </View>
      </RBSheet>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    padding: 10,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: 'rgba(239, 247, 255, 1)',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    height: 53,
    alignItems: 'center',
  },
  imgName: {
    display: 'flex',
    flexDirection: 'row',
  },
});

// make this component available to the app
export default IntervalBellList;
