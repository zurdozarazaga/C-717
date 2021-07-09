import { OPEN_MODAL, CLOSED_MODAL } from '../types';

// eslint-disable-next-line import/prefer-default-export
export const openModal = (payload) => ({
  type: OPEN_MODAL,
  payload,
});

export const closeModal = (payload) => ({
  type: CLOSED_MODAL,
  payload,
});
