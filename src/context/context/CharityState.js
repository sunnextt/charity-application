import React, { useReducer } from 'react';
import CharityContext from './charityContext';
import CharityReducer from './charityReducer';
import { SEARCH_ORGANISATION, SEARCH_EVENT, DONATE_ITEMS, SET_NGO_NEEDS,SET_NGO_SDG,SET_FORM,SET_LOADING, } from '../type';

const CharityState = props => {
   const initialState = {
     donateitemsmsg: "",
     events: [],
     Organisations: [],
     loading: undefined,
     needs: "",
     ngoNeeds: "",
     sdg: "",
     ngoFormRes: "",
   };


  const [state, dispatch] = useReducer(CharityReducer, initialState);


  // DONATE ITEMS

  const donateItems = inputFields => {
   setLoading();
    fetch('/donation_items', {
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
      sessionStorage.setItem("items", JSON.stringify(data))
      dispatch({
        type: DONATE_ITEMS,
        payload: data
      });
    })
    .catch((error) => {
      console.error('Error:', error);
  });

  }

  // Search Organisations

const searchOrganisation = (text) => {
  fetch('/event?page=1&limit=10&ngoId=', {
    method: "GET", // or 'PUT'
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      dispatch({
        type: SEARCH_ORGANISATION,
        payload: data.items,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

  // Search EVENTS
const searchEvent = () => {
    fetch('/event/5f776a3170b2b14ba4dc2fd4/donation?page=1&limit=10', {
      method: 'GET', // or 'PUT'
      redirect: 'follow',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: SEARCH_EVENT,
        payload: data
      });
    })
    .catch((error) => {
      console.error('Error:', error);
  });
}

const Needs = (ngoFormSubmit) => {
  const body = JSON.stringify(ngoFormSubmit);
  console.log(body);
    fetch('/ngo', {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiI1ZjdhMjNhNzBhMzc0MDQ4NmM4YTZiNzQiLCJlbWFpbCI6InN1bm5leHQyMDEwQGdtYWlsLmNvbSIsImlhdCI6MTYwMjQ5ODY1MiwiZXhwIjoxNjAyNDk5MjUyLCJhdWQiOiJhZG1pbiIsImlzcyI6IkdpdmVUb0NoYXJpdHkifQ.OpWU9-LJwlOKSA9dBxdfAj11h1an4o-HH7nkOmVvXzA',
        'Content-Type': 'application/json'
      },
      body,
      redirect: 'follow',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: SET_FORM,
        payload: {data}
      });
    })
    .catch((error) => {
      console.error(error);
    });

}

const NgoFormNeeds = (ngoRegForm, sdgsNo) => {
  dispatch({
    type: SET_NGO_NEEDS,
    payload: {ngoRegForm}
  });
  dispatch({
    type: SET_NGO_SDG,
    payload: {sdgsNo}
  });
}

// Set Loading
const setLoading = () => dispatch({ type: SET_LOADING });


  return (
    <CharityContext.Provider
      value={{
         inputFields: state.inputFields,
         items: state.items,
         Organisations: state.Organisations,
         donateitemsmsg: state.donateitemsmsg,
         events: state.events,
         loading: state.loading,
         needs: state.needs,
         ngoNeeds: state.ngoNeeds,
         sdg: state.sdg,
         ngoFormRes: state.ngoFormRes,
         searchOrganisation,
         searchEvent,
         donateItems,
         Needs,
         NgoFormNeeds,
      }}
    >
      {props.children}
    </CharityContext.Provider>
  );
 };

export default CharityState;
