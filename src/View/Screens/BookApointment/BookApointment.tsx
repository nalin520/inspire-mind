import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Color, FontFamily, FontSize} from '../../../styles/globalStyle';
import {Text} from 'react-native-paper';

const BookApointment = () => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Let's find your consultation</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.contentTitle}>Select Goals :</Text>

        <View style={styles.list}>
          <View style={[styles.listItem, styles.listItemActive]}>
            <Text style={[styles.listItemText, styles.listItemTextActive]}>
              Stress management
            </Text>
            <Text style={styles.listItemText}>Stress management</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Better Sleep</Text>
            <Text style={styles.listItemText}>Stress management</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Meditation</Text>
            <Text style={styles.listItemText}>Stress management</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Mindfulness</Text>
            <Text style={styles.listItemText}>Stress management</Text>
          </View>
        </View>

        <Text style={styles.contentTitle}>Preferred Option :</Text>

        <View style={styles.optionContainer}>
          <View style={[styles.optionContainer, styles.row]}>
            <View style={[styles.option, styles.flex1]}>
              <Text style={styles.optionText}>Online</Text>
            </View>
            <View style={[styles.option, styles.flex1]}>
              <Text style={styles.optionText}>Phone</Text>
            </View>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>Offline</Text>
          </View>
        </View>

        <View style={[styles.nextBtn]}>
          <Text style={styles.nextBtnText}>NEXT</Text>
        </View>
      </View>

      {/* <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require('../assets/group-66.png')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.colorWhite,
  },
  header: {
    gap: 20,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: '#d8e6f3',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  headerText: {
    fontSize: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  body: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 20,
    paddingBottom: 20,
  },
  contentTitle: {
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  list: {
    gap: 16,
    marginBottom: 30,
  },
  listItem: {
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.colorAliceblue,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    minHeight: 50,
  },
  listItemActive: {
    backgroundColor: Color.colorMediumblue,
  },
  listItemText: {
    lineHeight: 19,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    textTransform: 'capitalize',
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    color: Color.colorBlack,
  },
  listItemTextActive: {
    color: Color.colorWhite,
  },
  optionContainer: {
    gap: 16,
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorAliceblue,
    borderRadius: 10,
    padding: 16,
  },
  optionText: {
    color: Color.colorBlack,
  },
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  nextBtn: {
    width: 165,
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: Color.colorMediumblue,
  },
  nextBtnText: {
    fontSize: FontSize.size_mini,
    color: 'white',
  },
});

export default BookApointment;
