import React from 'react';
import {Text, View} from 'react-native';
//import {useSelector} from 'react-redux';
import {useAlbums} from '../../../contexts/albums-context';
import AlbumsDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
  const {selectedAlbum} = useAlbums();

  return <View>{selectedAlbum ? <AlbumsDetails /> : <AlbumList />}</View>;
};

export default HomeScreen;
