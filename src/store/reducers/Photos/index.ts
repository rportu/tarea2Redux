import {IAction} from '../../../models/IAction';
import IPhoto from '../../../models/IPhoto';
import {ACTUALIZAR_PHOTOS} from '../../actions';

export interface IPhotosReducerState {
  photos: IPhoto[];
}

const initialState = {
  photos: [],
};

export default (
  state = initialState,
  {type, payload}: IAction,
): IPhotosReducerState => {
  switch (type) {
    case ACTUALIZAR_PHOTOS:
      return {...state, photos: payload as IPhoto[]};
    default:
      return state;
  }
};
