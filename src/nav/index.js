import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from

const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <BottomTabView
          callback={() => props.navigation.popToTop()}
          {...props}
          style={{borderTopColor: colors.WHITE}}
        />
      )}
      backBehavior="initialRoute">
      <Tab.Screen name="HomeTab" component={Home} />
    </Tab.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({});
