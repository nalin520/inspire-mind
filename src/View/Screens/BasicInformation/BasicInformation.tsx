//import libraries
import React, {useState} from 'react';
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
import {useAppTheme} from '../../../theme';
import {activityList, ageList, genderList, leisureTimeList} from './config';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../Components/Button';
import axios from 'axios';
import {Alert} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';

const schema = yup
  .object({
    gender: yup.string().min(2).required(),
    age: yup.string().min(2).required(),
    workActivity: yup.string().min(2).required(),
    leisureTime: yup.string().min(2).required(),
  })
  .required();

const BasicInformation = () =>
  // {navigation}: any
  {
    const navigation = useNavigation();
    const {colors} = useAppTheme();
    const [loading, setLoading] = useState<boolean>(false);

    const {control, handleSubmit} = useForm({
      defaultValues: {
        gender: '',
        age: '',
        workActivity: '',
        leisureTime: '',
      },
      resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any) => {
      setLoading(true);

      const res = await axios.post('/customer/info', data);

      if (res.status !== 200) {
        Alert.alert('Alert', res.data?.message || '', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ]);
      } else {
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [{name: 'privetStack'}],
        });
        navigation.dispatch(resetAction);
      }

      setLoading(false);
    };

    return (
      <>
        <ScrollView style={[styles.root, {backgroundColor: colors.background}]}>
          <CustomHeader />

          <Text style={[styles.loginText, {color: colors.onBackground}]}>
            Basic{'\n'}Information
          </Text>

          <View style={[styles.card, {backgroundColor: colors.card}]}>
            <Text style={[styles.cardTitle, {color: colors.onBackground}]}>
              You Gender?
            </Text>
            <Text style={[styles.cardSubTitle, {color: colors.muted}]}>
              We need this information to provide you personalized experience”
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, value}, formState: {errors}}) => (
                <>
                  <View style={styles.checkboxContainer}>
                    {genderList.map(item => (
                      <TouchableOpacity
                        style={styles.checkboxWrapper}
                        key={item.id}>
                        <CheckBox
                          boxType="circle"
                          hideBox={false}
                          tintColors={{
                            true: colors.primary,
                            false: colors.primary,
                          }}
                          value={value === item.name}
                          onValueChange={() => {
                            onChange(value === item.name ? '' : item.name);
                          }}
                        />
                        <Text
                          style={[
                            styles.checkboxTitle,
                            {color: colors.onBackground},
                          ]}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  {errors.gender && (
                    <Text style={styles.errorText}>This is required.</Text>
                  )}
                </>
              )}
              name="gender"
            />
          </View>

          <View style={[styles.card, {backgroundColor: colors.card}]}>
            <Text style={[styles.cardTitle, {color: colors.onBackground}]}>
              When were you born?
            </Text>
            <Text style={[styles.cardSubTitle, {color: colors.muted}]}>
              We need this information to provide you personalized experience”
            </Text>
            <Controller
              control={control}
              render={({
                field: {onChange, value, onBlur},
                formState: {errors},
              }) => (
                <>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={ageList}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Age"
                    searchPlaceholder="Search..."
                    value={{label: value, value}}
                    onBlur={onBlur}
                    onChange={item => onChange(item.value)}
                  />
                  {errors.leisureTime && (
                    <Text style={styles.errorText}>This is required.</Text>
                  )}
                </>
              )}
              name="age"
            />
          </View>

          <View style={[styles.card, {backgroundColor: colors.card}]}>
            <Text style={[styles.cardTitle, {color: colors.onBackground}]}>
              My DAY/WORK activity level
            </Text>

            <View style={styles.checkboxContainer}>
              <Controller
                control={control}
                render={({field: {onChange, value}, formState: {errors}}) => (
                  <>
                    <View style={styles.checkboxContainer}>
                      {activityList.map(item => (
                        <TouchableOpacity
                          style={styles.checkboxWrapper}
                          key={item.id}>
                          <CheckBox
                            boxType="circle"
                            hideBox={false}
                            tintColors={{
                              true: colors.primary,
                              false: colors.primary,
                            }}
                            value={value === item.name}
                            onValueChange={() => {
                              onChange(value === item.name ? '' : item.name);
                            }}
                          />
                          <Text
                            style={[
                              styles.checkboxTitle,
                              {color: colors.onBackground},
                            ]}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    {errors.leisureTime && (
                      <Text style={styles.errorText}>This is required.</Text>
                    )}
                  </>
                )}
                name="leisureTime"
              />
            </View>
          </View>

          <View style={[styles.card, {backgroundColor: colors.card}]}>
            <Text style={[styles.cardTitle, {color: colors.onBackground}]}>
              My leisure time activity level
            </Text>

            <Controller
              control={control}
              render={({field: {onChange, value}, formState: {errors}}) => (
                <>
                  <View style={styles.checkboxContainer}>
                    {leisureTimeList.map(item => (
                      <TouchableOpacity
                        style={styles.checkboxWrapper}
                        key={item.id}>
                        <CheckBox
                          boxType="circle"
                          hideBox={false}
                          tintColors={{
                            true: colors.primary,
                            false: colors.primary,
                          }}
                          value={value === item.name}
                          onValueChange={() => {
                            onChange(value === item.name ? '' : item.name);
                          }}
                        />
                        <Text
                          style={[
                            styles.checkboxTitle,
                            {color: colors.onBackground},
                          ]}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  {errors.workActivity && (
                    <Text style={styles.errorText}>This is required.</Text>
                  )}
                </>
              )}
              name="workActivity"
            />
          </View>

          <Button
            onPress={handleSubmit(onSubmit)}
            btnText="NEXT"
            disabled={loading}
            isLoading={loading}
            style={styles.wFull}
          />
        </ScrollView>
      </>
    );
  };

// define your styles
const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  loginText: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    marginBottom: 24,
    marginTop: 10,
  },
  card: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 24,
  },
  cardTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    marginBottom: 4,
  },
  cardSubTitle: {
    fontFamily: 'Inter-Light',
    fontSize: 13,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  dropdown: {
    height: 50,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
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
  errorText: {
    fontSize: 13,
    color: 'red',
    marginLeft: 8,
    marginTop: -8,
  },
  wFull: {
    width: '100%',
  },
});

//make this component available to the app
export default BasicInformation;
