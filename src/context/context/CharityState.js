import React, { useReducer } from 'react';
import CharityContext from './charityContext';
import CharityReducer from './charityReducer';
import { SET_ITEMS, SEARCH_ORGANISATION, SEARCH_EVENT, DONATE_ITEMS } from '../type';

const CharityState = props => {
  const initialState = {
    items: [],
    inputFields:undefined,
    donateitemsmsg: [],
    events:[],
    Organisations:[],
    loading: false,
  };


  const [state, dispatch] = useReducer(CharityReducer, initialState);

  // DONATE ITEMS

  const donateItems = inputFields => {

    console.log(inputFields);
    fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/donation_items', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputFields),
      redirect: 'follow',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: DONATE_ITEMS,
        payload: data
      });
    })
    .catch((error) => {
      console.error('Error:', error);
  });

  dispatch({
    type: SET_ITEMS,
    payload: {inputFields}
  });
  }

  // Search Organisations

const searchOrganisation = (text) => {
    console.log(text);
    fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/event/5f776a3170b2b14ba4dc2fd4/donation?page=1&limit=10', {
      method: 'GET', // or 'PUT'
      redirect: 'follow',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: SEARCH_ORGANISATION,
        payload: data.items
      });
    })
    .catch((error) => {
      console.error('Error:', error);
  });
}

  // Search EVENTS
const searchEvent = (text) => {
    console.log(text);
    fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/event/5f776a3170b2b14ba4dc2fd4/donation?page=1&limit=10', {
      method: 'GET', // or 'PUT'
      redirect: 'follow',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: SEARCH_EVENT,
        payload: data.items
      });
    })
    .catch((error) => {
      console.error('Error:', error);
  });
}



  return (
    <CharityContext.Provider
      value={{
         inputFields: state.inputFields,
         items: state.items,
         Organisations: state.Organisations,
         donateitemsmsg: state.donateitemsmsg,
         events: state.events,
         loading: state.loading,
         searchOrganisation,
         searchEvent,
         donateItems
      }}
    >
      {props.children}
    </CharityContext.Provider>
  );
};

export default CharityState;
