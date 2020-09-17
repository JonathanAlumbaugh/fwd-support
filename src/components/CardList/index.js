import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import cardData from '../../shared/doucette-media.json'

import Card from '../Card'
import './CardList.scss'

const List = ({ match, history }) =>
  cardData
    // Switched from .filter to an if in .map increases speed noticeably
    // .filter((i) => i.Video['Image Filename'].match(/.mp4/))
    .slice(0, 40)
    .map((card, i) => {
      if (card.Video['Image Filename'].match(/.mp4/)) {
        return (
          <Card
            key={card['TGD Number']}
            isSelected={
              match.params.cardId ===
              `${card['TGD Number']}-${card.State}-${card.City}`
            }
            history={history}
            i={i}
            {...card}
          />
        )
      } else return null
    })

export const CardList = () => (
  <div className="police-brutality">
    <div className="collection-list-wrapper w-dyn-list">
      <div className="collection-list w-dyn-items">
        <Router>
          <Route path={['/:cardId', '/']} component={List} />
        </Router>
      </div>

      {!cardData && (
        <div className="w-dyn-empty">
          <div>No items found.</div>
        </div>
      )}
    </div>
  </div>
)
