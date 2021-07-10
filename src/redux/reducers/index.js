import { combineReducers } from 'redux';
import elementosReducer from './elementosReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  elementos: elementosReducer,
  // stateModal: modalReducer,
});
