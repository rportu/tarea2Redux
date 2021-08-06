import IPhoto from './IPhoto';

export default interface IAlbums {
  id: number;
  userId: string;
  username: string;
  title: string;
  IPhoto: IPhoto;
}
