import React, { useState, createRef } from 'react'

import Linkify from 'react-linkify'
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useMotionValue,
} from 'framer-motion'
import { Link } from 'react-router-dom'

import './Card.scss'

function Card({ isSelected, history, i, id, ...card }) {
  let [missingMedia, setMissingMedia] = useState(false)

  const containerRef = createRef(null)
  const videoRef = createRef(null)

  const zIndex = useMotionValue(isSelected ? 2 : 0)

  // Pauses video on close, and prevents media keys from playing it while closed
  if (!isSelected) {
    videoRef.current && videoRef.current.pause()
    navigator.mediaSession.setActionHandler('play', () => {})
    navigator.mediaSession.setActionHandler('pause', () => {})
    navigator.mediaSession.setActionHandler('seekbackward', () => {})
    navigator.mediaSession.setActionHandler('seekforward', () => {})
    navigator.mediaSession.setActionHandler('previoustrack', () => {})
    navigator.mediaSession.setActionHandler('nexttrack', () => {})
  }

  return (
    !missingMedia && (
      <div
        className="collection-item w-dyn-item"
        role="listitem"
        ref={containerRef}
        key={i}
      >
        <Overlay isSelected={isSelected} />
        <div
          className={`card-content-container item-container ${
            isSelected && 'open'
          }`}
        >
          <h2 className="item-number">{card['TGD Number']}</h2>
          <motion.div className="item-link" style={{ zIndex }}>
            <div className="content-wrapper">
              <div className="double-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="state">{card.State}</h2>
                  <h2 className="city">—</h2>
                  <h2 className="city">{card.City}</h2>
                </div>
              </div>

              <p className="description">
                {
                  card['Doucette Text']
                  // .slice(0, 100)
                }

                {/* {!isSelected ? (
                  card['Doucette Text'].length > 100 ? (
                    '...'
                  ) : (
                    ''
                  )
                ) : (
                  <Linkify onClick={(e) => e.stopPropagation()}>
                    {card['Doucette Text'].slice(100)}
                  </Linkify>
                )} */}
              </p>
            </div>

            <div className="video-wrapper">
              {/* <img
                src="https://uploads-ssl.webflow.com/5b8085feb775a93368662104/5eefd85b0be60463e04b9187_video-placeholder.v1.svg"
                height=""
                alt=""
                className="image"
                /> */}

              <video
                className="video"
                onClick={(e) => e.stopPropagation()}
                controls
                ref={videoRef}
              >
                <source
                  onError={() => setMissingMedia(true)}
                  src={`https://s3.wasabisys.com/police-brutality/doucette-thread/${card.Video['Image Filename']}`}
                />
              </video>
            </div>

            {!isSelected ? (
              <Link
                className="card-open-link"
                to={`${card['TGD Number']}-${card.State}-${card.City}`}
              />
            ) : (
              <Link className="card-open-link" to="/" />
            )}
          </motion.div>
        </div>
      </div>
    )
  )
}

export default Card

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className="overlay"
  >
    <Link to="/" />
  </motion.div>
)

const TakeAction = () => (
  <div className="share-wrapper">
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
)
