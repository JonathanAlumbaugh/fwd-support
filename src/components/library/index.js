import React from 'react'

import library from '../../shared/doucette-media.json'

import Clip from '../clip'
import './Library.scss'

function Library() {
  return (
    <div className="police-brutality">
      <div className="collection-list-wrapper w-dyn-list">
        <div className="collection-list w-dyn-items">
          {library
            ?.filter((i) => i.Video['Image Filename'].match(/.mp4/))
            .slice(0, 40)
            .map((item, i) => {
              return <Clip item={item} i={i} key={item['TGD Number']} />
            })}
        </div>

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
