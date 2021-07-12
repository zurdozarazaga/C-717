const INITIAL_STATE_MODAL = {
  stateModal: false,
};

console.log(INITIAL_STATE_MODAL.stateModal);

export default (state = INITIAL_STATE_MODAL, action) => {
  switch (action.type) {
    case 'open_modal':
      return {
        ...state,
        stateModal: action.payload,
      };
    case 'closed_modal':
      return {
        ...state,
        stateModal: action.payload,
      };
    default:
      return state;
  };
};
