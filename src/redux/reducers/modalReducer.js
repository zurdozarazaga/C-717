const INITIAL_STATE_MODAL = {
  stateModal: false,
};

export default (state = INITIAL_STATE_MODAL, action) => {
  switch (action.type) {
    case 'open_modal':
      return {
        stateModal: true,
      };
    case 'closed_modal':
      return {
        stateModal: false,
      };
    default:
      return state;
  };
};
