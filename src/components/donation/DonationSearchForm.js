import React from 'react'

export default function SearchForm() {
    return (
        <div>
          <div className="search">
            <form className="search__form">
              <input
                id="search"
                className="search__input"
                type="search"
                placeholder="Search categories"
              />
              <input className="form__search" type="submit" value="Search" />
            </form>
            <div className="form-filter">
              <label>
                Filter by:
              </label>
                <select className="selectFilter selectCategory" data-filter-group="category">
                  <option > All</option>
                  <option >Category 1</option>
                  <option >Category 2</option>
                  <option >Category 3</option>
                </select>
            </div>
          </div>
        </div>
    )
}
