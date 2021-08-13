import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AlbumList from '../components/organisms/AlbumList';
import AlbumDetails from '../components/molecules/albumDetails';

const MyBottomTabs = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen name="AlbumList" component={AlbumList} />
      <Screen name="AlbumDetails" component={AlbumDetails} />
    </Navigator>
  );
};

export default MyBottomTabs;
