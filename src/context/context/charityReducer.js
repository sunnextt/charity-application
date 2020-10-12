import {
  DONATE_ITEMS,
  SET_ITEMS,
  SEARCH_ORGANISATION,
  SEARCH_EVENT,
} from '../type';

export default (state, action) => {
  switch (action.type) {
    case DONATE_ITEMS:
      return {
        ...state,
        donateitemsmsg: action.payload,
        loading: false
      };
    case SET_ITEMS:
      return {
        ...state,
        inputFields: action.payload,
        loading: false
      };
    case SEARCH_EVENT:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case SEARCH_ORGANISATION:
      return {
        ...state,
        Organisations: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
