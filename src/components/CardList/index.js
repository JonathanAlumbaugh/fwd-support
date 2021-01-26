import React, { useState, useEffect, createRef, useCallback } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { motion, AnimateSharedLayout } from 'framer-motion'
import axios from 'axios'

import Card from '../Card'
import './CardList.scss'

export const List = ({ cardData, match }) => {
  const scrollToRef = async (ref) => {
    // const { current } = await ref
    // if (current)
    //   window.scrollTo({
    //     left: 0,
    //     top: current.offsetTop - 25,
    //     behavior: 'smooth',
    //   })
  }

  return (
    <AnimateSharedLayout>
      {cardData?.map((card) => {
        const ref = createRef()

        const displayCardId = card.id + 1
        const displayCardCity = card.City.replace(/\s+/g, '-')
        const isSelected =
          match.params.cardSlug ===
          `${displayCardId}-${card.State}-${displayCardCity}`

        if (isSelected) {
          scrollToRef(ref)
        }

        return (
          <Card
            ref={ref}
            key={card.id}
            displayCardId={displayCardId}
            displayCardCity={displayCardCity}
            isSelected={isSelected}
            match={match}
            card={card}
          />
        )
      })}
    </AnimateSharedLayout>
  )
}

export default ({ match }) => {
  const location = useLocation()
  const history = useHistory()

  const [cardData, setCardData] = useState([])
  const filter = ''
  const [pageNumber, setPageNumber] = useState(1)
  const [itemLimit, setItemLimit] = useState(20)
  const [totalItems, setTotalItems] = useState()
  const [totalPages, setTotalPages] = useState()

  const prevPage = useCallback(() => {
    history.push({ pathname: '/', state: { pageId: pageNumber } })
    pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(1)
  }, [history, pageNumber])

  const nextPage = useCallback(() => {
    history.push({ pathname: '/', state: { pageId: pageNumber } })
    pageNumber < totalPages
      ? setPageNumber(pageNumber + 1)
      : setPageNumber(totalPages)
  }, [history, pageNumber, totalPages])

  const setPage = useCallback(
    (i) => {
      history.push({
        pathname: '/',
        pageId: `${i + 1}`,
        cardId: null,
        state: { pageId: pageNumber },
      })
      setPageNumber(i + 1)
    },
    [history, pageNumber],
  )

  // console.log('page', pageId, cardId)

  useEffect(() => {
    function fetchApi() {
      try {
        let apiOptions = `${filter}_page=${pageNumber}&_limit=${itemLimit}`

        // For any given item, the itemPageNumber is the rounded up
        // itemId / itemLimit. This won't work out when pulling data
        // from other sources, since IDs of the combined set won't
        // be sequential or unique.
        if (match.params.cardSlug) {
          const itemId = match.params.cardSlug.match(/\d+/)[0]
          const itemPageNumber = Math.ceil(itemId / itemLimit)

          setPageNumber(itemPageNumber)

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
        <button onClick={() => prevPage()}>&lt;prev</button>

        {Array.apply(null, { length: totalPages }).map((p, i) => {
          return (
            <button
              onClick={() => setPage(i)}
              key={i}
              style={{ margin: '0.2em' }}
            >
              {i + 1}
            </button>
          )
        })}

        <button onClick={() => nextPage()}>next&gt;</button>

        <div className="collection-list w-dyn-items">
          <List cardData={cardData} match={match} />
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
