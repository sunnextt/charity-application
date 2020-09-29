import React from 'react'

export default function NewsPage() {
    return (
        <div className="news-page">
          <div className="news-page-header u-center-text">
            <h1 className="heading-primary heading-primary--main u-heading-padding">Latest News</h1>
            <h3 className="heading-secondary heading-primary--sub">Read all the latest news..</h3>
          </div>
          <div className="news u-margin-top-big">
            <div className="row">
              <div className="col-1-of-4">
                <div className="new-div">
                  <h3 className="heading-tertiary">News</h3>
                  <h4 className="heading-tertiary-2">news headline</h4>
                  <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,.</p>
                <a className="btn-text" href="lipsum.com">read more &rarr;</a>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="new-div">
                  <h3 className="heading-tertiary">News</h3>
                  <h4 className="heading-tertiary-2">news headline</h4>
                  <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,.</p>
                <a className="btn-text" href="lipsum.com">read more &rarr;</a>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="new-div">
                  <h3 className="heading-tertiary">News</h3>
                  <h4 className="heading-tertiary-2">news headline</h4>
                  <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,.</p>
                <a className="btn-text" href="lipsum.com">read more &rarr;</a>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="new-div">
                  <h3 className="heading-tertiary">News</h3>
                  <h4 className="heading-tertiary-2">news headline</h4>
                  <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,.</p>
                <a className="btn-text" href="lipsum.com">read more &rarr;</a>
                </div>
              </div>

            </div>
            <div className="news-page-load-more">
              <a href="#" className="btn btn__green">Load More</a>
            </div>
          </div>
        </div>
    )
}
