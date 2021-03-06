import { Action } from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.actions';
import {Tutorial} from '../model/tutorial.model';

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};


export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
          return state;
    default:
      return state;
  }
}
