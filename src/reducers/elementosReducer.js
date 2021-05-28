const INITIAL_STATE = {
  elementos: ['initial state'],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'traer_elementos':
      return { ...state, elementos: action.payload };
    default: return state;
  }
};
