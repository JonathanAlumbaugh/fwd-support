import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

import Card from '../Card'
import './CardList.scss'

export const List = ({ setItemPage, itemLimit, cardData, match }) => {
  return cardData?.map((card) => {
    const displayCardId = card.id + 1
    const displayCardCity = card.City.replace(/\s+/g, '-')

    // For any given item, itemPage = Math.round(item.id / itemLimit).
    // This might not work out when pulling data from other sources,
    // if the IDs of the combined set are not sequential or unique.
    if (match.params.cardSlug) {
      const itemId = match.params.cardSlug.match(/\d+/)[0]
      const approxPage = itemId / itemLimit
      let itemPage

      if (Number.isInteger(approxPage)) {
        itemPage = itemId / itemLimit
      } else {
        itemPage = Math.round(itemId / itemLimit) + 1
      }

      console.log('page', itemPage)
      setItemPage(itemPage)
    }

    return (
      <Card
        key={card.id}
        isSelected={
          match.params.cardSlug ===
          `${displayCardId}-${card.State}-${displayCardCity}`
        }
        displayCardId={displayCardId}
        displayCardCity={displayCardCity}
        match={match}
        {...card}
      />
    )
  })
}

export default ({ match }) => {
  const location = useLocation()

  const [cardData, setCardData] = useState([])
  const filter = ''
  const [pageNumber, setPageNumber] = useState(1)
  const [itemLimit, setItemLimit] = useState(20)
  const [totalItems, setTotalItems] = useState()
  const [totalPages, setTotalPages] = useState()
  const [itemPage, setItemPage] = useState()

  // console.log('page', pageId, cardId)

  useEffect(() => {
    function fetchApi() {
      try {
        let apiOptions = `${filter}_page=${pageNumber}&_limit=${itemLimit}`

        if (match.params.cardSlug) {
          apiOptions = `_page=${pageNumber}&_limit=${itemLimit}`
        }

        axios.get(`https://api.fwd.support/items?${apiOptions}`).then((res) => {
          let headers = res.headers
          let total = parseInt(headers['x-total-count'], 10)
          setTotalItems(total)

          let totalPagesVar = Math.round(totalItems / itemLimit)
          let totalPagesLoc = parseInt(totalPagesVar, 10)
          setTotalPages(totalPagesLoc)

          if (location.pageId) {
            setPageNumber(location.pageId)
          }

          res = res.data
          setCardData([...res])
        })
      } catch (e) {
        console.log('error', e)
      }
    }

    fetchApi()
  }, [
    filter,
    pageNumber,
    itemLimit,
    totalItems,
    location.pageId,
    match.params.cardSlug,
  ])

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
              to={{ pathname: '/', pageId: `${i + 1}` }}
              key={i}
              onClick={() => {
                setPageNumber(i + 1)
              }}
              style={{ margin: '0.2em' }}
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
          <List
            setItemPage={setItemPage}
            itemLimit={itemLimit}
            cardData={cardData}
            match={match}
          />
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
