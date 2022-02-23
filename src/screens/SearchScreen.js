import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.main}>
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
