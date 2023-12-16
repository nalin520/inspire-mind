import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Divider} from 'react-native-paper';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardContent}>
          A Board Certified Family Doctor with seven years of clinical
          experience, specializing in patient care, case management, family
          medicine, and communication.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.cardContent, styles.textSecondary]}>
          <Ionicons name="location" /> 1 Forest Drive, Washington
        </Text>
        <View style={styles.chipContainer}>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>French</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>Persian</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardContent}>10+ Years</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.eduContainer}>
          <View>
            <Entypo name="graduation-cap" style={styles.eduIcon} />
          </View>
          <View>
            <Text style={styles.eduTitle}>GTU at BE Computer</Text>
            <Text style={styles.eduSubTitle}>08/02/2023 - 08/02/2023</Text>
          </View>
        </View>
        <Divider style={styles.eduDivider} />
        <View style={styles.eduContainer}>
          <View>
            <Entypo name="graduation-cap" style={styles.eduIcon} />
          </View>
          <View>
            <Text style={styles.eduTitle}>GTU at BE Computer</Text>
            <Text style={styles.eduSubTitle}>08/02/2023 - 08/02/2023</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    gap: 14,
  },
  card: {
    backgroundColor: '#EFF7FF',
    padding: 15,
    borderRadius: 10,
  },
  cardContent: {
    fontSize: 13,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Inter-Regular',
  },
  textSecondary: {
    color: '#9c9c9c',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  chip: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    backgroundColor: '#D8E6F3',
    borderRadius: 8,
  },
  chipText: {
    color: 'black',
    fontFamily: 'Inter-Regular',
  },
  eduContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  eduIcon: {
    fontSize: 16,
    color: '#4b6271',
    marginTop: 2,
  },
  eduTitle: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Inter-SemiBold',
    color: 'black',
  },
  eduSubTitle: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Inter-SemiBold',
    color: '#9c9c9c',
  },
  eduDivider: {
    marginVertical: 10,
  },
});

//make this component available to the app
export default About;
