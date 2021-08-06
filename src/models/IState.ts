
import {IPhotosReducerState} from '../store/reducers/Photos';
import {IAlbumsState} from '../store/reducers/Albums';

export interface IState {
  Albums: IAlbumsState;
  Photos: IPhotosReducerState;

}
