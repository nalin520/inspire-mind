//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Switch, ScrollView} from 'react-native';
import ProfileHeader from '../../Components/ProfileHeader';
import {ToggleButton} from 'react-native-paper';

// create a component
const CustomizeStatus = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <ProfileHeader name={'Customized Stats'} source={'ss'} />
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
            Home screen counter
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View>
          <Text
            style={{fontFamily: 'Inter-Bold', color: 'black', marginTop: '5%'}}>
            Activities
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 15,
              borderBottomWidth: 0.4,
              marginTop: '5%',
            }}>
            <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
              Sleep tracking
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 15,
              borderBottomWidth: 0.4,
              marginTop: 10,
            }}>
            <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
              Music tracking
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 15,
              borderBottomWidth: 0.4,
              marginTop: 10,
            }}>
            <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
              Read tracking
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 15,
              borderBottomWidth: 0.4,
              marginTop: 10,
            }}>
            <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
              Live event tracking
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 15,
              borderBottomWidth: 0.4,
              marginTop: 10,
            }}>
            <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
              Journal Tracking
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
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
});

//make this component available to the app
export default CustomizeStatus;
