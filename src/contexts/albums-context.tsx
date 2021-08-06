import axios from 'axios';
import React, {createContext, useContext, useState, useMemo} from 'react';
import IAlbum from '../models/IAlbums';

interface AlbumsContextProps {
  albums: IAlbum[];
  setAlbums: (albums: IAlbum[]) => void;
  selectedAlbum: number | null;
  setSelectedAlbum: (albums: number | null) => void;
  fetchAlbums: () => Promise<void>;
}

const AlbumsContext = createContext<AlbumsContextProps>({
  albums: [],
  setAlbums: () => {},
  selectedAlbum: null,
  setSelectedAlbum: () => {},
  fetchAlbums: () => Promise.resolve(),
});

export const AlbumsProvider: React.FC = ({children}) => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

  const fetchAlbums = async () => {
    try {
      const albums = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      setAlbums(albums.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = useMemo(() => {
    return {albums, setAlbums, selectedAlbum, setSelectedAlbum, fetchAlbums};
  }, [albums, setAlbums, selectedAlbum, setSelectedAlbum, fetchAlbums]);

  return <AlbumsContext.Provider value={val}>{children}</AlbumsContext.Provider>;
};

export const useAlbums = () => useContext(AlbumsContext);
