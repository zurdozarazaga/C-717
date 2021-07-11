
// eslint-disable-next-line import/prefer-default-export
export const openModal = (payload) => ({
  type: 'open_modal',
  payload,
});

export const closeModal = (payload) => ({
  type: 'closed_modal',
  payload,
});
