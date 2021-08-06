import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
//import {useDispatch, useSelector} from 'react-redux';
import {useAlbums} from '../../../contexts/albums-context';
import AlbumListItem from '../../molecules/AlbumListItem';

const AlbumList: React.FC = () => {


  const {albums, fetchAlbums} = useAlbums();

  useEffect(() => {

    fetchAlbums();
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item, index}) => (
            <AlbumListItem key={item.id} album={item} index={index} />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default AlbumList;
