import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../Card'
import './CardList.scss'

export const List = ({ cardId, cardData, history }) => {
  return cardData?.map((card) => {
    return (
      <Card
        key={card.id}
        isSelected={
          cardId === `${card['TGD Number']}-${card.State}-${card.City}`
        }
        history={history}
        {...card}
      />
    )
  })
}

export default ({ cardId, history }) => {
  const [cardData, setCardData] = useState([])
  const filter = ''
  const [pageNumber, setPageNumber] = useState(1)
  const [itemLimit, setItemLimit] = useState(20)

  useEffect(() => {
    function fetchApi() {
      try {
        axios
          .get(
            `https://api.fwd.support/items?${filter}_page=${pageNumber}&_limit=${itemLimit}`,
          )
          .then((res) => {
            res = res.data
            setCardData([...res])
            console.log('response', res)
          })
      } catch (e) {
        console.log('error', e)
      }
    }

    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="police-brutality">
      <div className="collection-list-wrapper w-dyn-list">
        <div className="collection-list w-dyn-items">
          <List cardId={cardId} cardData={cardData} history={history} />
        </div>

        {!cardData && (
          <div className="w-dyn-empty">
            <div>No items found.</div>
          </div>
        )}
      </div>
    </div>
  )
}
