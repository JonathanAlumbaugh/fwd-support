import React, { useState, createRef } from 'react'

import Linkify from 'react-linkify'
import { motion } from 'framer-motion'

function Clip({ item, i }) {
  let [missingMedia, setMissingMedia] = useState(false)
  let [itemOpen, setItemOpen] = useState(false)

  const wrapper = createRef(null)
  const videoWrapper = createRef(null)
  const videoEl = createRef(null)

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        delay: `0.${i}`,
      },
    },
    hover: { scale: 1.02, y: -5 },
  }

  let wrapperInitialHeight = { height: '0PX' }

  function itemToggle() {
    wrapper.current.classList.toggle('open')
    videoWrapper.current.classList.toggle('open')
    videoWrapper.current.style.height = videoWrapper.current.classList.contains(
      'open',
    )
      ? videoWrapper.current.scrollHeight + 'px'
      : 0

    // Pauses video on close, and prevents media keys from playing it while closed
    if (!videoWrapper.current.classList.contains('open')) {
      setItemOpen(false)
      videoEl.current.pause()
      navigator.mediaSession.setActionHandler('play', () => {})
      navigator.mediaSession.setActionHandler('pause', () => {})
      navigator.mediaSession.setActionHandler('seekbackward', () => {})
      navigator.mediaSession.setActionHandler('seekforward', () => {})
      navigator.mediaSession.setActionHandler('previoustrack', () => {})
      navigator.mediaSession.setActionHandler('nexttrack', () => {})
    }

    if (videoWrapper.current.classList.contains('open')) {
      setItemOpen(true)
    }
  }

  return (
    !missingMedia && (
      <motion.div
        key={i}
        role="listitem"
        className="collection-item w-dyn-item"
        ref={wrapper}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <div
          data-w-id="b9af0117-1182-b4ce-9988-75dec161b399"
          className="item-container"
        >
          <h2 className="item-number">{item['TGD Number']}</h2>
          <motion.div
            data-w-id="b9af0117-1182-b4ce-9988-75dec161b39c"
            className="item-link"
            onClick={() => itemToggle()}
            whileHover="hover"
            variants={variants}
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
                {!itemOpen && item['Doucette Text'].slice(0, 100)}
                {!itemOpen && item['Doucette Text'].length > 100 ? '...' : ''}

                <Linkify onClick={(e) => e.stopPropagation()}>
                  {itemOpen && item['Doucette Text']}
                </Linkify>
              </p>
            </div>

            <div
              style={wrapperInitialHeight}
              className="video-wrapper"
              data-collapsed="true"
              ref={videoWrapper}
            >
              {/* <img
              src="https://uploads-ssl.webflow.com/5b8085feb775a93368662104/5eefd85b0be60463e04b9187_video-placeholder.v1.svg"
              height=""
              alt=""
              className="image"
              /> */}

              <video
                className="video"
                controls
                onClick={(e) => e.stopPropagation()}
                ref={videoEl}
              >
                <source
                  onError={() => setMissingMedia(true)}
                  src={`https://s3.wasabisys.com/police-brutality/doucette-thread/${item.Video['Image Filename']}`}
                />
              </video>
            </div>

            <div style={wrapperInitialHeight} className="share-wrapper">
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
          </motion.div>
        </div>
      </motion.div>
    )
  )
}

export default Clip
