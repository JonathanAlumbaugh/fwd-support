import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'

import cardData from '../../shared/doucette-media.json'

import Card from '../Card'
import './CardList.scss'

export const List = ({ cardId, history }) => {
  return (
    cardData
      // Switched from .filter to an if in .map increases speed noticeably
      // .filter((i) => i.Video['Image Filename'].match(/.mp4/))
      .slice(0, 40)
      .map((card, i) => {
        return (
          card.Video['Image Filename'].match(/.mp4/) && (
            <Card
              key={card['TGD Number']}
              isSelected={
                cardId === `${card['TGD Number']}-${card.State}-${card.City}`
              }
              history={history}
              i={i}
              {...card}
            />
          )
        )
      })
  )
}

export default ({ cardId, history }) => (
  <div className="police-brutality">
    <div className="collection-list-wrapper w-dyn-list">
      <div className="collection-list w-dyn-items">
        <List cardId={cardId} history={history} />
      </div>

      {!cardData && (
        <div className="w-dyn-empty">
          <div>No items found.</div>
        </div>
      )}
    </div>
  </div>
)
