import React, { useContext } from 'react';
import Search from './DonationSearchForm'
import PopUp from './DonationModal'
import CharityContext from '../../context/context/charityContext';



export default function DonationProcess() {

  const charityContext = useContext(CharityContext);

  const { inputFields } = charityContext;

    console.log(inputFields);


    return (
        <div className="section-process" id="DonationProcess">
          <div className="donation__process">
            <div className="u-center-text" >
              <h2 className="heading-secondary u-margin-top-big">Donation</h2>
            </div>
            <div className="u-center-text u-margin-top-small donation-process-search">
              <Search />
            </div>
          </div>

          <div className="section-donating">
            <div className="row">
              <div className="col-1-of-3">
                <div className="section-donating-categories u-heading-padding ">
                  <h1 className="heading-tertiary-2 u-center-text heading-padding">
                    Categories
                  </h1>
                  <div className="categories-list">
                    <ul>
                      <li><a href="/Organisations">By Organisations</a></li>
                      <li><a href="/Events">By Events</a></li>
                    </ul>
                  </div>
              </div>
              </div>
              <div className="col-2-of-3">
                <div className="section-donating-suggestion">
                  <h3 className="heading-tertiary">
                    Suggested Organisations
                  </h3>
              </div>
              <a href="#popup">popup</a>
            </div>
            </div>
          </div>
          <div>
            <PopUp />
          </div>
        </div>
    )
}
