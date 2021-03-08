import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default ({ pageNumber, totalPages, setPageNumber }) => {
  return (
    <>
      <button
        className="paging-button"
        onClick={() => {
          pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(1)
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="paging-numbers">
        <Link
          className="paging-number"
          to={{ pathname: '/', pageId: 1 }}
          key={0}
          onClick={() => {
            setPageNumber(1)
          }}
        >
          1
        </Link>

        <hr className="paging-number-divider" />

        {Array.apply(null, { length: totalPages }).map((p, i) => {
          if (i !== 0 && i < pageNumber + 3 && i > pageNumber - 3) {
            return (
              <Link
                className="paging-number"
                to={{ pathname: '/', pageId: `${i + 1}` }}
                key={i}
                onClick={() => {
                  setPageNumber(i + 1)
                }}
              >
                {i + 1}
              </Link>
            )
          }
        })}

        <hr className="paging-number-divider" />

        <Link
          className="paging-number"
          to={{ pathname: '/', pageId: totalPages }}
          key={totalPages}
          onClick={() => {
            setPageNumber(totalPages)
          }}
        >
          {totalPages}
        </Link>
      </div>

      <button
        className="paging-button"
        onClick={() => {
          pageNumber < totalPages
            ? setPageNumber(pageNumber + 1)
            : setPageNumber(totalPages)
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  )
}
