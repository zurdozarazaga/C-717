// initial state of the toast
initialToast = {
  visible: false,
};
const createElement = (state = initialStateElements, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'traer_elementos':
      return { ...state,
        visible: action.payload,
      };
    default: return state;
  }
};

export default createElement;
