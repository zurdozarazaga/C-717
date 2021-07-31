const INITIAL_STATE_MODAL = {
  stateModal: null,
};

export default (state = INITIAL_STATE_MODAL, action) => {
  console.log(action);
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
