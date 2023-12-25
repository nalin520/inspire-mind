import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Color} from '../../../styles/globalStyle';
import {FAB, Portal, PaperProvider} from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

const AllEntry = () => {
  return (
    <ScrollView style={styles.journalbox}>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const TextEntry = () => {
  return (
    <ScrollView style={styles.journalbox}>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const AudioEntry = () => {
  return (
    <ScrollView style={styles.journalbox}>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const VideoEntry = () => {
  return (
    <ScrollView style={styles.journalbox}>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const BookMark = () => {
  return (
    <ScrollView style={styles.journalbox}>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.journalRow}>
        <View style={styles.journalDate}>
          <View>
            <Text style={{fontSize: 10, color: 'black'}}>DEC</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>24</Text>
          </View>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.journalTime}>
          <View>
            <Text style={{fontSize: 9, color: 'black'}}>07:45 PM</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Test
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const Journal = () => {
  const [open, setOpen] = useState(false);

  const onStateChange = ({open}) => setOpen(open);
  return (
    <>
      <View style={{height: '100%'}}>
        <View style={[styles.container]}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../../Assets/Img/left-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color={'black'}
              style={{marginRight: 10}}
            />
          </View>
        </View>
        <Text style={styles.preferredPlanText}>Journal</Text>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 13,
              fontFamily: 'Inter-Bold',
              textTransform: 'none',
              fontWeight: '600',
            },
            lazy: true,
            tabBarItemStyle: {width: 'auto'},
            tabBarScrollEnabled: true,
            tabBarActiveTintColor: Color.colorMediumblue,
            tabBarInactiveTintColor: '#424242',
          }}>
          <Tab.Screen name="All" component={AllEntry} />
          <Tab.Screen name="Texts" component={TextEntry} />
          <Tab.Screen name="Videos" component={VideoEntry} />
          <Tab.Screen name="Audios" component={AudioEntry} />
          <Tab.Screen name="Bookmarks" component={BookMark} />
        </Tab.Navigator>

        <PaperProvider>
          <Portal>
            <FAB.Group
              style={{backgroundColor: '#fff'}}
              open={open}
              visible
              icon={open ? 'plus' : 'plus'}
              actions={[
                {
                  icon: 'text',
                  color: 'black',
                  onPress: () => console.log('Pressed add'),
                },
                {
                  icon: 'camera',
                  // label: 'Star',
                  color: 'black',
                  onPress: () => console.log('Pressed star'),
                },
                {
                  icon: 'speaker',
                  color: 'black',
                  // label: 'Email',
                  onPress: () => console.log('Pressed email'),
                },
                {
                  icon: 'book',
                  color: 'black',
                  // label: 'Remind',
                  onPress: () => console.log('Pressed notifications'),
                },
              ]}
              onStateChange={onStateChange}
            />
          </Portal>
        </PaperProvider>
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
  journalbox: {
    backgroundColor: '#fff',
  },
  preferredPlanText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  verticalLine: {
    height: '100%',
    width: 1.5,
    backgroundColor: 'black',
  },
  journalRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  journalDate: {
    marginHorizontal: 10,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  journalTime: {
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginVertical: 10,
    width: '85%',
    paddingVertical: 9,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: '70%',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  textInput: {
    height: '50%',
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default Journal;
