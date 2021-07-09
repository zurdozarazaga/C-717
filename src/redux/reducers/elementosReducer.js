import * as INITIAL_STATE_ELEMENTS from '../initialState';
import * as TRAER_ELEMENTOS from '../types';

export default (state = INITIAL_STATE_ELEMENTS, action) => {
  switch (action.type) {
    case TRAER_ELEMENTOS:
      return { ...state, elementos: action.payload };
    default: return state;
  }
};
