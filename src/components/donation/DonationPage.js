import React, { useContext, useState, useEffect } from "react";
import Search from "./DonationSearchForm";
import PopUp from "./DonationModal";
import Spinner from "../page/Spinner"
import CharityContext from "../../context/context/charityContext";
const htmlToText = require("html-to-text");

export default function DonationProcess() {
  const charityContext = useContext(CharityContext);
  const { loading} = charityContext;


  const [items, setItems] = useState("")
  console.log(items);

  const { data } = items || {};

console.log(data);

  useEffect(() => {
    setItems(JSON.parse(sessionStorage.getItem("items")))
  }, [])



const {organisations,events} = data || {};

if (loading) return <Spinner />;

  return (
    <div className="section-process" id="close">
      <div className="donation__process">
        <div className="u-center-text">
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
              <div className="categories-list"></div>
            </div>
          </div>
          <div className="col-2-of-3">
            <div className="section-donating-suggestion">
              <h3 className="heading-tertiary">Suggested Organisations</h3>
              <div>
                <div className="suggestions_organisations">
                  {organisations &&
                     organisations.map(
                        ({ _id, name, sdgs, website, address, needs }) => (
                          <div key={_id}>
                            <div>
                             <h4><a href="#popup">{name}</a></h4>
                              <a href="{htmlToText.fromString(website)}" >{htmlToText.fromString(website)}</a>
                              <p>{address}</p>
                              {/* <p>{sdgs}</p> */}
                            </div>
                            <PopUp
                              ngoName={name}
                              needs={needs}
                             />
                              {needs &&
                                needs.map(({ _id, name, quantity, supply,unit }) => (
                                  <ul key={_id}>
                                    <li>{name}</li>
                                    <li>{quantity}</li>
                                    <li>{supply}</li>
                                    <li>{unit}</li>
                                  </ul>
                                  ))
                                }

                          </div>
                        )
                      )
                    }
                </div>
                <div className="suggestions_events">
                  {events &&
                     events.map(({ _id, name, sdg, needs }) => (
                        <div key={_id}>
                          <div>
                            <h5>{name}</h5>
                            <p>{sdg}</p>
                            <ul>
                              {needs &&
                                 needs.map(({ _id, name }) => (
                                    <li key={_id}>{name}</li>
                                  ))
                                }
                            </ul>
                          </div>
                        </div>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
