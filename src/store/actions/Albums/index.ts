import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_SELECTED_ALBUM, ACTUALIZAR_ALBUMS} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import IAlbum from '../../../models/IAlbums';

export const actualizarAlbums = (payload: IAlbum[]) => ({
  type: ACTUALIZAR_ALBUMS,
  payload,
});

export const actualizarSelectedAlbum = (payload: number | null) => ({
  type: ACTUALIZAR_SELECTED_ALBUM,
  payload,
});

export const fetchAlbums =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const userReponse = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      dispatch(actualizarAlbums(userReponse.data));
    } catch (error) {
      console.error(error);
    }
  };

export function prueba() {
  return async function (dispatch: ThunkDispatch<IState, null, IAction>) {
    // Lógica de función
  };
}
