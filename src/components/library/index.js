import React from 'react'
import { motion } from 'framer-motion'

import library from '../../shared/doucette-media.json'

import Clip from '../clip'
import './Library.scss'

function Library() {
  const variants = {
    visible: {
      transition: {
        when: 'beforeChildren',
        // staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="police-brutality">
      <div className="collection-list-wrapper w-dyn-list">
        <motion.div
          className="collection-list w-dyn-items"
          animate="visible"
          variants={variants}
          layout
        >
          {library
            .filter((i) => i.Video['Image Filename'].match(/.mp4/))
            .slice(0, 40)
            .map((item, i) => {
              return <Clip item={item} i={i} key={item['TGD Number']} />
            })}
        </motion.div>

        {!library && (
          <div className="w-dyn-empty">
            <div>No items found.</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Library
