// import INITIAL_STATE_MODAL from '../initialState';
import { OPEN_MODAL, CLOSED_MODAL } from '../types';

const INITIAL_STATE_MODAL = {
  stateModal: false,
};

export default (state = INITIAL_STATE_MODAL, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        stateModal: true,
      };
    case CLOSED_MODAL:
      return {
        stateModal: false,
      };
    default:
      return state;
  };
};
