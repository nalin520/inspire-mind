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
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {images} from '../../../Utils/images';
import {NativeImage} from '../../Components/NativeImage';
import {useColorController} from '../../../Controller/Color/useColorController';
import {ColorName} from '../../../Controller/Color/ColorName';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import ProfileHeader from '../../Components/ProfileHeader';
type props = NativeStackScreenProps<RootStackParamList, ScreenNames.Timer>;
const Timer = ({navigation}: props) => {
  const {getColor} = useColorController();
  const [options, setOptions] = useState<
    {
      title: string;
      images: any;
      onPress: () => void;
    }[]
  >([
    {
      title: 'Duration',
      images: images.Bell,
      onPress: () => navigation.navigate(ScreenNames.Duration),
    },
    {
      title: 'Interval Bell',
      images: images.Bell,
      onPress: () => console.log(''),
    },
    {
      title: 'Music / Ambient Sound',
      images: images.Bell,
      onPress: () => console.log(''),
    },
  ]);
  const TimeImg = [
    {
      image: images.Other1,
    },
    {
      image: images.Other1,
    },
  ];
  return (
    <Background fullHeight={true}>
      <BlankSpacer height={wp(2)} />
      {/* <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Icon name="arrowleft" size={30} />
        <NativeText text="Timer" style={{fontSize: fs(5)}} />
        <BlankSpacer width={wp(2)} />
      </View> */}
      <ProfileHeader name={'Timer'} />
      {/* <BlankSpacer
        width={wp(90)}
        height={hp(0.2)}
        backgroundColor={getColor(ColorName.secondary_002)}
      /> */}
      <BlankSpacer height={wp(5)} />
      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          justifyContent: 'space-between',
        }}>
        <NativeText text="Starting Bell" style={{fontSize: fs(5)}} />
        <TouchableOpacity
          style={{
            paddingHorizontal: wp(3),
            paddingVertical: wp(2),
            borderRadius: wp(5),
            borderWidth: wp(0.5),
            borderColor: getColor(ColorName.secondary_001),
          }}>
          <NativeText text="SAVE" style={{fontSize: fs(5)}} />
        </TouchableOpacity>
      </View>
      <BlankSpacer height={hp(3)} />

      <View
        style={{
          width: wp(80),
          height: wp(80),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Image
          source={images.Left}
          style={{
            width: wp(20),
            resizeMode: 'stretch',
            height: wp(20),
            position: 'absolute',
            left: -wp(10),
            zIndex: -1,
          }}
        />
        <Image
          source={images.Bell2}
          style={{
            width: wp(40),
            resizeMode: 'stretch',
            height: wp(40),
            position: 'absolute',
          }}
        />
        <Image
          source={images.Circle}
          style={{width: wp(80), resizeMode: 'stretch', height: wp(80)}}
        />
        <Image
          source={images.Right}
          style={{
            width: wp(20),
            resizeMode: 'stretch',
            height: wp(20),
            position: 'absolute',
            right: -wp(10),
            zIndex: -1,
          }}
        />
        <NativeText
          text="BASU"
          style={{fontSize: fs(5), position: 'absolute', bottom: hp(10)}}
        />
      </View>
      <BlankSpacer height={wp(2)} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: wp(80),
          alignSelf: 'center',
        }}>
        <Image
          source={images.Speaker}
          style={{width: wp(10), height: wp(8), resizeMode: 'stretch'}}
        />
        <View
          style={{
            backgroundColor: getColor(ColorName.blue_001),
            alignItems: 'center',
            justifyContent: 'center',
            padding: wp(5),
            borderRadius: wp(50),
          }}>
          <Image
            source={images.Play}
            style={{width: wp(8), height: wp(8), resizeMode: 'stretch'}}
          />
        </View>
        <Image
          source={images.PauseWhite}
          style={{width: wp(15), height: wp(15), resizeMode: 'stretch'}}
        />
      </View>
      <BlankSpacer height={hp(2)} />
      <FlatList
        data={options}
        ItemSeparatorComponent={() => <BlankSpacer height={hp(1)} />}
        renderItem={({item}) => (
          <TouchableOpacity onPress={item.onPress} style={styles.timeOp}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: wp(2),
                  height: wp(2),
                  backgroundColor: getColor(ColorName.blue_001),
                  borderRadius: wp(2),
                  marginRight: wp(2),
                }}
              />
              <NativeText text={item.title} style={styles.opTitle} />
            </View>
            <Image
              source={item.images}
              style={{
                width: wp(5),
                height: wp(5),
                tintColor: getColor(ColorName.secondary_002),
              }}
            />
          </TouchableOpacity>
        )}
      />
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timeOp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    backgroundColor: '#fff',
    paddingVertical: wp(5),
    borderRadius: wp(4),
    paddingHorizontal: wp(2),
  },
  opTitle: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
});
export default Timer;
