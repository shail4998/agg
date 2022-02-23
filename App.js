import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BottomTab from '@nav/BottomTab';

const Stack = createNativeStackNavigator();

const App = props => (
  <>
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    {/* <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} /> */}
  </>
);

export default App;
