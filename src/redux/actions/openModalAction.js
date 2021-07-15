
// eslint-disable-next-line import/prefer-default-export
export const openModal = (state) => ({
  state: !state,
  type: 'open_modal',
  payload: state,

});
