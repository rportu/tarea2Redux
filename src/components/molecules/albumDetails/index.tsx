import styled from '@emotion/native';
import React, {useEffect, useMemo} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useAlbums} from '../../../contexts/albums-context';
import {IState} from '../../../models/IState';
import IPhoto from '../../../models/IPhoto';
import {fetchPhotos} from '../../../store/actions/Photos';
import AlbumListItem from '../AlbumListItem';
import PhotoListItem from '../photoItem';

const AlbumsDetails: React.FC = () => {
  const dispatch = useDispatch();

  const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum);
  // const users = useSelector((state: IState) => state.Users.users);
  const {albums, setSelectedAlbum} = useAlbums();
  const {id, title} = albums[selectedAlbum || 0];
  const photos = useSelector((state: IState) => state.Photos.photos);
  const filteredPhotos = useMemo(
    () => photos.filter(photo => photo.albumId === id),
    [photos, id],
  );

  const onBackPress = () => {
    setSelectedAlbum(null);
  };

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <Container>

      <CustomText>{title}</CustomText>

      <Image
        style={styles.image}

        source={{uri: 'photo.albumId'}}
      />

      {filteredPhotos && (
        <PhotoList
          data={filteredPhotos}
          renderItem={({item}) => <PhotoListItem photo={item as IPhoto} />}
        />
      )}
      <Button title="Back" onPress={onBackPress} />
    </Container>
  );
};

const Container = styled.View`
  padding: 16px;
  height: 100%;
`;

const CustomText = styled.Text`
  font-size: 18px;
`;

const PhotoList = styled.FlatList`
  padding: 8px;
`;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default AlbumsDetails;
