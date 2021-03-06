import React, { useState, createRef } from 'react'

import Linkify from 'react-linkify'
import { motion } from 'framer-motion'

function Clip({ item, i }) {
  let [missingMedia, setMissingMedia] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  const video = createRef(null)

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        delay: `0.${i}`,
      },
    },
  }

  const card = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.01 } },
    hover: { scale: 1.02, y: -5 },
  }

  let wrapperInitialHeight = { height: '0PX' }

  const toggleOpen = () => setIsOpen(!isOpen)

  // Pauses video on close, and prevents media keys from playing it while closed
  if (!isOpen) {
    video.current && video.current.pause()
    navigator.mediaSession.setActionHandler('play', () => {})
    navigator.mediaSession.setActionHandler('pause', () => {})
    navigator.mediaSession.setActionHandler('seekbackward', () => {})
    navigator.mediaSession.setActionHandler('seekforward', () => {})
    navigator.mediaSession.setActionHandler('previoustrack', () => {})
    navigator.mediaSession.setActionHandler('nexttrack', () => {})
  }

  return (
    !missingMedia && (
      <motion.div
        key={i}
        role="listitem"
        className="collection-item w-dyn-item"
        // ref={wrapper}
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
            onClick={toggleOpen}
            whileHover="hover"
            variants={card}
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
                {!isOpen && item['Doucette Text'].slice(0, 100)}
                {!isOpen && item['Doucette Text'].length > 100 ? '...' : ''}

                <Linkify onClick={(e) => e.stopPropagation()}>
                  {isOpen && item['Doucette Text']}
                </Linkify>
              </p>
            </div>

            <div
              style={wrapperInitialHeight}
              className="video-wrapper"
              data-collapsed="true"
              // ref={videoWrapper}
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
                ref={video}
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
