import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyAccount = () => {
  return (
    <View style={styles.main}>
      <Text>My Account</Text>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
