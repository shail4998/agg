import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute, useTheme} from '@react-navigation/native';
import Home from '@screens/Home';
import MyAccount from '@screens/MyAccount';
import SearchScreen from '@screens/SearchScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MyTabs = props => {
  const {colors} = useTheme();

  const getTabVisible = (route = {}, screen = 'Home') => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? screen;
    return routeName === screen;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      backBehavior="initialRoute">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={({route}) => ({
          tabBarVisible: getTabVisible(route, 'SearchScreen'),
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={({route}) => ({
          tabBarVisible: getTabVisible(route, 'MyAccount'),
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
