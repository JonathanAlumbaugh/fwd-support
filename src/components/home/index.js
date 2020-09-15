import React, { useState } from 'react'

import library from '../../shared/doucette-media.json'

import Clip from '../../components/clip'
import './Home.scss'

function HomePage() {
  return (
    <div className="police-brutality">
      <div className="collection-list-wrapper w-dyn-list">
        <div className="collection-list w-dyn-items">
          {library?.slice(0, 100).map((item, i) => {
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

export default HomePage
