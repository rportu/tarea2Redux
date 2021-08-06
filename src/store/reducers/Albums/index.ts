import {IAction} from '../../../models/IAction';
import IAlbum from '../../../models/IAlbums';
import {ACTUALIZAR_SELECTED_ALBUM, ACTUALIZAR_ALBUMS} from '../../actions';

export interface IAlbumsState {
  albums: IAlbum[];
  selectedAlbum: number | null;
}

const initialState: IAlbumsState = {
  albums: [],
  selectedAlbum: null,
};

export default (state = initialState, {type, payload}: IAction) => {
  switch (type) {
    case ACTUALIZAR_ALBUMS:
      return {...state, albums: payload as IAlbum[]};

    case ACTUALIZAR_SELECTED_ALBUM:
      return {...state, selectedAlbum: payload as number | null};

    default:
      return state;
  }
};