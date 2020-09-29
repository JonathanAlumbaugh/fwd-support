import React, { useState, forwardRef, createRef, useEffect } from 'react'
import Linkify from 'react-linkify'
import { Tweet } from 'react-twitter-widgets'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Link } from 'react-router-dom'

import './Card.scss'

export default forwardRef((props, ref) => {
  const { displayCardId, displayCardCity, isSelected, card } = props

  const [missingMedia, setMissingMedia] = useState(false)
  const itemSlug = `${displayCardId}-${card.State}-${displayCardCity}`
  const tweetId = card['Tweet URL'].match(/[^/]*$/)

  // const containerRef = createRef(null)
  const videoRef = createRef(null)

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

  // console.log('isselected', isSelected)
  // console.log('missing media', missingMedia)
  // console.log('media', missingMedia, 'tweet', tweetId[0])

  return (
    <motion.div
      layout
      className="collection-item"
      role="listitem"
      ref={ref}
      data-is-selected={isSelected}
    >
      {/* <Overlay isSelected={isSelected} /> */}
      <motion.div layout className="item-container">
        <motion.h2 layout className="item-number">
          {displayCardId}
        </motion.h2>
        <motion.div
          className="item-link"
          data-is-selected={isSelected}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
        >
          <motion.div
            layout
            className="content-wrapper"
            data-is-selected={isSelected}
          >
            <motion.div layout className="double-title-wrapper">
              <div className="title-wrapper">
                {card.State && <h2 className="state">{card.State}</h2>}
                {card.State && <h2 className="city">—</h2>}
                <h2 className="city">{card.City}</h2>
              </div>
            </motion.div>

            <AnimatePresence>
              {isSelected && (
                <motion.p
                  layout
                  className="description"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {card['Doucette Text']}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {isSelected && (
              <motion.div
                layout
                className="video-wrapper"
                // data-is-selected={isSelected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
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
              </motion.div>
            )}
          </AnimatePresence>

          {/* {isSelected && (
            <div className="tweet-wrapper">
              <Tweet
                tweetId={tweetId[0]}
                // onLoad={console.log(tweetId)}
                renderError={(_err) => <p>Could not load tweet</p>}
              />
            </div>
          )} */}

          {!isSelected ? (
            <Link
              className="card-open-link"
              to={{
                pathname: itemSlug,
                cardSlug: itemSlug,
              }}
            />
          ) : (
            <Link
              className="card-open-link"
              to={{
                pathname: '/',
                cardSlug: null,
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
})

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
