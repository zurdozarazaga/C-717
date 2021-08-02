// import * as INITIAL_STATE_ELEMENTS from '../initialState';
// import * as TRAER_ELEMENTOS from '../types';

const initialStateElements = {
  elementos: [],
};
console.log(initialStateElements.elementos);

export default (state = initialStateElements, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'traer_elementos':
      return { ...state,
        elementos: action.payload,
      };
    default: return state;
  }
};

