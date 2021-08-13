import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';
import IPhoto from '../models/IPhoto';

interface PhotosContextProps {
  photos: IPhoto[];
  setPhotos: (publis: IPhoto[]) => void;
  fetchPhotosContext: () => Promise<void>;
}

const PhotosContext = createContext<PhotosContextProps>({
    photos: [],
  setPhotos: () => {},
  fetchPhotosContext: () => Promise.resolve(),
});

export const PhotosProvider: React.FC = ({children}) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const fetchPhotosContext = async () => {
    try {
      const photos = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      setPhotos(photos.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = {photos, setPhotos, fetchPhotosContext};

  return (
    <PhotosContext.Provider photos={val}>
      {children}
    </PhotosContext.Provider>
  );
};

export const usePhotos = () => useContext(PhotosContext);
