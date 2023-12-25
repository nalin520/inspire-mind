import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {TextSizeType} from '../../../Controller/TextSize/TextSizeType';

const JournalText = () => {
  const [text, setText] = useState('');

  const handleInputChange = inputText => {
    setText(inputText);
  };

  const handleButtonPress = () => {
    // Handle the button press with the entered text
    console.log('Entered text:', text);
  };

  return (
    <>
      <View style={{height: '100%'}}>
        <View style={[styles.container]}>
          <View>
            <Entypo
              name="cross"
              size={20}
              color={'black'}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            New Entry
          </Text>
          <Text style={{color: 'black'}}>Save</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter text"
            onChangeText={handleInputChange}
            value={text}
            textAlignVertical="top" // Set text alignment to top
            multiline // Allow multiple lines
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    height: '100%',
  },
});

export default JournalText;
