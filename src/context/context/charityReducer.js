import {
  SET_LOADING,
  DONATE_ITEMS,
  SEARCH_ORGANISATION,
  SEARCH_EVENT,
  SET_NEEDS,
  SET_NGO_NEEDS,
  SET_FORM,
  SET_NGO_SDG,
} from '../type';

export default (state, action) => {
  switch (action.type) {
    case DONATE_ITEMS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case SEARCH_EVENT:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case SEARCH_ORGANISATION:
      return {
        ...state,
        Organisations: action.payload,
        loading: false,
      };
    case SET_NEEDS:
      return {
        ...state,
        needs: action.payload,
        loading: false,
      };
    case SET_NGO_NEEDS:
      return {
        ...state,
        ngoNeeds: action.payload,
        loading: false,
      };
    case SET_NGO_SDG:
      return {
        ...state,
        sdg: action.payload,
        loading: false,
      };
    case SET_FORM:
      return {
        ...state,
        ngoFormRes: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
