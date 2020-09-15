import React, { useState } from 'react'

function Clip({ item, i }) {
  let [missingMedia, setMissingMedia] = useState(false)

  let itemContainerStyles = {
    WebkitTransform:
      'translate3d(0, 50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    MozTransform:
      'translate3d(0, 50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    msTransform:
      'translate3d(0, 50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    transform:
      'translate3d(0, 50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    // opacity: '0',
  }

  let wrapperAnimation = { height: '0PX' }

  function slideToggle(qry, vid) {
    let el = document.querySelector(qry)
    let vidEl = document.querySelector(vid)

    // The following 2 lines are ONLY needed if you ever want to start in a 'open' state. Due to the way browsers
    // work it needs a double of this (or something like console.log(el.scrollHeight);) to prevent the render skipping
    // el.style.height = el.scrollHeight + 'px'
    // console.log(el.scrollHeight)

    el.classList.toggle('open')
    el.style.height = el.classList.contains('open') ? el.scrollHeight + 'px' : 0

    // Pauses video on close, and prevents media keys from playing it while closed
    if (!el.classList.contains('open')) {
      vidEl.pause()
      navigator.mediaSession.setActionHandler('play', () => {})
      navigator.mediaSession.setActionHandler('pause', () => {})
      navigator.mediaSession.setActionHandler('seekbackward', () => {})
      navigator.mediaSession.setActionHandler('seekforward', () => {})
      navigator.mediaSession.setActionHandler('previoustrack', () => {})
      navigator.mediaSession.setActionHandler('nexttrack', () => {})
    }
  }

  return (
    item.Video['Image Filename'].match(/\.mp4/) &&
    !missingMedia && (
      <div key={i} role="listitem" className="collection-item w-dyn-item">
        <div
          data-w-id="b9af0117-1182-b4ce-9988-75dec161b399"
          style={itemContainerStyles}
          className="item-container"
        >
          <h2 className="item-number">{item['TGD Number']}</h2>
          <div
            data-w-id="b9af0117-1182-b4ce-9988-75dec161b39c"
            className="item-link"
            onClick={() => slideToggle(`.video-wrapper-${i}`, `.video-${i}`)}
          >
            <div className="content-wrapper">
              <div className="double-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="state">{item.State}</h2>
                  <h2 className="city">—</h2>
                  <h2 className="city">{item.City}</h2>
                </div>
              </div>

              <p className="description">
                {item['Doucette Text'].slice(0, 100)}
                {item['Doucette Text'].length > 100 ? '...' : ''}
              </p>
            </div>

            <div
              style={wrapperAnimation}
              className={`video-wrapper video-wrapper-${i}`}
              data-collapsed="true"
            >
              {/* <img
                        src="https://uploads-ssl.webflow.com/5b8085feb775a93368662104/5eefd85b0be60463e04b9187_video-placeholder.v1.svg"
                        height=""
                        alt=""
                        className="image"
                      /> */}

              <video
                className={`video video-${i}`}
                controls
                onClick={(e) => e.stopPropagation()}
              >
                <source
                  onError={() => setMissingMedia(true)}
                  src={`https://s3.wasabisys.com/police-brutality/doucette-thread/${item.Video['Image Filename']}`}
                />
              </video>
            </div>

            <div style={wrapperAnimation} className="share-wrapper">
              <a href="/#" className="share-button w-button">
                share
              </a>
              <a href="/#" className="share-button w-button">
                facebook
              </a>
              <a href="/#" className="share-button w-button">
                twitter
              </a>
              <a href="/#" className="share-button w-button">
                email
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Clip
