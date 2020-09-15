import React from 'react'

// import library from '../../shared/doucette-media.json'

import './Why.scss'

function Why() {
  let itemContainerStyles = {
    WebkitTransform:
      'translate3d(-30px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    MozTransform:
      'translate3d(-30px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    msTransform:
      'translate3d(-30px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    transform:
      'translate3d(-30px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    // opacity: '0',
  }

  return (
    <div className="copy-container w-container">
      <div className="intro">
        <h3 className="section-title">— Why does this exist?</h3>
        <div className="interactive-headline-wrapper">
          <h2 className="headline">
            Our grandmothers first understood the&nbsp;
            <a
              href="/#"
              data-w-id="9bb23890-a683-3c6e-cf65-929872198519"
              className="inline-link"
            >
              power
            </a>
            &nbsp;of the FWD years ago.
          </h2>
          <div
            style={{ display: 'none', opacity: 0 }}
            className="fwd-from-grandma-wrapper"
          >
            <img
              src="https://uploads-ssl.webflow.com/5b8085feb775a93368662104/5ef355f62ee3d3578ff69f3a_bca.png"
              data-w-id="9bb23890-a683-3c6e-cf65-92987219851d"
              alt=""
              className="fwd-from-grandma"
            />
          </div>
        </div>
        <p className="intro-description">
          They tried to pass that understanding on to us, but we refused. Now we
          need to reclaim the power of the FWD that has been so watered down:
          the power to share verifiable, important information about current
          events with the people we know and love.
          <br />
        </p>
        <p className="intro-description">
          There are tons of great resources out there, but there are so many it
          can be overwhelming. Our friends and family lack the time, and
          sometimes the desire, to find FWD-worthy information. That&#x27;s why
          this exists.
          <br />
        </p>
        <p className="intro-description">
          Many people have compiled lists, and those lists have been compiled
          into master lists. There are piles and piles of data floating around
          and you need something to forward to your mom, dad, grandma, aunt. You
          still have a day job, friends, family, etc...
          <br />
        </p>
        <p className="intro-description">
          That&#x27;s why hundreds of videos, media clips, news stories,
          commentary, and more about the ongoing injustice in our country have
          been gathered here. Because there&#x27;s a massive threat to the
          systems that are supposed to protect us and our freedoms.
        </p>
        <p className="intro-description">
          This project was inspired by&nbsp;
          <a
            href="https://twitter.com/greg_doucette/status/1274771075713376258"
            className="inline-link"
          >
            T. Greg Doucette&#x27;s twitter thread
          </a>
          , where he&#x27;s documented police brutality during the Greg Floyd
          protests, and&nbsp;
          <a
            href="https://docs.google.com/spreadsheets/d/1YmZeSxpz52qT-10tkCjWOwOGkQqle7Wd1P7ZM1wMW0E/edit?usp=sharing"
            className="inline-link"
          >
            Jason Miller&#x27;s google sheet
          </a>
          &nbsp;where he&#x27;s cataloged every one of Doucette&#x27;s tweets,
          in addition to many useful resources (also collected here, with others
          added as time goes on).
        </p>
        <a href="/#">Text Link</a>
      </div>
      <div className="resources">
        <h3 className="section-title">— More resources</h3>
        <p className="resource-description-copy">
          Click on a category to expand, tap an item title to be taken to the
          resource.
        </p>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div
              style={{ height: '1.7em' }}
              role="listitem"
              className="collection-item-2 w-dyn-item"
            >
              <h4
                data-w-id="bb94ba89-d69b-f969-b7ad-4832f5610349"
                className="category-title"
              >
                section
              </h4>
              <p className="category-description"></p>
              <div
                data-w-id="9cfe21c6-e567-348a-6b7d-eb0705f046de"
                // style="opacity: 0;"
                className="w-dyn-list"
              >
                <div role="list" className="resource-list w-dyn-items">
                  <div role="listitem" className="resource-item w-dyn-item">
                    <div className="resource-link">
                      <a
                        data-w-id="84a3a8a2-d859-6ca7-59de-8c81daf3fdf8"
                        href="/#"
                        className="title-link-wrapper w-inline-block"
                      >
                        <h2 className="resource-title">resource title</h2>
                        <h2
                          style={itemContainerStyles}
                          className="resource-arrow"
                        >
                          ⇢
                        </h2>
                      </a>
                      <div className="sub-info-double-wrapper">
                        <div className="sub-info-wrapper">
                          <p className="sub-category-description">Author:</p>
                          <a href="#" className="link"></a>
                        </div>
                        <div className="sub-info-wrapper">
                          <p className="sub-category-description">
                            Sub category:
                          </p>
                          <p className="sub-category">sub category</p>
                        </div>
                      </div>
                      <p className="resource-description"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-dyn-empty">
            <div>No items found.</div>
          </div>
        </div>
      </div>
      <div className="hack-this">
        <h3 className="section-title">— Hack my shit</h3>
        <h2 className="headline">
          This website is also an API. Use it, abuse it, add your tool to the
          list.
        </h2>
        <p className="intro-description">
          Eventually everything here will automatically aggregate from some of
          the sources mentioned above, including Doucette&#x27;s/Miller&#x27;s
          resources and others. All of this is funneled through this site, which
          is built in Webflow. Here&#x27;s how you can get ahold of all that
          sweet data:
          <br />
          <br />
          stuff here
        </p>
      </div>
    </div>
  )
}

export default Why
