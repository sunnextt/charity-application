import React from 'react'
import { Link } from "react-router-dom";

export default function NewsPage() {
    return (
        <div className="news-page">
          <div className="news-page-header u-center-text">
            <h1 className="heading-primary heading-primary--main u-heading-padding">Latest News</h1>
            <h3 className="heading-secondary heading-primary--sub">Read all the latest news..</h3>
          </div>
          <div className="news-page-content u-margin-top-big">
            <div className="row">
              <div className="col-1-of-4">
                <div className="new-div">
                  <h3 className="heading-tertiary">News</h3>
                  <h4 className="heading-tertiary-2">news headline</h4>
                  <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,.</p>
                <Link className="btn-text" to="#">read more &rarr;</Link>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="new-div">
                  <h3 className="heading-tertiary">News</h3>
                  <h4 className="heading-tertiary-2">news headline</h4>
                  <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,.</p>
                <Link className="btn-text" to="#">read more &rarr;</Link>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="new-div">
                  <h3 className="heading-tertiary">News</h3>
                  <h4 className="heading-tertiary-2">news headline</h4>
                  <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,.</p>
                <Link className="btn-text" to="#">read more &rarr;</Link>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="new-div">
                  <h3 className="heading-tertiary">News</h3>
                  <h4 className="heading-tertiary-2">news headline</h4>
                  <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,.</p>
                <Link className="btn-text" to="#">read more &rarr;</Link>
                </div>
              </div>

            </div>
            <div className="news-page-load-more">
              <Link to="#" className="btn btn-sup ">Load More</Link>
            </div>
          </div>
        </div>
    )
}
