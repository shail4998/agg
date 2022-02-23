/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const mainScrollRef = useRef();
  const categoryArr = [
    {id: 'bodyBuilding', name: 'Bodybuilding', img: require('@assets/gym.jpg')},
    {
      id: 'learnGuitar',
      name: 'Learn Guitar',
      img: require('@assets/guitar.jpg'),
    },
    {id: 'boxing', name: 'Boxing', img: require('@assets/boxing.jpg')},
  ];

  const renderCategory = ({item, index}) => (
    <View key={item.id} style={styles.renderCategoryContainer}>
      <Text style={styles.renderCategoryText}>{item?.name}</Text>
      <Image
        source={item.img}
        style={{
          height: 188,
          width: 200,
          resizeMode: 'cover',
          flex: 1,
          marginTop: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );

  const renderItem = () => {};

  return (
    <ScrollView
      bounces={true}
      ref={mainScrollRef}
      // showsVerticalScrollIndicator={false}
      style={styles.main}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.addressText}>Home</Text>
          <Icon name="chevron-down" style={styles.addressIcon} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="sale" style={styles.addressIcon} />
          <Text style={styles.offerText}>Offers</Text>
        </View>
      </View>
      <FlatList
        data={categoryArr}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
        renderItem={renderCategory}
        ListFooterComponent={<View style={{width: 20}} />}
      />
      {/* <FlatList /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: 'white'},
  headerView: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingVertical: 8,
    flexDirection: 'row',
  },
  addressText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#253858',
    letterSpacing: 0.24,
    lineHeight: 28,
  },
  addressIcon: {
    fontSize: 28,
    marginLeft: 4,
    color: '#253858',
  },
  offerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    letterSpacing: 0.18,
    lineHeight: 20,
    marginLeft: 4,
    color: '#253858',
    opacity: 0.8,
  },
  renderCategoryContainer: {
    borderRadius: 16,
    backgroundColor: 'white',
    opacity: 0.8,
    paddingTop: 10,
    marginRight: 24,
    shadowColor: '#4267B2',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  renderCategoryText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    lineHeight: 22,
    textAlign: 'center',
    color: '#253858',
  },
});
