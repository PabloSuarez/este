import * as actions from './actions';
import { Map } from 'immutable';

export default function reducer(state = Map(), action) {
  if (!(state instanceof Map)) return Map().mergeDeep(state);

  switch (action.type) {

    case actions.ESTE_REDUX_FIELDS_RESET_FIELDS: {
      const { path } = action.payload;
      return state.deleteIn(path);
    }

    case actions.ESTE_REDUX_FIELDS_SET_FIELD: {
      const { path, value } = action.payload;
      return state.setIn(path, value);
    }

  }

  return state;
}
