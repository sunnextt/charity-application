import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import CharityContext from "../../context/context/charityContext";
import Alert from "../page/Alert";

const Search = () => {

  const alertContext = useContext(AlertContext);
  const charityContext = useContext(CharityContext);

  const [searchValue, setSearchValue] = useState("");

  const [text, setText] = useState("");

  const handleFilterChanges = e => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  // {
  //   console.log(text);
  //   charityContext.searchOrganisation(text);
  //   setText("");
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else if ( searchValue === "Name") {
      charityContext.searchOrganisation(searchValue);
      console.log(searchValue);
    } else if ( searchValue === "NGO") {
      charityContext.searchOrganisation(searchValue);
      console.log(searchValue);
    } else if ( searchValue === "Events") {
      charityContext.searchOrganisation(searchValue);
      console.log(searchValue);
    } else {
      charityContext.searchOrganisation(text);
      console.log(text);
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <Alert />
      <div className="search">
        <form onSubmit={onSubmit} className="search__form">
          <input
            type="text"
            name="text"
            placeholder="Search NGO..."
            value={text}
            onChange={onChange}
          />
          <div className="form-filter">
            {/* <label>Filter by:</label> */}
            <select onChange={handleFilterChanges}>
              <option value="">All</option>
              <option value="NGO">ngo</option>
              <option value="Events">events</option>
              <option value="Name">name</option>
            </select>
          </div>
          <input className="form__search" type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
};

export default Search;
