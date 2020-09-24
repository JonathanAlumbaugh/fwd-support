import React from 'react'
import { motion, useInvertedScale } from 'framer-motion'

import './Test.scss'

import cardData from '../../shared/doucette-media.json'

function TestContainer({ cardId, history }) {
  // const inverted = useInvertedScale()

  let id = 'dumb'
  let backgroundColor = 'red'

  return (
    <div className="main-container w-container">
      {cardData
        // Switched from .filter to an if in .map increases speed noticeably
        // .filter((i) => i.Video['Image Filename'].match(/.mp4/))
        .slice(0, 40)
        .map((card, i) => {
          return (
            card.Video['Image Filename'].match(/.mp4/) && (
              <div
                key={card['TGD Number']}
                className="card"
                isSelected={
                  cardId === `${card['TGD Number']}-${card.State}-${card.City}`
                }
                i={i}
                // onClick={}
              >
                <motion.div
                  className="card-image-container"
                  style={{
                    // ...inverted,
                    backgroundColor,
                    originX: 0,
                    originY: 0,
                  }}
                >
                  <motion.img
                    className="card-image"
                    src={`images/${id}.jpg`}
                    alt=""
                    initial={false}
                    animate={{ x: -20, y: -20 }}
                  />
                </motion.div>
                <p className="content">{card.City}</p>
              </div>
            )
          )
        })}
    </div>
  )
}

export default TestContainer
