import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Regions} from '../screens/Regions/regions';
import {Favorite} from '../screens/Favorites/favorite';
import {MyAccount} from '../screens/MyAccount/myAccount';
import {
  Button,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Poppins_500Medium} from '@expo-google-fonts/poppins';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function AppScreen() {}
export function AppStack() {
  const [isSelect, setSelect] = useState('Home');
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <View>
                  <Image source={require('../assets/logo/tabBar/home.png')} />
                </View>
                <Text
                  style={{
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 12,
                    color: '#173EA5',
                  }}>
                  Pokedéx
                </Text>
              </View>
            ) : (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={require('../assets/logo/tabBar/home-out.png')}
                  />
                </View>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Regions"
        component={Regions}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <View>
                  <Image
                    source={require('../assets/logo/tabBar/regions.png')}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 12,
                    color: '#173EA5',
                  }}>
                  Regiões
                </Text>
              </View>
            ) : (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={require('../assets/logo/tabBar/regions-out.png')}
                  />
                </View>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <View>
                  <Image
                    source={require('../assets/logo/tabBar/favorites.png')}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 12,
                    color: '#173EA5',
                  }}>
                  Favoritos
                </Text>
              </View>
            ) : (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={require('../assets/logo/tabBar/favorites-out.png')}
                  />
                </View>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={MyAccount}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <View>
                  <Image source={require('../assets/logo/tabBar/user.png')} />
                </View>
                <Text
                  style={{
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 12,
                    color: '#173EA5',
                  }}>
                  Conta
                </Text>
              </View>
            ) : (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={require('../assets/logo/tabBar/user-out.png')}
                  />
                </View>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
}
