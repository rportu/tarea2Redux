import styled from '@emotion/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import IPhoto from '../../../models/IPhoto';
import {actualizarPhotos} from '../../../store/actions/Photos';
export interface PhotoListItemProps {
  photo: IPhoto;
}

const PhotoListItem: React.FC<PhotoListItemProps> = ({photo}) => {
  const dispatch = useDispatch();
  const photos = useSelector((state: IState) => state.Photos.photos);
  const {title, id} = photo;

  const onCheck = (newValue: boolean) => {
    const indexOfPhoto = photos.indexOf(photo);
    const newArray = photos;
    newArray[indexOfPhoto] = {...photo};

    dispatch(actualizarPhotos(newArray));
  };

  return (
    <Container>
      <CustomText>
        {id}. {title}
      </CustomText>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomText = styled.Text`
  width: 85%;
`;

export default PhotoListItem;
