import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../Adapter/ReactNavigation/ScreenParamList';
import {ScreenNames} from '../../../Adapter/ReactNavigation/ScreenNames';
import {NativeText} from '../../Components/NativeText';
import {Background} from '../../Components/Background';
import {
  fs,
  hp,
  wp,
} from '../../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {BlankSpacer} from '../../Components/BlankSpacer';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {images} from '../../../Utils/images';
import {NativeImage} from '../../Components/NativeImage';
import {useColorController} from '../../../Controller/Color/useColorController';
import {ColorName} from '../../../Controller/Color/ColorName';

type props = NativeStackScreenProps<RootStackParamList, ScreenNames.Duration>;
const Duration = ({navigation}: props) => {
  const {getColor} = useColorController();
  const gererateHrsHand = () => {
    const hr: number[] = [];
    for (let i = 0; i <= 23; i++) {
      hr.push(i);
    }
    return hr;
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <NativeImage
          source={images.Back2}
          size={wp(5)}
          onPress={() => navigation.goBack()}
        />
        <NativeText text="Duration" style={{fontSize: fs(5)}} />
        <BlankSpacer width={wp(2)} />
      </View>
    );
  };
  const renderTimer = () => {
    return (
      <View>
        <BlankSpacer height={hp(5)} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: wp(90),
          }}>
          <View style={{alignItems: 'center'}}>
            <NativeText
              text="HRS"
              style={{
                fontSize: fs(5),
                color: getColor(ColorName.secondary_002),
              }}
            />
            <BlankSpacer height={hp(1)} />
            <BlankSpacer
              height={hp(0.2)}
              width={wp(20)}
              backgroundColor={getColor(ColorName.secondary_002)}
            />
            <BlankSpacer height={hp(2)} />
            <FlatList
              data={gererateHrsHand()}
              showsVerticalScrollIndicator={false}
              style={{width: wp(20), height: hp(30)}}
              renderItem={({item}) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <NativeText
                    text={item.toString()}
                    style={{fontSize: fs(15)}}
                  />
                </View>
              )}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <NativeText
              text="MIN"
              style={{
                fontSize: fs(5),
                color: getColor(ColorName.secondary_002),
              }}
            />
            <BlankSpacer height={hp(1)} />
            <BlankSpacer
              height={hp(0.2)}
              width={wp(20)}
              backgroundColor={getColor(ColorName.secondary_002)}
            />
            <BlankSpacer height={hp(2)} />
            <FlatList
              data={gererateHrsHand()}
              showsVerticalScrollIndicator={false}
              style={{width: wp(20), height: hp(30)}}
              renderItem={({item}) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <NativeText
                    text={item.toString()}
                    style={{fontSize: fs(15)}}
                  />
                </View>
              )}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <NativeText
              text="SEC"
              style={{
                fontSize: fs(5),
                color: getColor(ColorName.secondary_002),
              }}
            />
            <BlankSpacer height={hp(1)} />
            <BlankSpacer
              height={hp(0.2)}
              width={wp(20)}
              backgroundColor={getColor(ColorName.secondary_002)}
            />

            <BlankSpacer height={hp(2)} />
            <FlatList
              data={gererateHrsHand()}
              showsVerticalScrollIndicator={false}
              style={{width: wp(20), height: hp(30)}}
              renderItem={({item}) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <NativeText
                    text={item.toString()}
                    style={{fontSize: fs(15)}}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <BlankSpacer height={hp(5)} />
        <Image
          source={images.Infinite}
          style={{
            width: wp(30),
            height: hp(10),
            resizeMode: 'stretch',
            alignSelf: 'center',
          }}
        />
      </View>
    );
  };
  const renderButton = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            width: wp(40),
            height: hp(6),
            backgroundColor: getColor(ColorName.secondary_001),
            borderRadius: wp(2),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NativeText
            text={'Cancel'}
            style={{color: getColor(ColorName.secondary_100), fontSize: wp(4)}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: wp(40),
            height: hp(6),
            backgroundColor: getColor(ColorName.blue_001),
            borderRadius: wp(2),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NativeText text={'Save'} style={{fontSize: wp(4)}} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Background fullHeight={true}>
      {renderHeader()}
      <BlankSpacer height={hp(2)} />
      <BlankSpacer
        width={wp(90)}
        height={hp(0.2)}
        backgroundColor={getColor(ColorName.secondary_002)}
      />
      <BlankSpacer height={hp(10)} />
      {renderTimer()}
      <BlankSpacer height={hp(15)} />
      {renderButton()}
    </Background>
  );
};
export default Duration;