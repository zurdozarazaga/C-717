const initialStateElements = {
  elementos: [],
};

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

