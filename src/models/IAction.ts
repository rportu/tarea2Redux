import IPhoto from './IPhoto';
import IAlbum from './IAlbums';

export interface IAction {
  type: string;
  payload?: string | number | IPhoto[] | IAlbum[] ;
}
