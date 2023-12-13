//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import Button from '../../Components/Button';

// create a component
const Login = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.loginText}>Log in</Text>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingHorizontal: 40,
          }}>
          <Image
            style={{height: 40, width: 40, resizeMode: 'contain'}}
            source={require('../../../Assets/Img/Facebook.png')}
          />
          <Image
            style={{height: 40, width: 40, resizeMode: 'contain'}}
            source={require('../../../Assets/Img/Apple.png')}
          />
          <Image
            style={{height: 40, width: 40, resizeMode: 'contain'}}
            source={require('../../../Assets/Img/Google.png')}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingHorizontal: 40,
            marginTop: 20,
          }}>
          <View
            style={{
              width: '45%',
              borderWidth: 0.5,
              height: 1,
              alignSelf: 'center',
            }}
          />
          <Text style={{paddingHorizontal: 5}}>OR</Text>
          <View
            style={{
              width: '45%',
              borderWidth: 0.5,
              height: 1,
              alignSelf: 'center',
            }}
          />
        </View>
        <CustomInput placeholder={'Email....'} />
        <CustomInput placeholder={'Password....'} />
        <TouchableOpacity
          onPress={() => navigation?.navigate('ForgotPassword')}>
          <Text
            style={{
              textAlign: 'right',
              marginVertical: 2,
              color: '#9C9C9C',
              marginBottom: '10%',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Button
          onPress={() => navigation.navigate('BasicInformation')}
          btnText={'Next'}
        />
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: '10%'}}>
          <Text style={{fontFamily: 'Inter-Bold', color: '#424242'}}>
            New to Inspire mind{`  `}
          </Text>
          <Text
            onPress={() => navigation?.navigate('SignUp')}
            style={{
              borderBottomWidth: 1,
              borderColor: '#2A2EEC',
              color: '#2A2EEC',
            }}>
            Sign up for free
          </Text>
        </View>
        <View></View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#fff',
          paddingVertical: 25,
        }}>
        {/* <View style={{flexDirection: 'row'}}> */}
        <Text>HELP</Text>
        <View
          style={{
            borderWidth: 2,
            width: 4,
            height: 4,
            borderRadius: 2,
            alignSelf: 'center',
            borderColor: '#9C9C9C',
            marginLeft: 4,
          }}
        />
        {/* </View> */}
        {/* <View style={{flexDirection: 'row'}}> */}
        <Text>TERMS</Text>
        <View
          style={{
            borderWidth: 2,
            width: 4,
            height: 4,
            borderRadius: 2,
            alignSelf: 'center',
            borderColor: '#9C9C9C',
            marginLeft: 4,
          }}
        />
        {/* </View> */}
        {/* <View style={{flexDirection: 'row'}}> */}
        <Text>POLICY</Text>
        <View
          style={{
            borderWidth: 2,
            width: 4,
            height: 4,
            borderRadius: 2,
            alignSelf: 'center',
            borderColor: '#9C9C9C',
            marginLeft: 4,
          }}
        />
        {/* </View> */}
        {/* <View style={{flexDirection: 'row'}}> */}
        <Text>SUPPORT</Text>
        {/* <View
            style={{
              borderWidth: 2,
              width: 4,
              height: 4,
              borderRadius: 2,
              alignSelf: 'center',
              borderColor: '#9C9C9C',
              marginLeft: 4,
            }}
          /> */}
        {/* </View> */}
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    padding: 20,
    paddingTop: '10%',
  },
  loginText: {
    fontFamily: 'Inter-Bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 25,
  },
});

//make this component available to the app
export default Login;
