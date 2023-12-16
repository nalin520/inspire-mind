//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component

interface IConsultationCard {
  rating: string;
  title: string;
  tags: string[];
  value: string;
  bookmarkColor: string;
  videoText: string;
  onPress: any;
}

const ConsultationCard = ({
  rating,
  tags,
  title,
  value,
  bookmarkColor,
  videoText,
  onPress,
}: IConsultationCard) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../Assets/Img/videoImage.png')} />
        {!value && (
          <View style={styles.playIconContainer}>
            <Ionicons name="play-outline" size={20} color="#fff" />
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text>
          <Ionicons name="star" color={'gray'} />
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.rating}>{` . ${videoText}`}</Text>
        </Text>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.chipContainer}>
          {tags?.map(tag => (
            <TouchableOpacity style={styles.chip} key={tag}>
              <Text style={styles.chipText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={[
            styles.bookmarkIconContainer,
            {borderColor: bookmarkColor ? bookmarkColor : 'gray'},
          ]}>
          <Ionicons name="bookmark-outline" size={18} color={'gray'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 14,
  },
  imgContainer: {
    position: 'relative',
    height: 90,
    width: 113,
    borderRadius: 10,
    overflow: 'hidden',
  },
  playIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 6,
    left: 6,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    flex: 1,
  },
  rating: {
    color: '#9c9c9c',
    fontSize: 13,
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: '#424242',
    fontSize: 15,
    marginBottom: 4,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    alignItems: 'center',
  },
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#D8E6F3',
    borderRadius: 5,
  },
  chipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    fontWeight: '500',
    color: 'black',
  },
  bookmarkIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 20,

    borderWidth: 1,
    position: 'absolute',
    top: 4,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default ConsultationCard;
