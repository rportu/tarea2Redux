import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_PHOTOS} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import ITodo from '../../../models/IPhoto';

export const actualizarPhotos = (payload: ITodo[]): IAction => {
  return {
    type: ACTUALIZAR_PHOTOS,
    payload,
  };
};

export const fetchPhotos =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const todoResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      dispatch(actualizarPhotos(todoResponse.data));
    } catch (error) {
      console.error(error);
    }
  };
