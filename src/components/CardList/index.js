import React, { useState, useEffect } from 'react'
import { Link, history, useLocation } from 'react-router-dom'
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
  const location = useLocation()

  const [cardData, setCardData] = useState([])
  const filter = ''
  const [pageNumber, setPageNumber] = useState(1)
  const [itemLimit, setItemLimit] = useState(20)
  const [totalItems, setTotalItems] = useState()
  const [totalPages, setTotalPages] = useState()

  // console.log('page', pageId, cardId)

  useEffect(() => {
    function fetchApi() {
      try {
        axios
          .get(
            `https://api.fwd.support/items?${filter}_page=${pageNumber}&_limit=${itemLimit}`,
          )
          .then((res) => {
            let headers = res.headers
            let total = parseInt(headers['x-total-count'], 10)
            setTotalItems(total)

            let totalPagesVar = Math.round(totalItems / itemLimit)
            let totalPagesLoc = parseInt(totalPagesVar, 10)
            setTotalPages(totalPagesLoc)

            if (location.pageId) {
              setPageNumber(location.pageId)
            }
            console.log('updated page', location.pageId)

            res = res.data
            setCardData([...res])
          })
      } catch (e) {
        console.log('error', e)
      }
    }

    fetchApi()
  }, [pageNumber, itemLimit, totalItems, location.pageId])

  return (
    <div className="police-brutality">
      <div className="collection-list-wrapper w-dyn-list">
        <button
          onClick={() => {
            pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(1)
          }}
        >
          &lt;prev
        </button>
        {Array.apply(null, { length: totalPages }).map((p, i) => {
          return (
            <Link
              to={{
                pathname: `/${i + 1}`,
                pageId: `${i + 1}`,
              }}
              key={i}
              onClick={() => {
                setPageNumber(i + 1)
              }}
            >
              {i + 1}
            </Link>
          )
        })}
        <button
          onClick={() => {
            pageNumber < totalPages
              ? setPageNumber(pageNumber + 1)
              : setPageNumber(totalPages)
          }}
        >
          next&gt;
        </button>
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
